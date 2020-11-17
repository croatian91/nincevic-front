import Vue from "vue";
import * as VueGoogleMaps from "gmap-vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDJAgG8wyRjDsFAmLvBP1-CKUQwJLUZ8fg",
    libraries: "places",
  },
  installComponents: true,
});

new Vue({
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
