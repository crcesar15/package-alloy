<template>
  <b-card style="border-top: solid 0px white !important; margin-top: -16px;">
    <div class="row mb-3">
      <div class="col-12 col-md-6 col-lg-10 mb-md-0 mb-3">
        <b-form-input
          v-model="filter"
          :placeholder="$t('Search')"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-2">
        <b-button
          block
          @click="service = { id: 0 }"
        >
          <i class="fa fa-plus" /> {{ $t('Service') }}
        </b-button>
      </div>
    </div>
    <b-card-text>
      <b-table
        ref="services"
        class="bordered-table"
        hover
        responsive="xl"
        show-empty
        sort-by="id"
        sort-icon-left
        :current-page="currentPage"
        :items="fetch"
        :fields="fields"
        :filter="filter"
        :per-page="10"
      >
        <template #empty>
          <h4 class="text-center mt-5 my-2 mb-5">
            <i class="fa fa-search" /> No journeys registered yet
          </h4>
        </template>
        <template #emptyfiltered>
          <h4 class="text-center mt-5 my-2 mb-5">
            <i class="fa fa-search" /> No journeys matching your search
          </h4>
        </template>
        <template #table-busy>
          <div class="text-center mt-5 my-2">
            <b-spinner class="align-middle" />
            <strong>{{ $t('Loading') }}...</strong>
          </div>
        </template>
        <template #cell(actions)="data">
          <div
            class="actions"
            style="display: flex;align-items: center;"
          >
            <div class="popout">
              <b-btn
                v-b-tooltip.hover
                variant="link"
                data-action="Edit"
                :title="$t('Edit')"
                @click="editService(data.item)"
              >
                <i class="fas fa-pen-square fa-lg fa-fw" />
              </b-btn>
              <b-btn
                v-b-tooltip.hover
                variant="link"
                :title="$t('Remove')"
                @click="deleteService(data.item.id)"
              >
                <i class="fas fa-trash-alt fa-lg fa-fw" />
              </b-btn>
            </div>
          </div>
        </template>
      </b-table>
      <div
        v-show="meta.total > 0"
        class="row"
      >
        <div class="col-12 col-md-6 col-lg-4 offset-lg-4 order-md-6 mb-3">
          <b-pagination
            v-model="currentPage"
            align="fill"
            class="pagination-items"
            size="sm"
            :total-rows="meta.total"
            :per-page="10"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-4 order-md-1 text-center text-md-left mb-3">
          {{ 1 + (meta.current_page - 1) * 10 }} -
          {{
            meta.total > meta.current_page * 10
              ? meta.current_page * 10
              : meta.total
          }}
          {{ $t('of') }} {{ meta.total }} {{ $t('Journeys') }}
        </div>
      </div>
    </b-card-text>
    <journey-modal
      :service-item="service"
      @clearService="clearService"
      @serviceSubmit="serviceSubmit"
    />
  </b-card>
</template>

<script>
import JourneyModal from "./JourneyModal.vue";

export default {
  components: { JourneyModal },
  data() {
    return {
      filter: "",
      fields: [
        {
          key: "id",
          label: "ID",
          sortable: true,
        },
        {
          key: "name",
          label: this.$t("Name"),
          sortable: true,
        },
        {
          key: "status",
          label: this.$t("Status"),
          sortable: true,
        },
        {
          key: "actions",
          label: this.$t("Actions"),
          thStyle: { width: "100px", textAlign: "center" },
        },
      ],
      meta: {},
      currentPage: 1,
      service: null,
    };
  },
  methods: {
    fetch(tableParams) {
      if (tableParams !== undefined) { // prevents no mounted table
        return ProcessMaker.apiClient
          .get(`/alloy/journeys?page=${tableParams.currentPage}&per_page=${tableParams.perPage
          }&filter=${tableParams.filter !== undefined ? tableParams.filter : ""}&order_by=${tableParams.sortBy
          }&order_direction=${tableParams.sortDesc ? "desc" : "asc"}`)
          .then((res) => {
            this.meta = res.data.meta;
            return res.data.data;
          });
      }
      return [];
    },
    serviceSubmit(body) {
      if (body) {
        if (this.service.id === 0) {
          this.createService(body);
        } else {
          this.updateService(this.service.id, body);
        }
      }
    },
    createService(body) {
      ProcessMaker.apiClient
        .post("/esign/services", body)
        .then(() => {
          ProcessMaker.alert(this.$t("Service successfully added"), "success");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.addError = error.response.data.errors;
          }
        });
    },
    updateService(id, body) {
      ProcessMaker.apiClient
        .put(`/esign/services/${id}`, body)
        .then(() => {
          ProcessMaker.alert("Service successfully updated", "success");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.addError = error.response.data.errors;
          }
        });
    },
    deleteService(id) {
      ProcessMaker.confirmModal(
        "Caution!",
        this.$t("Are you sure to delete this service?"),
        "",
        () => {
          ProcessMaker.apiClient
            .delete(`/esign/services/${id}`)
            .then(() => {
              ProcessMaker.alert("Service successfully deleted", "success");
              this.clearService();
            })
            .catch((error) => {
              if (error.response.status === 422) {
                this.addError = error.response.data.errors;
              }
            });
        },
      );
    },
    editService(item) {
      const service = item;
      service.provider = item.credentials.provider;
      this.service = service;
    },
    clearService() {
      this.service = null;
      this.$refs.services.refresh();
    },
  },
};
</script>

<style>
th {
  font-weight: 400 !important;
}

.bordered-table {
  border: solid 1px rgba(0, 0, 0, 0.125) !important;
}
</style>
