<template>
  <v-tabs>
    <v-tab v-for="tab in tabs" :key="tab.id">
      <v-icon left>mdi-home-city</v-icon>
      {{ tab.title }}
    </v-tab>

    <v-tab-item v-for="tab in tabs" :key="tab.id">
      <v-card flat>
        <v-container>
          <v-row>
            <v-col cols="7">
              <Images :images="tab.images" />
            </v-col>

            <v-col>
              <Calendar />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

<script>
import Images from "./Images.vue";
import Calendar from "./Calendar.vue";

export default {
  name: "Accommodation",
  components: {
    Images,
    Calendar,
  },
  data() {
    return {
      tabs: [
        {
          id: 0,
          title: "Appartment 1",
          description: "dqd,klq,sdklqs,dqs",
          details: [
            { icon: "mdi-cash", title: "Price", value: 10 },
            { icon: "mdi-account-multiple", title: "People", value: 2 },
            { icon: "mdi-garage-variant", title: "Garage", value: true },
          ],
          images: [
            {
              title: "abc",
              src: "https://picsum.photos/500/300?image=10",
            },
            {
              title: "efg",
              src: "https://picsum.photos/500/300?image=15",
            },
            {
              title: "abc",
              src: "https://picsum.photos/500/300?image=25",
            },
            {
              title: "efg",
              src: "https://picsum.photos/500/300?image=30",
            },
            {
              title: "abc",
              src: "https://picsum.photos/500/300?image=40",
            },
            {
              title: "efg",
              src: "https://picsum.photos/500/300?image=50",
            },
            {
              title: "abc",
              src: "https://picsum.photos/500/300?image=60",
            },
            {
              title: "efg",
              src: "https://picsum.photos/500/300?image=70",
            },
          ],
        },
        {
          id: 1,
          title: "Appartment 2",
          description: "aaaaaaaaaa",
          details: [
            { icon: "mdi-cash", title: "Price", value: 10 },
            { icon: "mdi-account-multiple", title: "People", value: 5 },
            { icon: "mdi-garage-variant", title: "Garage", value: false },
          ],
          images: [
            {
              title: "abc",
              src: "https://picsum.photos/500/300?image=12",
            },
            {
              title: "efg",
              src: "https://picsum.photos/500/300?image=14",
            },
          ],
        },
      ],
    };
  },
};
</script>
