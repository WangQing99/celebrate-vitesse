import type { App } from "vue";
import type { UserModule } from "@/types";

export function setupModules(app: App) {
  Object.values(
    import.meta.glob<{ install: UserModule }>("../modules/*.ts", {
      eager: true,
    })
  ).forEach((i) => i.install?.(app));
}
