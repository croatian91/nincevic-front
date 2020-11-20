<template>
  <v-app>
    <v-main>
      <AppBar />

      <Header :images="$store.state.header.gallery" />

      <div id="accommodation">
        <SectionTitle :title="$t('accommodation')" />

        <Accommodation :data="$store.state.accommodation" />
      </div>

      <v-divider />

      <div id="tennis">
        <SectionTitle :title="$t('tennis')" />

        <Tennis :data="$store.state.tennis" />
      </div>

      <v-divider />

      <div id="boat">
        <SectionTitle :title="$t('boat')" />

        <Boat :data="$store.state.boat" />
      </div>

      <v-divider />

      <div id="contact">
        <SectionTitle :title="$t('contact')" />

        <Contact :data="$store.state.contact" />
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
  created() {
    [
      "bindHeader",
      "bindAccommodation",
      "bindContact",
      "bindBoat",
      "bindTennis",
    ].map((a) => this.$store.dispatch(a));
  },
};
</script>
