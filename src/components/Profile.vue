<template>
  <v-container>
    <v-col>
      <v-row align="center" justify="center">
        <v-avatar :size="size">
          <img alt="user" :src="image" />
        </v-avatar>
      </v-row>

      <v-row align="center" justify="center">
        <span class="mt-3">{{ name }}</span>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: 136,
    },
  },
};
</script>
