<template>
  <div class="social">
    <v-btn
      v-for="(item, index) in items"
      :key="index"
      icon
      :href="item.href"
      target="_blank"
    >
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Social",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
