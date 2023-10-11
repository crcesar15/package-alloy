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
        color: {
          primary: null,
          secondary: null,
        },
      },
    };
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);
    },
    callback(data) {
      console.log("callback");
      console.log(data);
    },
    async openAlloy() {
      this.busy = true;
      await this.getJourneyCredentials();
      const requestId = this.getRequestData(this.alloyConfig.requestId);
      const requestBody = this.getRequestData(this.alloyConfig.requestBody);

      if (requestId === null || requestBody === null) {
        ProcessMaker.alert("Please fill in the request ID and request body fields.", "danger");
        return;
      }

      const alloySession = await this.createJourneySession(requestId, requestBody);

      this.alloyInitParams.journeyApplicationToken = alloySession.properties.response.journey_application_token;

      const init = await alloy.init(this.alloyInitParams);

      console.log(this.alloyInitParams);
      console.log(init);
      await alloy.open(this.callback);
    },
    getJourneyCredentials() {
      return ProcessMaker.apiClient.get(`alloy/journeys/${this.alloyConfig.journey.id}`)
        .then((res) => {
          this.alloyInitParams.key = res.data.configuration.sdk;
          this.alloyInitParams.journeyToken = res.data.configuration.token;
          this.alloyInitParams.production = res.data.configuration.environment === "Production";
          this.alloyInitParams.color.primary = this.alloyConfig.theme.primaryColor;
          this.alloyInitParams.color.secondary = this.alloyConfig.theme.backgroundColor;
        });
    },
    createJourneySession(requestId, requestBody) {
      return ProcessMaker.apiClient.post("alloy/sessions", {
        requestId,
        journeyId: this.alloyConfig.journey.id,
        data: requestBody,
      })
        .then((res) => res.data);
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
