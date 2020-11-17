<template>
  <v-container>
    <v-row>
      <v-col>
        <Images :images="images" />
      </v-col>

      <v-col>
        <v-row justify="space-between">
          <BoatSteps
            v-for="(excursion, index) in excursions"
            :key="index"
            :title="excursion.title"
            :subtitle="excursion.subtitle"
            :steps="excursion.steps"
          />
        </v-row>
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
    excursions: [
      {
        title: "Full day",
        subtitle: "description...",
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
      },
      {
        title: "Half day",
        subtitle: "description...",
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
      },
    ],
  }),
};
</script>
