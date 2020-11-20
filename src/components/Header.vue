<template>
  <v-carousel v-model="model" interval="2500" cycle>
    <v-carousel-item v-for="image in images" :key="image">
      <v-img contain :src="image" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Header",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    model: 0,
  }),
};
</script>
