(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcraftventure"] = self["webpackChunkcraftventure"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _shell_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shell/layout/layout.component */
      21877);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _shell_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_image-view_image-view_module_ts"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./dashboard/dashboard.module */
            34814)).then(function (child) {
              return child.DashboardModule;
            });
          }
        }, {
          path: 'event',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_components_event_event-routing_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./components/event/event-routing.module */
            66638)).then(function (child) {
              return child.EventRoutingModule;
            });
          }
        }, {
          path: 'archivement',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_components_archivement_archivement-routing_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./components/archivement/archivement-routing.module */
            23396)).then(function (child) {
              return child.ArchivementRoutingModule;
            });
          }
        }, {
          path: 'item',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_shared_image-view_image-view_module_ts"), __webpack_require__.e("default-src_app_service_content_content_service_ts-src_app_shared_content-header_content-head-345d97"), __webpack_require__.e("src_app_item_item_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ./item/item.module */
            4672)).then(function (child) {
              return child.ItemModule;
            });
          }
        }, {
          path: 'login',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_components_login_login-routing_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./components/login/login-routing.module */
            39096)).then(function (child) {
              return child.LoginRoutingModule;
            });
          }
        }]
      }, {
        path: '**',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_components_page-not-found_page-not-found_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./components/page-not-found/page-not-found.module */
          95697)).then(function (child) {
            return child.PageNotFoundModule;
          });
        }
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _service_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./service/theme.service */
      32283);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(router, themeService) {
          _classCallCheck(this, _AppComponent);

          this.router = router;
          this.themeService = themeService;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
              gtag('set', 'page', event.urlAfterRedirects);
              gtag('send', 'pageview');
            }
          });
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.themeService.loadStyle();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["[_nghost-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    background: #3a3d46;\r\n    color: #fff;\r\n    font-family: \"Roboto\", sans-serif;\r\n    overflow-y: scroll !important;\r\n    overflow-x: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzNhM2Q0NjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _service_httprequest_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service/httprequest.interceptor */
      47586);
      /* harmony import */


      var _shell_shell_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shell/shell.module */
      75506);
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-markdown */
      36731);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
          useClass: _service_httprequest_interceptor__WEBPACK_IMPORTED_MODULE_2__.HttpRequestInterceptor,
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _shell_shell_module__WEBPACK_IMPORTED_MODULE_3__.ShellModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule.forRoot({
          loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _shell_shell_module__WEBPACK_IMPORTED_MODULE_3__.ShellModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_9__.MarkdownModule]
        });
      })();
      /***/

    },

    /***/
    14535: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ApiService = function _ApiService() {
        _classCallCheck(this, _ApiService);
      };

      _ApiService.DOMAIN = 'https://api.cv.wuffy.eu';
      _ApiService.postAccountLogout = "".concat(_ApiService.DOMAIN, "/account/logout");
      _ApiService.postAccountLogoutCheck = "".concat(_ApiService.DOMAIN, "/account/logout/check");
      _ApiService.postAccountLogin = "".concat(_ApiService.DOMAIN, "/account/login");
      _ApiService.postAccountCreate = "".concat(_ApiService.DOMAIN, "/account/create");
      _ApiService.postAccountUpdate = "".concat(_ApiService.DOMAIN, "/account/update");
      _ApiService.postAccountPassword = "".concat(_ApiService.DOMAIN, "/account/update/password");
      _ApiService.postAccountDelete = "".concat(_ApiService.DOMAIN, "/account/delete");
      _ApiService.postSettingEvent = "".concat(_ApiService.DOMAIN, "/setting/event");
      _ApiService.postSettingEventUpdate = "".concat(_ApiService.DOMAIN, "/setting/event/update");
      _ApiService.postSettingEventDelete = "".concat(_ApiService.DOMAIN, "/setting/event/delete");

      _ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || _ApiService)();
      };

      _ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ApiService,
        factory: _ApiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    27878: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../api/api.service */
      14535);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(httpClient, applicationRef) {
          var _this = this;

          _classCallCheck(this, _AuthService);

          this.httpClient = httpClient;
          this.applicationRef = applicationRef;
          this.httpClient.post(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.postAccountLogoutCheck, {}).subscribe(function (response) {
            _this.setLoggedIn(response.loggedin);
          });
          var editing = localStorage.getItem('editing');
          this.setEditing(editing && editing == 'true' ? true : false);
        }

        _createClass(_AuthService, [{
          key: "setEditing",
          value: function setEditing(editing) {
            localStorage.setItem('editing', "".concat(editing));

            _AuthService.setEditing(editing);

            this.applicationRef.tick();
          }
        }, {
          key: "isInEditing",
          value: function isInEditing() {
            return _AuthService.isLoggedIn() && _AuthService.isInEditing();
          }
        }, {
          key: "setLoggedIn",
          value: function setLoggedIn(loggedin) {
            _AuthService.setLoggedIn(loggedin);

            this.applicationRef.tick();
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return _AuthService.isLoggedIn();
          }
        }, {
          key: "login",
          value: function login(email, password, done) {
            var _this2 = this;

            this.httpClient.post(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.postAccountLogin, {
              email: email,
              password: password
            }).subscribe(function (response) {
              _this2.setLoggedIn(response.loggedin);

              done(response);
            });
          }
        }, {
          key: "create",
          value: function create(name, email, password, confirmPassword, done) {
            var _this3 = this;

            this.httpClient.post(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.postAccountCreate, {
              name: name,
              email: email,
              password: password,
              confirmPassword: confirmPassword
            }).subscribe(function (response) {
              _this3.setLoggedIn(response.loggedin);

              done(response);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.httpClient.post(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.postAccountLogout, {}).subscribe();
            this.setLoggedIn(false);
          }
        }], [{
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return _AuthService.loggedin;
          }
        }, {
          key: "setLoggedIn",
          value: function setLoggedIn(loggedin) {
            _AuthService.loggedin = loggedin;
          }
        }, {
          key: "isInEditing",
          value: function isInEditing() {
            return _AuthService.isEditing;
          }
        }, {
          key: "setEditing",
          value: function setEditing(editing) {
            _AuthService.isEditing = editing;
          }
        }]);

        return _AuthService;
      }();

      _AuthService.loggedin = false;
      _AuthService.isEditing = false;

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    47586: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpRequestInterceptor": function HttpRequestInterceptor() {
          return (
            /* binding */
            _HttpRequestInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HttpRequestInterceptor = /*#__PURE__*/function () {
        function _HttpRequestInterceptor() {
          _classCallCheck(this, _HttpRequestInterceptor);
        }

        _createClass(_HttpRequestInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var req = request.clone({
              withCredentials: true
            });
            return next.handle(req);
          }
        }]);

        return _HttpRequestInterceptor;
      }();

      _HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) {
        return new (t || _HttpRequestInterceptor)();
      };

      _HttpRequestInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _HttpRequestInterceptor,
        factory: _HttpRequestInterceptor.ɵfac
      });
      /***/
    },

    /***/
    32701: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuIndexs": function MenuIndexs() {
          return (
            /* binding */
            _MenuIndexs
          );
        },

        /* harmony export */
        "MenuService": function MenuService() {
          return (
            /* binding */
            _MenuService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MenuIndexs;

      (function (MenuIndexs) {
        MenuIndexs[MenuIndexs["ITEMS"] = 0] = "ITEMS";
        MenuIndexs[MenuIndexs["EVENTS"] = 1] = "EVENTS";
        MenuIndexs[MenuIndexs["ARCHIVEMENTS"] = 2] = "ARCHIVEMENTS";
        MenuIndexs[MenuIndexs["THEME"] = 3] = "THEME";
        MenuIndexs[MenuIndexs["SETTINGS"] = 4] = "SETTINGS";
      })(_MenuIndexs || (_MenuIndexs = {}));

      var _MenuService = /*#__PURE__*/function () {
        function _MenuService() {
          _classCallCheck(this, _MenuService);

          this.menus = [];
        }

        _createClass(_MenuService, [{
          key: "setMenu",
          value: function setMenu(menuIndex, options) {
            if (!options.elements) {
              options.elements = [];
            }

            this.menus[menuIndex != undefined ? menuIndex : this.menus.length] = options;
          }
        }, {
          key: "addElement",
          value: function addElement(menuIndex, options, elementIndex) {
            var index = menuIndex != undefined ? menuIndex : this.menus.length;
            var menu = this.menus[index];

            if (menu) {
              var elements = menu.elements;
              elements[elementIndex != undefined ? elementIndex : elements.length] = options;
            }
          }
        }, {
          key: "getMenu",
          value: function getMenu(menuIndex) {
            return this.menus[menuIndex];
          }
        }]);

        return _MenuService;
      }();

      _MenuService.ɵfac = function MenuService_Factory(t) {
        return new (t || _MenuService)();
      };

      _MenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _MenuService,
        factory: _MenuService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    32283: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "themes": function themes() {
          return (
            /* binding */
            _themes
          );
        },

        /* harmony export */
        "ThemeService": function ThemeService() {
          return (
            /* binding */
            _ThemeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _themes = [{
        name: 'Dark',
        className: 'dark-theme'
      }, {
        name: 'Blue',
        className: 'blue-theme'
      }, {
        name: 'Candy',
        className: 'candy-theme'
      }, {
        name: 'CV',
        className: 'cv-theme'
      }];

      var _ThemeService = /*#__PURE__*/function () {
        function _ThemeService() {
          _classCallCheck(this, _ThemeService);

          this.defaultTheme = _themes[3];
          this.theme = this.defaultTheme;
          this.background = true;
        }

        _createClass(_ThemeService, [{
          key: "updateTheme",
          value: function updateTheme(theme) {
            document.body.classList.value = "".concat(this.background ? 'mat-app-background' : '', " ").concat(theme.className);
          }
        }, {
          key: "loadStyle",
          value: function loadStyle() {
            this.setCurrentTheme(this.getThemeByClassName(window.localStorage.getItem('theme-name')));
            var background = localStorage.getItem('theme-background');
            this.setMatBackground(background && background == 'false' ? false : true);
          }
        }, {
          key: "toggleMatBackground",
          value: function toggleMatBackground() {
            this.setMatBackground(!this.matBackground);
          }
        }, {
          key: "currentTheme",
          get: function get() {
            return this.theme;
          }
        }, {
          key: "setCurrentTheme",
          value: function setCurrentTheme(theme) {
            this.theme = theme;
            this.updateTheme(this.theme);
            window.localStorage.setItem('theme-name', this.theme.className);
          }
        }, {
          key: "matBackground",
          get: function get() {
            return this.background;
          }
        }, {
          key: "setMatBackground",
          value: function setMatBackground(background) {
            this.background = background;
            this.updateTheme(this.theme);
            window.localStorage.setItem('theme-background', "".concat(this.background));
          }
        }, {
          key: "getThemeByClassName",
          value: function getThemeByClassName(className) {
            if (!className) {
              return this.defaultTheme;
            }

            className = className.toLowerCase();

            var _iterator = _createForOfIteratorHelper(_themes),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var theme = _step.value;

                if (theme.className.toLowerCase() === className) {
                  return theme;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return this.defaultTheme;
          }
        }, {
          key: "getThemeByName",
          value: function getThemeByName(name) {
            if (!name) {
              return this.defaultTheme;
            }

            name = name.toLowerCase();

            var _iterator2 = _createForOfIteratorHelper(_themes),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var theme = _step2.value;

                if (theme.name.toLowerCase() === name) {
                  return theme;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return this.defaultTheme;
          }
        }]);

        return _ThemeService;
      }();

      _ThemeService.ɵfac = function ThemeService_Factory(t) {
        return new (t || _ThemeService)();
      };

      _ThemeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ThemeService,
        factory: _ThemeService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    17542: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 14,
        vars: 0,
        consts: [[1, "footer"], [1, "element", "creator"], [1, "material-icons", "love"], [1, "element", "craftventure"], ["href", "https://CraftVenture.net"], ["src", "https://cdn.discordapp.com/icons/134010176633176064/b35752275dfa605906a1680bc51fffd6.webp", "alt", "CraftVenture Logo"], [1, "element", "imprint"], ["href", "https://wuffy.eu/impressum.html"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " by NgLoader & Dragon0697 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CraftVenture");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Imprint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar],
        styles: [".footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-size: 12px;\r\n  \r\n}\r\n\r\n.element[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex: 1;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\r\n\r\n.element[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.creator[_ngcontent-%COMP%] {\r\n  justify-content: flex-start;\r\n}\r\n\r\n.creator[_ngcontent-%COMP%]   .love[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  align-self: center;\r\n  padding: 2px;\r\n}\r\n\r\n.craftventure[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.craftventure[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n  margin: 10px;\r\n}\r\n\r\n.craftventure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.imprint[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n  text-align: end;\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n  .footer[_ngcontent-%COMP%] {\r\n    height: 168px;\r\n    flex-direction: column;\r\n  }\r\n  .element[_ngcontent-%COMP%] {\r\n    align-items: center !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICAvKm1hcmdpbi10b3A6IDEwcHg7Ki9cclxufVxyXG5cclxuLmVsZW1lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbGVtZW50ID4gKiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNyZWF0b3Ige1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNyZWF0b3IgLmxvdmUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uY3JhZnR2ZW50dXJlID4gKiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNyYWZ0dmVudHVyZSBoMSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNyYWZ0dmVudHVyZSBpbWcge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmltcHJpbnQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gIC5mb290ZXIge1xyXG4gICAgaGVpZ2h0OiAxNjhweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5lbGVtZW50IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    63112: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DialogThemeSelectComponent": function DialogThemeSelectComponent() {
          return (
            /* binding */
            _DialogThemeSelectComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_service_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/service/theme.service */
      32283);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function DialogThemeSelectComponent_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var theme_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", theme_r1.className);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](theme_r1.name);
        }
      }

      var _DialogThemeSelectComponent = /*#__PURE__*/function () {
        function _DialogThemeSelectComponent(dialogRef) {
          _classCallCheck(this, _DialogThemeSelectComponent);

          this.dialogRef = dialogRef;
          this.themes = src_app_service_theme_service__WEBPACK_IMPORTED_MODULE_0__.themes;
        }

        _createClass(_DialogThemeSelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selected = this.themeService.currentTheme.className;
            this.rollbackTheme = this.themeService.currentTheme;
            this.rollbackBackground = this.themeService.matBackground;
          }
        }, {
          key: "onSelectionChanged",
          value: function onSelectionChanged(event) {
            this.themeService.setCurrentTheme(this.themeService.getThemeByClassName(event.value));
          }
        }, {
          key: "onBackgroundChanged",
          value: function onBackgroundChanged(event) {
            this.themeService.setMatBackground(event.checked);
          }
        }, {
          key: "onCloseClick",
          value: function onCloseClick() {
            this.dialogRef.close();
            this.themeService.setCurrentTheme(this.rollbackTheme);
            this.themeService.setMatBackground(this.rollbackBackground);
          }
        }, {
          key: "onApplyClick",
          value: function onApplyClick() {
            this.dialogRef.close();
          }
        }]);

        return _DialogThemeSelectComponent;
      }();

      _DialogThemeSelectComponent.ɵfac = function DialogThemeSelectComponent_Factory(t) {
        return new (t || _DialogThemeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
      };

      _DialogThemeSelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _DialogThemeSelectComponent,
        selectors: [["app-dialog-theme-select"]],
        inputs: {
          themeService: "themeService"
        },
        decls: 15,
        vars: 3,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "theme-select"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "checked", "change"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], [3, "value"]],
        template: function DialogThemeSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "W\xE4hle ein design aus");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Desing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function DialogThemeSelectComponent_Template_mat_select_valueChange_6_listener($event) {
              return ctx.selected = $event;
            })("selectionChange", function DialogThemeSelectComponent_Template_mat_select_selectionChange_6_listener($event) {
              return ctx.onSelectionChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DialogThemeSelectComponent_mat_option_7_Template, 2, 2, "mat-option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-checkbox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DialogThemeSelectComponent_Template_mat_checkbox_change_8_listener($event) {
              return ctx.onBackgroundChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Background");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogThemeSelectComponent_Template_button_click_11_listener() {
              return ctx.onCloseClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Abbruch");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogThemeSelectComponent_Template_button_click_13_listener() {
              return ctx.onApplyClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xDCbernehmen");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.themes);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.themeService.matBackground);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption],
        styles: [".theme-select[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy10aGVtZS1zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJkaWFsb2ctdGhlbWUtc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWUtc2VsZWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    45213: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _service_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../service/menu/menu.service */
      32701);
      /* harmony import */


      var _dialog_theme_select_dialog_theme_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dialog-theme-select/dialog-theme-select.component */
      63112);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/auth/auth.service */
      27878);
      /* harmony import */


      var src_app_service_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/theme.service */
      32283);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      68456);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);

      function HeaderComponent_div_5_div_1_div_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](menu_r1["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", menu_r1.routerLink)("matTooltip", menu_r1.tooltip);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menu_r1.name);
        }
      }

      function HeaderComponent_div_5_div_1_div_1_button_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menu_r1.name);
        }
      }

      function HeaderComponent_div_5_div_1_div_1_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HeaderComponent_div_5_div_1_div_1_button_2_span_3_Template, 2, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](menu_r1["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", menu_r1.routerLink)("matTooltip", menu_r1.tooltip);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menu_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r1.name != undefined);
        }
      }

      function HeaderComponent_div_5_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_div_5_div_1_div_1_button_1_Template, 3, 5, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderComponent_div_5_div_1_div_1_button_2_Template, 4, 6, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r1.icon == undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r1.icon != undefined);
        }
      }

      function HeaderComponent_div_5_div_1_div_2_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](menu_r1["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r14)("matTooltip", menu_r1.tooltip);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menu_r1.name);
        }
      }

      function HeaderComponent_div_5_div_1_div_2_button_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menu_r1.name);
        }
      }

      function HeaderComponent_div_5_div_1_div_2_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HeaderComponent_div_5_div_1_div_2_button_2_span_3_Template, 2, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](menu_r1["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r14)("matTooltip", menu_r1.tooltip);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menu_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r1.name != undefined);
        }
      }

      function HeaderComponent_div_5_div_1_div_2_div_5_button_1_mat_icon_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r20.name);
        }
      }

      function HeaderComponent_div_5_div_1_div_2_div_5_button_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HeaderComponent_div_5_div_1_div_2_div_5_button_1_mat_icon_1_span_3_Template, 2, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r20.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r20.name != undefined);
        }
      }

      function HeaderComponent_div_5_div_1_div_2_div_5_button_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r20.name);
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var _c1 = function _c1() {
        return [];
      };

      function HeaderComponent_div_5_div_1_div_2_div_5_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_div_5_div_1_div_2_div_5_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);

            var element_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

            return element_r20.click != undefined && element_r20.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_div_5_div_1_div_2_div_5_button_1_mat_icon_1_Template, 4, 2, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderComponent_div_5_div_1_div_2_div_5_button_1_div_2_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](menu_r1["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", element_r20.tooltip)("routerLink", element_r20.routerLink != undefined ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, element_r20.routerLink) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r20.icon != undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r20.icon == undefined);
        }
      }

      function HeaderComponent_div_5_div_1_div_2_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_div_5_div_1_div_2_div_5_button_1_Template, 3, 9, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r20 && !(element_r20.hidden && element_r20.hidden()));
        }
      }

      function HeaderComponent_div_5_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_div_5_div_1_div_2_button_1_Template, 3, 5, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderComponent_div_5_div_1_div_2_button_2_Template, 4, 6, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-menu", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HeaderComponent_div_5_div_1_div_2_div_5_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r1.icon == undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r1.icon != undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menu_r1.elements);
        }
      }

      function HeaderComponent_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_div_5_div_1_div_1_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderComponent_div_5_div_1_div_2_Template, 6, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r1.routerLink != undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r1.routerLink == undefined);
        }
      }

      function HeaderComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_div_5_div_1_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menu_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menu_r1 && !(menu_r1.hidden && menu_r1.hidden()));
        }
      }

      var _HeaderComponent = function _HeaderComponent(authService, menuService, themeService, snackbar, dialog) {
        var _this4 = this;

        _classCallCheck(this, _HeaderComponent);

        this.authService = authService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.title = "Craftventure";
        this.menuService.setMenu(_service_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuIndexs.ITEMS, {
          name: 'Items',
          routerLink: "/item"
        });
        this.menuService.setMenu(_service_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuIndexs.EVENTS, {
          name: 'Events',
          routerLink: "/event"
        });
        this.menuService.setMenu(_service_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuIndexs.ARCHIVEMENTS, {
          name: 'Archivements',
          routerLink: "/archivement"
        });
        this.menuService.setMenu(_service_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuIndexs.SETTINGS, {
          name: undefined,
          icon: 'settings',
          "class": 'rotateIcon'
        });
        this.menuService.addElement(_service_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuIndexs.SETTINGS, {
          name: 'Theme',
          click: function () {
            var dialogTheme = _this4.dialog.open(_dialog_theme_select_dialog_theme_select_component__WEBPACK_IMPORTED_MODULE_1__.DialogThemeSelectComponent);

            dialogTheme.componentInstance.themeService = _this4.themeService;
          }.bind(this)
        });
        this.menuService.addElement(_service_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuIndexs.SETTINGS, {
          name: 'Toggle Editor',
          click: function () {
            _this4.authService.setEditing(!_this4.authService.isInEditing());

            _this4.snackbar.open("Editormode ".concat(_this4.authService.isInEditing() ? 'on' : 'off'), 'Close', {
              duration: 5000
            });
          }.bind(this),
          hidden: function hidden() {
            return !_this4.authService.isLoggedIn();
          }
        });
        this.menuService.addElement(_service_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuIndexs.SETTINGS, {
          name: 'Admin',
          routerLink: '/admin',
          hidden: function hidden() {
            return !_this4.authService.isLoggedIn();
          }
        });
        this.menuService.addElement(_service_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuIndexs.SETTINGS, {
          name: 'Logout',
          click: function () {
            _this4.authService.logout();
          }.bind(this),
          hidden: function hidden() {
            return !_this4.authService.isLoggedIn();
          }
        });
        this.menuService.addElement(_service_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuIndexs.SETTINGS, {
          name: 'Login',
          routerLink: '/login',
          hidden: function hidden() {
            return _this4.authService.isLoggedIn();
          }
        });
      };

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_menu_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        decls: 6,
        vars: 2,
        consts: [["color", "primary", 1, "header"], ["routerLink", "/", 1, "title"], [1, "spacer"], [1, "menu"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-raised-button", "", "color", "second", "matTooltipPosition", "below", 3, "routerLink", "matTooltip", "class", 4, "ngIf"], ["mat-icon-button", "", "color", "second", "matTooltipPosition", "below", 3, "routerLink", "matTooltip", "class", 4, "ngIf"], ["mat-raised-button", "", "color", "second", "matTooltipPosition", "below", 3, "routerLink", "matTooltip"], ["mat-icon-button", "", "color", "second", "matTooltipPosition", "below", 3, "routerLink", "matTooltip"], ["mat-raised-button", "", "color", "second", "matTooltipPosition", "below", 3, "matMenuTriggerFor", "matTooltip", "class", 4, "ngIf"], ["mat-icon-button", "", "color", "second", "matTooltipPosition", "below", 3, "matMenuTriggerFor", "matTooltip", "class", 4, "ngIf"], ["menuEvent", "matMenu"], ["mat-raised-button", "", "color", "second", "matTooltipPosition", "below", 3, "matMenuTriggerFor", "matTooltip"], ["mat-icon-button", "", "color", "second", "matTooltipPosition", "below", 3, "matMenuTriggerFor", "matTooltip"], ["mat-menu-item", "", "matTooltipPosition", "below", 3, "matTooltip", "routerLink", "class", "click", 4, "ngIf"], ["mat-menu-item", "", "matTooltipPosition", "below", 3, "matTooltip", "routerLink", "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuService.menus);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem],
        styles: [".header[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  position: sticky;\r\n  height: 56px;\r\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),\r\n    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n\r\nmat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n}\r\n\r\nmat-toolbar-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], mat-icon[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  padding: 12px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n}\r\n\r\n.rotateIcon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover {\r\n  transform: rotate(180deg);\r\n  transition: 0.5s;\r\n}\r\n\r\n.rotateIcon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n  transition: 0.5s;\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n  mat-toolbar[_ngcontent-%COMP%] {\r\n    height: 112px;\r\n\tflex-direction: column;\r\n  }\r\n  .spacer[_ngcontent-%COMP%] {\r\n\t  display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1o7c0VBQ29FO0FBQ3RFOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7Q0FDaEIsc0JBQXNCO0VBQ3JCO0VBQ0E7R0FDQyxhQUFhO0VBQ2Q7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyLXJvdyBzcGFuLFxyXG5tYXQtaWNvbiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lbnUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnJvdGF0ZUljb24gbWF0LWljb246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLnJvdGF0ZUljb24gbWF0LWljb24ge1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgbWF0LXRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiAxMTJweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuc3BhY2VyIHtcclxuXHQgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    21877: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutComponent": function LayoutComponent() {
          return (
            /* binding */
            _LayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../header/header.component */
      45213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../footer/footer.component */
      17542);

      var _LayoutComponent = /*#__PURE__*/function () {
        function _LayoutComponent() {
          _classCallCheck(this, _LayoutComponent);
        }

        _createClass(_LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _LayoutComponent;
      }();

      _LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
        return new (t || _LayoutComponent)();
      };

      _LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LayoutComponent,
        selectors: [["app-layout"]],
        decls: 4,
        vars: 0,
        consts: [[1, "spacer"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: ["[_nghost-%COMP%] {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxPQUFPO0FBQ1giLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    75506: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShellModule": function ShellModule() {
          return (
            /* binding */
            _ShellModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout/layout.component */
      21877);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      32080);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      68456);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      45213);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer/footer.component */
      17542);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _header_dialog_theme_select_dialog_theme_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header/dialog-theme-select/dialog-theme-select.component */
      63112);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ShellModule = function _ShellModule() {
        _classCallCheck(this, _ShellModule);
      };

      _ShellModule.ɵfac = function ShellModule_Factory(t) {
        return new (t || _ShellModule)();
      };

      _ShellModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _ShellModule
      });
      _ShellModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggleModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_ShellModule, {
          declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _header_dialog_theme_select_dialog_theme_select_component__WEBPACK_IMPORTED_MODULE_3__.DialogThemeSelectComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggleModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule],
          exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent]
        });
      })();
      /***/

    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map