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
        v-model="journey.name"
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
        v-model="journey.description"
        :placeholder="$t('Description')"
        rows="2"
      />
    </b-form-group>
    <b-form-group
      id="journey-username-label"
      :invalid-feedback="$t('Username is required')"
      :label="$t('Username')"
      label-for="journey-username"
      :state="journeyNameState"
    >
      <b-form-input
        id="journey-name"
        v-model="journey.name"
        :placeholder="$t('Name')"
        :state="journeyNameState"
      />
    </b-form-group>
    <b-form-group
      id="journey-status-label"
      :label="$t('Status')"
      label-for="journey-status"
    >
      <b-form-checkbox
        id="journey-status"
        v-model="journey.status"
        switch
        :value="$t('ACTIVE')"
        :unchecked-value="$t('INACTIVE')"
      >
        {{ $t('The journey is ') }}<strong>{{ $t(journey.status) }}</strong>
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
    journeyItem: { type: Object, default: null },
  },
  data() {
    return {
      modalTitle: "Service",
      journey: {
        name: "",
        description: "",
        credentials: {},
        status: "ACTIVE",
      },
      provider: null,
      submitted: false,
      journeyValidation: false,
    };
  },
  computed: {
    journeyNameState() {
      if (this.submitted === true && this.journey.name === "") {
        return false;
      }
      return null;
    },
    journeyProviderState() {
      if (this.submitted === true && this.journey.provider === null) {
        return false;
      }
      return null;
    },
  },
  watch: {
    provider() {
      this.journey.provider = this.provider;
    },
    journeyItem(journey) {
      if (journey !== null) {
        if (journey.id === 0) {
          // create journey
          this.modalTitle = this.$t("Add Service");
        } else {
          // update journey
          this.modalTitle = this.$t("Update Service");
          this.journey = journey;
          this.provider = journey.provider;
        }
        this.showModal();
      }
    },

  },
  methods: {
    getServiceData(data) {
      this.journeyValidation = data.validated;
      this.journey.credentials = data.credentials;
    },
    submit() {
      this.submitted = true;
      let body = false;

      this.$nextTick(() => {
        if (this.validate()) {
          body = {
            name: this.journey.name,
            description: this.journey.description,
            credentials: this.journey.credentials,
            status: this.journey.status,
          };
          body.credentials.provider = this.journey.provider;
          this.hideModal();
          this.submitted = false;
        }

        this.$emit("journeySubmit", body);
      });
    },
    showModal() {
      this.$bvModal.show("journey-modal");
    },
    hideModal() {
      this.$bvModal.hide("journey-modal");
    },
    validate() {
      const { journey } = this;
      console.log(journey.name, journey.provider, this.journeyValidation);

      if (journey.name === undefined || journey.name === "") {
        return false;
      }

      if (journey.provider === null) {
        return false;
      }

      if (!this.journeyValidation) return false;

      return true;
    },
    clearService() {
      this.journey = {
        name: "",
        description: "",
        provider: null,
        status: "ACTIVE",
      };
      this.journey.credentials = {};
      this.journeyValidation = false;
      this.submitted = false;
      this.$emit("clearService");
    },
  },
};
</script>
<style></style>
