import { App } from "vue";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

export default function (app: App) {
  (window as any).Pusher = Pusher;
  const echo = new Echo({
    broadcaster: "reverb",
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT ?? 80,
    wssPort: import.meta.env.VITE_REVERB_PORT ?? 443,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? "https") === "https",
    enabledTransports: ["ws", "wss"],
    cluster: import.meta.env.VITE_REVERB_CLUSTER ?? "mt1",

    authorizer: (channel: any, options: any) => {
      return {
        authorize: (socketId: string, callback: Function) => {
          $api
            .post("broadcasting/auth", {
              socket_id: socketId,
              channel_name: channel.name,
            })
            .then((response) => callback(false, response))
            .catch((error) => callback(true, error));
        },
      };
    },
  });
  app.use((app: App) => {
    app.config.globalProperties.$echo = echo;
  });
}
