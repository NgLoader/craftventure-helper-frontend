(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcraftventure"] = self["webpackChunkcraftventure"] || []).push([["src_app_item_item_module_ts"], {
    /***/
    43285: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CdkStep": function CdkStep() {
          return (
            /* binding */
            _CdkStep
          );
        },

        /* harmony export */
        "CdkStepHeader": function CdkStepHeader() {
          return (
            /* binding */
            _CdkStepHeader
          );
        },

        /* harmony export */
        "CdkStepLabel": function CdkStepLabel() {
          return (
            /* binding */
            _CdkStepLabel
          );
        },

        /* harmony export */
        "CdkStepper": function CdkStepper() {
          return (
            /* binding */
            _CdkStepper
          );
        },

        /* harmony export */
        "CdkStepperModule": function CdkStepperModule() {
          return (
            /* binding */
            _CdkStepperModule
          );
        },

        /* harmony export */
        "CdkStepperNext": function CdkStepperNext() {
          return (
            /* binding */
            _CdkStepperNext
          );
        },

        /* harmony export */
        "CdkStepperPrevious": function CdkStepperPrevious() {
          return (
            /* binding */
            _CdkStepperPrevious
          );
        },

        /* harmony export */
        "STEPPER_GLOBAL_OPTIONS": function STEPPER_GLOBAL_OPTIONS() {
          return (
            /* binding */
            _STEPPER_GLOBAL_OPTIONS
          );
        },

        /* harmony export */
        "STEP_STATE": function STEP_STATE() {
          return (
            /* binding */
            _STEP_STATE
          );
        },

        /* harmony export */
        "StepperSelectionEvent": function StepperSelectionEvent() {
          return (
            /* binding */
            _StepperSelectionEvent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      51606);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      772);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      90084);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      1143);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      22663);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function CdkStep_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      }

      var _c0 = ["*"];

      var _CdkStepHeader = /*#__PURE__*/function () {
        function _CdkStepHeader(_elementRef) {
          _classCallCheck(this, _CdkStepHeader);

          this._elementRef = _elementRef;
        }
        /** Focuses the step header. */


        _createClass(_CdkStepHeader, [{
          key: "focus",
          value: function focus() {
            this._elementRef.nativeElement.focus();
          }
        }]);

        return _CdkStepHeader;
      }();

      _CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) {
        return new (t || _CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _CdkStepHeader.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkStepHeader,
        selectors: [["", "cdkStepHeader", ""]],
        hostAttrs: ["role", "tab"]
      });

      _CdkStepHeader.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkStepHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkStepHeader]',
            host: {
              'role': 'tab'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _CdkStepLabel = function _CdkStepLabel(
      /** @docs-private */
      template) {
        _classCallCheck(this, _CdkStepLabel);

        this.template = template;
      };

      _CdkStepLabel.ɵfac = function CdkStepLabel_Factory(t) {
        return new (t || _CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _CdkStepLabel.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkStepLabel,
        selectors: [["", "cdkStepLabel", ""]]
      });

      _CdkStepLabel.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkStepLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkStepLabel]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Used to generate unique ID for each stepper component. */


      var nextId = 0;
      /** Change event emitted on selection changes. */

      var _StepperSelectionEvent = function _StepperSelectionEvent() {
        _classCallCheck(this, _StepperSelectionEvent);
      };
      /** Enum to represent the different states of the steps. */


      var _STEP_STATE = {
        NUMBER: 'number',
        EDIT: 'edit',
        DONE: 'done',
        ERROR: 'error'
      };
      /** InjectionToken that can be used to specify the global stepper options. */

      var _STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('STEPPER_GLOBAL_OPTIONS');

      var _CdkStep = /*#__PURE__*/function () {
        function _CdkStep(_stepper, stepperOptions) {
          _classCallCheck(this, _CdkStep);

          this._stepper = _stepper;
          /** Whether user has attempted to move away from the step. */

          this.interacted = false;
          /** Emits when the user has attempted to move away from the step. */

          this.interactedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this._editable = true;
          this._optional = false;
          this._completedOverride = null;
          this._customError = null;
          this._stepperOptions = stepperOptions ? stepperOptions : {};
          this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
          this._showError = !!this._stepperOptions.showError;
        }
        /** Whether the user can return to this step once it has been marked as completed. */


        _createClass(_CdkStep, [{
          key: "editable",
          get: function get() {
            return this._editable;
          },
          set: function set(value) {
            this._editable = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
          }
          /** Whether the completion of step is optional. */

        }, {
          key: "optional",
          get: function get() {
            return this._optional;
          },
          set: function set(value) {
            this._optional = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
          }
          /** Whether step is marked as completed. */

        }, {
          key: "completed",
          get: function get() {
            return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
          },
          set: function set(value) {
            this._completedOverride = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
          }
        }, {
          key: "_getDefaultCompleted",
          value: function _getDefaultCompleted() {
            return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
          }
          /** Whether step has an error. */

        }, {
          key: "hasError",
          get: function get() {
            return this._customError == null ? this._getDefaultError() : this._customError;
          },
          set: function set(value) {
            this._customError = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
          }
        }, {
          key: "_getDefaultError",
          value: function _getDefaultError() {
            return this.stepControl && this.stepControl.invalid && this.interacted;
          }
          /** Selects this step component. */

        }, {
          key: "select",
          value: function select() {
            this._stepper.selected = this;
          }
          /** Resets the step to its initial state. Note that this includes resetting form data. */

        }, {
          key: "reset",
          value: function reset() {
            this.interacted = false;

            if (this._completedOverride != null) {
              this._completedOverride = false;
            }

            if (this._customError != null) {
              this._customError = false;
            }

            if (this.stepControl) {
              this.stepControl.reset();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            // Since basically all inputs of the MatStep get proxied through the view down to the
            // underlying MatStepHeader, we have to make sure that change detection runs correctly.
            this._stepper._stateChanged();
          }
        }, {
          key: "_markAsInteracted",
          value: function _markAsInteracted() {
            if (!this.interacted) {
              this.interacted = true;
              this.interactedStream.emit(this);
            }
          }
        }]);

        return _CdkStep;
      }();

      _CdkStep.ɵfac = function CdkStep_Factory(t) {
        return new (t || _CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _CdkStepper;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_STEPPER_GLOBAL_OPTIONS, 8));
      };

      _CdkStep.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CdkStep,
        selectors: [["cdk-step"]],
        contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _CdkStepLabel, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
          }
        },
        viewQuery: function CdkStep_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        inputs: {
          editable: "editable",
          optional: "optional",
          completed: "completed",
          hasError: "hasError",
          stepControl: "stepControl",
          label: "label",
          errorMessage: "errorMessage",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          state: "state"
        },
        outputs: {
          interactedStream: "interacted"
        },
        exportAs: ["cdkStep"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CdkStep_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      _CdkStep.ctorParameters = function () {
        return [{
          type: _CdkStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
              return _CdkStepper;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_STEPPER_GLOBAL_OPTIONS]
          }]
        }];
      };

      _CdkStep.propDecorators = {
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_CdkStepLabel]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
            "static": true
          }]
        }],
        stepControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        interactedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['interacted']
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['aria-labelledby']
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        editable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        completed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        hasError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkStep, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'cdk-step',
            exportAs: 'cdkStep',
            template: '<ng-template><ng-content></ng-content></ng-template>',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
          }]
        }], function () {
          return [{
            type: _CdkStepper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
                return _CdkStepper;
              })]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_STEPPER_GLOBAL_OPTIONS]
            }]
          }];
        }, {
          interactedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['interacted']
          }],
          editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          completed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hasError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_CdkStepLabel]
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
              "static": true
            }]
          }],
          stepControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
          }],
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _CdkStepper = /*#__PURE__*/function () {
        function _CdkStepper(_dir, _changeDetectorRef, _elementRef, _document) {
          _classCallCheck(this, _CdkStepper);

          this._dir = _dir;
          this._changeDetectorRef = _changeDetectorRef;
          this._elementRef = _elementRef;
          /** Emits when the component is destroyed. */

          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          /** Steps that belong to the current stepper, excluding ones from nested steppers. */

          this.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
          this._linear = false;
          this._selectedIndex = 0;
          /** Event emitted when the selected step has changed. */

          this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * @deprecated To be turned into a private property. Use `orientation` instead.
           * @breaking-change 13.0.0
           */

          this._orientation = 'horizontal';
          this._groupId = nextId++;
          this._document = _document;
        }
        /** Whether the validity of previous steps should be checked or not. */


        _createClass(_CdkStepper, [{
          key: "linear",
          get: function get() {
            return this._linear;
          },
          set: function set(value) {
            this._linear = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
          }
          /** The index of the selected step. */

        }, {
          key: "selectedIndex",
          get: function get() {
            return this._selectedIndex;
          },
          set: function set(index) {
            var _a;

            var newIndex = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(index);

            if (this.steps && this._steps) {
              // Ensure that the index can't be out of bounds.
              if (!this._isValidIndex(index) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
              }

              (_a = this.selected) === null || _a === void 0 ? void 0 : _a._markAsInteracted();

              if (this._selectedIndex !== newIndex && !this._anyControlsInvalidOrPending(newIndex) && (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                this._updateSelectedItemIndex(index);
              }
            } else {
              this._selectedIndex = newIndex;
            }
          }
          /** The step that is selected. */

        }, {
          key: "selected",
          get: function get() {
            return this.steps ? this.steps.toArray()[this.selectedIndex] : undefined;
          },
          set: function set(step) {
            this.selectedIndex = step && this.steps ? this.steps.toArray().indexOf(step) : -1;
          }
          /** Orientation of the stepper. */

        }, {
          key: "orientation",
          get: function get() {
            return this._orientation;
          },
          set: function set(value) {
            // This is a protected method so that `MatSteppter` can hook into it.
            this._orientation = value;

            if (this._keyManager) {
              this._keyManager.withVerticalOrientation(value === 'vertical');
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this = this;

            this._steps.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(this._steps), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(function (steps) {
              _this.steps.reset(steps.filter(function (step) {
                return step._stepper === _this;
              }));

              _this.steps.notifyOnChanges();
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            // Note that while the step headers are content children by default, any components that
            // extend this one might have them as view children. We initialize the keyboard handling in
            // AfterViewInit so we're guaranteed for both view and content children to be defined.
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusKeyManager(this._stepHeader).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === 'vertical');
            (this._dir ? this._dir.change : (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.of)()).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(this._layoutDirection()), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(function (direction) {
              return _this2._keyManager.withHorizontalOrientation(direction);
            });

            this._keyManager.updateActiveItem(this._selectedIndex); // No need to `takeUntil` here, because we're the ones destroying `steps`.


            this.steps.changes.subscribe(function () {
              if (!_this2.selected) {
                _this2._selectedIndex = Math.max(_this2._selectedIndex - 1, 0);
              }
            }); // The logic which asserts that the selected index is within bounds doesn't run before the
            // steps are initialized, because we don't how many steps there are yet so we may have an
            // invalid index on init. If that's the case, auto-correct to the default so we don't throw.

            if (!this._isValidIndex(this._selectedIndex)) {
              this._selectedIndex = 0;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.steps.destroy();

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Selects and focuses the next step in list. */

        }, {
          key: "next",
          value: function next() {
            this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
          }
          /** Selects and focuses the previous step in list. */

        }, {
          key: "previous",
          value: function previous() {
            this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
          }
          /** Resets the stepper to its initial state. Note that this includes clearing form data. */

        }, {
          key: "reset",
          value: function reset() {
            this._updateSelectedItemIndex(0);

            this.steps.forEach(function (step) {
              return step.reset();
            });

            this._stateChanged();
          }
          /** Returns a unique id for each step label element. */

        }, {
          key: "_getStepLabelId",
          value: function _getStepLabelId(i) {
            return "cdk-step-label-".concat(this._groupId, "-").concat(i);
          }
          /** Returns unique id for each step content element. */

        }, {
          key: "_getStepContentId",
          value: function _getStepContentId(i) {
            return "cdk-step-content-".concat(this._groupId, "-").concat(i);
          }
          /** Marks the component to be change detected. */

        }, {
          key: "_stateChanged",
          value: function _stateChanged() {
            this._changeDetectorRef.markForCheck();
          }
          /** Returns position state of the step with the given index. */

        }, {
          key: "_getAnimationDirection",
          value: function _getAnimationDirection(index) {
            var position = index - this._selectedIndex;

            if (position < 0) {
              return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
            } else if (position > 0) {
              return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
            }

            return 'current';
          }
          /** Returns the type of icon to be displayed. */

        }, {
          key: "_getIndicatorType",
          value: function _getIndicatorType(index) {
            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _STEP_STATE.NUMBER;
            var step = this.steps.toArray()[index];

            var isCurrentStep = this._isCurrentStep(index);

            return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) : this._getGuidelineLogic(step, isCurrentStep, state);
          }
        }, {
          key: "_getDefaultIndicatorLogic",
          value: function _getDefaultIndicatorLogic(step, isCurrentStep) {
            if (step._showError && step.hasError && !isCurrentStep) {
              return _STEP_STATE.ERROR;
            } else if (!step.completed || isCurrentStep) {
              return _STEP_STATE.NUMBER;
            } else {
              return step.editable ? _STEP_STATE.EDIT : _STEP_STATE.DONE;
            }
          }
        }, {
          key: "_getGuidelineLogic",
          value: function _getGuidelineLogic(step, isCurrentStep) {
            var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _STEP_STATE.NUMBER;

            if (step._showError && step.hasError && !isCurrentStep) {
              return _STEP_STATE.ERROR;
            } else if (step.completed && !isCurrentStep) {
              return _STEP_STATE.DONE;
            } else if (step.completed && isCurrentStep) {
              return state;
            } else if (step.editable && isCurrentStep) {
              return _STEP_STATE.EDIT;
            } else {
              return state;
            }
          }
        }, {
          key: "_isCurrentStep",
          value: function _isCurrentStep(index) {
            return this._selectedIndex === index;
          }
          /** Returns the index of the currently-focused step header. */

        }, {
          key: "_getFocusIndex",
          value: function _getFocusIndex() {
            return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
          }
        }, {
          key: "_updateSelectedItemIndex",
          value: function _updateSelectedItemIndex(newIndex) {
            var stepsArray = this.steps.toArray();
            this.selectionChange.emit({
              selectedIndex: newIndex,
              previouslySelectedIndex: this._selectedIndex,
              selectedStep: stepsArray[newIndex],
              previouslySelectedStep: stepsArray[this._selectedIndex]
            }); // If focus is inside the stepper, move it to the next header, otherwise it may become
            // lost when the active step content is hidden. We can't be more granular with the check
            // (e.g. checking whether focus is inside the active step), because we don't have a
            // reference to the elements that are rendering out the content.

            this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
            this._selectedIndex = newIndex;

            this._stateChanged();
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            var hasModifier = (0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event);
            var keyCode = event.keyCode;
            var manager = this._keyManager;

            if (manager.activeItemIndex != null && !hasModifier && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER)) {
              this.selectedIndex = manager.activeItemIndex;
              event.preventDefault();
            } else {
              manager.onKeydown(event);
            }
          }
        }, {
          key: "_anyControlsInvalidOrPending",
          value: function _anyControlsInvalidOrPending(index) {
            if (this._linear && index >= 0) {
              return this.steps.toArray().slice(0, index).some(function (step) {
                var control = step.stepControl;
                var isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
                return isIncomplete && !step.optional && !step._completedOverride;
              });
            }

            return false;
          }
        }, {
          key: "_layoutDirection",
          value: function _layoutDirection() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
          /** Checks whether the stepper contains the focused element. */

        }, {
          key: "_containsFocus",
          value: function _containsFocus() {
            var stepperElement = this._elementRef.nativeElement;
            var focusedElement = this._document.activeElement;
            return stepperElement === focusedElement || stepperElement.contains(focusedElement);
          }
          /** Checks whether the passed-in index is a valid step index. */

        }, {
          key: "_isValidIndex",
          value: function _isValidIndex(index) {
            return index > -1 && (!this.steps || index < this.steps.length);
          }
        }]);

        return _CdkStepper;
      }();

      _CdkStepper.ɵfac = function CdkStepper_Factory(t) {
        return new (t || _CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT));
      };

      _CdkStepper.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkStepper,
        selectors: [["", "cdkStepper", ""]],
        contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _CdkStep, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _CdkStepHeader, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._steps = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
          }
        },
        inputs: {
          linear: "linear",
          selectedIndex: "selectedIndex",
          selected: "selected",
          orientation: "orientation"
        },
        outputs: {
          selectionChange: "selectionChange"
        },
        exportAs: ["cdkStepper"]
      });

      _CdkStepper.ctorParameters = function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
          }]
        }];
      };

      _CdkStepper.propDecorators = {
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_CdkStep, {
            descendants: true
          }]
        }],
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_CdkStepHeader, {
            descendants: true
          }]
        }],
        linear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkStepper]',
            exportAs: 'cdkStepper'
          }]
        }], function () {
          return [{
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
            }]
          }];
        }, {
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          linear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_CdkStep, {
              descendants: true
            }]
          }],
          _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_CdkStepHeader, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Button that moves to the next step in a stepper workflow. */


      var _CdkStepperNext = /*#__PURE__*/function () {
        function _CdkStepperNext(_stepper) {
          _classCallCheck(this, _CdkStepperNext);

          this._stepper = _stepper;
          /** Type of the next button. Defaults to "submit" if not specified. */

          this.type = 'submit';
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete


        _createClass(_CdkStepperNext, [{
          key: "_handleClick",
          value: function _handleClick() {
            this._stepper.next();
          }
        }]);

        return _CdkStepperNext;
      }();

      _CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) {
        return new (t || _CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CdkStepper));
      };

      _CdkStepperNext.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkStepperNext,
        selectors: [["button", "cdkStepperNext", ""]],
        hostVars: 1,
        hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() {
              return ctx._handleClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        }
      });

      _CdkStepperNext.ctorParameters = function () {
        return [{
          type: _CdkStepper
        }];
      };

      _CdkStepperNext.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['click']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkStepperNext, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'button[cdkStepperNext]',
            host: {
              '[type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: _CdkStepper
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
          }]
        });
      })();
      /** Button that moves to the previous step in a stepper workflow. */


      var _CdkStepperPrevious = /*#__PURE__*/function () {
        function _CdkStepperPrevious(_stepper) {
          _classCallCheck(this, _CdkStepperPrevious);

          this._stepper = _stepper;
          /** Type of the previous button. Defaults to "button" if not specified. */

          this.type = 'button';
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete


        _createClass(_CdkStepperPrevious, [{
          key: "_handleClick",
          value: function _handleClick() {
            this._stepper.previous();
          }
        }]);

        return _CdkStepperPrevious;
      }();

      _CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) {
        return new (t || _CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CdkStepper));
      };

      _CdkStepperPrevious.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkStepperPrevious,
        selectors: [["button", "cdkStepperPrevious", ""]],
        hostVars: 1,
        hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() {
              return ctx._handleClick();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        }
      });

      _CdkStepperPrevious.ctorParameters = function () {
        return [{
          type: _CdkStepper
        }];
      };

      _CdkStepperPrevious.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        _handleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['click']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkStepperPrevious, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'button[cdkStepperPrevious]',
            host: {
              '[type]': 'type'
            }
          }]
        }], function () {
          return [{
            type: _CdkStepper
          }];
        }, {
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _CdkStepperModule = function _CdkStepperModule() {
        _classCallCheck(this, _CdkStepperModule);
      };

      _CdkStepperModule.ɵfac = function CdkStepperModule_Factory(t) {
        return new (t || _CdkStepperModule)();
      };

      _CdkStepperModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _CdkStepperModule
      });
      _CdkStepperModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.BidiModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkStepperModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.BidiModule],
            exports: [_CdkStep, _CdkStepper, _CdkStepHeader, _CdkStepLabel, _CdkStepperNext, _CdkStepperPrevious],
            declarations: [_CdkStep, _CdkStepper, _CdkStepHeader, _CdkStepLabel, _CdkStepperNext, _CdkStepperPrevious]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_CdkStepperModule, {
          declarations: function declarations() {
            return [_CdkStep, _CdkStepper, _CdkStepHeader, _CdkStepLabel, _CdkStepperNext, _CdkStepperPrevious];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.BidiModule];
          },
          exports: function exports() {
            return [_CdkStep, _CdkStepper, _CdkStepHeader, _CdkStepLabel, _CdkStepperNext, _CdkStepperPrevious];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    48210: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_STEPPER_INTL_PROVIDER": function MAT_STEPPER_INTL_PROVIDER() {
          return (
            /* binding */
            _MAT_STEPPER_INTL_PROVIDER
          );
        },

        /* harmony export */
        "MAT_STEPPER_INTL_PROVIDER_FACTORY": function MAT_STEPPER_INTL_PROVIDER_FACTORY() {
          return (
            /* binding */
            _MAT_STEPPER_INTL_PROVIDER_FACTORY
          );
        },

        /* harmony export */
        "MatHorizontalStepper": function MatHorizontalStepper() {
          return (
            /* binding */
            _MatHorizontalStepper
          );
        },

        /* harmony export */
        "MatStep": function MatStep() {
          return (
            /* binding */
            _MatStep
          );
        },

        /* harmony export */
        "MatStepContent": function MatStepContent() {
          return (
            /* binding */
            _MatStepContent
          );
        },

        /* harmony export */
        "MatStepHeader": function MatStepHeader() {
          return (
            /* binding */
            _MatStepHeader
          );
        },

        /* harmony export */
        "MatStepLabel": function MatStepLabel() {
          return (
            /* binding */
            _MatStepLabel
          );
        },

        /* harmony export */
        "MatStepper": function MatStepper() {
          return (
            /* binding */
            _MatStepper
          );
        },

        /* harmony export */
        "MatStepperIcon": function MatStepperIcon() {
          return (
            /* binding */
            _MatStepperIcon
          );
        },

        /* harmony export */
        "MatStepperIntl": function MatStepperIntl() {
          return (
            /* binding */
            _MatStepperIntl
          );
        },

        /* harmony export */
        "MatStepperModule": function MatStepperModule() {
          return (
            /* binding */
            _MatStepperModule
          );
        },

        /* harmony export */
        "MatStepperNext": function MatStepperNext() {
          return (
            /* binding */
            _MatStepperNext
          );
        },

        /* harmony export */
        "MatStepperPrevious": function MatStepperPrevious() {
          return (
            /* binding */
            _MatStepperPrevious
          );
        },

        /* harmony export */
        "MatVerticalStepper": function MatVerticalStepper() {
          return (
            /* binding */
            _MatVerticalStepper
          );
        },

        /* harmony export */
        "matStepperAnimations": function matStepperAnimations() {
          return (
            /* binding */
            _matStepperAnimations
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/portal */
      40912);
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      43285);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      51606);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      94283);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      772);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      1143);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      22663);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      83720);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function MatStepHeader_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
        }
      }

      function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
        }
      }

      function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
        }
      }

      function MatStepHeader_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r1.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "number");
        }
      }

      function MatStepHeader_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
        }
      }

      function MatStepHeader_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.label);
        }
      }

      function MatStepHeader_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4._intl.optionalLabel);
        }
      }

      function MatStepHeader_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
        }
      }

      function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) {}

      function MatStep_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx_r0._portal);
        }
      }

      var _c0 = ["*"];

      function MatStepper_ng_container_1_ng_container_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          step: a0,
          i: a1
        };
      };

      function MatStepper_ng_container_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepper_ng_container_1_ng_container_2_div_2_Template, 1, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var step_r6 = ctx.$implicit;
          var i_r7 = ctx.index;
          var isLast_r8 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, step_r6, i_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r8);
        }
      }

      function MatStepper_ng_container_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@horizontalStepTransition.done", function MatStepper_ng_container_1_div_4_Template_div_animation_horizontalStepTransition_done_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12._animationDone.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r10 = ctx.$implicit;
          var i_r11 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@horizontalStepTransition", ctx_r5._getAnimationDirection(i_r11))("id", ctx_r5._getStepContentId(i_r11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r5._getStepLabelId(i_r11))("aria-expanded", ctx_r5.selectedIndex === i_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r10.content);
        }
      }

      function MatStepper_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepper_ng_container_1_ng_container_2_Template, 3, 6, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatStepper_ng_container_1_div_4_Template, 2, 5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.steps);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.steps);
        }
      }

      function MatStepper_ng_container_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@verticalStepTransition.done", function MatStepper_ng_container_2_div_1_Template_div_animation_verticalStepTransition_done_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18._animationDone.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r15 = ctx.$implicit;
          var i_r16 = ctx.index;
          var isLast_r17 = ctx.last;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, step_r15, i_r16));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-stepper-vertical-line", !isLast_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@verticalStepTransition", ctx_r14._getAnimationDirection(i_r16))("id", ctx_r14._getStepContentId(i_r16));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx_r14._getStepLabelId(i_r16))("aria-expanded", ctx_r14.selectedIndex === i_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r15.content);
        }
      }

      function MatStepper_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStepper_ng_container_2_div_1_Template, 6, 12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.steps);
        }
      }

      function MatStepper_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-step-header", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var step_r20 = restoredCtx.step;
            return step_r20.select();
          })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24._onKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var step_r20 = ctx.step;
          var i_r21 = ctx.i;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-horizontal-stepper-header", ctx_r3.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r3.orientation === "vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", ctx_r3._getFocusIndex() === i_r21 ? 0 : -1)("id", ctx_r3._getStepLabelId(i_r21))("index", i_r21)("state", ctx_r3._getIndicatorType(i_r21, step_r20.state))("label", step_r20.stepLabel || step_r20.label)("selected", ctx_r3.selectedIndex === i_r21)("active", step_r20.completed || ctx_r3.selectedIndex === i_r21 || !ctx_r3.linear)("optional", step_r20.optional)("errorMessage", step_r20.errorMessage)("iconOverrides", ctx_r3._iconOverrides)("disableRipple", ctx_r3.disableRipple)("color", step_r20.color || ctx_r3.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-posinset", i_r21 + 1)("aria-setsize", ctx_r3.steps.length)("aria-controls", ctx_r3._getStepContentId(i_r21))("aria-selected", ctx_r3.selectedIndex == i_r21)("aria-label", step_r20.ariaLabel || null)("aria-labelledby", !step_r20.ariaLabel && step_r20.ariaLabelledby ? step_r20.ariaLabelledby : null);
        }
      }

      var _MatStepLabel = /*#__PURE__*/function (_angular_cdk_stepper_) {
        _inherits(_MatStepLabel, _angular_cdk_stepper_);

        var _super = _createSuper(_MatStepLabel);

        function _MatStepLabel() {
          _classCallCheck(this, _MatStepLabel);

          return _super.apply(this, arguments);
        }

        return _MatStepLabel;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepLabel);

      _MatStepLabel.ɵfac = /*@__PURE__*/function () {
        var ɵMatStepLabel_BaseFactory;
        return function MatStepLabel_Factory(t) {
          return (ɵMatStepLabel_BaseFactory || (ɵMatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatStepLabel)))(t || _MatStepLabel);
        };
      }();

      _MatStepLabel.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatStepLabel,
        selectors: [["", "matStepLabel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatStepLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[matStepLabel]'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Stepper data that is required for internationalization. */


      var _MatStepperIntl = function _MatStepperIntl() {
        _classCallCheck(this, _MatStepperIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** Label that is rendered below optional steps. */

        this.optionalLabel = 'Optional';
      };

      _MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) {
        return new (t || _MatStepperIntl)();
      };

      _MatStepperIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function MatStepperIntl_Factory() {
          return new _MatStepperIntl();
        },
        token: _MatStepperIntl,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatStepperIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /** @docs-private */


      function _MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
        return parentIntl || new _MatStepperIntl();
      }
      /** @docs-private */


      var _MAT_STEPPER_INTL_PROVIDER = {
        provide: _MatStepperIntl,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), _MatStepperIntl]],
        useFactory: _MAT_STEPPER_INTL_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatStepHeader.

      /** @docs-private */

      var MatStepHeaderBase = /*#__PURE__*/function (_angular_cdk_stepper_2) {
        _inherits(MatStepHeaderBase, _angular_cdk_stepper_2);

        var _super2 = _createSuper(MatStepHeaderBase);

        function MatStepHeaderBase(elementRef) {
          _classCallCheck(this, MatStepHeaderBase);

          return _super2.call(this, elementRef);
        }

        return MatStepHeaderBase;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepHeader);

      var _MatStepHeaderMixinBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinColor)(MatStepHeaderBase, 'primary');

      var _MatStepHeader = /*#__PURE__*/function (_MatStepHeaderMixinBa) {
        _inherits(_MatStepHeader, _MatStepHeaderMixinBa);

        var _super3 = _createSuper(_MatStepHeader);

        function _MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
          var _this3;

          _classCallCheck(this, _MatStepHeader);

          _this3 = _super3.call(this, _elementRef);
          _this3._intl = _intl;
          _this3._focusMonitor = _focusMonitor;
          _this3._intlSubscription = _intl.changes.subscribe(function () {
            return changeDetectorRef.markForCheck();
          });
          return _this3;
        }

        _createClass(_MatStepHeader, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._intlSubscription.unsubscribe();

            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Focuses the step header. */

        }, {
          key: "focus",
          value: function focus(origin, options) {
            if (origin) {
              this._focusMonitor.focusVia(this._elementRef, origin, options);
            } else {
              this._elementRef.nativeElement.focus(options);
            }
          }
          /** Returns string label of given step if it is a text label. */

        }, {
          key: "_stringLabel",
          value: function _stringLabel() {
            return this.label instanceof _MatStepLabel ? null : this.label;
          }
          /** Returns MatStepLabel if the label of given step is a template label. */

        }, {
          key: "_templateLabel",
          value: function _templateLabel() {
            return this.label instanceof _MatStepLabel ? this.label : null;
          }
          /** Returns the host HTML element. */

        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._elementRef.nativeElement;
          }
          /** Template context variables that are exposed to the `matStepperIcon` instances. */

        }, {
          key: "_getIconContext",
          value: function _getIconContext() {
            return {
              index: this.index,
              active: this.active,
              optional: this.optional
            };
          }
        }, {
          key: "_getDefaultTextForState",
          value: function _getDefaultTextForState(state) {
            if (state == 'number') {
              return "".concat(this.index + 1);
            }

            if (state == 'edit') {
              return 'create';
            }

            if (state == 'error') {
              return 'warning';
            }

            return state;
          }
        }]);

        return _MatStepHeader;
      }(_MatStepHeaderMixinBase);

      _MatStepHeader.ɵfac = function MatStepHeader_Factory(t) {
        return new (t || _MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _MatStepHeader.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatStepHeader,
        selectors: [["mat-step-header"]],
        hostAttrs: ["role", "tab", 1, "mat-step-header", "mat-focus-indicator"],
        inputs: {
          color: "color",
          state: "state",
          label: "label",
          errorMessage: "errorMessage",
          iconOverrides: "iconOverrides",
          index: "index",
          selected: "selected",
          active: "active",
          optional: "optional",
          disableRipple: "disableRipple"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 10,
        vars: 19,
        consts: [["matRipple", "", 1, "mat-step-header-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "mat-step-text-label"], [3, "ngTemplateOutlet"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]],
        template: function MatStepHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MatStepHeader_div_6_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MatStepHeader_div_7_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MatStepHeader_div_8_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MatStepHeader_div_9_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._templateLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._stringLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optional && ctx.state != "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state == "error");
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
        styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      _MatStepHeader.ctorParameters = function () {
        return [{
          type: _MatStepperIntl
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }];
      };

      _MatStepHeader.propDecorators = {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        errorMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        iconOverrides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        optional: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatStepHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-step-header',
            template: "<div class=\"mat-step-header-ripple\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_templateLabel()\">\n    <ng-container [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container>\n  </div>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
            inputs: ['color'],
            host: {
              'class': 'mat-step-header mat-focus-indicator',
              'role': 'tab'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
          }]
        }], function () {
          return [{
            type: _MatStepperIntl
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          iconOverrides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the Material steppers.
       * @docs-private
       */


      var _matStepperAnimations = {
        /** Animation that transitions the step along the X axis in a horizontal stepper. */
        horizontalStepTransition: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('horizontalStepTransition', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('previous', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          transform: 'translate3d(-100%, 0, 0)',
          visibility: 'hidden'
        })), // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('current', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          transform: 'none',
          visibility: 'inherit'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('next', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          transform: 'translate3d(100%, 0, 0)',
          visibility: 'hidden'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => *', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('500ms cubic-bezier(0.35, 0, 0.25, 1)'))]),

        /** Animation that transitions the step along the Y axis in a vertical stepper. */
        verticalStepTransition: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('verticalStepTransition', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('previous', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0px',
          visibility: 'hidden'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('next', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0px',
          visibility: 'hidden'
        })), // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('current', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '*',
          visibility: 'inherit'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* <=> current', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Template to be used to override the icons inside the step header.
       */

      var _MatStepperIcon = function _MatStepperIcon(templateRef) {
        _classCallCheck(this, _MatStepperIcon);

        this.templateRef = templateRef;
      };

      _MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) {
        return new (t || _MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _MatStepperIcon.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatStepperIcon,
        selectors: [["ng-template", "matStepperIcon", ""]],
        inputs: {
          name: ["matStepperIcon", "name"]
        }
      });

      _MatStepperIcon.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      _MatStepperIcon.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['matStepperIcon']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatStepperIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'ng-template[matStepperIcon]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['matStepperIcon']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Content for a `mat-step` that will be rendered lazily.
       */


      var _MatStepContent = function _MatStepContent(_template) {
        _classCallCheck(this, _MatStepContent);

        this._template = _template;
      };

      _MatStepContent.ɵfac = function MatStepContent_Factory(t) {
        return new (t || _MatStepContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      _MatStepContent.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatStepContent,
        selectors: [["ng-template", "matStepContent", ""]]
      });

      _MatStepContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatStepContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'ng-template[matStepContent]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatStep = /*#__PURE__*/function (_angular_cdk_stepper_3) {
        _inherits(_MatStep, _angular_cdk_stepper_3);

        var _super4 = _createSuper(_MatStep);

        function _MatStep(stepper, _errorStateMatcher, _viewContainerRef, stepperOptions) {
          var _this4;

          _classCallCheck(this, _MatStep);

          _this4 = _super4.call(this, stepper, stepperOptions);
          _this4._errorStateMatcher = _errorStateMatcher;
          _this4._viewContainerRef = _viewContainerRef;
          _this4._isSelected = rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription.EMPTY;
          return _this4;
        }

        _createClass(_MatStep, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this5 = this;

            this._isSelected = this._stepper.steps.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(function () {
              return _this5._stepper.selectionChange.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (event) {
                return event.selectedStep === _this5;
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(_this5._stepper.selected === _this5));
            })).subscribe(function (isSelected) {
              if (isSelected && _this5._lazyContent && !_this5._portal) {
                _this5._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.TemplatePortal(_this5._lazyContent._template, _this5._viewContainerRef);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._isSelected.unsubscribe();
          }
          /** Custom error state matcher that additionally checks for validity of interacted form. */

        }, {
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var originalErrorState = this._errorStateMatcher.isErrorState(control, form); // Custom error state checks for the validity of form that is not submitted or touched
            // since user can trigger a form change by calling for another step without directly
            // interacting with the current form.


            var customErrorState = !!(control && control.invalid && this.interacted);
            return originalErrorState || customErrorState;
          }
        }]);

        return _MatStep;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep);

      _MatStep.ɵfac = function MatStep_Factory(t) {
        return new (t || _MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MatStepper;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS, 8));
      };

      _MatStep.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatStep,
        selectors: [["mat-step"]],
        contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MatStepLabel, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MatStepContent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matStep"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher,
          useExisting: _MatStep
        }, {
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep,
          useExisting: _MatStep
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        consts: [[3, "cdkPortalOutlet"]],
        template: function MatStep_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.CdkPortalOutlet],
        encapsulation: 2,
        changeDetection: 0
      });

      _MatStep.ctorParameters = function () {
        return [{
          type: _MatStepper,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
              return _MatStepper;
            })]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS]
          }]
        }];
      };

      _MatStep.propDecorators = {
        stepLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_MatStepLabel]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        _lazyContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_MatStepContent, {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatStep, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-step',
            template: "<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n</ng-template>\n",
            providers: [{
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher,
              useExisting: _MatStep
            }, {
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStep,
              useExisting: _MatStep
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            exportAs: 'matStep',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
          }]
        }], function () {
          return [{
            type: _MatStepper,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
                return _MatStepper;
              })]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.STEPPER_GLOBAL_OPTIONS]
            }]
          }];
        }, {
          stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_MatStepLabel]
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_MatStepContent, {
              "static": false
            }]
          }]
        });
      })();
      /**
       * Proxies the public APIs from `MatStepper` to the deprecated `MatHorizontalStepper` and
       * `MatVerticalStepper`.
       * @deprecated Use `MatStepper` instead.
       * @breaking-change 13.0.0
       * @docs-private
       */


      var _MatProxyStepperBase = /*#__PURE__*/function (_angular_cdk_stepper_4) {
        _inherits(_MatProxyStepperBase, _angular_cdk_stepper_4);

        var _super5 = _createSuper(_MatProxyStepperBase);

        function _MatProxyStepperBase() {
          _classCallCheck(this, _MatProxyStepperBase);

          return _super5.apply(this, arguments);
        }

        return _MatProxyStepperBase;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper);

      _MatProxyStepperBase.ɵfac = /*@__PURE__*/function () {
        var ɵ_MatProxyStepperBase_BaseFactory;
        return function _MatProxyStepperBase_Factory(t) {
          return (ɵ_MatProxyStepperBase_BaseFactory || (ɵ_MatProxyStepperBase_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatProxyStepperBase)))(t || _MatProxyStepperBase);
        };
      }();

      _MatProxyStepperBase.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatProxyStepperBase,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatProxyStepperBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], null, null);
      })();
      /**
       * @deprecated Use `MatStepper` instead.
       * @breaking-change 13.0.0
       */


      var _MatHorizontalStepper = /*#__PURE__*/function (_MatProxyStepperBase2) {
        _inherits(_MatHorizontalStepper, _MatProxyStepperBase2);

        var _super6 = _createSuper(_MatHorizontalStepper);

        function _MatHorizontalStepper() {
          _classCallCheck(this, _MatHorizontalStepper);

          return _super6.apply(this, arguments);
        }

        return _MatHorizontalStepper;
      }(_MatProxyStepperBase);

      _MatHorizontalStepper.ɵfac = /*@__PURE__*/function () {
        var ɵMatHorizontalStepper_BaseFactory;
        return function MatHorizontalStepper_Factory(t) {
          return (ɵMatHorizontalStepper_BaseFactory || (ɵMatHorizontalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatHorizontalStepper)))(t || _MatHorizontalStepper);
        };
      }();

      _MatHorizontalStepper.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatHorizontalStepper,
        selectors: [["mat-horizontal-stepper"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatHorizontalStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-horizontal-stepper'
          }]
        }], null, null);
      })();
      /**
       * @deprecated Use `MatStepper` instead.
       * @breaking-change 13.0.0
       */


      var _MatVerticalStepper = /*#__PURE__*/function (_MatProxyStepperBase3) {
        _inherits(_MatVerticalStepper, _MatProxyStepperBase3);

        var _super7 = _createSuper(_MatVerticalStepper);

        function _MatVerticalStepper() {
          _classCallCheck(this, _MatVerticalStepper);

          return _super7.apply(this, arguments);
        }

        return _MatVerticalStepper;
      }(_MatProxyStepperBase);

      _MatVerticalStepper.ɵfac = /*@__PURE__*/function () {
        var ɵMatVerticalStepper_BaseFactory;
        return function MatVerticalStepper_Factory(t) {
          return (ɵMatVerticalStepper_BaseFactory || (ɵMatVerticalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatVerticalStepper)))(t || _MatVerticalStepper);
        };
      }();

      _MatVerticalStepper.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatVerticalStepper,
        selectors: [["mat-vertical-stepper"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatVerticalStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mat-vertical-stepper'
          }]
        }], null, null);
      })();

      var _MatStepper = /*#__PURE__*/function (_angular_cdk_stepper_5) {
        _inherits(_MatStepper, _angular_cdk_stepper_5);

        var _super8 = _createSuper(_MatStepper);

        function _MatStepper(dir, changeDetectorRef, elementRef, _document) {
          var _this6;

          _classCallCheck(this, _MatStepper);

          _this6 = _super8.call(this, dir, changeDetectorRef, elementRef, _document);
          /** Steps that belong to the current stepper, excluding ones from nested steppers. */

          _this6.steps = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
          /** Event emitted when the current step is done transitioning in. */

          _this6.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Whether the label should display in bottom or end position.
           * Only applies in the `horizontal` orientation.
           */

          _this6.labelPosition = 'end';
          /** Consumer-specified template-refs to be used to override the header icons. */

          _this6._iconOverrides = {};
          /** Stream of animation `done` events when the body expands/collapses. */

          _this6._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          var nodeName = elementRef.nativeElement.nodeName.toLowerCase();
          _this6.orientation = nodeName === 'mat-vertical-stepper' ? 'vertical' : 'horizontal';
          return _this6;
        }

        _createClass(_MatStepper, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this7 = this;

            _get(_getPrototypeOf(_MatStepper.prototype), "ngAfterContentInit", this).call(this);

            this._icons.forEach(function (_ref) {
              var name = _ref.name,
                  templateRef = _ref.templateRef;
              return _this7._iconOverrides[name] = templateRef;
            }); // Mark the component for change detection whenever the content children query changes


            this.steps.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(function () {
              _this7._stateChanged();
            });

            this._animationDone.pipe( // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
            // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
            // See https://github.com/angular/angular/issues/24084
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(function (x, y) {
              return x.fromState === y.fromState && x.toState === y.toState;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(function (event) {
              if (event.toState === 'current') {
                _this7.animationDone.emit();
              }
            });
          }
        }]);

        return _MatStepper;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper);

      _MatStepper.ɵfac = function MatStepper_Factory(t) {
        return new (t || _MatStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT));
      };

      _MatStepper.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatStepper,
        selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]],
        contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MatStep, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _MatStepperIcon, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._steps = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._icons = _t);
          }
        },
        viewQuery: function MatStepper_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_MatStepHeader, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
          }
        },
        hostAttrs: ["role", "tablist"],
        hostVars: 9,
        hostBindings: function MatStepper_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx.orientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom");
          }
        },
        inputs: {
          selectedIndex: "selectedIndex",
          labelPosition: "labelPosition",
          disableRipple: "disableRipple",
          color: "color"
        },
        outputs: {
          animationDone: "animationDone"
        },
        exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper,
          useExisting: _MatStepper
        }, {
          provide: _MatHorizontalStepper,
          useExisting: _MatStepper
        }, {
          provide: _MatVerticalStepper,
          useExisting: _MatStepper
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 5,
        vars: 3,
        consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["stepTemplate", ""], [1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], ["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color", "click", "keydown"]],
        template: function MatStepper_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatStepper_ng_container_1_Template, 5, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatStepper_ng_container_2_Template, 2, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatStepper_ng_template_3_Template, 1, 22, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.orientation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "vertical");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _MatStepHeader],
        styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"],
        encapsulation: 2,
        data: {
          animation: [_matStepperAnimations.horizontalStepTransition, _matStepperAnimations.verticalStepTransition]
        },
        changeDetection: 0
      });

      _MatStepper.ctorParameters = function () {
        return [{
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
          }]
        }];
      };

      _MatStepper.propDecorators = {
        _stepHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
          args: [_MatStepHeader]
        }],
        _steps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_MatStep, {
            descendants: true
          }]
        }],
        _icons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_MatStepperIcon, {
            descendants: true
          }]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatStepper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]',
            exportAs: 'matStepper, matVerticalStepper, matHorizontalStepper',
            template: "<ng-container [ngSwitch]=\"orientation\">\n  <!-- Horizontal stepper -->\n  <ng-container *ngSwitchCase=\"'horizontal'\">\n    <div class=\"mat-horizontal-stepper-header-container\">\n      <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n        <ng-container\n          [ngTemplateOutlet]=\"stepTemplate\"\n          [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n        <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n      </ng-container>\n    </div>\n\n    <div class=\"mat-horizontal-content-container\">\n      <div *ngFor=\"let step of steps; let i = index\"\n           class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n           [@horizontalStepTransition]=\"_getAnimationDirection(i)\"\n           (@horizontalStepTransition.done)=\"_animationDone.next($event)\"\n           [id]=\"_getStepContentId(i)\"\n           [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n           [attr.aria-expanded]=\"selectedIndex === i\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </ng-container>\n\n  <!-- Vertical stepper -->\n  <ng-container *ngSwitchCase=\"'vertical'\">\n    <div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n      <ng-container\n        [ngTemplateOutlet]=\"stepTemplate\"\n        [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n      <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n        <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n             [@verticalStepTransition]=\"_getAnimationDirection(i)\"\n             (@verticalStepTransition.done)=\"_animationDone.next($event)\"\n             [id]=\"_getStepContentId(i)\"\n             [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n             [attr.aria-expanded]=\"selectedIndex === i\">\n          <div class=\"mat-vertical-content\">\n            <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n</ng-container>\n\n<!-- Common step templating -->\n<ng-template let-step=\"step\" let-i=\"i\" #stepTemplate>\n  <mat-step-header\n    [class.mat-horizontal-stepper-header]=\"orientation === 'horizontal'\"\n    [class.mat-vertical-stepper-header]=\"orientation === 'vertical'\"\n    (click)=\"step.select()\"\n    (keydown)=\"_onKeydown($event)\"\n    [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n    [id]=\"_getStepLabelId(i)\"\n    [attr.aria-posinset]=\"i + 1\"\n    [attr.aria-setsize]=\"steps.length\"\n    [attr.aria-controls]=\"_getStepContentId(i)\"\n    [attr.aria-selected]=\"selectedIndex == i\"\n    [attr.aria-label]=\"step.ariaLabel || null\"\n    [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n    [index]=\"i\"\n    [state]=\"_getIndicatorType(i, step.state)\"\n    [label]=\"step.stepLabel || step.label\"\n    [selected]=\"selectedIndex === i\"\n    [active]=\"step.completed || selectedIndex === i || !linear\"\n    [optional]=\"step.optional\"\n    [errorMessage]=\"step.errorMessage\"\n    [iconOverrides]=\"_iconOverrides\"\n    [disableRipple]=\"disableRipple\"\n    [color]=\"step.color || color\"></mat-step-header>\n</ng-template>\n",
            inputs: ['selectedIndex'],
            host: {
              '[class.mat-stepper-horizontal]': 'orientation === "horizontal"',
              '[class.mat-stepper-vertical]': 'orientation === "vertical"',
              '[class.mat-stepper-label-position-end]': 'orientation === "horizontal" && labelPosition == "end"',
              '[class.mat-stepper-label-position-bottom]': 'orientation === "horizontal" && labelPosition == "bottom"',
              '[attr.aria-orientation]': 'orientation',
              'role': 'tablist'
            },
            animations: [_matStepperAnimations.horizontalStepTransition, _matStepperAnimations.verticalStepTransition],
            providers: [{
              provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper,
              useExisting: _MatStepper
            }, {
              provide: _MatHorizontalStepper,
              useExisting: _MatStepper
            }, {
              provide: _MatVerticalStepper,
              useExisting: _MatStepper
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
            }]
          }];
        }, {
          animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
            args: [_MatStepHeader]
          }],
          _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_MatStep, {
              descendants: true
            }]
          }],
          _icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_MatStepperIcon, {
              descendants: true
            }]
          }],
          disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Button that moves to the next step in a stepper workflow. */


      var _MatStepperNext = /*#__PURE__*/function (_angular_cdk_stepper_6) {
        _inherits(_MatStepperNext, _angular_cdk_stepper_6);

        var _super9 = _createSuper(_MatStepperNext);

        function _MatStepperNext() {
          _classCallCheck(this, _MatStepperNext);

          return _super9.apply(this, arguments);
        }

        return _MatStepperNext;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperNext);

      _MatStepperNext.ɵfac = /*@__PURE__*/function () {
        var ɵMatStepperNext_BaseFactory;
        return function MatStepperNext_Factory(t) {
          return (ɵMatStepperNext_BaseFactory || (ɵMatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatStepperNext)))(t || _MatStepperNext);
        };
      }();

      _MatStepperNext.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatStepperNext,
        selectors: [["button", "matStepperNext", ""]],
        hostAttrs: [1, "mat-stepper-next"],
        hostVars: 1,
        hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatStepperNext, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'button[matStepperNext]',
            host: {
              'class': 'mat-stepper-next',
              '[type]': 'type'
            },
            inputs: ['type']
          }]
        }], null, null);
      })();
      /** Button that moves to the previous step in a stepper workflow. */


      var _MatStepperPrevious = /*#__PURE__*/function (_angular_cdk_stepper_7) {
        _inherits(_MatStepperPrevious, _angular_cdk_stepper_7);

        var _super10 = _createSuper(_MatStepperPrevious);

        function _MatStepperPrevious() {
          _classCallCheck(this, _MatStepperPrevious);

          return _super10.apply(this, arguments);
        }

        return _MatStepperPrevious;
      }(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperPrevious);

      _MatStepperPrevious.ɵfac = /*@__PURE__*/function () {
        var ɵMatStepperPrevious_BaseFactory;
        return function MatStepperPrevious_Factory(t) {
          return (ɵMatStepperPrevious_BaseFactory || (ɵMatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatStepperPrevious)))(t || _MatStepperPrevious);
        };
      }();

      _MatStepperPrevious.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatStepperPrevious,
        selectors: [["button", "matStepperPrevious", ""]],
        hostAttrs: [1, "mat-stepper-previous"],
        hostVars: 1,
        hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
          }
        },
        inputs: {
          type: "type"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatStepperPrevious, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'button[matStepperPrevious]',
            host: {
              'class': 'mat-stepper-previous',
              '[type]': 'type'
            },
            inputs: ['type']
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatStepperModule = function _MatStepperModule() {
        _classCallCheck(this, _MatStepperModule);
      };

      _MatStepperModule.ɵfac = function MatStepperModule_Factory(t) {
        return new (t || _MatStepperModule)();
      };

      _MatStepperModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatStepperModule
      });
      _MatStepperModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher],
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatStepperModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _MatStep, _MatStepLabel, _MatStepper, _MatStepperNext, _MatStepperPrevious, _MatStepHeader, _MatStepperIcon, _MatStepContent],
            declarations: [_MatHorizontalStepper, _MatVerticalStepper, _MatStep, _MatStepLabel, _MatStepper, _MatStepperNext, _MatStepperPrevious, _MatStepHeader, _MatStepperIcon, _MatStepContent],
            providers: [_MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.ErrorStateMatcher]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatStepperModule, {
          declarations: function declarations() {
            return [_MatHorizontalStepper, _MatVerticalStepper, _MatStep, _MatStepLabel, _MatStepper, _MatStepperNext, _MatStepperPrevious, _MatStepHeader, _MatStepperIcon, _MatStepContent];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_12__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _MatStep, _MatStepLabel, _MatStepper, _MatStepperNext, _MatStepperPrevious, _MatStepHeader, _MatStepperIcon, _MatStepContent];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    69459: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "isView": function isView() {
          return (
            /* binding */
            _isView
          );
        },

        /* harmony export */
        "ItemRoutingModule": function ItemRoutingModule() {
          return (
            /* binding */
            _ItemRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./list/list.component */
      56481);
      /* harmony import */


      var _view_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view/view.component */
      92254);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      function _isView(url) {
        return url.length > 0 && url[url.length - 1].path.endsWith('view') ? {
          consumed: url
        } : null;
      }

      var routes = [{
        matcher: _isView,
        component: _view_view_component__WEBPACK_IMPORTED_MODULE_1__.ViewComponent
      }, {
        path: '**',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent
      }];

      var _ItemRoutingModule = function _ItemRoutingModule() {
        _classCallCheck(this, _ItemRoutingModule);
      };

      _ItemRoutingModule.ɵfac = function ItemRoutingModule_Factory(t) {
        return new (t || _ItemRoutingModule)();
      };

      _ItemRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ItemRoutingModule
      });
      _ItemRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ItemRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    4672: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemModule": function ItemModule() {
          return (
            /* binding */
            _ItemModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./item-routing.module */
      69459);
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./list/list.component */
      56481);
      /* harmony import */


      var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view/view.component */
      92254);
      /* harmony import */


      var _components_layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/layout/loading/loading.module */
      12389);
      /* harmony import */


      var _shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/dialog-form/dialog-form.module */
      33054);
      /* harmony import */


      var _shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/image-view/image-view.module */
      91122);
      /* harmony import */


      var _shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/popup-menu/popup-menu.module */
      89562);
      /* harmony import */


      var _shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/content-header/content-header.module */
      63257);
      /* harmony import */


      var _list_create_item_dialog_create_item_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./list/create-item-dialog/create-item-dialog.component */
      40340);
      /* harmony import */


      var _list_create_category_dialog_create_category_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./list/create-category-dialog/create-category-dialog.component */
      23693);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/stepper */
      48210);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _shared_async_image_async_image_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/async-image/async-image.module */
      86908);
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-markdown */
      36731);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ItemModule = function _ItemModule() {
        _classCallCheck(this, _ItemModule);
      };

      _ItemModule.ɵfac = function ItemModule_Factory(t) {
        return new (t || _ItemModule)();
      };

      _ItemModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: _ItemModule
      });
      _ItemModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _item_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemRoutingModule, _components_layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_3__.LoadingModule, _shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_4__.DialogFormModule, _shared_async_image_async_image_module__WEBPACK_IMPORTED_MODULE_10__.AsyncImageModule, _shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_5__.ImageViewModule, _shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_6__.PopupMenuModule, _shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_7__.ContentHeaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_23__.MarkdownModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](_ItemModule, {
          declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent, _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent, _list_create_item_dialog_create_item_dialog_component__WEBPACK_IMPORTED_MODULE_8__.CreateItemDialogComponent, _list_create_category_dialog_create_category_dialog_component__WEBPACK_IMPORTED_MODULE_9__.CreateCategoryDialogComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _item_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemRoutingModule, _components_layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_3__.LoadingModule, _shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_4__.DialogFormModule, _shared_async_image_async_image_module__WEBPACK_IMPORTED_MODULE_10__.AsyncImageModule, _shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_5__.ImageViewModule, _shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_6__.PopupMenuModule, _shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_7__.ContentHeaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_23__.MarkdownModule],
          exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent, _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent]
        });
      })();
      /***/

    },

    /***/
    23693: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreateCategoryDialogComponent": function CreateCategoryDialogComponent() {
          return (
            /* binding */
            _CreateCategoryDialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function CreateCategoryDialogComponent_mat_chip_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function CreateCategoryDialogComponent_mat_chip_19_Template_mat_chip_removed_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var keyword_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.removeKeywords(keyword_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var keyword_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", keyword_r2, " ");
        }
      }

      var _CreateCategoryDialogComponent = /*#__PURE__*/function () {
        function _CreateCategoryDialogComponent(dialogRef) {
          _classCallCheck(this, _CreateCategoryDialogComponent);

          this.dialogRef = dialogRef;
          this.name = undefined;
          this.image = undefined;
          this.keywords = [];
          this.enabled = false;
        }

        _createClass(_CreateCategoryDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            if (this.content) {
              this.itemService.getCategorys({
                _id: this.categoryId
              }).subscribe(function (categorys) {
                if (categorys) {
                  var _iterator = _createForOfIteratorHelper(categorys),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var category = _step.value;

                      if (category._id == _this8.content.id) {
                        _this8.name = category.name;
                        _this8.image = category.image;
                        _this8.keywords = category.keywords;
                        _this8.enabled = category.enabled;
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }
              });
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this9 = this;

            console.log(this.enabled);

            if (this.content) {
              this.itemService.updateCategory(this.content.id, {
                name: this.name,
                image: this.image,
                keywords: this.keywords,
                enabled: this.enabled
              }).subscribe(function (response) {
                if (response) {
                  _this9.dialogRef.close();
                }
              });
            } else {
              this.itemService.createCategory(this.categoryId, {
                name: this.name,
                image: this.image,
                keywords: this.keywords,
                enabled: this.enabled
              }).subscribe(function (response) {
                if (response) {
                  _this9.dialogRef.close();
                }
              });
            }
          }
        }, {
          key: "addKeywords",
          value: function addKeywords(event) {
            var input = event.input;
            var value = event.value;

            if ((value || '').trim()) {
              this.keywords.push(value.trim());
            }

            if (input) {
              input.value = '';
            }
          }
        }, {
          key: "removeKeywords",
          value: function removeKeywords(keyword) {
            var index = this.keywords.indexOf(keyword);

            if (index >= 0) {
              this.keywords.splice(index, 1);
            }
          }
        }]);

        return _CreateCategoryDialogComponent;
      }();

      _CreateCategoryDialogComponent.ɵfac = function CreateCategoryDialogComponent_Factory(t) {
        return new (t || _CreateCategoryDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
      };

      _CreateCategoryDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CreateCategoryDialogComponent,
        selectors: [["app-create-category-dialog"]],
        inputs: {
          itemService: "itemService",
          content: "content",
          categoryId: "categoryId"
        },
        decls: 29,
        vars: 6,
        consts: [["mat-dialog-title", "", 1, "header"], [1, "content"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["aria-label", "Keywords"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], [3, "matChipInputFor", "matChipInputTokenEnd"], [3, "ngModel", "ngModelChange"], [1, "dialogFooter"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", 3, "click"], [3, "removed"], ["matChipRemove", ""]],
        template: function CreateCategoryDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateCategoryDialogComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateCategoryDialogComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.image = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Keywords");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip-list", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateCategoryDialogComponent_mat_chip_19_Template, 4, 1, "mat-chip", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function CreateCategoryDialogComponent_Template_input_matChipInputTokenEnd_20_listener($event) {
              return ctx.addKeywords($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateCategoryDialogComponent_Template_mat_checkbox_ngModelChange_22_listener($event) {
              return ctx.enabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-dialog-actions", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCategoryDialogComponent_Template_button_click_27_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keywords);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.enabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content ? "Update" : "Create");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipRemove],
        styles: [".header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.dialogFooter[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jYXRlZ29yeS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRCQUF1QjtTQUF2Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6ImNyZWF0ZS1jYXRlZ29yeS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5kaWFsb2dGb290ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    40340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreateItemDialogComponent": function CreateItemDialogComponent() {
          return (
            /* binding */
            _CreateItemDialogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function CreateItemDialogComponent_mat_chip_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removed", function CreateItemDialogComponent_mat_chip_19_Template_mat_chip_removed_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var keyword_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.removeKeywords(keyword_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var keyword_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", keyword_r2, " ");
        }
      }

      var _CreateItemDialogComponent = /*#__PURE__*/function () {
        function _CreateItemDialogComponent(dialogRef) {
          _classCallCheck(this, _CreateItemDialogComponent);

          this.dialogRef = dialogRef;
          this.name = undefined;
          this.image = undefined;
          this.keywords = [];
          this.enabled = false;
        }

        _createClass(_CreateItemDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            if (this.content) {
              this.itemService.getElements({
                _id: this.categoryId
              }).subscribe(function (items) {
                if (items) {
                  var _iterator2 = _createForOfIteratorHelper(items),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var item = _step2.value;

                      if (item._id == _this10.content.id) {
                        _this10.name = item.name;
                        _this10.image = item.image;
                        _this10.keywords = item.keywords;
                        _this10.enabled = item.enabled;
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
              });
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this11 = this;

            if (this.content) {
              this.itemService.updateElement(this.content.id, {
                name: this.name,
                image: this.image,
                keywords: this.keywords,
                enabled: this.enabled
              }).subscribe(function (response) {
                if (response) {
                  _this11.dialogRef.close();
                }
              });
            } else {
              this.itemService.createElement(this.categoryId, {
                name: this.name,
                image: this.image,
                keywords: this.keywords,
                enabled: this.enabled
              }).subscribe(function (response) {
                if (response) {
                  _this11.dialogRef.close();
                }
              });
            }
          }
        }, {
          key: "addKeywords",
          value: function addKeywords(event) {
            var input = event.input;
            var value = event.value;

            if ((value || '').trim()) {
              this.keywords.push(value.trim());
            }

            if (input) {
              input.value = '';
            }
          }
        }, {
          key: "removeKeywords",
          value: function removeKeywords(keyword) {
            var index = this.keywords.indexOf(keyword);

            if (index >= 0) {
              this.keywords.splice(index, 1);
            }
          }
        }]);

        return _CreateItemDialogComponent;
      }();

      _CreateItemDialogComponent.ɵfac = function CreateItemDialogComponent_Factory(t) {
        return new (t || _CreateItemDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef));
      };

      _CreateItemDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CreateItemDialogComponent,
        selectors: [["app-create-item-dialog"]],
        inputs: {
          itemService: "itemService",
          content: "content",
          categoryId: "categoryId"
        },
        decls: 29,
        vars: 6,
        consts: [["mat-dialog-title", "", 1, "header"], [1, "content"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["aria-label", "Keywords"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], [3, "matChipInputFor", "matChipInputTokenEnd"], [3, "ngModel", "ngModelChange"], [1, "dialogFooter"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", 3, "click"], [3, "removed"], ["matChipRemove", ""]],
        template: function CreateItemDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemDialogComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemDialogComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.image = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Keywords");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip-list", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateItemDialogComponent_mat_chip_19_Template, 4, 1, "mat-chip", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matChipInputTokenEnd", function CreateItemDialogComponent_Template_input_matChipInputTokenEnd_20_listener($event) {
              return ctx.addKeywords($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateItemDialogComponent_Template_mat_checkbox_ngModelChange_22_listener($event) {
              return ctx.enabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-dialog-actions", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateItemDialogComponent_Template_button_click_27_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keywords);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.enabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content ? "Update" : "Create");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipRemove],
        styles: [".header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.dialogFooter[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1pdGVtLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQXVCO1NBQXZCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoiY3JlYXRlLWl0ZW0tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZGlhbG9nRm9vdGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    56481: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListComponent": function ListComponent() {
          return (
            /* binding */
            _ListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared/popup-menu/popup-menu.component */
      64908);
      /* harmony import */


      var _create_category_dialog_create_category_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./create-category-dialog/create-category-dialog.component */
      23693);
      /* harmony import */


      var _create_item_dialog_create_item_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-item-dialog/create-item-dialog.component */
      40340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_service_content_impl_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/content/impl/item.service */
      80321);
      /* harmony import */


      var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/auth/auth.service */
      27878);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/content-header/content-header.component */
      3497);
      /* harmony import */


      var _shared_image_view_image_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/image-view/image-view.component */
      46877);
      /* harmony import */


      var _components_layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/layout/loading/loading.component */
      83332);

      function ListComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div");
        }
      }

      function ListComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-content-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-image-view", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-popup-menu");
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("content", ctx_r2.imageContent);
        }
      }

      function ListComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loading");
        }
      }

      var _ListComponent = /*#__PURE__*/function () {
        function _ListComponent(router, itemService, authService, dialog) {
          _classCallCheck(this, _ListComponent);

          this.router = router;
          this.itemService = itemService;
          this.authService = authService;
          this.dialog = dialog;
          this.currentCategoryId = undefined;
        }

        _createClass(_ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd;
            })).subscribe(function (event) {
              _this12.loadPageContent(event.urlAfterRedirects);
            });
            this.loadPageContent(this.router.url);
          }
        }, {
          key: "loadPageContent",
          value: function loadPageContent(url) {
            var _this13 = this;

            url = url.slice(6, url.length);
            var path = url.length > 0 ? url.split('/') : [];

            if (path.length > 0) {
              this.itemService.getIdForPath(path).subscribe(function (id) {
                if (id) {
                  _this13.currentCategoryId = id.id;

                  _this13.itemService.getContent(id.id).subscribe(function (result) {
                    if (result) {
                      _this13.loadContent(result.categorys, result.elements);
                    }
                  });
                }
              });
            } else {
              this.itemService.getContent(undefined).subscribe(function (result) {
                if (result) {
                  _this13.currentCategoryId = undefined;

                  _this13.loadContent(result.categorys, result.elements);
                }
              });
            }
          }
        }, {
          key: "loadContent",
          value: function loadContent(categorys, items) {
            var imageContent = [];

            if (categorys) {
              var _iterator3 = _createForOfIteratorHelper(categorys),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var category = _step3.value;
                  imageContent.push({
                    front: {
                      id: category._id,
                      name: category.name,
                      image: category.image,
                      "class": 'category',
                      routerLink: "".concat(category.name),
                      rightClick: this.openSetting.bind(this)
                    }
                  });
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            if (items) {
              var _iterator4 = _createForOfIteratorHelper(items),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var item = _step4.value;
                  imageContent.push({
                    front: {
                      id: item._id,
                      name: item.name,
                      image: item.image,
                      "class": 'item',
                      routerLink: "".concat(item.name, "/view"),
                      rightClick: this.openSetting.bind(this)
                    }
                  });
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }

            imageContent.push({
              front: {
                name: 'Create Item',
                image: 'assets/image/create_item.png',
                leftClick: this.openCreateItem.bind(this),
                rightClick: this.swapSelection.bind(this),
                canView: this.authService.isInEditing.bind(this)
              },
              back: {
                name: "Create Category",
                image: 'assets/image/create_category.png',
                leftClick: this.openCreateCategory.bind(this),
                rightClick: this.swapSelection.bind(this),
                canView: this.authService.isInEditing.bind(this)
              }
            });
            this.imageContent = imageContent;
          }
        }, {
          key: "swapSelection",
          value: function swapSelection(event, content) {
            content.parent.flipped = !content.parent.flipped;
            return true;
          }
        }, {
          key: "openCreateCategory",
          value: function openCreateCategory(event, content) {
            var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (!this.authService.isInEditing()) {
              return false;
            }

            var dialog = this.dialog.open(_create_category_dialog_create_category_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CreateCategoryDialogComponent);
            dialog.componentInstance.itemService = this.itemService;
            dialog.componentInstance.content = update ? content : undefined;
            dialog.componentInstance.categoryId = this.currentCategoryId;
            return true;
          }
        }, {
          key: "openCreateItem",
          value: function openCreateItem(event, content) {
            var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (!this.authService.isInEditing()) {
              return false;
            }

            var dialog = this.dialog.open(_create_item_dialog_create_item_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CreateItemDialogComponent);
            dialog.componentInstance.itemService = this.itemService;
            dialog.componentInstance.content = update ? content : undefined;
            dialog.componentInstance.categoryId = this.currentCategoryId;
            return true;
          }
        }, {
          key: "openSetting",
          value: function openSetting(event, content) {
            var _this14 = this;

            if (!this.authService.isInEditing()) {
              return false;
            }

            this.popupMenu.fields = [{
              name: 'Update',
              leftClick: function () {
                if (content["class"] == "item") {
                  _this14.openCreateItem(event, content, true);
                } else {
                  _this14.openCreateCategory(event, content, true);
                }
              }.bind(this)
            }, {
              name: 'Delete',
              leftClick: function () {
                if (content["class"] == "item") {
                  _this14.itemService.deleteElement(content.id).subscribe();
                } else {
                  _this14.itemService.deleteCategory(content.id).subscribe();
                }
              }.bind(this)
            }];
            this.popupMenu.openMenu(event);
            return true;
          }
        }]);

        return _ListComponent;
      }();

      _ListComponent.ɵfac = function ListComponent_Factory(t) {
        return new (t || _ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_service_content_impl_item_service__WEBPACK_IMPORTED_MODULE_3__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
      };

      _ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _ListComponent,
        selectors: [["app-list"]],
        viewQuery: function ListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__.PopupMenuComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.popupMenu = _t.first);
          }
        },
        decls: 5,
        vars: 3,
        consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["loadedTemplate", ""], ["loadingTemplate", ""], ["title", "Items"], [3, "content"]],
        template: function ListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ListComponent_div_0_Template, 1, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ListComponent_ng_template_1_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, ListComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.imageContent)("ngIfThen", _r1)("ngIfElse", _r3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_5__.ContentHeaderComponent, _shared_image_view_image_view_component__WEBPACK_IMPORTED_MODULE_6__.ImageViewComponent, src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__.PopupMenuComponent, _components_layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__.LoadingComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    92254: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewComponent": function ViewComponent() {
          return (
            /* binding */
            _ViewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/dialog-form/dialog-form.component */
      57648);
      /* harmony import */


      var src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/popup-menu/popup-menu.component */
      64908);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_service_content_impl_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/content/impl/item.service */
      80321);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/auth/auth.service */
      27878);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/content-header/content-header.component */
      3497);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var ngx_markdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-markdown */
      36731);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/stepper */
      48210);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _components_layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/layout/loading/loading.component */
      83332);

      function ViewComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div");
        }
      }

      function ViewComponent_ng_template_1_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewComponent_ng_template_1_button_1_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r9.editName($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ViewComponent_ng_template_1_mat_tab_3_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Description ");
        }
      }

      function ViewComponent_ng_template_1_mat_tab_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewComponent_ng_template_1_mat_tab_3_ng_template_1_Template, 3, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "markdown", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.element.description);
        }
      }

      function ViewComponent_ng_template_1_mat_tab_4_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Checklist ");
        }
      }

      function ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Step ", i_r17 + 1, "");
        }
      }

      function ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);

            return ctx_r24.checklistFinish;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Finish");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);

            return ctx_r26.checklistDelete;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_ng_template_1_Template, 1, 1, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_button_4_Template, 2, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_button_5_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_button_6_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_button_7_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var checklist_r16 = ctx.$implicit;
          var i_r17 = ctx.index;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](checklist_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r17 != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r17 != ctx_r14.element.checklist.length - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r17 == ctx_r14.element.checklist.length - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.authService.isInEditing());
        }
      }

      function ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_3_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, "Add new element");
        }
      }

      function ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_3_ng_template_1_Template, 1, 0, "ng-template", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "textarea", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_3_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);

            return ctx_r29.checklistAdd;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ViewComponent_ng_template_1_mat_tab_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-stepper", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_2_Template, 8, 5, "mat-step", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewComponent_ng_template_1_mat_tab_4_div_2_mat_step_3_Template, 9, 0, "mat-step", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r13.element.checklist);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.authService.isInEditing());
        }
      }

      function ViewComponent_ng_template_1_mat_tab_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewComponent_ng_template_1_mat_tab_4_ng_template_1_Template, 3, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ViewComponent_ng_template_1_mat_tab_4_div_2_Template, 4, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.element.checklist.length != 0 || ctx_r7.authService.isInEditing());
        }
      }

      function ViewComponent_ng_template_1_mat_tab_5_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "movie");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Video ");
        }
      }

      function ViewComponent_ng_template_1_mat_tab_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewComponent_ng_template_1_mat_tab_5_ng_template_1_Template, 3, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "iframe", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r8.video, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function ViewComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-content-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewComponent_ng_template_1_button_1_Template, 3, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-tab-group", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewComponent_ng_template_1_mat_tab_3_Template, 4, 1, "mat-tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ViewComponent_ng_template_1_mat_tab_4_Template, 3, 1, "mat-tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ViewComponent_ng_template_1_mat_tab_5_Template, 3, 1, "mat-tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-popup-menu");
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", ctx_r2.element.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.authService.isInEditing());

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.displayDescription());

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.displayChecklist());

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.displayVideo());
        }
      }

      function ViewComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading");
        }
      }

      var _ViewComponent = /*#__PURE__*/function () {
        function _ViewComponent(router, route, itemService, dialog, sanitizer, authService) {
          _classCallCheck(this, _ViewComponent);

          this.router = router;
          this.route = route;
          this.itemService = itemService;
          this.dialog = dialog;
          this.sanitizer = sanitizer;
          this.authService = authService;
          this.updateDescription = true;
        }

        _createClass(_ViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.route.queryParams.subscribe(function (params) {
              var url = _this15.router.url;
              url = url.slice(6, url.length);

              _this15.loadPageContent(url.length > 0 ? url.split('/') : []);
            });
          }
        }, {
          key: "loadPageContent",
          value: function loadPageContent(path) {
            var _this16 = this;

            if (path.length > 1) {
              path.pop();
              this.itemService.getIdForPath(path).subscribe(function (result) {
                if (result && result.element) {
                  _this16.element = result.element;

                  _this16.updateVideo();
                }
              });
            }
          }
        }, {
          key: "updateVideo",
          value: function updateVideo() {
            var url = this.element.video;

            if (url != null && url.length > 0) {
              this.video = this.sanitizer.bypassSecurityTrustResourceUrl(url.replace("watch?v=", "embed/"));
            } else {
              this.video = undefined;
            }
          }
        }, {
          key: "displayDescription",
          value: function displayDescription() {
            var description = this.element.description;
            return description != undefined && description.length > 0;
          }
        }, {
          key: "displayChecklist",
          value: function displayChecklist() {
            var checklist = this.element.checklist;
            return this.authService.isInEditing() || checklist != undefined && checklist.length > 0;
          }
        }, {
          key: "displayVideo",
          value: function displayVideo() {
            var video = this.element.video;
            return video != undefined && video.length > 0;
          }
        }, {
          key: "editName",
          value: function editName(event) {
            var _this17 = this;

            this.popupMenu.fields = [{
              name: 'Name',
              leftClick: function () {
                var dialog = _this17.dialog.open(src_app_shared_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_0__.DialogFormComponent);

                dialog.componentInstance.title = "Edit name";
                dialog.componentInstance.fields = [{
                  id: 'name',
                  name: 'Name',
                  inputType: 'text',
                  value: _this17.element.name
                }];

                dialog.componentInstance.submit = function () {
                  _this17.element.name = dialog.componentInstance.getValue('name');

                  _this17.itemService.updateElement(_this17.element._id, _this17.element).subscribe(function () {
                    window.history.back();
                  });

                  dialog.close();
                };
              }.bind(this)
            }, {
              name: 'Description',
              leftClick: function () {
                var dialog = _this17.dialog.open(src_app_shared_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_0__.DialogFormComponent);

                dialog.componentInstance.title = "Edit description";
                dialog.componentInstance.fields = [{
                  id: 'description',
                  name: 'Description',
                  model: src_app_shared_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_0__.IFieldModel.TEXTAREA,
                  style: 'width: 80em',
                  value: _this17.element.description
                }];

                dialog.componentInstance.submit = function () {
                  _this17.element.description = dialog.componentInstance.getValue('description');

                  _this17.itemService.updateElement(_this17.element._id, _this17.element).subscribe();

                  dialog.close();
                  window.location.reload();
                };
              }.bind(this)
            }, {
              name: 'Video',
              leftClick: function () {
                var dialog = _this17.dialog.open(src_app_shared_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_0__.DialogFormComponent);

                dialog.componentInstance.title = "Edit video";
                dialog.componentInstance.fields = [{
                  id: 'video',
                  name: 'Video',
                  inputType: 'text',
                  style: 'width: 40em',
                  value: _this17.element.video
                }];

                dialog.componentInstance.submit = function () {
                  _this17.element.video = dialog.componentInstance.getValue('video');

                  _this17.itemService.updateElement(_this17.element._id, _this17.element).subscribe();

                  dialog.close();

                  _this17.updateVideo();
                };
              }.bind(this)
            }];
            this.popupMenu.openMenu(event);
          }
        }, {
          key: "checklistFinish",
          value: function checklistFinish() {
            console.log('jo');
          }
        }, {
          key: "checklistAdd",
          value: function checklistAdd() {
            console.log('jo');
          }
        }]);

        return _ViewComponent;
      }();

      _ViewComponent.ɵfac = function ViewComponent_Factory(t) {
        return new (t || _ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_content_impl_item_service__WEBPACK_IMPORTED_MODULE_2__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
      };

      _ViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _ViewComponent,
        selectors: [["app-view"]],
        viewQuery: function ViewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_1__.PopupMenuComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.popupMenu = _t.first);
          }
        },
        decls: 5,
        vars: 3,
        consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["loadedTemplate", ""], ["loadingTemplate", ""], [3, "title"], ["mat-icon-button", "", "aria-label", "Edit name", 3, "click", 4, "ngIf"], ["mat-align-tabs", "center"], [4, "ngIf"], ["mat-icon-button", "", "aria-label", "Edit name", 3, "click"], ["mat-tab-label", ""], ["emoji", "", 1, "description"], [1, "tab-icon"], ["class", "checklist", 4, "ngIf"], [1, "checklist"], ["orientation", "vertical", "linear", "true"], [4, "ngFor", "ngForOf"], ["matStepLabel", ""], ["mat-button", "", "matStepperPrevious", "", 4, "ngIf"], ["mat-button", "", "matStepperNext", "", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", "matStepperNext", ""], ["mat-button", "", 3, "click"], ["matInput", ""], ["width", "100%", "height", "100%", "frameborder", "0", "allowfullscreen", "", 2, "display", "flex", 3, "src"]],
        template: function ViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ViewComponent_div_0_Template, 1, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewComponent_ng_template_1_Template, 7, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.element)("ngIfThen", _r1)("ngIfElse", _r3);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_1__.PopupMenuComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabLabel, ngx_markdown__WEBPACK_IMPORTED_MODULE_14__.MarkdownComponent, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepper, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperPrevious, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperNext, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _components_layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent],
        styles: ["[_nghost-%COMP%] {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n\twhite-space: pre-line;\r\n}\r\n\r\n.tab-icon[_ngcontent-%COMP%] {\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.mat-tab-group[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n[_nghost-%COMP%]     .mat-tab-body-wrapper {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%] {\r\n    border-bottom: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuXHR3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbi50YWItaWNvbiB7XHJcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdGFiLW5hdi1iYXIsIC5tYXQtdGFiLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    80321: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemService": function ItemService() {
          return (
            /* binding */
            _ItemService
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

      var _ItemService = /*#__PURE__*/function (_content_service__WEB) {
        _inherits(_ItemService, _content_service__WEB);

        var _super11 = _createSuper(_ItemService);

        function _ItemService() {
          _classCallCheck(this, _ItemService);

          return _super11.apply(this, arguments);
        }

        _createClass(_ItemService, [{
          key: "_getIdForPath",
          value: function _getIdForPath(path) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ItemService.ROUTE_ELEMENT, "/path"), {
              path: path
            });
          }
        }, {
          key: "_getCategorys",
          value: function _getCategorys(options) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ItemService.ROUTE_CATEGORY), options);
          }
        }, {
          key: "_getElements",
          value: function _getElements(options) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ItemService.ROUTE_ELEMENT), options);
          }
        }, {
          key: "_createCategory",
          value: function _createCategory(parentId, category) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ItemService.ROUTE_CATEGORY, "/create"), Object.assign(Object.assign({}, category), {
              _parentId: parentId
            }));
          }
        }, {
          key: "_createElement",
          value: function _createElement(categoryId, element) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ItemService.ROUTE_ELEMENT, "/create"), Object.assign(Object.assign({}, element), {
              _categoryId: categoryId
            }));
          }
        }, {
          key: "_updateCategory",
          value: function _updateCategory(categoryId, category) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ItemService.ROUTE_CATEGORY, "/update"), Object.assign(Object.assign({}, category), {
              _id: categoryId
            }));
          }
        }, {
          key: "_updateElement",
          value: function _updateElement(elementId, element) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ItemService.ROUTE_ELEMENT, "/update"), Object.assign(Object.assign({}, element), {
              _id: elementId
            }));
          }
        }, {
          key: "_deleteCategory",
          value: function _deleteCategory(categoryId) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ItemService.ROUTE_CATEGORY, "/delete"), {
              _id: categoryId
            });
          }
        }, {
          key: "_deleteElement",
          value: function _deleteElement(elementId) {
            return this.httpClient.post("".concat(_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN, "/").concat(_ItemService.ROUTE_ELEMENT, "/delete"), {
              _id: elementId
            });
          }
        }]);

        return _ItemService;
      }(_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService);

      _ItemService.ROUTE_ELEMENT = "item";
      _ItemService.ROUTE_CATEGORY = "item/category";

      _ItemService.ɵfac = /*@__PURE__*/function () {
        var ɵItemService_BaseFactory;
        return function ItemService_Factory(t) {
          return (ɵItemService_BaseFactory || (ɵItemService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_ItemService)))(t || _ItemService);
        };
      }();

      _ItemService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ItemService,
        factory: _ItemService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_item_item_module_ts-es5.js.map