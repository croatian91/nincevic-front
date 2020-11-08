<template>
  <v-card-title class="title primary--text"> {{ title }} </v-card-title>
</template>

<style scoped>
.title {
  margin-left: 20px;
}
</style>

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
