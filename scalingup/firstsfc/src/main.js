import { createApp } from "vue";
import App from "./App.vue"; // 이게 이전의 const App = Vue.createApp(){}의 구현 부분이 됨

const app = createApp(App);
app.mount("#app");
