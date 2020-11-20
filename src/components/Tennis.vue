<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col
        v-for="(image, index) in data.images"
        :key="index"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img :src="image" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="primary lighten-5" />
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-card-text class="text-center">
        <p>
          {{ getDescription }}
        </p>
      </v-card-text>

      <v-card-title class="font-weight-light">
        {{ $t("coaches") }}
      </v-card-title>
    </v-row>

    <v-row justify="center">
      <v-col v-for="(coach, index) in data.coaches" :key="index">
        <Profile :image="coach.image" :name="coach.name" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Profile from "./Profile.vue";
import TranslateMixin from "../mixins/TranslateMixin";

export default {
  name: "Tennis",
  components: {
    Profile,
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

<i18n>
  {
    "en": {
      "coaches": "Coaches"
    },
    "de": {
      "coaches": "Trainer"
    },
    "hr": {
      "coaches": "Treneri"
    }
  }
</i18n>
