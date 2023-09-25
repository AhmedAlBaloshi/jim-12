"use strict";
(self["webpackChunkJimAdmin"] = self["webpackChunkJimAdmin"] || []).push([[238],{

/***/ 2544:
/*!***********************************************************************!*\
  !*** ./src/app/pages/emails-details/emails-details-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailsDetailsRoutingModule": () => (/* binding */ EmailsDetailsRoutingModule)
/* harmony export */ });
/* harmony import */ var _emails_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emails-details.component */ 52677);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




const routes = [
    {
        path: '',
        component: _emails_details_component__WEBPACK_IMPORTED_MODULE_0__.EmailsDetailsComponent
    }
];
class EmailsDetailsRoutingModule {
}
EmailsDetailsRoutingModule.ɵfac = function EmailsDetailsRoutingModule_Factory(t) { return new (t || EmailsDetailsRoutingModule)(); };
EmailsDetailsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EmailsDetailsRoutingModule });
EmailsDetailsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmailsDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 52677:
/*!******************************************************************!*\
  !*** ./src/app/pages/emails-details/emails-details.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailsDetailsComponent": () => (/* binding */ EmailsDetailsComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 35226);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/apis.service */ 56070);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-toasty */ 84977);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 68423);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-ckeditor */ 76442);










class EmailsDetailsComponent {
    constructor(api, util, route, navCtrl, toastyService, spinner) {
        this.api = api;
        this.util = util;
        this.route = route;
        this.navCtrl = navCtrl;
        this.toastyService = toastyService;
        this.spinner = spinner;
        this.api.auth();
        this.route.queryParams.subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                const param = {
                    id: data.id
                };
                this.spinner.show();
                // contacts/getById
                this.api.post('contacts/getById', param).then((info) => {
                    this.spinner.hide();
                    console.log(info);
                    if (info && info.status === 200) {
                        const res = info.data[0];
                        console.log('res--->', res);
                        this.email = res.email;
                        this.message = res.message;
                        this.name = res.name;
                    }
                }).catch(error => {
                    console.log(error);
                    this.spinner.hide();
                });
            }
            else {
                this.navCtrl.back();
            }
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
    submit() {
        if (this.reply === '') {
            this.error('please add reply message');
            return false;
        }
        const param = {
            email: this.email,
            reply: this.reply
        };
        this.spinner.show();
        this.api.post('users/replyToContact', param).then((data) => {
            console.log(data);
            this.spinner.hide();
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                }
            });
            Toast.fire({
                icon: 'success',
                title: 'message sent successfully'
            });
            this.navCtrl.back();
        }).catch(error => {
            console.log(error);
        });
    }
}
EmailsDetailsComponent.ɵfac = function EmailsDetailsComponent_Factory(t) { return new (t || EmailsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_1__.ApisService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng2_toasty__WEBPACK_IMPORTED_MODULE_3__.ToastyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService)); };
EmailsDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EmailsDetailsComponent, selectors: [["app-emails-details"]], decls: 39, vars: 12, consts: [["type", "ball-pulse-sync", "color", "#e74c3c"], [2, "font-size", "20px", "color", "#e74c3c"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-body", "reset-table", "p-t-0"], [1, "form-group", "row"], [1, "col-sm-12"], [2, "font-weight", "bold"], ["debounce", "500", 3, "ngModel", "readonly", "ngModelChange"], [1, "btn", "btn-danger", "btn-round", 3, "click"]], template: function EmailsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 7)(30, "div", 8)(31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ckeditor", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EmailsDetailsComponent_Template_ckeditor_ngModelChange_33_listener($event) { return ctx.reply = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 7)(35, "div", 8)(36, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailsDetailsComponent_Template_button_click_36_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "ng2-toasty");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Please wait..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Manage app"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Replay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.reply)("readonly", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api.translate("Submit"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ng2_toasty__WEBPACK_IMPORTED_MODULE_3__.ToastyComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerComponent, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__.CKEditorComponent] });


/***/ }),

/***/ 24238:
/*!***************************************************************!*\
  !*** ./src/app/pages/emails-details/emails-details.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailsDetailsModule": () => (/* binding */ EmailsDetailsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _emails_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emails-details-routing.module */ 2544);
/* harmony import */ var _emails_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emails-details.component */ 52677);
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-ckeditor */ 76442);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);






class EmailsDetailsModule {
}
EmailsDetailsModule.ɵfac = function EmailsDetailsModule_Factory(t) { return new (t || EmailsDetailsModule)(); };
EmailsDetailsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EmailsDetailsModule });
EmailsDetailsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _emails_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailsDetailsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__.CKEditorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmailsDetailsModule, { declarations: [_emails_details_component__WEBPACK_IMPORTED_MODULE_1__.EmailsDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _emails_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailsDetailsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__.CKEditorModule] }); })();


/***/ }),

/***/ 76442:
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/__ivy_ngcc__/fesm2015/ng2-ckeditor.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CKEditorComponent": () => (/* binding */ CKEditorComponent),
/* harmony export */   "CKEditorModule": () => (/* binding */ CKEditorModule),
/* harmony export */   "ɵa": () => (/* binding */ CKButtonDirective),
/* harmony export */   "ɵb": () => (/* binding */ CKGroupDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);



/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */


const _c0 = ["host"];

class CKButtonDirective {
  constructor() {
    this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  initialize(editor) {
    editor.instance.addCommand(this.command, {
      exec: edit => {
        this.click.emit(edit);
        return true;
      }
    });
    editor.instance.ui.addButton(this.name, {
      label: this.label,
      command: this.command,
      toolbar: this.toolbar,
      icon: this.icon
    });
  }

  ngOnInit() {
    if (!this.name) {
      throw new Error('Attribute "name" is required on <ckbutton>');
    }

    if (!this.command) {
      throw new Error('Attribute "command" is required on <ckbutton>');
    }
  }

}

CKButtonDirective.ɵfac = function CKButtonDirective_Factory(t) {
  return new (t || CKButtonDirective)();
};

CKButtonDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CKButtonDirective,
  selectors: [["ckbutton"]],
  inputs: {
    label: "label",
    command: "command",
    toolbar: "toolbar",
    name: "name",
    icon: "icon"
  },
  outputs: {
    click: "click"
  }
});
CKButtonDirective.propDecorators = {
  click: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  command: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  toolbar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  icon: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKButtonDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ckbutton'
    }]
  }], function () {
    return [];
  }, {
    click: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    command: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    toolbar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */


class CKGroupDirective {
  ngAfterContentInit() {
    // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
    this.toolbarButtons.forEach(button => button.toolbar = this.name);
  }

  initialize(editor) {
    editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf); // Initialize each button within ckgroup

    this.toolbarButtons.forEach(button => {
      button.initialize(editor);
    });
  }

}

CKGroupDirective.ɵfac = function CKGroupDirective_Factory(t) {
  return new (t || CKGroupDirective)();
};

CKGroupDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CKGroupDirective,
  selectors: [["ckgroup"]],
  contentQueries: function CKGroupDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKButtonDirective, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarButtons = _t);
    }
  },
  inputs: {
    name: "name",
    previous: "previous",
    subgroupOf: "subgroupOf"
  }
});
CKGroupDirective.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  previous: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  subgroupOf: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  toolbarButtons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [CKButtonDirective]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKGroupDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ckgroup'
    }]
  }], null, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    previous: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    subgroupOf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    toolbarButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [CKButtonDirective]
    }]
  });
})(); // Imports

/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */


class CKEditorComponent {
  /**
   * Constructor
   */
  constructor(zone) {
    this.zone = zone;
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.editorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.contentDom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._value = '';
    this.destroyed = false;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  ngOnChanges(changes) {
    if (changes.readonly && this.instance) {
      this.instance.setReadOnly(changes.readonly.currentValue);
    }
  }
  /**
   * On component destroy
   */


  ngOnDestroy() {
    this.destroyed = true;
    this.zone.runOutsideAngular(() => {
      if (this.instance) {
        CKEDITOR.removeAllListeners();
        this.instance.destroy();
        this.instance = null;
      }
    });
  }
  /**
   * On component view init
   */


  ngAfterViewInit() {
    if (this.destroyed) {
      return;
    }

    this.ckeditorInit(this.config || {});
  }
  /**
   * On component view checked
   */


  ngAfterViewChecked() {
    this.ckeditorInit(this.config || {});
  }
  /**
   * Value update process
   */


  updateValue(value) {
    this.zone.run(() => {
      this.value = value;
      this.onChange(value);
      this.onTouched();
      this.change.emit(value);
    });
  }
  /**
   * CKEditor init
   */


  ckeditorInit(config) {
    if (typeof CKEDITOR === 'undefined') {
      console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
    } else {
      // Check textarea exists
      if (this.instance || !this.documentContains(this.host.nativeElement)) {
        return;
      }

      if (this.readonly) {
        config.readOnly = this.readonly;
      } // CKEditor replace textarea


      this.instance = CKEDITOR.replace(this.host.nativeElement, config); // Set initial value

      this.instance.setData(this.value); // listen for instanceReady event

      this.instance.on('instanceReady', evt => {
        // if value has changed while instance loading
        // update instance with current component value
        if (this.instance.getData() !== this.value) {
          this.instance.setData(this.value);
        } // send the evt to the EventEmitter


        this.ready.emit(evt);
      }); // CKEditor change event

      this.instance.on('change', evt => {
        this.onTouched();
        const value = this.instance.getData();

        if (this.value !== value) {
          // Debounce update
          if (this.debounce) {
            if (this.debounceTimeout) {
              clearTimeout(this.debounceTimeout);
            }

            this.debounceTimeout = window.setTimeout(() => {
              this.updateValue(value);
              this.debounceTimeout = null;
            }, parseInt(this.debounce)); // Live update
          } else {
            this.updateValue(value);
          }
        } // Original ckeditor event dispatch


        this.editorChange.emit(evt);
      }); // CKEditor blur event

      this.instance.on('blur', evt => {
        this.blur.emit(evt);
      }); // CKEditor focus event

      this.instance.on('focus', evt => {
        this.focus.emit(evt);
      }); // CKEditor contentDom event

      this.instance.on('contentDom', evt => {
        this.contentDom.emit(evt);
      }); // CKEditor fileUploadRequest event

      this.instance.on('fileUploadRequest', evt => {
        this.fileUploadRequest.emit(evt);
      }); // CKEditor fileUploadResponse event

      this.instance.on('fileUploadResponse', evt => {
        this.fileUploadResponse.emit(evt);
      }); // CKEditor paste event

      this.instance.on('paste', evt => {
        this.paste.emit(evt);
      }); // CKEditor drop event

      this.instance.on('drop', evt => {
        this.drop.emit(evt);
      }); // Add Toolbar Groups to Editor. This will also add Buttons within groups.

      this.toolbarGroups.forEach(group => {
        group.initialize(this);
      }); // Add Toolbar Buttons to Editor.

      this.toolbarButtons.forEach(button => {
        button.initialize(this);
      });
    }
  }
  /**
   * Implements ControlValueAccessor
   */


  writeValue(value) {
    this._value = value;
    if (this.instance) this.instance.setData(value);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  documentContains(node) {
    return document.contains ? document.contains(node) : document.body.contains(node);
  }

}

CKEditorComponent.ɵfac = function CKEditorComponent_Factory(t) {
  return new (t || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

CKEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CKEditorComponent,
  selectors: [["ckeditor"]],
  contentQueries: function CKEditorComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKButtonDirective, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CKGroupDirective, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarButtons = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toolbarGroups = _t);
    }
  },
  viewQuery: function CKEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.host = _t.first);
    }
  },
  inputs: {
    value: "value",
    config: "config",
    readonly: "readonly",
    debounce: "debounce"
  },
  outputs: {
    change: "change",
    editorChange: "editorChange",
    ready: "ready",
    blur: "blur",
    focus: "focus",
    contentDom: "contentDom",
    fileUploadRequest: "fileUploadRequest",
    fileUploadResponse: "fileUploadResponse",
    paste: "paste",
    drop: "drop"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CKEditorComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 0,
  consts: [["host", ""]],
  template: function CKEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", null, 0);
    }
  },
  encapsulation: 2
});

CKEditorComponent.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
}];

CKEditorComponent.propDecorators = {
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  readonly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  debounce: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  change: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  editorChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  ready: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  blur: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  focus: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  contentDom: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  fileUploadRequest: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  fileUploadResponse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  paste: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  drop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  host: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
    args: ['host', {
      static: false
    }]
  }],
  toolbarButtons: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [CKButtonDirective]
  }],
  toolbarGroups: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
    args: [CKGroupDirective]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ckeditor',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CKEditorComponent),
        multi: true
      }],
      template: `<textarea #host></textarea>`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    editorChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    ready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    blur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    focus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contentDom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    fileUploadRequest: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    fileUploadResponse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    paste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    drop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    debounce: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    host: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['host', {
        static: false
      }]
    }],
    toolbarButtons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [CKButtonDirective]
    }],
    toolbarGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [CKGroupDirective]
    }]
  });
})();
/**
 * CKEditorModule
 */


class CKEditorModule {}

CKEditorModule.ɵfac = function CKEditorModule_Factory(t) {
  return new (t || CKEditorModule)();
};

CKEditorModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CKEditorModule
});
CKEditorModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CKEditorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
      exports: [CKEditorComponent, CKButtonDirective, CKGroupDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CKEditorModule, {
    declarations: function () {
      return [CKEditorComponent, CKButtonDirective, CKGroupDirective];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule];
    },
    exports: function () {
      return [CKEditorComponent, CKButtonDirective, CKGroupDirective];
    }
  });
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ng2-ckeditor.js.map

/***/ })

}]);