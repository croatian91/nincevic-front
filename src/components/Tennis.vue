<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 3" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="primary lighten-5" />
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-card-text class="text-center"> <p>description....</p> </v-card-text>
      <v-card-title> Coaches </v-card-title>
    </v-row>

    <v-row justify="center">
      <v-col>
        <Profile
          image="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
          name="Luka"
        />
      </v-col>

      <v-col>
        <Profile
          image="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
          name="Stipe"
        />
      </v-col>

      <v-col>
        <Profile
          image="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
          name="Toni"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Profile from "./Profile.vue";

export default {
  name: "Tennis",
  components: {
    Profile,
  },
};
</script>
