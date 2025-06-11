import { createApp } from "vue";

import App from "./App.vue";
import CompTwo from "./components/CompTwo.vue";
import SlotComp from "./components/SlotComp.vue";

const app = createApp(App);
app.component("comp-two", CompTwo);
app.component("slot-comp", SlotComp);
app.mount("#app");
