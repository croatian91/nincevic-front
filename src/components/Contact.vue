<template>
  <v-container>
    <v-row>
      <v-col>
        <GmapMap
          :center="center"
          :zoom="15"
          :options="options"
          map-type-id="terrain"
          style="width: 600px; height: 300px"
        >
          <GmapMarker :position="center" />
        </GmapMap>
      </v-col>

      <v-col>
        <v-card flat>
          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ data.phone }}</v-list-item-title>
                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-email </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ data.email }}</v-list-item-title>
                <v-list-item-subtitle>Personal</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-map-marker </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ data.line1 }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ data.line2 }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    center: { lng: 15.302706, lat: 44.044158 },
    options: {
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: true,
      disableDefaultUI: false,
    },
  }),
};
</script>
