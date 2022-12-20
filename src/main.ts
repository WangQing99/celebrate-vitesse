import "@unocss/reset/tailwind.css";
import "./styles/main.css";
import "uno.css";

import Previewer from "virtual:vue-component-preview";
import App from "./App.vue";
import { setupModules } from "./utils/module";

function bootstrap() {
  const app = createApp(App);

  setupModules(app);

  app.use(Previewer);

  app.mount("#app");
}

bootstrap();
