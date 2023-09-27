<template>
  <div class="report-inspector">
    <div class="border-bottom p-4">
      <b-form-group
        :label="$t('Saved Search')"
        class="m-0"
      >
        <b-form-input
          v-model="test"
        />
        <b-form-text>
          {{ $t('Select the saved search to display') }}
        </b-form-text>
      </b-form-group>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      test: null,
      componentVariable: "",
    };
  },
  watch: {
    value: {
      handler() {
        // this.componentVariable = this.value.name;
      },
      deep: true,
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.report-inspector {
  padding: 0 !important;
}
</style>
