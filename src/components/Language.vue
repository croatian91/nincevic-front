<template>
  <v-menu bottom :close-on-click="true">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" depressed rounded dark v-bind="attrs" v-on="on">
        {{ $i18n.locale }}
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(language, index) in languages"
        :key="index"
        @click="$i18n.locale = language.value"
      >
        <v-list-item-title>{{ language.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "Language",
  data: () => ({
    languages: [
      { value: "en", title: "EN" },
      { value: "de", title: "DE" },
      { value: "hr", title: "HR" },
    ],
  }),
};
</script>
