"use strict";
(self["webpackChunkcraftventure"] = self["webpackChunkcraftventure"] || []).push([["src_app_components_event_event_module_ts"],{

/***/ 34075:
/*!*****************************************************!*\
  !*** ./src/app/components/event/event.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventComponent": function() { return /* binding */ EventComponent; }
/* harmony export */ });
/* harmony import */ var src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/popup-menu/popup-menu.component */ 64908);
/* harmony import */ var src_app_shared_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/dialog-form/dialog-form.component */ 57648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_content_impl_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/content/impl/event.service */ 32853);
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth/auth.service */ 27878);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/content-header/content-header.component */ 3497);
/* harmony import */ var _shared_image_view_image_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/image-view/image-view.component */ 46877);
/* harmony import */ var _layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/loading/loading.component */ 83332);












function EventComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div");
} }
function EventComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-content-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-image-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-popup-menu");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("content", ctx_r2.imageContent);
} }
function EventComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loading");
} }
class EventComponent {
    constructor(eventService, authService, dialog, router) {
        this.eventService = eventService;
        this.authService = authService;
        this.dialog = dialog;
        this.router = router;
        this.imageContent = [];
    }
    ngOnInit() {
        let url = this.router.url;
        url = url.slice(6, url.length);
        this.loadPageContent(url.length > 0 ? url.split('/') : []);
    }
    loadPageContent(path) {
        if (path.length > 0) {
            this.eventService.getIdForPath(path).subscribe(id => {
                if (id) {
                    this.currentPathId = id.id;
                    this.eventService.getContent(this.currentPathId).subscribe(result => {
                        if (result) {
                            this.loadContent(result.categorys, result.elements);
                        }
                    });
                }
            });
        }
        else {
            this.currentPathId = undefined;
            this.eventService.getContent(undefined).subscribe(result => {
                console.log('CONTENT UPDATE ' + result);
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
                        id: `C_${category._id}`,
                        name: category.name,
                        image: category.image,
                        leftClick: (() => this.router.navigate([`${this.router.url}/${category.name}`])).bind(this),
                        rightClick: this.openSettings.bind(this)
                    }
                });
            }
        }
        if (items) {
            for (const item of items) {
                imageContent.push({
                    front: {
                        id: `I_${item._id}`,
                        name: item.name,
                        image: item.image,
                        rightClick: this.openSettings.bind(this)
                    }
                });
            }
        }
        imageContent.push({
            front: {
                name: 'Create Item',
                image: 'assets/image/create_item.png',
                leftClick: this.openCreateCategory.bind(this),
                rightClick: this.swapSelection.bind(this),
                canView: this.authService.isInEditing.bind(this),
            },
            back: {
                name: "Create Category",
                image: 'assets/image/create_category.png',
                leftClick: this.openCreateCategory.bind(this),
                rightClick: this.swapSelection.bind(this),
                canView: this.authService.isInEditing.bind(this),
            }
        });
        this.imageContent = imageContent;
    }
    swapSelection(event, content) {
        content.parent.flipped = !content.parent.flipped;
        return true;
    }
    openSettings(event, content) {
        if (!this.authService.isInEditing()) {
            return false;
        }
        this.popupMenu.fields = [
            {
                name: 'Delete',
                leftClick: ((event2) => this.openDeleteDialog(event2, content)).bind(this)
            }
        ];
        this.popupMenu.openMenu(event);
        return true;
    }
    openCreateCategory(event, content) {
        if (!this.authService.isInEditing()) {
            return false;
        }
        const dialog = this.dialog.open(src_app_shared_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_1__.DialogFormComponent);
        const instance = dialog.componentInstance;
        instance.title = "Create event";
        instance.fields = [{
                id: 'name',
                name: 'Name'
            }];
        instance.submit = () => {
            instance.title = "Loading";
            this.eventService.createCategory(undefined, {
                name: instance.getValue('name'),
                description: '',
                image: '',
                keywords: []
            }).subscribe(res => {
                instance.title = "Success";
                this.eventService.getContent(this.currentPathId, false).subscribe();
                dialog.close();
            }, error => {
                console.log(error);
            });
        };
        return true;
    }
    openDeleteDialog(event, content) {
        if (!this.authService.isInEditing()) {
            return false;
        }
        const dialog = this.dialog.open(src_app_shared_dialog_form_dialog_form_component__WEBPACK_IMPORTED_MODULE_1__.DialogFormComponent);
        const instance = dialog.componentInstance;
        instance.title = "Delete";
        instance.submit = () => {
            instance.title = "Loading";
            if (content.id.startsWith('C_')) {
                this.eventService.deleteCategory(content.id.substring(2)).subscribe(() => {
                    this.eventService.getContent(this.currentPathId, false).subscribe();
                    dialog.close();
                });
                return;
            }
            this.eventService.deleteElement(content.id.substring(2)).subscribe(() => {
                this.eventService.getContent(this.currentPathId, false).subscribe();
                dialog.close();
            });
        };
        return true;
    }
}
EventComponent.ɵfac = function EventComponent_Factory(t) { return new (t || EventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_service_content_impl_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
EventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EventComponent, selectors: [["app-event"]], viewQuery: function EventComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__.PopupMenuComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.popupMenu = _t.first);
    } }, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["loadedTemplate", ""], ["loadingTemplate", ""], ["title", "Events"], [3, "content"]], template: function EventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EventComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EventComponent_ng_template_1_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, EventComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.imageContent)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderComponent, _shared_image_view_image_view_component__WEBPACK_IMPORTED_MODULE_5__.ImageViewComponent, src_app_shared_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_0__.PopupMenuComponent, _layout_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__.LoadingComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 66560:
/*!**************************************************!*\
  !*** ./src/app/components/event/event.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventModule": function() { return /* binding */ EventModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.component */ 34075);
/* harmony import */ var _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/loading/loading.module */ 12389);
/* harmony import */ var src_app_shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dialog-form/dialog-form.module */ 33054);
/* harmony import */ var src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/image-view/image-view.module */ 91122);
/* harmony import */ var src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/content-header/content-header.module */ 63257);
/* harmony import */ var src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/popup-menu/popup-menu.module */ 89562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);










class EventModule {
}
EventModule.ɵfac = function EventModule_Factory(t) { return new (t || EventModule)(); };
EventModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: EventModule });
EventModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_1__.LoadingModule,
            src_app_shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_2__.DialogFormModule,
            src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__.ImageViewModule,
            src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule,
            src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__.PopupMenuModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                {
                    path: '',
                    component: _event_component__WEBPACK_IMPORTED_MODULE_0__.EventComponent
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EventModule, { declarations: [_event_component__WEBPACK_IMPORTED_MODULE_0__.EventComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _layout_loading_loading_module__WEBPACK_IMPORTED_MODULE_1__.LoadingModule,
        src_app_shared_dialog_form_dialog_form_module__WEBPACK_IMPORTED_MODULE_2__.DialogFormModule,
        src_app_shared_image_view_image_view_module__WEBPACK_IMPORTED_MODULE_3__.ImageViewModule,
        src_app_shared_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_4__.ContentHeaderModule,
        src_app_shared_popup_menu_popup_menu_module__WEBPACK_IMPORTED_MODULE_5__.PopupMenuModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 32853:
/*!*******************************************************!*\
  !*** ./src/app/service/content/impl/event.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": function() { return /* binding */ EventService; }
/* harmony export */ });
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/api.service */ 14535);
/* harmony import */ var _content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content.service */ 16787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



class EventService extends _content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService {
    _getIdForPath(path) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${EventService.ROUTE_ELEMENT}/path`, { path });
    }
    _getCategorys(options) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${EventService.ROUTE_CATEGORY}`, options);
    }
    _getElements(options) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${EventService.ROUTE_ELEMENT}`, options);
    }
    _createCategory(parentId, category) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${EventService.ROUTE_CATEGORY}/create`, Object.assign(Object.assign({}, category), { _parentId: parentId }));
    }
    _createElement(categoryId, element) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${EventService.ROUTE_ELEMENT}/create`, Object.assign(Object.assign({}, element), { _categoryId: categoryId }));
    }
    _updateCategory(categoryId, category) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${EventService.ROUTE_CATEGORY}/update`, Object.assign(Object.assign({}, category), { _id: categoryId }));
    }
    _updateElement(elementId, element) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${EventService.ROUTE_ELEMENT}/update`, Object.assign(Object.assign({}, element), { _id: elementId }));
    }
    _deleteCategory(categoryId) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${EventService.ROUTE_CATEGORY}/delete`, { _id: categoryId });
    }
    _deleteElement(elementId) {
        return this.httpClient.post(`${_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService.DOMAIN}/${EventService.ROUTE_ELEMENT}/delete`, { _id: elementId });
    }
}
EventService.ROUTE_ELEMENT = "event";
EventService.ROUTE_CATEGORY = "event/category";
EventService.ɵfac = /*@__PURE__*/ function () { let ɵEventService_BaseFactory; return function EventService_Factory(t) { return (ɵEventService_BaseFactory || (ɵEventService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](EventService)))(t || EventService); }; }();
EventService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_components_event_event_module_ts-es2015.js.map