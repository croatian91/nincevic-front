<template>
  <div class="social">
    <v-btn
      v-for="(link, index) in items"
      :key="index"
      icon
      :href="link"
      target="_blank"
    >
      <v-icon>{{ mapIcon(link) }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Social",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    mapIcon(url) {
      if (url.includes("facebook")) {
        return "mdi-facebook";
      }
      if (url.includes("instagram")) {
        return "mdi-instagram";
      }

      return "mdi-help";
    },
  },
};
</script>
