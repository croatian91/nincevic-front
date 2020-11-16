<template>
  <v-container>
    <v-toolbar flat>
      <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
        {{ $t("today") }}
      </v-btn>
      <v-btn
        fab
        text
        small
        color="grey darken-2"
        @click="$refs.calendar.prev()"
      >
        <v-icon small> mdi-chevron-left </v-icon>
      </v-btn>
      <v-btn
        fab
        text
        small
        color="grey darken-2"
        @click="$refs.calendar.next()"
      >
        <v-icon small> mdi-chevron-right </v-icon>
      </v-btn>
      <v-toolbar-title v-if="$refs.calendar">
        {{ $refs.calendar.title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-sheet height="350">
      <v-calendar
        ref="calendar"
        v-model="focus"
        :events="events"
        color="primary"
        type="month"
      />
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "Images",
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      focus: "",
    };
  },
  methods: {
    setToday() {
      this.focus = "";
    },
  },
};
</script>

<i18n>
  {
    "en": {
      "today": "Today"
    },
    "de": {
      "today": "Heute"
    },
    "hr": {
      "today": "Danas"
    }
  }
</i18n>
