import Vue from "vue";
import * as VueGoogleMaps from "gmap-vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GMAP_API_KEY,
    libraries: "places",
  },
  installComponents: true,
});

new Vue({
  vuetify,
  i18n,
  store,
  render: (h) => h(App),
}).$mount("#app");
