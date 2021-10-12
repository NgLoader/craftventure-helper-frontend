"use strict";
(self["webpackChunkcraftventure"] = self["webpackChunkcraftventure"] || []).push([["src_app_components_archivement_archivement_module_ts"],{

/***/ 7111:
/*!*****************************************************************!*\
  !*** ./src/app/components/archivement/archivement.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchivementComponent": function() { return /* binding */ ArchivementComponent; }
/* harmony export */ });
/* harmony import */ var src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/popup-menu/popup-menu.component */ 64908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_content_impl_archivement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/content/impl/archivement.service */ 83330);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth/auth.service */ 27878);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/content-header/content-header.component */ 3497);
/* harmony import */ var _shared_image_view_image_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/image-view/image-view.component */ 46877);
/* harmony import */ var _layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/loading/loading.component */ 83332);











function ArchivementComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div");
} }
function ArchivementComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-content-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-image-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-popup-menu");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("content", ctx_r2.imageContent);
} }
function ArchivementComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading");
} }
class ArchivementComponent {
    constructor(archivementService, router, authService, dialog) {
        this.archivementService = archivementService;
        this.router = router;
        this.authService = authService;
        this.dialog = dialog;
        this.imageContent = [];
    }
    ngOnInit() {
        let url = this.router.url;
        url = url.slice(6, url.length);
        this.loadPageContent(url.length > 0 ? url.split('/') : []);
    }
    loadPageContent(path) {
        if (path.length > 0) {
            this.archivementService.getIdForPath(path).subscribe(id => {
                if (id) {
                    this.archivementService.getContent(id.id).subscribe(result => {
                        if (result) {
                            this.loadContent(result.categorys, result.elements);
                        }
                    });
                }
            });
        }
        else {
            this.archivementService.getContent(undefined).subscribe(result => {
                if (result) {
                    this.loadContent(result.categorys, result.elements);
                }
            });
        }
    }
    loadContent(categorys, items) {
        const imageContent = [];
        if (categorys) {
            for (const category of categorys) {
                imageContent.push({
                    front: {
                        id: category._id,
                        name: category.name,
                        image: category.image,
                        leftClick: (() => this.router.navigate([`${this.router.url}/${category.name}`])).bind(this)
                    }
                });
            }
        }
        if (items) {
            for (const item of items) {
                imageContent.push({
                    front: {
                        id: item._id,
                        name: item.name,
                        image: item.image,
                        rightClick: this.openSettings.bind(this)
                    }
                });
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
    openSettings(event, content) {
        if (!this.authService.isInEditing()) {
            return false;
        }
        this.popupMenu.fields = [{
                name: 'Update', /*
                leftClick: ((event2) => this.openUpdateDialog(event2, content)).bind(this) */
            },
            {
                name: 'Delete', /*
                leftClick: ((event2) => this.openDeleteDialog(event2, content)).bind(this) */
            }];
        this.popupMenu.openMenu(event);
        return true;
    }
}
ArchivementComponent.ɵfac = function ArchivementComponent_Factory(t) { return new (t || ArchivementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_content_impl_archivement_service__WEBPACK_IMPORTED_MODULE_1__.ArchivementService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
ArchivementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ArchivementComponent, selectors: [["app-archivement"]], viewQuery: function ArchivementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__.PopupMenuComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.popupMenu = _t.first);
    } }, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["loadedTemplate", ""], ["loadingTemplate", ""], ["title", "Archivements"], [3, "content"]], template: function ArchivementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ArchivementComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ArchivementComponent_ng_template_1_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ArchivementComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imageContent)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_3__.ContentHeaderComponent, _shared_image_view_image_view_component__WEBPACK_IMPORTED_MODULE_4__.ImageViewComponent, src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__.PopupMenuComponent, _layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNoaXZlbWVudC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 93509:
/*!**************************************************************!*\
  !*** ./src/app/components/archivement/archivement.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchivementModule": function() { return /* binding */ ArchivementModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/loading/loading.module */ 12389);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _archivement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./archivement.component */ 7111);
/* harmony import */ var src_app_shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dialog-form/dialog-form.module */ 33054);
/* harmony import */ var src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/image-view/image-view.module */ 91122);
/* harmony import */ var src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/content-header/content-header.module */ 63257);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/popup-menu/popup-menu.module */ 89562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);












class ArchivementModule {
}
ArchivementModule.ɵfac = function ArchivementModule_Factory(t) { return new (t || ArchivementModule)(); };
ArchivementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ArchivementModule });
ArchivementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            src_app_shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_2__.DialogFormModule,
            _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_0__.LoadingModule,
            src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__.ImageViewModule,
            src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule,
            src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__.PopupMenuModule,
            _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_0__.LoadingModule,
            src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__.ImageViewModule,
            src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule,
            src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__.PopupMenuModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([
                {
                    path: '',
                    component: _archivement_component__WEBPACK_IMPORTED_MODULE_1__.ArchivementComponent
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ArchivementModule, { declarations: [_archivement_component__WEBPACK_IMPORTED_MODULE_1__.ArchivementComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        src_app_shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_2__.DialogFormModule,
        _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_0__.LoadingModule,
        src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__.ImageViewModule,
        src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule,
        src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__.PopupMenuModule,
        _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_0__.LoadingModule,
        src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__.ImageViewModule,
        src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule,
        src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__.PopupMenuModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 83330:
/*!*************************************************************!*\
  !*** ./src/app/service/content/impl/archivement.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArchivementService": function() { return /* binding */ ArchivementService; }
/* harmony export */ });
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/api.service */ 14535);
/* harmony import */ var _content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content.service */ 16787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



class ArchivementService extends _content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService {
    _getIdForPath(path) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${ArchivementService.ROUTE_ELEMENT}/path`, { path });
    }
    _getCategorys(options) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${ArchivementService.ROUTE_CATEGORY}`, options);
    }
    _getElements(options) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${ArchivementService.ROUTE_ELEMENT}`, options);
    }
    _createCategory(parentId, category) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${ArchivementService.ROUTE_CATEGORY}/create`, Object.assign(Object.assign({}, category), { _parentId: parentId }));
    }
    _createElement(categoryId, element) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${ArchivementService.ROUTE_ELEMENT}/create`, Object.assign(Object.assign({}, element), { _categoryId: categoryId }));
    }
    _updateCategory(categoryId, category) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${ArchivementService.ROUTE_CATEGORY}/update`, Object.assign(Object.assign({}, category), { _id: categoryId }));
    }
    _updateElement(elementId, element) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${ArchivementService.ROUTE_ELEMENT}/update`, Object.assign(Object.assign({}, element), { _id: elementId }));
    }
    _deleteCategory(categoryId) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${ArchivementService.ROUTE_CATEGORY}/delete`, { _id: categoryId });
    }
    _deleteElement(elementId) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${ArchivementService.ROUTE_ELEMENT}/delete`, { _id: elementId });
    }
}
ArchivementService.ROUTE_ELEMENT = "archivement";
ArchivementService.ROUTE_CATEGORY = "archivement/category";
ArchivementService.ɵfac = /*@__PURE__*/ function () { let ɵArchivementService_BaseFactory; return function ArchivementService_Factory(t) { return (ɵArchivementService_BaseFactory || (ɵArchivementService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ArchivementService)))(t || ArchivementService); }; }();
ArchivementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ArchivementService, factory: ArchivementService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_components_archivement_archivement_module_ts-es2015.js.map