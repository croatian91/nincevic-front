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
  data: () => ({
    model: 0,
    images: [
      "https://picsum.photos/500/300?image=16",
      "https://picsum.photos/500/300?image=17",
      "https://picsum.photos/500/300?image=18",
    ],
  }),
};
</script>
