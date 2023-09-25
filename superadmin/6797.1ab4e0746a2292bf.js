"use strict";
(self["webpackChunkJimAdmin"] = self["webpackChunkJimAdmin"] || []).push([[6797],{

/***/ 37297:
/*!***************************************************************************!*\
  !*** ./src/app/pages/manage-languages/manage-languages-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageLanguagesRoutingModule": () => (/* binding */ ManageLanguagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _manage_languages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-languages.component */ 60827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




const routes = [
    {
        path: '',
        component: _manage_languages_component__WEBPACK_IMPORTED_MODULE_0__.ManageLanguagesComponent
    }
];
class ManageLanguagesRoutingModule {
}
ManageLanguagesRoutingModule.ɵfac = function ManageLanguagesRoutingModule_Factory(t) { return new (t || ManageLanguagesRoutingModule)(); };
ManageLanguagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageLanguagesRoutingModule });
ManageLanguagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageLanguagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 60827:
/*!**********************************************************************!*\
  !*** ./src/app/pages/manage-languages/manage-languages.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageLanguagesComponent": () => (/* binding */ ManageLanguagesComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/apis.service */ 56070);
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ 84977);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 68423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);








function ManageLanguagesComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageLanguagesComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.create()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.api.translate("Add Language"));
} }
function ManageLanguagesComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManageLanguagesComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.update()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.api.translate("Update Language"));
} }
class ManageLanguagesComponent {
    constructor(api, toastyService, spinner, navCtrl, route) {
        this.api = api;
        this.toastyService = toastyService;
        this.spinner = spinner;
        this.navCtrl = navCtrl;
        this.route = route;
        this.name = '';
        this.status = 'active';
        this.banner_to_upload = '';
        this.jsonFile = '';
        this.jsonObject = '';
        this.jsonURL = '';
        this.coverImage = '';
        this.fileURL = '';
        this.position = 1;
        this.api.auth();
        this.route.queryParams.subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                this.id = data.id;
                this.edit = true;
                this.getById();
            }
            else {
                this.edit = false;
            }
        });
    }
    getById() {
        const param = {
            id: this.id
        };
        this.spinner.show();
        this.api.post('lang/getById', param).then((datas) => {
            this.spinner.hide();
            console.log('response', datas);
            if (datas && datas.data && datas.data.length) {
                const info = datas.data[0];
                this.fileURL = info.cover;
                this.name = info.name;
                this.id = info.id;
                this.coverImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mediaURL + info.cover;
                this.position = info.positions;
                this.jsonURL = info.file;
            }
        }, error => {
            this.spinner.hide();
            console.log('errror', error);
            this.error(this.api.translate('Something went wrong'));
        }).catch(error => {
            this.spinner.hide();
            console.log(error);
            this.error(this.api.translate('Something went wrong'));
        });
    }
    ngOnInit() {
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
    preview_banner(files) {
        console.log('fle', files);
        this.banner_to_upload = [];
        if (files.length === 0) {
            return;
        }
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        this.banner_to_upload = files;
        if (this.banner_to_upload) {
            console.log('ok');
            this.spinner.show();
            this.api.uploadFile(this.banner_to_upload).subscribe((data) => {
                console.log('==>>', data);
                this.spinner.hide();
                if (data && data.status === 200 && data.data) {
                    this.fileURL = data.data;
                    this.coverImage = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mediaURL + data.data;
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
    preview_banner2(files) {
        console.log('fle', files);
        this.jsonFile = [];
        if (files.length === 0) {
            return;
        }
        const mimeType = files[0].type;
        if (mimeType !== 'application/json') {
            this.error('Please upload valid json file');
            return;
        }
        console.log('upload new');
        this.jsonFile = files;
        if (this.jsonFile) {
            console.log('ok');
            this.spinner.show();
            this.api.uploadFile(this.jsonFile).subscribe((data) => {
                console.log('==>>', data);
                this.spinner.hide();
                if (data && data.status === 200 && data.data) {
                    this.jsonURL = data.data;
                    this.jsonObject = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mediaURL + data.data;
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
    create() {
        if (!this.name || this.name === '') {
            this.error('Please add name');
            return false;
        }
        if (this.coverImage === '' || !this.coverImage) {
            this.error(this.api.translate('Please add image'));
            return false;
        }
        if (this.jsonURL === '' || !this.jsonURL) {
            this.error('Please add file');
            return false;
        }
        this.spinner.show();
        const param = {
            cover: this.fileURL,
            status: 1,
            name: this.name,
            file: this.jsonURL,
            is_default: 0,
            positions: this.position,
        };
        console.log('ok', param);
        this.spinner.show();
        this.api.post('lang/save', param).then(data => {
            this.spinner.hide();
            console.log(data);
            this.api.alerts(this.api.translate('Success'), this.api.translate('Category added'), 'success');
            this.navCtrl.back();
        }, error => {
            this.spinner.hide();
            console.log(error);
            this.error(this.api.translate('Something went wrong'));
        }).catch(error => {
            this.spinner.hide();
            console.log(error);
            this.error(this.api.translate('Something went wrong'));
        });
    }
    update() {
        if (!this.name || this.name === '') {
            this.error('Please add name');
            return false;
        }
        if (this.coverImage === '' || !this.coverImage) {
            this.error(this.api.translate('Please add image'));
            return false;
        }
        if (this.jsonURL === '' || !this.jsonURL) {
            this.error('Please add file');
            return false;
        }
        this.spinner.show();
        const param = {
            cover: this.fileURL,
            name: this.name,
            id: this.id,
            file: this.jsonURL,
            positions: this.position
        };
        console.log('ok', param);
        this.spinner.show();
        this.api.post('lang/editList', param).then(data => {
            this.spinner.hide();
            console.log(data);
            this.api.alerts(this.api.translate('Success'), this.api.translate('Category added'), 'success');
            this.navCtrl.back();
        }, error => {
            this.spinner.hide();
            console.log(error);
            this.error(this.api.translate('Something went wrong'));
        }).catch(error => {
            this.spinner.hide();
            console.log(error);
            this.error(this.api.translate('Something went wrong'));
        });
    }
}
ManageLanguagesComponent.ɵfac = function ManageLanguagesComponent_Factory(t) { return new (t || ManageLanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_1__.ApisService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng2_toasty__WEBPACK_IMPORTED_MODULE_2__.ToastyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
ManageLanguagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManageLanguagesComponent, selectors: [["app-manage-languages"]], decls: 32, vars: 10, consts: [["type", "ball-pulse-sync", "color", "#e74c3c"], [2, "font-size", "20px", "color", "#e74c3c"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-body", "reset-table", "p-t-0"], [1, "form-group", "row"], [1, "col-sm-12"], ["type", "text", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], [1, "col-sm-4", "col-form-label"], [1, "col-sm-4"], ["type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["alt", "", "onError", "this.src='assets/icon.png'", 2, "height", "100px", "width", "100px", "float", "right", 3, "src"], ["type", "file", 1, "form-control", 3, "change"], ["class", "btn btn-danger btn-round", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "btn-round", 3, "click"]], template: function ManageLanguagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ManageLanguagesComponent_Template_input_ngModelChange_14_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7)(16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11)(19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ManageLanguagesComponent_Template_input_change_19_listener($event) { return ctx.preview_banner($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 7)(23, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 11)(26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ManageLanguagesComponent_Template_input_change_26_listener($event) { return ctx.preview_banner2($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 7)(28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ManageLanguagesComponent_button_29_Template, 2, 1, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ManageLanguagesComponent_button_30_Template, 2, 1, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "ng2-toasty");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Please wait..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.api.translate("Manage Languages"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Language name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.name)("placeholder", ctx.api.translate("Language name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Upload cover image here"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.coverImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Upload Language File"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ng2_toasty__WEBPACK_IMPORTED_MODULE_2__.ToastyComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent] });


/***/ }),

/***/ 66797:
/*!*******************************************************************!*\
  !*** ./src/app/pages/manage-languages/manage-languages.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageLanguagesModule": () => (/* binding */ ManageLanguagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _manage_languages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-languages-routing.module */ 37297);
/* harmony import */ var _manage_languages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-languages.component */ 60827);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





class ManageLanguagesModule {
}
ManageLanguagesModule.ɵfac = function ManageLanguagesModule_Factory(t) { return new (t || ManageLanguagesModule)(); };
ManageLanguagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ManageLanguagesModule });
ManageLanguagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _manage_languages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageLanguagesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ManageLanguagesModule, { declarations: [_manage_languages_component__WEBPACK_IMPORTED_MODULE_1__.ManageLanguagesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _manage_languages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageLanguagesRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);