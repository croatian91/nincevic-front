<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <Images :images="images" />
      </v-col>

      <v-col>
        <BoatSteps :steps="steps" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Images from "./Images.vue";
import BoatSteps from "./BoatSteps.vue";

export default {
  name: "Boat",
  components: {
    Images,
    BoatSteps,
  },
  data: () => ({
    images: [
      {
        title: "abc",
        src: "https://picsum.photos/500/300?image=16",
      },
      {
        title: "efg",
        src: "https://picsum.photos/500/300?image=17",
      },
    ],
    steps: [
      {
        from: "Departure",
        message: `blabla`,
        time: "09:00",
      },
      {
        from: "Island 1",
        message: "description...",
        time: "10:15",
      },
      {
        from: "Island 2",
        message: "description...",
        time: "11:47",
      },
      {
        from: "Arrival",
        message: "blabla",
        time: "16:30",
      },
    ],
  }),
};
</script>
