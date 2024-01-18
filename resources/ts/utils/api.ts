import { LoginResponse } from "@/types";
import { FetchOptions, SearchParameters, ofetch } from "ofetch";

function objectToURL(obj: { [key: string]: any }): SearchParameters {
  const params: any = {};
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      params[key] = params[key] ? params[key].push(obj[key]) : [obj[key]];
    } else {
      params[key] = obj[key];
    }
  }
  return params;
}
class Api {
  // TODO: use a real API client
  private readonly client;
  private readonly baseUrl: string;
  private readonly headers: FetchOptions["headers"];

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL || "/api";
    this.headers = { Accept: "application/json" };

    this.client = ofetch.create({
      baseURL: this.baseUrl,
      headers: this.headers,
      retry: 2,
      timeout: 30000, // 30 seconds
      retryStatusCodes: [401, 403],
      onResponseError: async (context) => {
        try {
          if (
            context.response.status === 401 &&
            ["invalid_request"].includes(context.response._data.error)
          ) {
            useCookie("access_token").value = null;
            useCookie("refresh_token").value = null;

            window.location.href = "/login";

            return Promise.resolve();
          }

          if (
            context.response.status === 401 &&
            context.response._data.message === "Unauthenticated."
          ) {
            await this.refreshAccessToken();
          }
        } catch (error) {
          return Promise.reject(error);
        }
      },

      async onRequest(context) {
        // const headers = options.headers || {};
        const access_token = useCookie("access_token").value;
        if (access_token) {
          context.options.headers = {
            ...this.headers,
            Authorization: `Bearer ${access_token}`,
          };
        }
      },
    });
  }
  async http(
    url: string,
    method: string,
    options?: FetchOptions<"json"> | undefined
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.client(url, {
        method: method,
        ...options,
        query: objectToURL(options?.query || {}),
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err.response));
    });
  }
  get<T>(url: string, options?: FetchOptions<"json"> | undefined): Promise<T> {
    return this.http(url, "GET", options);
  }
  post<T>(
    url: string,
    body: any,
    options?: FetchOptions<"json"> | undefined
  ): Promise<T> {
    return this.http(url, "POST", { body, ...options });
  }
  put<T>(
    url: string,
    body: any,
    options?: FetchOptions<"json"> | undefined
  ): Promise<T> {
    return this.http(url, "PUT", { body, ...options });
  }
  patch<T>(
    url: string,
    body: any,
    options?: FetchOptions<"json"> | undefined
  ): Promise<T> {
    return this.http(url, "PATCH", { body, ...options });
  }
  delete<T>(
    url: string,
    options?: FetchOptions<"json"> | undefined
  ): Promise<T> {
    return this.http(url, "DELETE", options);
  }
  async getAccessToken(
    username: string,
    password: string
  ): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      this.http("/oauth/token", "POST", {
        headers: this.headers,
        body: {
          grant_type: "password",
          client_id: import.meta.env.VITE_OAUTH_CLIENT_ID,
          client_secret: import.meta.env.VITE_OAUTH_CLIENT_SECRET,
          username,
          password,
        },
        baseURL: window.location.origin,
      })
        .then((res) => {
          useCookie("access_token").value = res.access_token;
          useCookie("refresh_token").value = res.refresh_token;
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  }
  refreshAccessToken() {
    return new Promise((resolve, reject) => {
      this.http("/oauth/token", "POST", {
        headers: this.headers,
        body: {
          grant_type: "refresh_token",
          client_id: import.meta.env.VITE_OAUTH_CLIENT_ID,
          client_secret: import.meta.env.VITE_OAUTH_CLIENT_SECRET,
          refresh_token: useCookie("refresh_token").value,
        },
        baseURL: window.location.origin,
      })
        .then((res: LoginResponse) => {
          useCookie("access_token", {
            expires: new Date(Date.now() + res.expires_in * 1000),
            sameSite: "strict",
          }).value = res.access_token;
          useCookie("refresh_token", { sameSite: "strict" }).value =
            res.refresh_token;
          resolve(res);
        })
        .catch((err) => reject(err.response));
    });
  }
}

export const $api = new Api();
