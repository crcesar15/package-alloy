<template>
  <b-modal
    id="service-modal"
    @hidden="clearService"
  >
    <template #modal-title>
      {{ modalTitle }}
    </template>
    <div>
      <b-form-group
        id="service-name-label"
        :invalid-feedback="$t('Name is required')"
        :label="$t('Name')"
        label-for="service-name"
        :state="serviceNameState"
      >
        <b-form-input
          id="Service-name"
          v-model="service.name"
          :placeholder="$t('Name')"
          :state="serviceNameState"
        />
      </b-form-group>
      <b-form-group
        id="service-description-label"
        :label="$t('Description')"
        label-for="service-description"
      >
        <b-form-textarea
          id="Service-description"
          v-model="service.description"
          :placeholder="$t('Description')"
          rows="2"
        />
      </b-form-group>
      <div v-if="provider === 'lightico'">
        <lightico-credentials
          :service-credentials="service.credentials"
          :submitted="submitted"
          @retrieveData="getServiceData"
        />
      </div>
      <div v-if="provider === 'adobeSign'">
        <adobe-sign-credentials
          :service-credentials="service.credentials"
          :submitted="submitted"
          @retrieveData="getServiceData"
        />
      </div>
      <div v-if="provider === 'docuSign'">
        <docu-sign-credentials
          :service-credentials="service.credentials"
          :submitted="submitted"
          @retrieveData="getServiceData"
        />
      </div>
      <div v-if="provider === 'helloSign'">
        <hello-sign-credentials
          :service-credentials="service.credentials"
          :submitted="submitted"
          @retrieveData="getServiceData"
        />
      </div>
      <div v-if="provider === 'imm'">
        <imm-credentials
          :service-credentials="service.credentials"
          :submitted="submitted"
          @retrieveData="getServiceData"
        />
      </div>
    </div>
    <b-form-group
      id="service-status-label"
      :label="$t('Status')"
      label-for="service-status"
    >
      <b-form-checkbox
        id="service-status"
        v-model="service.status"
        switch
        :value="$t('ACTIVE')"
        :unchecked-value="$t('INACTIVE')"
      >
        {{ $t('The service is ') }}<strong>{{ $t(service.status) }}</strong>
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
    serviceItem: { type: Object, default: null },
  },
  data() {
    return {
      modalTitle: "Service",
      service: {
        name: "",
        description: "",
        provider: null,
        credentials: {},
        status: "ACTIVE",
      },
      provider: null,
      submitted: false,
      serviceValidation: false,
    };
  },
  computed: {
    serviceNameState() {
      if (this.submitted === true && this.service.name === "") {
        return false;
      }
      return null;
    },
    serviceProviderState() {
      if (this.submitted === true && this.service.provider === null) {
        return false;
      }
      return null;
    },
  },
  watch: {
    provider() {
      this.service.provider = this.provider;
    },
    serviceItem(service) {
      if (service !== null) {
        if (service.id === 0) {
          // create service
          this.modalTitle = this.$t("Add Service");
        } else {
          // update service
          this.modalTitle = this.$t("Update Service");
          this.service = service;
          this.provider = service.provider;
        }
        this.showModal();
      }
    },

  },
  methods: {
    getServiceData(data) {
      this.serviceValidation = data.validated;
      this.service.credentials = data.credentials;
    },
    submit() {
      this.submitted = true;
      let body = false;

      this.$nextTick(() => {
        if (this.validate()) {
          body = {
            name: this.service.name,
            description: this.service.description,
            credentials: this.service.credentials,
            status: this.service.status,
          };
          body.credentials.provider = this.service.provider;
          this.hideModal();
          this.submitted = false;
        }

        this.$emit("serviceSubmit", body);
      });
    },
    showModal() {
      this.$bvModal.show("service-modal");
    },
    hideModal() {
      this.$bvModal.hide("service-modal");
    },
    validate() {
      const { service } = this;
      console.log(service.name, service.provider, this.serviceValidation);

      if (service.name === undefined || service.name === "") {
        return false;
      }

      if (service.provider === null) {
        return false;
      }

      if (!this.serviceValidation) return false;

      return true;
    },
    clearService() {
      this.service = {
        name: "",
        description: "",
        provider: null,
        status: "ACTIVE",
      };
      this.service.credentials = {};
      this.serviceValidation = false;
      this.submitted = false;
      this.$emit("clearService");
    },
  },
};
</script>
<style></style>
