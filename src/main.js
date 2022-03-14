import { createApp } from "vue";
import App from "./App";
import router from "@/router/router";
import store from "@/store/index";

import components from "@/components/UI";
import directives from "@/directives";
// import VIntersection from "@/directives/VIntersection";
// console.log(components);

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

// app.directive("intersection", VIntersection);

app.use(router).use(store).mount("#app");
