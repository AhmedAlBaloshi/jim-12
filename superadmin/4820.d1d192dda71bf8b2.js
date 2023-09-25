"use strict";
(self["webpackChunkJimAdmin"] = self["webpackChunkJimAdmin"] || []).push([[4820],{

/***/ 11732:
/*!*************************************************************************!*\
  !*** ./src/app/pages/manage-cuisines/manage-cuisines-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCuisinesRoutingModule": () => (/* binding */ ManageCuisinesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _manage_cuisines_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-cuisines.component */ 77663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




const routes = [
    {
        path: '',
        component: _manage_cuisines_component__WEBPACK_IMPORTED_MODULE_0__.ManageCuisinesComponent
    }
];
class ManageCuisinesRoutingModule {
}
ManageCuisinesRoutingModule.ɵfac = function ManageCuisinesRoutingModule_Factory(t) { return new (t || ManageCuisinesRoutingModule)(); };
ManageCuisinesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageCuisinesRoutingModule });
ManageCuisinesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageCuisinesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 77663:
/*!********************************************************************!*\
  !*** ./src/app/pages/manage-cuisines/manage-cuisines.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCuisinesComponent": () => (/* binding */ ManageCuisinesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/apis.service */ 56070);
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-toasty */ 84977);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 68423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);








function ManageCuisinesComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.api.translate("CREATE NEW"));
} }
function ManageCuisinesComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.api.translate("Edit"));
} }
function ManageCuisinesComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageCuisinesComponent_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.create()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.api.translate("Add New Cuisine"), " ");
} }
function ManageCuisinesComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageCuisinesComponent_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.update()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.api.translate("Update Cuisine"), " ");
} }
class ManageCuisinesComponent {
    constructor(route, api, toastyService, spinner, navCtrl, util) {
        this.route = route;
        this.api = api;
        this.toastyService = toastyService;
        this.spinner = spinner;
        this.navCtrl = navCtrl;
        this.util = util;
        this.new = false;
        this.name_en = '';
        this.name_ar = '';
        this.coverImage = '';
        this.status = '';
        this.api.auth();
        this.route.queryParams.subscribe((data) => {
            this.new = data.register === 'true' ? true : false;
            if (!this.new && data.id) {
                this.id = data.id;
                this.getCuisine();
            }
        });
    }
    ngOnInit() {
    }
    getCuisine() {
        const param = {
            id: this.id
        };
        this.spinner.show();
        this.api.post('restcuisines/getById', param).then((res) => {
            this.spinner.hide();
            if (res && res.status === 200 && res.data.length) {
                const info = res.data[0];
                this.name_en = info.name_en;
                this.name_ar = info.name_ar;
                this.coverImage = info.cover;
                this.imageUrl = this.api.mediaURL + this.coverImage;
            }
            else {
                this.error('Something went wrong');
            }
        }, error => {
            console.log(error);
            this.spinner.hide();
            this.error('Something went wrong');
        }).catch(error => {
            console.log(error);
            this.spinner.hide();
            this.error('Something went wrong');
        });
    }
    error(message) {
        const toastOptions = {
            title: 'Error',
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
            title: 'Success',
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
    create() {
        if (this.name_en === '' || this.name_ar === '') {
            this.error('All Fields are required');
            return false;
        }
        if (!this.coverImage || this.coverImage === '') {
            this.error('Please add your cover image');
            return false;
        }
        this.spinner.show();
        const param = {
            name_en: this.name_en,
            name_ar: this.name_ar,
            status: 1,
            cover: this.coverImage
        };
        this.spinner.show();
        this.api.post('restcuisines/createCuisine', param).then((res) => {
            this.spinner.hide();
            if (res && res.data && res.status === 200) {
                this.navCtrl.back();
            }
            else {
                if (res && res.data && res.data.message) {
                    this.error(res.data.message);
                    return false;
                }
                this.error(res.message);
                return false;
            }
        });
    }
    preview_banner(files) {
        console.log('fle', files);
        if (files.length === 0) {
            return;
        }
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        if (files) {
            console.log('ok');
            this.spinner.show();
            this.api.uploadFile(files).subscribe((data) => {
                console.log('==>>', data);
                this.spinner.hide();
                if (data && data.status === 200 && data.data) {
                    // this.fileURL = data.data;
                    this.coverImage = data.data;
                    this.imageUrl = this.api.mediaURL + this.coverImage;
                }
            }, err => {
                console.log(err);
                this.spinner.hide();
            });
        }
        else {
            console.log('no');
        }
    }
    update() {
        if (this.name_en === '' || this.name_ar === '') {
            this.error('All Fields are required');
            return false;
        }
        if (!this.coverImage || this.coverImage === '') {
            this.error('Please add your cover image');
            return false;
        }
        this.spinner.show();
        const param = {
            name_en: this.name_en,
            name_ar: this.name_ar,
            cover: this.coverImage,
            id: this.id,
        };
        this.api.post('restcuisines/editCuisine', param).then((res) => {
            this.spinner.hide();
            if (res && res.data && res.status === 200) {
                this.navCtrl.back();
            }
            else {
                if (res && res.data && res.data.message) {
                    this.error(res.data.message);
                    this.navCtrl.back();
                    return false;
                }
                this.navCtrl.back();
                this.error(res.message);
                return false;
            }
        });
    }
}
ManageCuisinesComponent.ɵfac = function ManageCuisinesComponent_Factory(t) { return new (t || ManageCuisinesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_0__.ApisService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng2_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService)); };
ManageCuisinesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManageCuisinesComponent, selectors: [["app-manage-cuisines"]], decls: 35, vars: 15, consts: [["type", "ball-pulse-sync", "color", "#e74c3c"], [2, "font-size", "20px", "color", "#e74c3c"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [4, "ngIf"], [1, "card-body", "reset-table", "p-t-0"], [1, "sub-title"], [1, "form-group", "row"], [1, "col-sm-6"], ["type", "text", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], [1, "col-sm-4", "col-form-label"], [1, "col-sm-4"], ["type", "file", 1, "form-control", 3, "change"], ["alt", "", "onError", "this.src='assets/icon.png'", 2, "height", "100px", "width", "100px", "float", "right", 3, "src"], [1, "col-sm-12"], ["class", "btn btn-danger btn-round", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "btn-round", 3, "click"]], template: function ManageCuisinesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ManageCuisinesComponent_span_8_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ManageCuisinesComponent_span_9_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ManageCuisinesComponent_Template_input_ngModelChange_18_listener($event) { return ctx.name_en = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 10)(20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ManageCuisinesComponent_Template_input_ngModelChange_22_listener($event) { return ctx.name_ar = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9)(24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13)(27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ManageCuisinesComponent_Template_input_change_27_listener($event) { return ctx.preview_banner($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 9)(31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ManageCuisinesComponent_button_32_Template, 2, 1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ManageCuisinesComponent_button_33_Template, 2, 1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "ng2-toasty");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Please wait..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.api.translate("Cuisine"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Cuisine Details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Name (EN)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.name_en)("placeholder", ctx.api.translate("Name (EN)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Name (EN)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.name_ar)("placeholder", ctx.api.translate("Name (AR)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Upload cover image here"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.new);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ng2_toasty__WEBPACK_IMPORTED_MODULE_1__.ToastyComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerComponent] });


/***/ }),

/***/ 44820:
/*!*****************************************************************!*\
  !*** ./src/app/pages/manage-cuisines/manage-cuisines.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCuisinesModule": () => (/* binding */ ManageCuisinesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _manage_cuisines_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-cuisines-routing.module */ 11732);
/* harmony import */ var _manage_cuisines_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-cuisines.component */ 77663);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





class ManageCuisinesModule {
}
ManageCuisinesModule.ɵfac = function ManageCuisinesModule_Factory(t) { return new (t || ManageCuisinesModule)(); };
ManageCuisinesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ManageCuisinesModule });
ManageCuisinesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _manage_cuisines_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageCuisinesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ManageCuisinesModule, { declarations: [_manage_cuisines_component__WEBPACK_IMPORTED_MODULE_1__.ManageCuisinesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _manage_cuisines_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageCuisinesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);