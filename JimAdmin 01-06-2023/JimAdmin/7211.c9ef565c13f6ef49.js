"use strict";
(self["webpackChunkJimAdmin"] = self["webpackChunkJimAdmin"] || []).push([[7211],{

/***/ 71625:
/*!*************************************************************************!*\
  !*** ./src/app/pages/manage-contacts/manage-contacts-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageContactsRoutingModule": () => (/* binding */ ManageContactsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _manage_contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-contacts.component */ 77634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




const routes = [
    {
        path: '',
        component: _manage_contacts_component__WEBPACK_IMPORTED_MODULE_0__.ManageContactsComponent
    }
];
class ManageContactsRoutingModule {
}
ManageContactsRoutingModule.ɵfac = function ManageContactsRoutingModule_Factory(t) { return new (t || ManageContactsRoutingModule)(); };
ManageContactsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ManageContactsRoutingModule });
ManageContactsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManageContactsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 77634:
/*!********************************************************************!*\
  !*** ./src/app/pages/manage-contacts/manage-contacts.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageContactsComponent": () => (/* binding */ ManageContactsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

class ManageContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManageContactsComponent.ɵfac = function ManageContactsComponent_Factory(t) { return new (t || ManageContactsComponent)(); };
ManageContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageContactsComponent, selectors: [["app-manage-contacts"]], decls: 2, vars: 0, template: function ManageContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "manage-contacts works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } } });


/***/ }),

/***/ 27211:
/*!*****************************************************************!*\
  !*** ./src/app/pages/manage-contacts/manage-contacts.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageContactsModule": () => (/* binding */ ManageContactsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _manage_contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-contacts-routing.module */ 71625);
/* harmony import */ var _manage_contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-contacts.component */ 77634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);




class ManageContactsModule {
}
ManageContactsModule.ɵfac = function ManageContactsModule_Factory(t) { return new (t || ManageContactsModule)(); };
ManageContactsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ManageContactsModule });
ManageContactsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _manage_contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageContactsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ManageContactsModule, { declarations: [_manage_contacts_component__WEBPACK_IMPORTED_MODULE_1__.ManageContactsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _manage_contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageContactsRoutingModule] }); })();


/***/ })

}]);