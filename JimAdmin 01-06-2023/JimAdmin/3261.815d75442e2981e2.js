"use strict";
(self["webpackChunkJimAdmin"] = self["webpackChunkJimAdmin"] || []).push([[3261],{

/***/ 38318:
/*!*********************************************************************!*\
  !*** ./src/app/pages/blogs-details/blogs-details-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsDetailsRoutingModule": () => (/* binding */ BlogsDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _blogs_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogs-details.component */ 55999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




const routes = [
    {
        path: '',
        component: _blogs_details_component__WEBPACK_IMPORTED_MODULE_0__.BlogsDetailsComponent
    }
];
class BlogsDetailsRoutingModule {
}
BlogsDetailsRoutingModule.ɵfac = function BlogsDetailsRoutingModule_Factory(t) { return new (t || BlogsDetailsRoutingModule)(); };
BlogsDetailsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BlogsDetailsRoutingModule });
BlogsDetailsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BlogsDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 55999:
/*!****************************************************************!*\
  !*** ./src/app/pages/blogs-details/blogs-details.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsDetailsComponent": () => (/* binding */ BlogsDetailsComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 15439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/apis.service */ 56070);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 68423);
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-toasty */ 84977);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-ckeditor */ 76442);









class BlogsDetailsComponent {
    constructor(api, spinner, toastyService, route, navCtrl) {
        this.api = api;
        this.spinner = spinner;
        this.toastyService = toastyService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.api.auth();
        this.route.queryParams.subscribe((data) => {
            if (data && data.id) {
                this.edit = true;
                this.id = data.id;
                this.getById();
            }
            else {
                this.edit = false;
            }
        });
    }
    ngOnInit() {
    }
    getById() {
        const param = {
            id: this.id
        };
        this.spinner.show();
        this.api.post('blogs/getById', param).then((data) => {
            console.log(data);
            this.spinner.hide();
            if (data && data.status === 200 && data.data && data.data.length) {
                const info = data.data[0];
                console.log(info);
                this.title = info.title;
                this.cotent = info.content;
                this.cover = info.cover;
                this.status = info.status;
            }
            else {
                this.navCtrl.back();
                this.error(this.api.translate('Something went wrong'));
            }
        }).catch((error) => {
            console.log(error);
            this.spinner.hide();
            this.navCtrl.back();
            this.error(this.api.translate('Something went wrong'));
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
                    this.cover = data.data;
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
    onChange(event) {
    }
    onEditorChange(event) {
    }
    submit() {
        console.log('its', this.edit);
        if (!this.title || this.title === '' || !this.cotent || this.cotent === '') {
            this.error('All Fields are required');
            return false;
        }
        if (!this.cover || this.cover === '') {
            this.error(this.api.translate('Please add image'));
            return false;
        }
        if (this.edit) {
            this.updateContent();
        }
        else {
            this.createContent();
        }
    }
    createContent() {
        const param = {
            title: this.title,
            content: this.cotent,
            cover: this.cover,
            published: moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD'),
            status: 1
        };
        console.log(param);
        this.spinner.show();
        this.api.post('blogs/save', param).then((data) => {
            this.spinner.hide();
            console.log(data);
            if (data && data.status && data.status === 200) {
                this.api.alerts(this.api.translate('Success'), this.api.translate('Banner Added'), 'success');
                this.navCtrl.back();
            }
            else {
                this.error(this.api.translate('Something went wrong'));
            }
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
    updateContent() {
        const param = {
            id: this.id,
            title: this.title,
            content: this.cotent,
            cover: this.cover,
            published: moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD'),
            status: this.status
        };
        console.log(param);
        this.spinner.show();
        this.api.post('blogs/editList', param).then((data) => {
            this.spinner.hide();
            console.log(data);
            if (data && data.status && data.status === 200) {
                this.api.alerts(this.api.translate('Success'), this.api.translate('Updated!'), 'success');
                this.navCtrl.back();
            }
            else {
                this.error(this.api.translate('Something went wrong'));
            }
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
BlogsDetailsComponent.ɵfac = function BlogsDetailsComponent_Factory(t) { return new (t || BlogsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_1__.ApisService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng2_toasty__WEBPACK_IMPORTED_MODULE_2__.ToastyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location)); };
BlogsDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BlogsDetailsComponent, selectors: [["app-blogs-details"]], decls: 32, vars: 11, consts: [["type", "ball-pulse-sync", "color", "#e74c3c"], [2, "font-size", "20px", "color", "#e74c3c"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-body", "reset-table", "p-t-0"], [1, "form-group", "row"], [1, "col-sm-12"], ["type", "text", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["debounce", "500", 3, "ngModel", "readonly", "ngModelChange", "change", "editorChange"], [1, "col-sm-4", "col-form-label"], [1, "col-sm-4"], ["type", "file", "accept", "image/*", 1, "form-control", 3, "change"], ["alt", "", "onError", "this.src='assets/icon.png'", 2, "height", "100px", "width", "100px", "float", "right", 3, "src"], [1, "btn", "btn-danger", "btn-round", 3, "click"]], template: function BlogsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BlogsDetailsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7)(16, "div", 8)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ckeditor", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BlogsDetailsComponent_Template_ckeditor_ngModelChange_19_listener($event) { return ctx.cotent = $event; })("change", function BlogsDetailsComponent_Template_ckeditor_change_19_listener($event) { return ctx.onChange($event); })("editorChange", function BlogsDetailsComponent_Template_ckeditor_editorChange_19_listener($event) { return ctx.onEditorChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7)(21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12)(24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BlogsDetailsComponent_Template_input_change_24_listener($event) { return ctx.preview_banner($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 7)(28, "div", 8)(29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BlogsDetailsComponent_Template_button_click_29_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "ng2-toasty");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Please wait..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Blog Details"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.title)("placeholder", ctx.api.translate("Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Contents"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.cotent)("readonly", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Upload cover image here"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.api.mediaURL + ctx.cover, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api.translate("Submit"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ng2_toasty__WEBPACK_IMPORTED_MODULE_2__.ToastyComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_8__.CKEditorComponent] });


/***/ }),

/***/ 3261:
/*!*************************************************************!*\
  !*** ./src/app/pages/blogs-details/blogs-details.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogsDetailsModule": () => (/* binding */ BlogsDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _blogs_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogs-details-routing.module */ 38318);
/* harmony import */ var _blogs_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blogs-details.component */ 55999);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-ckeditor */ 76442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);






class BlogsDetailsModule {
}
BlogsDetailsModule.ɵfac = function BlogsDetailsModule_Factory(t) { return new (t || BlogsDetailsModule)(); };
BlogsDetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: BlogsDetailsModule });
BlogsDetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _blogs_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogsDetailsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__.CKEditorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BlogsDetailsModule, { declarations: [_blogs_details_component__WEBPACK_IMPORTED_MODULE_1__.BlogsDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _blogs_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogsDetailsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__.CKEditorModule] }); })();


/***/ })

}]);