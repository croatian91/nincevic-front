<template>
  <v-container>
    <v-row justify="center">
      <h1 class="primary--text font-weight-light ml-3">{{ title }}</h1>
    </v-row>
  </v-container>
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
