/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneyModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/journeys/JourneyModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    serviceItem: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      modalTitle: "Service",
      service: {
        name: "",
        description: "",
        provider: null,
        credentials: {},
        status: "ACTIVE"
      },
      provider: null,
      submitted: false,
      serviceValidation: false
    };
  },
  computed: {
    serviceNameState: function serviceNameState() {
      if (this.submitted === true && this.service.name === "") {
        return false;
      }
      return null;
    },
    serviceProviderState: function serviceProviderState() {
      if (this.submitted === true && this.service.provider === null) {
        return false;
      }
      return null;
    }
  },
  watch: {
    provider: function provider() {
      this.service.provider = this.provider;
    },
    serviceItem: function serviceItem(service) {
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
    }
  },
  methods: {
    getServiceData: function getServiceData(data) {
      this.serviceValidation = data.validated;
      this.service.credentials = data.credentials;
    },
    submit: function submit() {
      var _this = this;
      this.submitted = true;
      var body = false;
      this.$nextTick(function () {
        if (_this.validate()) {
          body = {
            name: _this.service.name,
            description: _this.service.description,
            credentials: _this.service.credentials,
            status: _this.service.status
          };
          body.credentials.provider = _this.service.provider;
          _this.hideModal();
          _this.submitted = false;
        }
        _this.$emit("serviceSubmit", body);
      });
    },
    showModal: function showModal() {
      this.$bvModal.show("service-modal");
    },
    hideModal: function hideModal() {
      this.$bvModal.hide("service-modal");
    },
    validate: function validate() {
      var service = this.service;
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
    clearService: function clearService() {
      this.service = {
        name: "",
        description: "",
        provider: null,
        status: "ACTIVE"
      };
      this.service.credentials = {};
      this.serviceValidation = false;
      this.submitted = false;
      this.$emit("clearService");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneysTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/journeys/JourneysTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JourneyModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JourneyModal.vue */ "./resources/js/components/journeys/JourneyModal.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    JourneyModal: _JourneyModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      filter: "",
      fields: [{
        key: "id",
        label: "ID",
        sortable: true
      }, {
        key: "name",
        label: this.$t("Name"),
        sortable: true
      }, {
        key: "status",
        label: this.$t("Status"),
        sortable: true
      }, {
        key: "actions",
        label: this.$t("Actions"),
        thStyle: {
          width: "100px",
          textAlign: "center"
        }
      }],
      meta: {},
      currentPage: 1,
      service: null
    };
  },
  methods: {
    fetch: function fetch(tableParams) {
      var _this = this;
      if (tableParams !== undefined) {
        // prevents no mounted table
        return ProcessMaker.apiClient.get("/alloy/journeys?page=".concat(tableParams.currentPage, "&per_page=").concat(tableParams.perPage, "&filter=").concat(tableParams.filter !== undefined ? tableParams.filter : "", "&order_by=").concat(tableParams.sortBy, "&order_direction=").concat(tableParams.sortDesc ? "desc" : "asc")).then(function (res) {
          _this.meta = res.data.meta;
          return res.data.data;
        });
      }
      return [];
    },
    serviceSubmit: function serviceSubmit(body) {
      if (body) {
        if (this.service.id === 0) {
          this.createService(body);
        } else {
          this.updateService(this.service.id, body);
        }
      }
    },
    createService: function createService(body) {
      var _this2 = this;
      ProcessMaker.apiClient.post("/esign/services", body).then(function () {
        ProcessMaker.alert(_this2.$t("Service successfully added"), "success");
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this2.addError = error.response.data.errors;
        }
      });
    },
    updateService: function updateService(id, body) {
      var _this3 = this;
      ProcessMaker.apiClient.put("/esign/services/".concat(id), body).then(function () {
        ProcessMaker.alert("Service successfully updated", "success");
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this3.addError = error.response.data.errors;
        }
      });
    },
    deleteService: function deleteService(id) {
      var _this4 = this;
      ProcessMaker.confirmModal("Caution!", this.$t("Are you sure to delete this service?"), "", function () {
        ProcessMaker.apiClient["delete"]("/esign/services/".concat(id)).then(function () {
          ProcessMaker.alert("Service successfully deleted", "success");
          _this4.clearService();
        })["catch"](function (error) {
          if (error.response.status === 422) {
            _this4.addError = error.response.data.errors;
          }
        });
      });
    },
    editService: function editService(item) {
      var service = item;
      service.provider = item.credentials.provider;
      this.service = service;
    },
    clearService: function clearService() {
      this.service = null;
      this.$refs.services.refresh();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneyModal.vue?vue&type=template&id=2b7d3d0e&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/journeys/JourneyModal.vue?vue&type=template&id=2b7d3d0e& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    attrs: {
      id: "service-modal"
    },
    on: {
      hidden: _vm.clearService
    },
    scopedSlots: _vm._u([{
      key: "modal-title",
      fn: function fn() {
        return [_vm._v("\n    " + _vm._s(_vm.modalTitle) + "\n  ")];
      },
      proxy: true
    }, {
      key: "modal-footer",
      fn: function fn() {
        return [_c("b-button", {
          staticClass: "float-right",
          attrs: {
            size: "sm",
            variant: "outline-secondary"
          },
          on: {
            click: function click($event) {
              return _vm.hideModal();
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-times-circle"
        }), _vm._v(" " + _vm._s(_vm.$t("Close")) + "\n    ")]), _vm._v(" "), _c("b-button", {
          staticClass: "float-right",
          attrs: {
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.submit();
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-save"
        }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n    ")])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", [_c("b-form-group", {
    attrs: {
      id: "service-name-label",
      "invalid-feedback": _vm.$t("Name is required"),
      label: _vm.$t("Name"),
      "label-for": "service-name",
      state: _vm.serviceNameState
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "Service-name",
      placeholder: _vm.$t("Name"),
      state: _vm.serviceNameState
    },
    model: {
      value: _vm.service.name,
      callback: function callback($$v) {
        _vm.$set(_vm.service, "name", $$v);
      },
      expression: "service.name"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      id: "service-description-label",
      label: _vm.$t("Description"),
      "label-for": "service-description"
    }
  }, [_c("b-form-textarea", {
    attrs: {
      id: "Service-description",
      placeholder: _vm.$t("Description"),
      rows: "2"
    },
    model: {
      value: _vm.service.description,
      callback: function callback($$v) {
        _vm.$set(_vm.service, "description", $$v);
      },
      expression: "service.description"
    }
  })], 1), _vm._v(" "), _vm.provider === "lightico" ? _c("div", [_c("lightico-credentials", {
    attrs: {
      "service-credentials": _vm.service.credentials,
      submitted: _vm.submitted
    },
    on: {
      retrieveData: _vm.getServiceData
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.provider === "adobeSign" ? _c("div", [_c("adobe-sign-credentials", {
    attrs: {
      "service-credentials": _vm.service.credentials,
      submitted: _vm.submitted
    },
    on: {
      retrieveData: _vm.getServiceData
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.provider === "docuSign" ? _c("div", [_c("docu-sign-credentials", {
    attrs: {
      "service-credentials": _vm.service.credentials,
      submitted: _vm.submitted
    },
    on: {
      retrieveData: _vm.getServiceData
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.provider === "helloSign" ? _c("div", [_c("hello-sign-credentials", {
    attrs: {
      "service-credentials": _vm.service.credentials,
      submitted: _vm.submitted
    },
    on: {
      retrieveData: _vm.getServiceData
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.provider === "imm" ? _c("div", [_c("imm-credentials", {
    attrs: {
      "service-credentials": _vm.service.credentials,
      submitted: _vm.submitted
    },
    on: {
      retrieveData: _vm.getServiceData
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      id: "service-status-label",
      label: _vm.$t("Status"),
      "label-for": "service-status"
    }
  }, [_c("b-form-checkbox", {
    attrs: {
      id: "service-status",
      "switch": "",
      value: _vm.$t("ACTIVE"),
      "unchecked-value": _vm.$t("INACTIVE")
    },
    model: {
      value: _vm.service.status,
      callback: function callback($$v) {
        _vm.$set(_vm.service, "status", $$v);
      },
      expression: "service.status"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("The service is "))), _c("strong", [_vm._v(_vm._s(_vm.$t(_vm.service.status)))])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneysTab.vue?vue&type=template&id=46fce031&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/journeys/JourneysTab.vue?vue&type=template&id=46fce031& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-card", {
    staticStyle: {
      "border-top": "solid 0px white !important",
      "margin-top": "-16px"
    }
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("div", {
    staticClass: "col-12 col-md-6 col-lg-10 mb-md-0 mb-3"
  }, [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Search")
    },
    model: {
      value: _vm.filter,
      callback: function callback($$v) {
        _vm.filter = $$v;
      },
      expression: "filter"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-lg-2"
  }, [_c("b-button", {
    attrs: {
      block: ""
    },
    on: {
      click: function click($event) {
        _vm.service = {
          id: 0
        };
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus"
  }), _vm._v(" " + _vm._s(_vm.$t("Service")) + "\n      ")])], 1)]), _vm._v(" "), _c("b-card-text", [_c("b-table", {
    ref: "services",
    staticClass: "bordered-table",
    attrs: {
      hover: "",
      responsive: "xl",
      "show-empty": "",
      "sort-by": "id",
      "sort-icon-left": "",
      "current-page": _vm.currentPage,
      items: _vm.fetch,
      fields: _vm.fields,
      filter: _vm.filter,
      "per-page": 10
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("h4", {
          staticClass: "text-center mt-5 my-2 mb-5"
        }, [_c("i", {
          staticClass: "fa fa-search"
        }), _vm._v(" No journeys registered yet\n        ")])];
      },
      proxy: true
    }, {
      key: "emptyfiltered",
      fn: function fn() {
        return [_c("h4", {
          staticClass: "text-center mt-5 my-2 mb-5"
        }, [_c("i", {
          staticClass: "fa fa-search"
        }), _vm._v(" No journeys matching your search\n        ")])];
      },
      proxy: true
    }, {
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center mt-5 my-2"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        }), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.$t("Loading")) + "...")])], 1)];
      },
      proxy: true
    }, {
      key: "cell(actions)",
      fn: function fn(data) {
        return [_c("div", {
          staticClass: "actions",
          staticStyle: {
            display: "flex",
            "align-items": "center"
          }
        }, [_c("div", {
          staticClass: "popout"
        }, [_c("b-btn", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            variant: "link",
            "data-action": "Edit",
            title: _vm.$t("Edit")
          },
          on: {
            click: function click($event) {
              return _vm.editService(data.item);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-pen-square fa-lg fa-fw"
        })]), _vm._v(" "), _c("b-btn", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            variant: "link",
            title: _vm.$t("Remove")
          },
          on: {
            click: function click($event) {
              return _vm.deleteService(data.item.id);
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-trash-alt fa-lg fa-fw"
        })])], 1)])];
      }
    }])
  }), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.meta.total > 0,
      expression: "meta.total > 0"
    }],
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-6 col-lg-4 offset-lg-4 order-md-6 mb-3"
  }, [_c("b-pagination", {
    staticClass: "pagination-items",
    attrs: {
      align: "fill",
      size: "sm",
      "total-rows": _vm.meta.total,
      "per-page": 10
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-6 col-lg-4 order-md-1 text-center text-md-left mb-3"
  }, [_vm._v("\n        " + _vm._s(1 + (_vm.meta.current_page - 1) * 10) + " -\n        " + _vm._s(_vm.meta.total > _vm.meta.current_page * 10 ? _vm.meta.current_page * 10 : _vm.meta.total) + "\n        " + _vm._s(_vm.$t("of")) + " " + _vm._s(_vm.meta.total) + " " + _vm._s(_vm.$t("Journeys")) + "\n      ")])])], 1), _vm._v(" "), _c("journey-modal", {
    attrs: {
      "service-item": _vm.service
    },
    on: {
      clearService: _vm.clearService,
      serviceSubmit: _vm.serviceSubmit
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/journeys/JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nth {\n  font-weight: 400 !important;\n}\n.bordered-table {\n  border: solid 1px rgba(0, 0, 0, 0.125) !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/journeys/JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/journeys/JourneyModal.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/journeys/JourneyModal.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JourneyModal_vue_vue_type_template_id_2b7d3d0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JourneyModal.vue?vue&type=template&id=2b7d3d0e& */ "./resources/js/components/journeys/JourneyModal.vue?vue&type=template&id=2b7d3d0e&");
/* harmony import */ var _JourneyModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JourneyModal.vue?vue&type=script&lang=js& */ "./resources/js/components/journeys/JourneyModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JourneyModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JourneyModal_vue_vue_type_template_id_2b7d3d0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JourneyModal_vue_vue_type_template_id_2b7d3d0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/journeys/JourneyModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/journeys/JourneyModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/journeys/JourneyModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneyModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./JourneyModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneyModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneyModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/journeys/JourneyModal.vue?vue&type=template&id=2b7d3d0e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/journeys/JourneyModal.vue?vue&type=template&id=2b7d3d0e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneyModal_vue_vue_type_template_id_2b7d3d0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./JourneyModal.vue?vue&type=template&id=2b7d3d0e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneyModal.vue?vue&type=template&id=2b7d3d0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneyModal_vue_vue_type_template_id_2b7d3d0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneyModal_vue_vue_type_template_id_2b7d3d0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/journeys/JourneysTab.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/journeys/JourneysTab.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JourneysTab_vue_vue_type_template_id_46fce031___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JourneysTab.vue?vue&type=template&id=46fce031& */ "./resources/js/components/journeys/JourneysTab.vue?vue&type=template&id=46fce031&");
/* harmony import */ var _JourneysTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JourneysTab.vue?vue&type=script&lang=js& */ "./resources/js/components/journeys/JourneysTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _JourneysTab_vue_vue_type_style_index_0_id_46fce031_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css& */ "./resources/js/components/journeys/JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _JourneysTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JourneysTab_vue_vue_type_template_id_46fce031___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JourneysTab_vue_vue_type_template_id_46fce031___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/journeys/JourneysTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/journeys/JourneysTab.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/journeys/JourneysTab.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneysTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./JourneysTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneysTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneysTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/journeys/JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/journeys/JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneysTab_vue_vue_type_style_index_0_id_46fce031_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneysTab.vue?vue&type=style&index=0&id=46fce031&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneysTab_vue_vue_type_style_index_0_id_46fce031_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneysTab_vue_vue_type_style_index_0_id_46fce031_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneysTab_vue_vue_type_style_index_0_id_46fce031_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneysTab_vue_vue_type_style_index_0_id_46fce031_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/journeys/JourneysTab.vue?vue&type=template&id=46fce031&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/journeys/JourneysTab.vue?vue&type=template&id=46fce031& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneysTab_vue_vue_type_template_id_46fce031___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./JourneysTab.vue?vue&type=template&id=46fce031& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/journeys/JourneysTab.vue?vue&type=template&id=46fce031&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneysTab_vue_vue_type_template_id_46fce031___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_JourneysTab_vue_vue_type_template_id_46fce031___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/package.js":
/*!*********************************!*\
  !*** ./resources/js/package.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_journeys_JourneysTab_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/journeys/JourneysTab.vue */ "./resources/js/components/journeys/JourneysTab.vue");

var app = new Vue({
  el: "#package-alloy",
  components: {
    JourneysTab: _components_journeys_JourneysTab_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./resources/js/package.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/processmaker/packages/package-alloy/resources/js/package.js */"./resources/js/package.js");


/***/ })

/******/ });