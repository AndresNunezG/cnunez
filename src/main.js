import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import { pointer } from "./directives"

import FontAwesomeIcon from "./plugins/FontAwesome"

const app = createApp(App);

app.directive('pointer', pointer)

app.use(router);
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app");
