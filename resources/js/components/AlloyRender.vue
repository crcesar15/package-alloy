<template>
  <div>
    <b-button
      variant="info"
      @click="openAlloy()"
    >
      <i class="fas fa-user-check" /> Alloy Verification
    </b-button>
    <div id="alloy-box" />
  </div>
</template>
<script>

import alloy from "@alloyidentity/web-sdk";

export default {
  props: {
    alloyConfig: {
      type: Object,
      default: () => { },
    },
    name: {
      type: String,
      default: "alloy",
    },
  },
  data() {
    return {
      output: "",
      alloyInitParams: {
        key: null,
        journeyApplicationToken: null,
        production: false,
        journeyToken: null,
        isReactNative: false,
        isNext: false,
        customStyle: {
          theme: {
            primaryColor: null,
            backgroundColor: null,
            textColor: null,
            borderRadius: "10px",
          },
        },
      },
    };
  },
  mounted() {
    // alloy.init(this.alloyInitParams);
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);
    },
    callback(data) {
      console.log(data);
    },
    async openAlloy() {
      await this.getJourneyCredentials();
    },
    getJourneyCredentials() {
      ProcessMaker.apiClient.get(`alloy/journeys/${this.alloyConfig.journey.id}`)
        .then((res) => {
          this.alloyInitParams.key = res.data.data.configuration.sdk;
          this.alloyInitParams.journeyToken = res.data.data.configuration.journeyToken;
          this.alloyInitParams.customStyle.theme.primaryColor = res.data.data.theme.primaryColor;
          this.alloyInitParams.customStyle.theme.backgroundColor = res.data.data.theme.backgroundColor;
          this.alloyInitParams.customStyle.theme.textColor = res.data.data.theme.textColor;
        });
    },
    createJourneySession() {
      ProcessMaker.apiClient.post("alloy/session", {
        id: this.alloyConfig.journey.id,
        data: this.alloyConfig.requestBody,
      })
        .then((res) => {
          this.alloyInitParams.journeyToken = res.data.data.configuration.journeyToken;
        });
    },
  },
};
</script>
