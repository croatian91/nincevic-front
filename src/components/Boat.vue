<template>
  <v-container>
    <v-row>
      <v-col cols="7">
        <Images :description="getDescription" :images="data.images" />
      </v-col>

      <v-col>
        <v-sheet class="mx-auto" max-width="350">
          <v-slide-group multiple show-arrows>
            <v-slide-item
              v-for="(excursion, index) in data.excursions"
              :key="index"
            >
              <BoatSteps
                :title="getTranslated('title', excursion)"
                :subtitle="getTranslated('subtitle', excursion)"
                :steps="excursion.steps"
              />
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Images from "./Images.vue";
import BoatSteps from "./BoatSteps.vue";
import TranslateMixin from "../mixins/TranslateMixin";

export default {
  name: "Boat",
  components: {
    Images,
    BoatSteps,
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
