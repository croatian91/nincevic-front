<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      width="100%"
      color="primary"
      class="white--text text-center"
    >
      <v-card-text class="white--text">
        <span> {{ new Date().getFullYear() }} -</span>

        <v-btn
          depressed
          rounded
          color="primary"
          href="https://corehz.io"
          target="_blank"
          class="ma-0 pa-2"
        >
          <strong>CoreHz.io</strong>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
