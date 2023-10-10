<template>
  <div class="report-inspector">
    <div class="border-bottom p-4">
      <SelectListJourney
        v-model="journey"
        @input="$emit('input', newValue)"
      />
    </div>
    <div class="border-bottom p-4">
      <b-form-group
        :label="$t('Body Content')"
        class="m-0"
      >
        <b-form-input
          v-model="requestBody"
          @input="$emit('input', newValue)"
        />
        <b-form-text>
          {{ $t('JSON object to send as alloy request body') }}
        </b-form-text>
      </b-form-group>
    </div>
    <div class="border-bottom p-4">
      <b-form-group
        :label="$t('Primary Color')"
        class="m-0"
      >
        <b-form-input
          v-model="primaryColor"
          type="color"
          @input="$emit('input', newValue)"
        />
        <b-form-text>
          {{ $t('Alloy modal primary color') }}
        </b-form-text>
      </b-form-group>
    </div>
    <div class="border-bottom p-4">
      <b-form-group
        :label="$t('Background Color')"
        class="m-0"
      >
        <b-form-input
          v-model="backgroundColor"
          type="color"
          @input="$emit('input', newValue)"
        />
        <b-form-text>
          {{ $t('Alloy modal background color') }}
        </b-form-text>
      </b-form-group>
    </div>
    <div class="border-bottom p-4">
      <b-form-group
        :label="$t('Text Color')"
        class="m-0"
      >
        <b-form-input
          v-model="textColor"
          type="color"
          @input="$emit('input', newValue)"
        />
        <b-form-text>
          {{ $t('Alloy modal text color') }}
        </b-form-text>
      </b-form-group>
    </div>
  </div>
</template>

<script>
import SelectListJourney from "./UI/SelectListJourney.vue";

export default {
  components: {
    SelectListJourney,
  },
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      requestBody: null,
      journey: null,
      primaryColor: null,
      backgroundColor: null,
      textColor: null,
    };
  },
  computed: {
    newValue() {
      return {
        requestBody: this.requestBody,
        journey: this.journey,
        theme: {
          primaryColor: this.primaryColor,
          backgroundColor: this.backgroundColor,
          textColor: this.textColor,
        },
      };
    },
  },
  watch: {
    value: {
      handler() {
        this.requestBody = this.value.requestBody;
        this.journey = this.value.journey;
        this.primaryColor = this.value.theme.primaryColor;
        this.backgroundColor = this.value.theme.backgroundColor;
        this.textColor = this.value.theme.textColor;
      },
      deep: true,
    },
  },
  mounted() {
    this.requestBody = this.value.requestBody;
    this.journey = this.value.journey;
    this.primaryColor = this.value.theme.primaryColor;
    this.backgroundColor = this.value.theme.backgroundColor;
    this.textColor = this.value.theme.textColor;
  },
};
</script>

<style lang="scss" scoped>
.report-inspector {
  padding: 0 !important;
}
</style>
