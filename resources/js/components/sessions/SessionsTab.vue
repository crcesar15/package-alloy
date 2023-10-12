<template>
  <b-card style="border-top: solid 0px white !important; margin-top: -16px;">
    <div class="row mb-3">
      <div class="col-12">
        <b-form-input
          v-model="filter"
          :placeholder="$t('Search')"
        />
      </div>
    </div>
    <b-card-text>
      <b-table
        ref="sessions"
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
            <i class="fa fa-search" /> No sessions registered yet
          </h4>
        </template>
        <template #emptyfiltered>
          <h4 class="text-center mt-5 my-2 mb-5">
            <i class="fa fa-search" /> No sessions matching your search
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
                :title="$t('Details')"
                @click="showDetails(data.item.properties)"
              >
                <i class="fas fa-info-circle fa-lg fa-fw" />
              </b-btn>
            </div>
            <div class="popout">
              <b-btn
                v-b-tooltip.hover
                variant="link"
                :title="$t('Remove')"
                @click="deleteSession(data.item.id)"
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
          {{ $t('of') }} {{ meta.total }} {{ $t('Sessions') }}
        </div>
      </div>
    </b-card-text>
    <session-details-modal
      :properties="selectedItem"
      @clearSession="clearSelectedSession()"
    />
  </b-card>
</template>

<script>
import SessionDetailsModal from "./SessionDetailsModal.vue";

export default {
  components: { SessionDetailsModal },
  data() {
    return {
      filter: "",
      fields: [
        {
          key: "request_id",
          label: "Request ID",
          sortable: true,
        },
        {
          key: "journey.name",
          label: this.$t("Journey"),
          sortable: false,
        },
        {
          key: "properties.response.journey_application_status",
          label: this.$t("Status"),
          sortable: false,
        },
        {
          key: "created_at",
          label: this.$t("Started"),
          sortable: true,
          formatter(value) {
            return moment(value).format(ProcessMaker.user.datetime_format);
          },
        },
        {
          key: "updated_at",
          label: this.$t("Modified"),
          sortable: true,
          formatter(value) {
            return moment(value).format(ProcessMaker.user.datetime_format);
          },
        },
        {
          key: "actions",
          label: this.$t("Actions"),
          thStyle: { width: "100px", textAlign: "center" },
        },
      ],
      meta: {},
      currentPage: 1,
      selectedItem: {},
    };
  },
  methods: {
    showDetails(details) {
      this.selectedItem = details;
    },
    fetch(tableParams) {
      if (tableParams !== undefined) { // prevents no mounted table
        return ProcessMaker.apiClient
          .get(`/alloy/sessions?page=${tableParams.currentPage}&per_page=${tableParams.perPage
          }&filter=${tableParams.filter !== undefined ? tableParams.filter : ""}&order_by=${tableParams.sortBy
          }&order_direction=${tableParams.sortDesc ? "desc" : "asc"}`)
          .then((res) => {
            this.meta = res.data.meta;
            return res.data.data;
          });
      }
      return [];
    },
    deleteSession(id) {
      ProcessMaker.confirmModal(
        "Caution!",
        this.$t("Are you sure to delete this session?"),
        "",
        () => {
          ProcessMaker.apiClient
            .delete(`/alloy/sessions/${id}`)
            .then(() => {
              ProcessMaker.alert("Session successfully deleted", "success");
              this.$refs.sessions.refresh();
            })
            .catch((error) => {
              if (error.response.status === 422) {
                this.addError = error.response.data.errors;
              }
            });
        },
      );
    },
    clearSelectedSession() {
      this.selectedItem = null;
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
