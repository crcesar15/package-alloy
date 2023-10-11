<template>
  <div>
    <b-button
      v-show="busy === false"
      variant="info"
      @click="openAlloy()"
    >
      <i class="fas fa-user-check" /> Alloy Verification
    </b-button>
    <div
      v-show="busy === true"
      class="text-center my-2"
    >
      <b-spinner class="align-middle" />
      <strong>Waiting for alloy...</strong>
    </div>
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
    transientData: {
      type: Object,
      default: () => { },
    },
  },
  data() {
    return {
      busy: false,
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
      const requestId = this.getRequestData(this.alloyConfig.requestId);
      const requestBody = this.getRequestData(this.alloyConfig.requestBody);

      if (requestId === null || requestBody === null) {
        ProcessMaker.alert("Please fill in the request ID and request body fields.", "danger");
        return;
      }

      await this.createJourneySession(requestId, requestBody);

      this.busy = true;

      console.log(requestBody);
    },
    getJourneyCredentials() {
      ProcessMaker.apiClient.get(`alloy/journeys/${this.alloyConfig.journey.id}`)
        .then((res) => {
          this.alloyInitParams.key = res.data.configuration.sdk;
          this.alloyInitParams.journeyToken = res.data.configuration.token;
          this.alloyInitParams.customStyle.theme.primaryColor = this.alloyConfig.theme.primaryColor;
          this.alloyInitParams.customStyle.theme.backgroundColor = this.alloyConfig.theme.backgroundColor;
          this.alloyInitParams.customStyle.theme.textColor = this.alloyConfig.theme.textColor;
        });
    },
    createJourneySession(requestId, requestBody) {
      ProcessMaker.apiClient.post("alloy/sessions", {
        id: requestId,
        journeyId: this.alloyConfig.journey.id,
        data: requestBody,
      })
        .then((res) => {
          console.log(res);
        });
    },
    getRequestData(variableName) {
      const variableParts = variableName.split(".");

      let value = this.transientData;

      variableParts.forEach((part) => {
        if (value === null || typeof (value[part]) === "undefined") {
          value = null;
        } else {
          value = value[part];
        }
      });

      return value;
    },
  },
};
</script>
