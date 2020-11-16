<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click.stop="drawer = !drawer"
      />

      <div class="d-flex align-center">
        <h3>Nincevic Sukosan</h3>
      </div>

      <v-spacer />

      <v-btn
        v-for="item in sections"
        :key="item.selector"
        depressed
        rounded
        color="primary"
        class="nav-btn d-none d-sm-block"
        @click="$vuetify.goTo(item.selector, options)"
      >
        {{ $t(item.title) }}
      </v-btn>

      <v-spacer />

      <Social :items="socialNetworks" />

      <Language />

      <v-btn depressed rounded color="primary" dark>
        <v-icon dark left> mdi-whatsapp </v-icon>
        +385 012 3456 789
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in sections" :key="item.selector">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
.nav-btn {
  margin: 5px;
}
</style>

<script>
import Language from "./Language.vue";
import Social from "./Social.vue";

export default {
  name: "AppBar",
  components: { Language, Social },
  data() {
    return {
      drawer: false,
      group: null,
      sections: [
        { title: "accommodation", selector: "#accommodation" },
        { title: "tennis", selector: "#tennis" },
        { title: "boat", selector: "#boat" },
        { title: "contact", selector: "#contact" },
      ],
      socialNetworks: [
        { icon: "mdi-instagram", href: "https://www.instagram.com/croatian91" },
        {
          icon: "mdi-facebook",
          href: "https://www.facebook.com/ghost.Bandit.07/",
        },
      ],
      options: {
        duration: 1000,
        offset: 0,
        easing: "easeInOutCubic",
      },
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
