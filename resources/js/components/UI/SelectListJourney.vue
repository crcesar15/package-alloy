<template>
  <b-form-group
    label="Select Journey"
    label-for="journey-name"
  >
    <Multiselect
      v-model="journey"
      :options="journeys"
      select-label=""
      deselect-label=""
      label="name"
    />
  </b-form-group>
</template>

<script>

import alloy from "@alloyidentity/web-sdk";
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      output: "",
      journeys: [],
      journey: null,
      alloyInitParams: {
        key: "a7fcdfe0-7226-4be9-a8bf-6c0fdb497c9b",
        journeyApplicationToken: "JA-iYSmwNe7djplfNNcNNPH",
        production: false,
        journeyToken: "J-zT8lr6acygRQmePjBA5",
        isReactNative: false,
        isNext: false,
        customStyle: {
          theme: {
            primaryColor: "#F46A35",
            backgroundColor: "#ffffff",
            textColor: "#121212",
            borderRadius: "10px",
          },
        },
      },
    };
  },
  watch: {
    value: {
      handler() {
        this.journey = this.value;
      },
      deep: true,
    },
    journey: {
      handler() {
        this.$emit("input", this.journey);
      },
      deep: true,
    },
  },
  mounted() {
    this.listJourneys();
    this.journey = this.value;
    // alloy.init(this.alloyInitParams);
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);
    },
    callback(data) {
      console.log(data);
    },
    openAlloy() {
      alloy.open(this.callback, "alloy-box");
    },
    listJourneys() {
      ProcessMaker.apiClient
        .get("/alloy/journeys")
        .then((response) => {
          this.journeys = response.data.data.map((item) => ({ id: item.id, name: item.name }));
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
