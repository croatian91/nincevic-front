<template>
  <v-card flat>
    <v-card-title class="font-weight-regular"> {{ title }} </v-card-title>

    <v-card-subtitle> {{ subtitle }} </v-card-subtitle>

    <v-card-text>
      <div class="font-weight-bold ml-8 mb-2">Steps</div>

      <v-timeline align-top dense>
        <v-timeline-item
          v-for="step in steps"
          :key="step.time"
          color="primary"
          small
        >
          <div>
            <div class="font-weight-normal">
              <strong>{{ step.from }}</strong> @{{ step.time }}
            </div>
            <div>{{ step.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BoatSteps",
  props: {
    title: {
      type: String,
      default: "Visit top islands",
    },
    subtitle: {
      type: String,
      default: "6 hours of pure pleassure!",
    },
    steps: {
      type: Array,
      required: true,
    },
  },
};
</script>
