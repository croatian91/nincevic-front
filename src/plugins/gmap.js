import Vue from "vue";
import * as VueGoogleMaps from "gmap-vue";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBbVCLSyfXKYtEyIkkkvvCipOKXBD0mPvY",
    libraries: "places",
  },
  installComponents: true,
});
