<template>
  <v-carousel v-model="model" interval="2500" cycle>
    <v-carousel-item v-for="color in colors" :key="color">
      <v-sheet :color="color" height="100%" tile />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>
