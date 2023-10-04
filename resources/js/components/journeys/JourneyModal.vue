<template>
  <b-modal
    id="journey-modal"
    @hidden="clearService"
  >
    <template #modal-title>
      {{ modalTitle }}
    </template>
    <b-form-group
      id="journey-name-label"
      :invalid-feedback="$t('Name is required')"
      :label="$t('Name')"
      label-for="journey-name"
      :state="journeyNameState"
    >
      <b-form-input
        id="journey-name"
        v-model="name"
        :placeholder="$t('Name')"
        :state="journeyNameState"
      />
    </b-form-group>
    <b-form-group
      id="journey-description-label"
      :label="$t('Description')"
      label-for="journey-description"
    >
      <b-form-textarea
        id="Service-description"
        v-model="description"
        :placeholder="$t('Description')"
        rows="2"
      />
    </b-form-group>
    <b-form-group
      id="journey-username-label"
      :invalid-feedback="$t('Username is required')"
      :label="$t('Username')"
      label-for="journey-username"
      :state="journeyUsernameState"
    >
      <b-form-input
        id="journey-name"
        v-model="username"
        :placeholder="$t('Username')"
        :state="journeyUsernameState"
      />
    </b-form-group>
    <b-form-group
      id="journey-password-label"
      :invalid-feedback="$t('Password is required')"
      :label="$t('Password')"
      label-for="journey-password"
      :state="journeyPasswordState"
    >
      <b-form-input
        id="journey-password"
        v-model="password"
        :state="journeyPasswordState"
        type="password"
      />
    </b-form-group>
    <b-form-group
      id="journey-token-label"
      :invalid-feedback="$t('Journey Token is required')"
      :label="$t('Journey Token')"
      label-for="journey-token"
      :state="journeyTokenState"
    >
      <b-form-input
        id="journey-token"
        v-model="token"
        :placeholder="$t('Journey Token')"
        :state="journeyTokenState"
      />
    </b-form-group>
    <b-form-group
      id="journey-sdk-label"
      :invalid-feedback="$t('Journey SDK is required')"
      :label="$t('Journey SDK')"
      label-for="journey-sdk"
      :state="journeySdkState"
    >
      <b-form-input
        id="journey-sdk"
        v-model="sdk"
        :placeholder="$t('Journey SDK')"
        :state="journeySdkState"
      />
    </b-form-group>
    <b-form-group
      id="journey-environment-label"
      :label="$t('Environment')"
      label-for="journey-environment"
    >
      <b-form-checkbox
        id="journey-environment"
        v-model="environment"
        switch
        :value="$t('Production')"
        :unchecked-value="$t('SandBox')"
      >
        <strong>{{ $t(environment) }}</strong>
      </b-form-checkbox>
    </b-form-group>
    <b-form-group
      id="journey-status-label"
      :label="$t('Status')"
      label-for="journey-status"
    >
      <b-form-checkbox
        id="journey-status"
        v-model="status"
        switch
        :value="$t('ACTIVE')"
        :unchecked-value="$t('INACTIVE')"
      >
        {{ $t('The journey is ') }}<strong>{{ $t(status) }}</strong>
      </b-form-checkbox>
    </b-form-group>
    <template #modal-footer>
      <b-button
        class="float-right"
        size="sm"
        variant="outline-secondary"
        @click="hideModal()"
      >
        <i class="fa fa-times-circle" /> {{ $t('Close') }}
      </b-button>
      <b-button
        size="sm"
        class="float-right"
        @click="submit()"
      >
        <i class="fa fa-save" /> {{ $t('Save') }}
      </b-button>
    </template>
  </b-modal>
</template>
<script>

export default {
  props: {
    journey: { type: Object, default: null },
  },
  data() {
    return {
      modalTitle: "Service",
      id: "",
      name: "",
      description: "",
      username: "",
      password: "",
      token: "",
      sdk: "",
      status: "ACTIVE",
      environment: "SandBox",
      submitted: false,
      journeyValidation: false,
    };
  },
  computed: {
    journeyNameState() {
      if (this.submitted === true && this.name === "") {
        return false;
      }
      return null;
    },
    journeyUsernameState() {
      if (this.submitted === true && this.username === "") {
        return false;
      }
      return null;
    },
    journeyPasswordState() {
      if (this.submitted === true && this.password === "") {
        return false;
      }
      return null;
    },
    journeyTokenState() {
      if (this.submitted === true && this.token === "") {
        return false;
      }
      return null;
    },
    journeySdkState() {
      if (this.submitted === true && this.sdk === "") {
        return false;
      }
      return null;
    },
  },
  watch: {
    journey(journey) {
      if (journey !== null) {
        this.id = journey.id;
        this.name = journey.name;
        this.description = journey.description;
        this.username = journey.configuration.username;
        this.password = journey.configuration.password;
        this.token = journey.configuration.token;
        this.sdk = journey.configuration.sdk;
        this.environment = journey.configuration.environment;
        this.status = journey.status;

        this.showModal();
      }
    },
  },
  methods: {
    submit() {
      this.submitted = true;
      let body = false;

      this.$nextTick(() => {
        if (this.validate()) {
          body = {
            id: this.id,
            name: this.name,
            description: this.description,
            configuration: {
              username: this.username,
              password: this.password,
              token: this.token,
              sdk: this.sdk,
              environment: this.environment,
            },
            status: this.status,
          };
          this.hideModal();
          this.submitted = false;
        }

        this.$emit("submit", body);
      });
    },
    showModal() {
      this.$bvModal.show("journey-modal");
    },
    hideModal() {
      this.$bvModal.hide("journey-modal");
    },
    validate() {
      if (this.name === undefined || this.name === "") {
        return false;
      }

      if (this.username === undefined || this.username === "") {
        return false;
      }

      if (this.password === undefined || this.password === "") {
        return false;
      }

      if (this.token === undefined || this.token === "") {
        return false;
      }

      if (this.sdk === undefined || this.sdk === "") {
        return false;
      }

      return true;
    },
    clearService() {
      this.$emit("clearJourney");
    },
  },
};
</script>
<style></style>
