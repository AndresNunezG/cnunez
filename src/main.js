import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faGithub, faTwitter, faLinkedin, faBootstrap, faVuejs, faFontAwesome } from "@fortawesome/free-brands-svg-icons"

library.add(
    faGithub,
    faTwitter,
    faLinkedin,
    faBootstrap,
    faVuejs,
    faFontAwesome
)

const app = createApp(App);

app.use(router);
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app");
