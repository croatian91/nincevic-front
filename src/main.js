import Vue from "vue";
import * as VueGoogleMaps from "gmap-vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBbVCLSyfXKYtEyIkkkvvCipOKXBD0mPvY",
    libraries: "places",
  },
  installComponents: true,
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
