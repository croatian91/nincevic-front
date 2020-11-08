<template>
  <v-app>
    <v-main>
      <AppBar />

      <Header />

      <Accommodation id="accommodation" />

      <v-divider />

      <Boat id="boat" />

      <v-divider />

      <Contact id="contact" />

      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import AppBar from "./components/AppBar.vue";
import Header from "./components/Header.vue";
import Accommodation from "./components/Accommodation.vue";
import Contact from "./components/Contact.vue";
import Boat from "./components/Boat.vue";

export default {
  name: "App",

  components: {
    Footer,
    AppBar,
    Header,
    Accommodation,
    Contact,
    Boat,
  },
};
</script>
