export default {
  computed: {
    getDescription() {
      return this.getTranslated("description", this.data);
    },
  },
  methods: {
    getTranslated(attribute, data) {
      return (
        data[`${attribute}_${this.$i18n.locale}`] || this.$t(`no_${attribute}`)
      );
    },
  },
};
