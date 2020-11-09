<template>
  <v-card-title class="primary--text ml-2"> {{ title }} </v-card-title>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
