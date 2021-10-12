(function () {
  "use strict";

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcraftventure"] = self["webpackChunkcraftventure"] || []).push([["src_app_components_archivement_archivement_module_ts"], {
    /***/
    7111: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArchivementComponent": function ArchivementComponent() {
          return (
            /* binding */
            _ArchivementComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/popup-menu/popup-menu.component */
      64908);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_service_content_impl_archivement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/service/content/impl/archivement.service */
      83330);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/auth/auth.service */
      27878);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/content-header/content-header.component */
      3497);
      /* harmony import */


      var _shared_image_view_image_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/image-view/image-view.component */
      46877);
      /* harmony import */


      var _layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../layout/loading/loading.component */
      83332);

      function ArchivementComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div");
        }
      }

      function ArchivementComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-content-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-image-view", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-popup-menu");
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("content", ctx_r2.imageContent);
        }
      }

      function ArchivementComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading");
        }
      }

      var _ArchivementComponent = /*#__PURE__*/function () {
        function _ArchivementComponent(archivementService, router, authService, dialog) {
          _classCallCheck(this, _ArchivementComponent);

          this.archivementService = archivementService;
          this.router = router;
          this.authService = authService;
          this.dialog = dialog;
          this.imageContent = [];
        }

        _createClass(_ArchivementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var url = this.router.url;
            url = url.slice(6, url.length);
            this.loadPageContent(url.length > 0 ? url.split('/') : []);
          }
        }, {
          key: "loadPageContent",
          value: function loadPageContent(path) {
            var _this = this;

            if (path.length > 0) {
              this.archivementService.getIdForPath(path).subscribe(function (id) {
                if (id) {
                  _this.archivementService.getContent(id.id).subscribe(function (result) {
                    if (result) {
                      _this.loadContent(result.categorys, result.elements);
                    }
                  });
                }
              });
            } else {
              this.archivementService.getContent(undefined).subscribe(function (result) {
                if (result) {
                  _this.loadContent(result.categorys, result.elements);
                }
              });
            }
          }
        }, {
          key: "loadContent",
          value: function loadContent(categorys, items) {
            var _this2 = this;

            var imageContent = [];

            if (categorys) {
              var _iterator = _createForOfIteratorHelper(categorys),
                  _step;

              try {
                var _loop = function _loop() {
                  var category = _step.value;
                  imageContent.push({
                    front: {
                      id: category._id,
                      name: category.name,
                      image: category.image,
                      leftClick: function () {
                        return _this2.router.navigate(["".concat(_this2.router.url, "/").concat(category.name)]);
                      }.bind(_this2)
                    }
                  });
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            if (items) {
              var _iterator2 = _createForOfIteratorHelper(items),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var item = _step2.value;
                  imageContent.push({
                    front: {
                      id: item._id,
                      name: item.name,
                      image: item.image,
                      rightClick: this.openSettings.bind(this)
                    }
                  });
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            imageContent.push({
              front: {
                name: 'Create',
                image: 'https://cv.wuffy.eu/new/images/event.png',
                canView: this.authService.isInEditing.bind(this)
              }
            });
            this.imageContent = imageContent;
          }
        }, {
          key: "openSettings",
          value: function openSettings(event, content) {
            if (!this.authService.isInEditing()) {
              return false;
            }

            this.popupMenu.fields = [{
              name: 'Update'
              /*
              leftClick: ((event2) => this.openUpdateDialog(event2, content)).bind(this) */

            }, {
              name: 'Delete'
              /*
              leftClick: ((event2) => this.openDeleteDialog(event2, content)).bind(this) */

            }];
            this.popupMenu.openMenu(event);
            return true;
          }
        }]);

        return _ArchivementComponent;
      }();

      _ArchivementComponent.ɵfac = function ArchivementComponent_Factory(t) {
        return new (t || _ArchivementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_content_impl_archivement_service__WEBPACK_IMPORTED_MODULE_1__.ArchivementService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
      };

      _ArchivementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _ArchivementComponent,
        selectors: [["app-archivement"]],
        viewQuery: function ArchivementComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__.PopupMenuComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.popupMenu = _t.first);
          }
        },
        decls: 5,
        vars: 3,
        consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["loadedTemplate", ""], ["loadingTemplate", ""], ["title", "Archivements"], [3, "content"]],
        template: function ArchivementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ArchivementComponent_div_0_Template, 1, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ArchivementComponent_ng_template_1_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ArchivementComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imageContent)("ngIfThen", _r1)("ngIfElse", _r3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_3__.ContentHeaderComponent, _shared_image_view_image_view_component__WEBPACK_IMPORTED_MODULE_4__.ImageViewComponent, src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__.PopupMenuComponent, _layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNoaXZlbWVudC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    93509: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArchivementModule": function ArchivementModule() {
          return (
            /* binding */
            _ArchivementModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../layout/loading/loading.module */
      12389);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _archivement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./archivement.component */
      7111);
      /* harmony import */


      var src_app_shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/dialog-form/dialog-form.module */
      33054);
      /* harmony import */


      var src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/image-view/image-view.module */
      91122);
      /* harmony import */


      var src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/content-header/content-header.module */
      63257);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/popup-menu/popup-menu.module */
      89562);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ArchivementModule = function _ArchivementModule() {
        _classCallCheck(this, _ArchivementModule);
      };

      _ArchivementModule.ɵfac = function ArchivementModule_Factory(t) {
        return new (t || _ArchivementModule)();
      };

      _ArchivementModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _ArchivementModule
      });
      _ArchivementModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, src_app_shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_2__.DialogFormModule, _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_0__.LoadingModule, src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__.ImageViewModule, src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule, src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__.PopupMenuModule, _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_0__.LoadingModule, src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__.ImageViewModule, src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule, src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__.PopupMenuModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{
          path: '',
          component: _archivement_component__WEBPACK_IMPORTED_MODULE_1__.ArchivementComponent
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_ArchivementModule, {
          declarations: [_archivement_component__WEBPACK_IMPORTED_MODULE_1__.ArchivementComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, src_app_shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_2__.DialogFormModule, _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_0__.LoadingModule, src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__.ImageViewModule, src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule, src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__.PopupMenuModule, _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_0__.LoadingModule, src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__.ImageViewModule, src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule, src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__.PopupMenuModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    83330: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArchivementService": function ArchivementService() {
          return (
            /* binding */
            _ArchivementService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../api/api.service */
      14535);
      /* harmony import */


      var _content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../content.service */
      16787);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ArchivementService = /*#__PURE__*/function (_content_service__WEB) {
        _inherits(_ArchivementService, _content_service__WEB);

        var _super = _createSuper(_ArchivementService);

        function _ArchivementService() {
          _classCallCheck(this, _ArchivementService);

          return _super.apply(this, arguments);
        }

        _createClass(_ArchivementService, [{
          key: "_getIdForPath",
          value: function _getIdForPath(path) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ArchivementService.ROUTE_ELEMENT, "/path"), {
              path: path
            });
          }
        }, {
          key: "_getCategorys",
          value: function _getCategorys(options) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ArchivementService.ROUTE_CATEGORY), options);
          }
        }, {
          key: "_getElements",
          value: function _getElements(options) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ArchivementService.ROUTE_ELEMENT), options);
          }
        }, {
          key: "_createCategory",
          value: function _createCategory(parentId, category) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ArchivementService.ROUTE_CATEGORY, "/create"), Object.assign(Object.assign({}, category), {
              _parentId: parentId
            }));
          }
        }, {
          key: "_createElement",
          value: function _createElement(categoryId, element) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ArchivementService.ROUTE_ELEMENT, "/create"), Object.assign(Object.assign({}, element), {
              _categoryId: categoryId
            }));
          }
        }, {
          key: "_updateCategory",
          value: function _updateCategory(categoryId, category) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ArchivementService.ROUTE_CATEGORY, "/update"), Object.assign(Object.assign({}, category), {
              _id: categoryId
            }));
          }
        }, {
          key: "_updateElement",
          value: function _updateElement(elementId, element) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ArchivementService.ROUTE_ELEMENT, "/update"), Object.assign(Object.assign({}, element), {
              _id: elementId
            }));
          }
        }, {
          key: "_deleteCategory",
          value: function _deleteCategory(categoryId) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ArchivementService.ROUTE_CATEGORY, "/delete"), {
              _id: categoryId
            });
          }
        }, {
          key: "_deleteElement",
          value: function _deleteElement(elementId) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ArchivementService.ROUTE_ELEMENT, "/delete"), {
              _id: elementId
            });
          }
        }]);

        return _ArchivementService;
      }(_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService);

      _ArchivementService.ROUTE_ELEMENT = "archivement";
      _ArchivementService.ROUTE_CATEGORY = "archivement/category";

      _ArchivementService.ɵfac = /*@__PURE__*/function () {
        var ɵArchivementService_BaseFactory;
        return function ArchivementService_Factory(t) {
          return (ɵArchivementService_BaseFactory || (ɵArchivementService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_ArchivementService)))(t || _ArchivementService);
        };
      }();

      _ArchivementService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ArchivementService,
        factory: _ArchivementService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_archivement_archivement_module_ts-es5.js.map