<template>
  <b-modal
    id="request-details-modal"
    :title="$t('Request Details')"
    hide-footer
    size="lg"
    @hidden="clearSession"
  >
    <vue-json-pretty
      :data="{properties: properties}"
      :deep="4"
      show-line
      style="padding: 15px; background-color: #f3f5f6; position: relative; overflow: auto;"
    />
  </b-modal>
</template>

<script>
import VueJsonPretty from "vue-json-pretty";

export default {
  components: {
    VueJsonPretty,
  },
  props: {
    properties: {
      type: Object,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      details: {},
    };
  },
  watch: {
    properties(value) {
      if (value !== null) {
        this.details = JSON.stringify(value, null, 2);
        this.showModal();
      }
    },
  },
  methods: {
    showModal() {
      this.$bvModal.show("request-details-modal");
    },
    hideModal() {
      this.$bvModal.hide("request-details-modal");
    },
    clearSession() {
      this.$emit("clearSession");
    },
  },
};
</script>
