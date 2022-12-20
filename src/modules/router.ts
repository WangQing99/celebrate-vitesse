import { router } from "@/router";
import { type UserModule } from "@/types";

export const install: UserModule = (app) => {
  app.use(router);
};
