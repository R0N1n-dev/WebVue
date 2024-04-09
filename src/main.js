import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router/auto";
import { createHead } from "@unhead/vue";
import { createPinia } from "pinia";
import App from "./App.vue";
const head = createHead();
const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
});
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(head);
app.mount("#app");
