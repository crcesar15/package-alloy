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
          @click="journey = { id: 0 }"
        >
          <i class="fa fa-plus" /> {{ $t('Journey') }}
        </b-button>
      </div>
    </div>
    <b-card-text>
      <b-table
        ref="journeys"
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
                @click="editJourney(data.item)"
              >
                <i class="fas fa-pen-square fa-lg fa-fw" />
              </b-btn>
              <b-btn
                v-b-tooltip.hover
                variant="link"
                :title="$t('Remove')"
                @click="deleteJourney(data.item.id)"
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
      v-model="selectedJourney"
      @clearJourney="clearJourney"
      @journeySubmit="journeySubmit"
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
      selectedJourney: null,
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
    journeySubmit(body) {
      if (body) {
        if (this.journey.id === 0) {
          this.createJourney(body);
        } else {
          this.updateJourney(this.journey.id, body);
        }
      }
    },
    createJourney(body) {
      ProcessMaker.apiClient
        .post("/esign/journeys", body)
        .then(() => {
          ProcessMaker.alert(this.$t("Journey successfully added"), "success");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.addError = error.response.data.errors;
          }
        });
    },
    updateJourney(id, body) {
      ProcessMaker.apiClient
        .put(`/esign/journeys/${id}`, body)
        .then(() => {
          ProcessMaker.alert("Journey successfully updated", "success");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.addError = error.response.data.errors;
          }
        });
    },
    deleteJourney(id) {
      ProcessMaker.confirmModal(
        "Caution!",
        this.$t("Are you sure to delete this journey?"),
        "",
        () => {
          ProcessMaker.apiClient
            .delete(`/esign/journeys/${id}`)
            .then(() => {
              ProcessMaker.alert("Journey successfully deleted", "success");
              this.clearJourney();
            })
            .catch((error) => {
              if (error.response.status === 422) {
                this.addError = error.response.data.errors;
              }
            });
        },
      );
    },
    editJourney(item) {
      const journey = item;
      journey.provider = item.credentials.provider;
      this.journey = journey;
    },
    clearJourney() {
      this.journey = null;
      this.$refs.journeys.refresh();
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
