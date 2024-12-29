import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import store from "./store/store";
import router from "./routes/routes";

const app = createApp(App);
const pinia = createPinia();

app.use(store).use(pinia).use(router).mount("#app");
