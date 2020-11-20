<template>
  <v-tabs>
    <v-tab v-for="(tab, index) in data.appartments" :key="index">
      <v-icon left>mdi-home-city</v-icon>
      {{ tab.title }}
    </v-tab>

    <v-tab-item v-for="(tab, index) in data.appartments" :key="index">
      <v-card flat>
        <v-container>
          <v-row>
            <v-col cols="7">
              <Images :images="tab.images" :description="getDescription" />
            </v-col>

            <v-col>
              <Calendar :events="tab.events" />
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
import TranslateMixin from "../mixins/TranslateMixin";

export default {
  name: "Accommodation",
  components: {
    Images,
    Calendar,
  },
  mixins: [TranslateMixin],
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
