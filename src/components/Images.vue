<template>
  <v-container v-if="images && images.length">
    <v-row>
      <v-hover v-slot="{ hover }">
        <v-img :width="width" :height="height" :src="images[selected]">
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
              style="height: 100%"
            >
              {{ description }}
            </div>
          </v-expand-transition>
        </v-img>
      </v-hover>
    </v-row>

    <v-row>
      <v-slide-group v-model="selected" show-arrows>
        <v-slide-item
          v-for="(image, index) in images"
          :key="index"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-2"
            height="80"
            width="100"
            @click="toggle"
          >
            <v-img :src="images[index]" />
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Images",
  props: {
    width: {
      type: [String, Number],
      default: "450",
    },
    height: {
      type: [String, Number],
      default: "350",
    },
    images: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
      default: "no_description",
    },
  },
  data() {
    return {
      selected: 0,
    };
  },
};
</script>
