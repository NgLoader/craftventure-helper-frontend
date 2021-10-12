"use strict";
(self["webpackChunkcraftventure"] = self["webpackChunkcraftventure"] || []).push([["src_app_components_event_event-routing_module_ts"],{

/***/ 66638:
/*!**********************************************************!*\
  !*** ./src/app/components/event/event-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventRoutingModule": function() { return /* binding */ EventRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    {
        path: '**',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_image-view_image-view_module_ts"), __webpack_require__.e("default-src_app_service_content_content_service_ts-src_app_shared_content-header_content-head-345d97"), __webpack_require__.e("src_app_components_event_event_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./event.module */ 66560)).then(child => child.EventModule)
    }
];
class EventRoutingModule {
}
EventRoutingModule.ɵfac = function EventRoutingModule_Factory(t) { return new (t || EventRoutingModule)(); };
EventRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EventRoutingModule });
EventRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EventRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_event_event-routing_module_ts-es2015.js.map