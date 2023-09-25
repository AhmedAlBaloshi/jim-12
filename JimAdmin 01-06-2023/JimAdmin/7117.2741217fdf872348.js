"use strict";
(self["webpackChunkJimAdmin"] = self["webpackChunkJimAdmin"] || []).push([[7117],{

/***/ 75737:
/*!***************************************************************************!*\
  !*** ./src/app/pages/major-categories/major-categories-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MajorCategoriesRoutingModule": () => (/* binding */ MajorCategoriesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _major_categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./major-categories.component */ 35069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




const routes = [
    {
        path: '',
        component: _major_categories_component__WEBPACK_IMPORTED_MODULE_0__.MajorCategoriesComponent
    }
];
class MajorCategoriesRoutingModule {
}
MajorCategoriesRoutingModule.ɵfac = function MajorCategoriesRoutingModule_Factory(t) { return new (t || MajorCategoriesRoutingModule)(); };
MajorCategoriesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MajorCategoriesRoutingModule });
MajorCategoriesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MajorCategoriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 35069:
/*!**********************************************************************!*\
  !*** ./src/app/pages/major-categories/major-categories.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MajorCategoriesComponent": () => (/* binding */ MajorCategoriesComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 35226);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/apis.service */ 56070);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 68423);
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ 84977);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 65765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-skeleton-loader */ 37683);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 68567);










const _c0 = ["content"];
const _c1 = function () { return { "border-radius": "5px", height: "10px", border: "1px solid white" }; };
function MajorCategoriesComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ngx-skeleton-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ngx-skeleton-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ngx-skeleton-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ngx-skeleton-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1));
} }
function MajorCategoriesComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td")(9, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MajorCategoriesComponent_tr_37_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const item_r3 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.changeStatus(item_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MajorCategoriesComponent_tr_37_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const item_r3 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.view(item_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td")(15, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MajorCategoriesComponent_tr_37_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const item_r3 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.deleteIt(item_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.api.mediaURL + item_r3.cover, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r3.name_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r3.name_ar);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx_r1.getClass(item_r3.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r3.status === "1" ? "Active" : "Deactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.api.translate("View"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.api.translate("Delete"));
} }
const _c2 = function (a2) { return { id: "pagin1", itemsPerPage: 10, currentPage: a2 }; };
class MajorCategoriesComponent {
    constructor(router, api, spinner, toastyService, modalService) {
        this.router = router;
        this.api = api;
        this.spinner = spinner;
        this.toastyService = toastyService;
        this.modalService = modalService;
        this.dummy = Array(5);
        this.dummyCates = [];
        this.page = 1;
        this.cuisineName = '';
        this.resetChanges = () => {
            this.majorCategories = this.dummyCates;
        };
        this.api.auth();
        this.getMajorCategories();
    }
    ngOnInit() {
    }
    getMajorCategories() {
        this.majorCategories = [];
        this.dummy = Array(10);
        this.api.get('majorcategories').then((res) => {
            this.dummy = [];
            if (res && res.data && res.data.length) {
                this.majorCategories = res.data;
                this.dummyCates = this.majorCategories;
            }
        }, error => {
            console.log(error);
            this.error(this.api.translate('Something went wrong'));
            this.dummy = [];
        }).catch(error => {
            console.log(error);
            this.error(this.api.translate('Something went wrong'));
        });
    }
    search(str) {
        this.resetChanges();
        this.majorCategories = this.filterItems(str);
    }
    setFilteredItems() {
        this.majorCategories = [];
        this.majorCategories = this.dummyCates;
    }
    filterItems(searchTerm) {
        return this.majorCategories.filter((item) => {
            return item.name_en.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
    error(message) {
        const toastOptions = {
            title: this.api.translate('Error'),
            msg: message,
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: (toast) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: () => {
                console.log('Toast  has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.error(toastOptions);
    }
    success(message) {
        const toastOptions = {
            title: this.api.translate('Success'),
            msg: message,
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: (toast) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: () => {
                console.log('Toast  has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.success(toastOptions);
    }
    getClass(item) {
        if (item === '1') {
            return 'btn btn-primary btn-round';
        }
        else if (item === '0') {
            return 'btn btn-danger btn-round';
        }
        return 'btn btn-warning btn-round';
    }
    createNew() {
        const navData = {
            queryParams: {
                register: true
            }
        };
        this.router.navigate(['manage-major-categories'], navData);
    }
    changeStatus(item) {
        const text = item.status === '1' ? 'deactive' : 'active';
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: this.api.translate('Are you sure?'),
            text: this.api.translate('To ') + text + this.api.translate(' this major categories!'),
            icon: 'question',
            showConfirmButton: true,
            confirmButtonText: this.api.translate('Yes'),
            showCancelButton: true,
            cancelButtonText: this.api.translate('Cancle'),
            backdrop: false,
            background: 'white'
        }).then((data) => {
            if (data && data.value) {
                console.log('update it');
                const query = item.status === '1' ? '0' : '1';
                const param = {
                    id: item.id,
                    status: query
                };
                this.spinner.show();
                this.api.post('cuisines/editCuisine', param).then((res) => {
                    this.spinner.hide();
                    this.getMajorCategories();
                }, error => {
                    this.spinner.hide();
                    this.error(this.api.translate('Something went wrong'));
                    console.log(error);
                }).catch(error => {
                    this.spinner.hide();
                    console.log(error);
                    this.error(this.api.translate('Something went wrong'));
                });
            }
        });
    }
    view(item) {
        const navData = {
            queryParams: {
                id: item.id,
                register: false
            }
        };
        this.router.navigate(['manage-major-categories'], navData);
    }
    deleteIt(item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: this.api.translate('Are you sure'),
            text: this.api.translate('to delete') + ' ' + item.name_en + ' ?',
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: this.api.translate('Delete'),
            backdrop: false,
            background: 'white'
        }).then(status => {
            if (status && status.value) {
                const param = {
                    id: item.id,
                };
                this.spinner.show();
                this.api.post('majorcategories/deleteList', param).then((res) => {
                    this.spinner.hide();
                    if (res && res.status === 200) {
                        this.getMajorCategories();
                        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 1000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                                toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                            }
                        });
                        Toast.fire({
                            icon: 'success',
                            title: this.api.translate('deleted')
                        });
                    }
                    else {
                        this.error(this.api.translate('Something went wrong'));
                    }
                }, error => {
                    console.log(error);
                    this.spinner.hide();
                    this.error(this.api.translate('Something went wrong'));
                }).catch(error => {
                    console.log(error);
                    this.spinner.hide();
                    this.error(this.api.translate('Something went wrong'));
                });
            }
        });
    }
}
MajorCategoriesComponent.ɵfac = function MajorCategoriesComponent_Factory(t) { return new (t || MajorCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_1__.ApisService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng2_toasty__WEBPACK_IMPORTED_MODULE_2__.ToastyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal)); };
MajorCategoriesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MajorCategoriesComponent, selectors: [["app-major-categories"]], viewQuery: function MajorCategoriesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 41, vars: 18, consts: [["type", "ball-pulse-sync", "color", "#e74c3c"], [2, "font-size", "20px", "color", "#e74c3c"], [1, "row"], [1, "col-sm-12"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-body", "reset-table", "p-t-0"], [1, "form-group", "row"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-6"], ["type", "text", 1, "form-control", "form-control-round", 3, "placeholder", "input"], [1, "col-sm-4"], ["type", "button", 1, "btn", "btn-danger", "btn-round", 2, "float", "right", 3, "click"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "text-uppercase"], [4, "ngFor", "ngForOf"], [1, "has-text-centered"], ["id", "pagin1", 3, "pageChange"], ["count", "1", 3, "theme"], ["href", "javascript:;"], ["onError", "this.src='assets/images/user.png'", "alt", "chat-user", 1, "img-responsive", 2, "height", "40px", 3, "src"], ["type", "button", 3, "className", "click"], ["type", "button", 1, "btn", "btn-success", "btn-round", "btn-outline-success", 3, "click"]], template: function MajorCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10)(15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MajorCategoriesComponent_Template_input_input_15_listener($event) { return ctx.search($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12)(17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MajorCategoriesComponent_Template_button_click_17_listener() { return ctx.createNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14)(20, "table", 15)(21, "thead")(22, "tr", 16)(23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, MajorCategoriesComponent_tr_36_Template, 9, 8, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, MajorCategoriesComponent_tr_37_Template, 17, 7, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 18)(40, "pagination-controls", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function MajorCategoriesComponent_Template_pagination_controls_pageChange_40_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Please wait..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.api.translate("All major categories"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx.api.translate("Search major category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("CREATE NEW"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Cover"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Name (EN)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Name (AR)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Delete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dummy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](38, 13, ctx.majorCategories, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c2, ctx.page)));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerComponent, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_9__.NgxSkeletonLoaderComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginatePipe] });


/***/ }),

/***/ 97117:
/*!*******************************************************************!*\
  !*** ./src/app/pages/major-categories/major-categories.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MajorCategoriesModule": () => (/* binding */ MajorCategoriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _major_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./major-categories-routing.module */ 75737);
/* harmony import */ var _major_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./major-categories.component */ 35069);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





class MajorCategoriesModule {
}
MajorCategoriesModule.ɵfac = function MajorCategoriesModule_Factory(t) { return new (t || MajorCategoriesModule)(); };
MajorCategoriesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MajorCategoriesModule });
MajorCategoriesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _major_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.MajorCategoriesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MajorCategoriesModule, { declarations: [_major_categories_component__WEBPACK_IMPORTED_MODULE_1__.MajorCategoriesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _major_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.MajorCategoriesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);