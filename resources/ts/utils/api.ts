import { router } from "@/plugins/1.router";
import { FetchContext, FetchOptions, FetchResponse, SearchParameters, ofetch } from "ofetch";
function objectToURL(obj: { [key: string]: any }): SearchParameters {
  const params: any = {};
  for (const key in obj) {
    if (Array.isArray(obj[key]) || isObject(obj[key])) {
      params[key] = params[key] ? params[key].push(obj[key]) : [obj[key]];
    } else {
      params[key] = obj[key];
    }
  }
  return params;
}
type OnFunction<T> = (context: T) => void;
class Api {
  // TODO: use a real API client
  private readonly client;
  private readonly baseUrl: string;
  private readonly headers: FetchOptions["headers"];
  private onErrors: OnFunction<FetchContext<any, any> & { response: FetchResponse<any> }>[] = [];

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_BASE_URL || "/api";
    // @ts-ignore
    const csrfToken = JSON.parse(document.body.dataset.page || "{}")?.csrfToken;
    this.headers = {
      Accept: "application/json",
      "X-CSRF-TOKEN": csrfToken,
      "X-Requested-With": "XMLHttpRequest",
    };

    this.client = ofetch.create({
      baseURL: this.baseUrl,
      headers: this.headers,
      credentials: "include",
      timeout: 30000, // 30 seconds
      onResponseError: async (context) => {
        this.onErrors.forEach((cb) => cb(context));
        try {
          if (context.response.status === 401) {
            useCookie("accessToken").value = null;
            useCookie("userData").value = null;
            router.push("/login");
          }
        } catch (error) {
          return Promise.reject(error);
        }
      },
      async onRequest({ options }) {
        const accessToken = useCookie("accessToken").value;
        if (accessToken) {
          options.headers = {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`,
          };
        }
      },
    });
  }
  onError(cb: OnFunction<FetchContext<any, any> & { response: FetchResponse<any> }>) {
    this.onErrors.push(cb);
  }

  async http(url: string, method: string, options?: FetchOptions<"json"> | undefined): Promise<any> {
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
  post<T>(url: string, body: any, options?: FetchOptions<"json"> | undefined): Promise<T> {
    return this.http(url, "POST", { ...options, body });
  }
  put<T>(url: string, body: any, options?: FetchOptions<"json"> | undefined): Promise<T> {
    return this.http(url, "PUT", { ...options, body });
  }
  patch<T>(url: string, body: any, options?: FetchOptions<"json"> | undefined): Promise<T> {
    return this.http(url, "PATCH", { ...options, body });
  }
  delete<T>(url: string, body?: any, options?: FetchOptions<"json"> | undefined): Promise<T> {
    return this.http(url, "DELETE", { ...options, body });
  }
}

export const $api = new Api();
