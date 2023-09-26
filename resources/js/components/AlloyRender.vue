<template>
  <div>
    <!-- <b-form-group
      label="Name"
      label-for="name"
    >
      <b-form-input
        id="name"
        v-model="myName"
        type="text"
        placeholder="Enter the name of the controller"
        @input="onInput"
      />
      <b-form-group />
    </b-form-group> -->
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
  data() {
    return {
      myName: "",
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
  mounted() {
    alloy.init(this.alloyInitParams);
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
  },
};
</script>
