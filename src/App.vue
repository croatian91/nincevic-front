<template>
  <v-app>
    <v-main>
      <AppBar />

      <Header />

      <div id="accommodation">
        <SectionTitle title="Accommodation" />

        <Accommodation />
      </div>

      <v-divider />

      <div id="tennis">
        <SectionTitle title="Tennis" />

        <Tennis />
      </div>

      <v-divider />

      <div id="boat">
        <SectionTitle title="Boat excursions" />

        <Boat />
      </div>

      <v-divider />

      <div id="contact">
        <SectionTitle title="Contact" />

        <Contact />
      </div>

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
import SectionTitle from "./components/SectionTitle.vue";
import Tennis from "./components/Tennis.vue";

export default {
  name: "App",

  components: {
    Footer,
    AppBar,
    Header,
    Accommodation,
    Contact,
    Boat,
    SectionTitle,
    Tennis,
  },
};
</script>
