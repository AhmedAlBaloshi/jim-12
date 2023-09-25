"use strict";
(self["webpackChunkJimAdmin"] = self["webpackChunkJimAdmin"] || []).push([[3762],{

/***/ 1464:
/*!*******************************************************************!*\
  !*** ./src/app/pages/driver-stats/driver-stats-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverStatsRoutingModule": () => (/* binding */ DriverStatsRoutingModule)
/* harmony export */ });
/* harmony import */ var _driver_stats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-stats.component */ 17703);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




const routes = [
    {
        path: '',
        component: _driver_stats_component__WEBPACK_IMPORTED_MODULE_0__.DriverStatsComponent
    }
];
class DriverStatsRoutingModule {
}
DriverStatsRoutingModule.ɵfac = function DriverStatsRoutingModule_Factory(t) { return new (t || DriverStatsRoutingModule)(); };
DriverStatsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DriverStatsRoutingModule });
DriverStatsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DriverStatsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 17703:
/*!**************************************************************!*\
  !*** ./src/app/pages/driver-stats/driver-stats.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverStatsComponent": () => (/* binding */ DriverStatsComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 35226);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 15439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../assets/vfs_fonts.js */ 97991);
/* harmony import */ var _config_pdfFonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/pdfFonts */ 20381);
/* harmony import */ var _config_customStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../config/customStyles */ 31983);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 54641);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/apis.service */ 56070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 68423);
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-toasty */ 84977);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ 87078);



// importing the fonts and icons needed



// import the pdfmake library










function DriverStatsComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", item_r5.first_name, " ", item_r5.last_name, " ");
} }
function DriverStatsComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DriverStatsComponent_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.generatePDF()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.api.translate("Generate PDF"), "");
} }
function DriverStatsComponent_h2_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r2.api.translate("No Orders Found"), "\n");
} }
function DriverStatsComponent_div_38_tbody_39_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td", 29)(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "td", 30)(25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("#", item_r11.paid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", item_r11.str_name_en, " | ", item_r11.str_name_ar, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r11.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r11.pay_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r11.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r11.paid_to_driver == 1 ? "true" : "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r11.paid_to_driver_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("OMR ", item_r11.zone_shipping_price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("OMR ", item_r11.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("OMR ", item_r11.delivery_charge, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("OMR ", item_r11.grand_total, "");
} }
function DriverStatsComponent_div_38_tbody_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DriverStatsComponent_div_38_tbody_39_tr_1_Template, 27, 13, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r8.driverOrders);
} }
function DriverStatsComponent_div_38_tbody_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} }
function DriverStatsComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21)(1, "div", 3)(2, "div", 22)(3, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 27)(12, "table", 28)(13, "thead")(14, "tr")(15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, DriverStatsComponent_div_38_tbody_39_Template, 2, 1, "tbody", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, DriverStatsComponent_div_38_tbody_40_Template, 4, 0, "tbody", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 32)(42, "div", 33)(43, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 33)(48, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 33)(53, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 33)(58, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 33)(63, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.dname);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("", ctx_r3.getDate(ctx_r3.from), " ", ctx_r3.api.translate("to"), " ", ctx_r3.getDate(ctx_r3.to), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.dname);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.today());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dtOptions", ctx_r3.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("#"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Store Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Date/Time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Is Paid To Driver?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Paid To Driver Date/Time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Driver Delivery Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Delivery Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Grand Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r3.driverOrders == null ? null : ctx_r3.driverOrders.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r3.driverOrders == null ? null : ctx_r3.driverOrders.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r3.api.translate("Total Orders Amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r3.getCurrency(), " ", ctx_r3.totalOrdersAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r3.api.translate("Total Orders Amount without DELIVERY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r3.getCurrency(), " ", ctx_r3.totalOrdersAmountWithoutDelivery, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r3.api.translate("Total Cash Orders Amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r3.getCurrency(), " ", ctx_r3.totalCashOrdersAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r3.api.translate("Total Cash Orders Amount without DELIVERY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r3.getCurrency(), " ", ctx_r3.totalCashOrdersAmountWithoutDelivery, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r3.api.translate("Amount Pay"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r3.getCurrency(), " ", ctx_r3.totalShippingAmount, "");
} }
function DriverStatsComponent_div_39_tbody_31_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "td", 30)(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("#", item_r16.paid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", item_r16.str_name_en, " | ", item_r16.str_name_ar, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r16.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r16.pay_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r16.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r16.paid_to_driver == 1 ? "true" : "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r16.paid_to_driver_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("OMR ", item_r16.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("OMR ", item_r16.delivery_charge, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("OMR ", item_r16.grand_total, "");
} }
function DriverStatsComponent_div_39_tbody_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DriverStatsComponent_div_39_tbody_31_tr_1_Template, 24, 12, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r13.driverOrdersAll);
} }
function DriverStatsComponent_div_39_tbody_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} }
function DriverStatsComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21)(1, "div", 3)(2, "div", 22)(3, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 27)(6, "table", 28)(7, "thead")(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, DriverStatsComponent_div_39_tbody_31_Template, 2, 1, "tbody", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, DriverStatsComponent_div_39_tbody_32_Template, 4, 0, "tbody", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 32)(34, "div", 38)(35, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 38)(40, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 38)(45, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 38)(50, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.dname);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dtOptions", ctx_r4.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("#"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Store Name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Date/Time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Is Paid To Driver?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Paid To Driver Date/Time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Delivery Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Grand Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r4.driverOrdersAll == null ? null : ctx_r4.driverOrdersAll.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r4.driverOrdersAll == null ? null : ctx_r4.driverOrdersAll.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r4.api.translate("Total Orders Amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r4.getCurrency(), " ", ctx_r4.totalAllOrdersAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r4.api.translate("Total Orders Amount without DELIVERY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r4.getCurrency(), " ", ctx_r4.totalAllOrdersAmountWithoutDelivery, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r4.api.translate("Total Cash Orders Amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r4.getCurrency(), " ", ctx_r4.totalCashAllOrdersAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r4.api.translate("Total Cash Orders Amount without DELIVERY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r4.getCurrency(), " ", ctx_r4.totalCashAllOrdersAmountWithoutDelivery, "");
} }
// PDFMAKE fonts
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default().vfs) = _assets_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_2__.pdfMake.vfs;
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default().fonts) = _config_pdfFonts__WEBPACK_IMPORTED_MODULE_3__.pdfCustomFonts;
class Order {
    constructor(id = null, storeName = null, status = null, paymentMethod = null, customerAddress = null, dateTime = null, delivery = null, total = null) {
        this.id = id;
        this.storeName = storeName;
        this.status = status;
        this.paymentMethod = paymentMethod;
        this.customerAddress = customerAddress;
        this.dateTime = dateTime;
        this.delivery = delivery;
        this.total = total;
    }
}
class Invoice {
    constructor() {
        this.orders = [];
        // Initially one empty product row we will show 
        //this.orders.push(new Order());
    }
}
class DriverStatsComponent {
    constructor(api, router, spinner, toastyService, util) {
        this.api = api;
        this.router = router;
        this.spinner = spinner;
        this.toastyService = toastyService;
        this.util = util;
        this.driverOrders = [];
        this.driverOrdersAll = [];
        this.drivers = [];
        this.totalShippingAmount = 0;
        this.totalOrdersAmount = 0;
        this.totalOrdersAmountWithoutDelivery = 0;
        this.totalCashOrdersAmount = 0;
        this.totalCashOrdersAmountWithoutDelivery = 0;
        this.totalAllOrdersAmount = 0;
        this.totalAllOrdersAmountWithoutDelivery = 0;
        this.totalCashAllOrdersAmount = 0;
        this.totalCashAllOrdersAmountWithoutDelivery = 0;
        this.includePaidOrders = false;
        this.invoice = new Invoice();
        this.dtOptions = {};
        this.api.auth();
        this.getDrivers();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 20
        };
    }
    getDrivers() {
        this.spinner.show();
        this.api.get('drivers').then((data) => {
            this.spinner.hide();
            console.log(data);
            if (data && data.status === 200 && data.data.length) {
                this.drivers = data.data.filter(x => x.status === '1');
            }
        }, error => {
            this.spinner.hide();
            console.log(error);
            this.error('Something went wrong');
        }).catch(error => {
            console.log(error);
            this.spinner.hide();
            this.error('Something went wrong');
        });
    }
    getName() {
        return this.dname + '_' + moment__WEBPACK_IMPORTED_MODULE_1__(this.from).format('DDMMYYYY') + '_' + moment__WEBPACK_IMPORTED_MODULE_1__(this.to).format('DDMMYYYY');
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_1__(date).format('LL');
    }
    getCurrency() {
    }
    today() {
        return moment__WEBPACK_IMPORTED_MODULE_1__().format('LLL');
    }
    getCommisions(total) {
    }
    resetDriverOrders() {
        if (this.did && this.from && this.to) {
            let driverName;
            const filteredDriver = this.drivers.filter(x => x.id === this.did);
            if (filteredDriver && filteredDriver.length) {
                driverName = filteredDriver[0].first_name + ' ' + filteredDriver[0].last_name;
            }
            const param = {
                did: this.did,
                start: moment__WEBPACK_IMPORTED_MODULE_1__(this.from).format('YYYY-MM-DD HH:mm:00'),
                end: moment__WEBPACK_IMPORTED_MODULE_1__(this.to).format('YYYY-MM-DD HH:mm:59'),
                changeDateTime: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD HH:mm:ss')
            };
            this.spinner.show();
            this.apiCalled = false;
            this.api.post('orders/setDriverOrdersToPaid', param).then((respData) => {
                this.apiCalled = true;
                this.spinner.hide();
                console.log(respData);
                if (respData && respData.status === 200 && respData.data == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        title: "Success",
                        text: "Driver: " + driverName + " orders has been set to PAID",
                        icon: 'success',
                        backdrop: false,
                        background: 'white'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        title: "Faild",
                        text: "Driver: " + driverName + " orders has NOT been set to PAID\nPlease try again!",
                        icon: 'error',
                        backdrop: false,
                        background: 'white'
                    });
                }
            }, error => {
                this.spinner.hide();
                console.log(error);
                this.apiCalled = true;
                this.error('Something went wrong');
            }).catch((error) => {
                this.spinner.hide();
                console.log(error);
                this.apiCalled = true;
                this.error('Something went wrong');
            });
        }
        else {
            console.log('not valid');
            this.error('All Fields are required');
            return false;
        }
    }
    getStats() {
        if (this.did && this.from && this.to) {
            const filteredDriver = this.drivers.filter(x => x.id === this.did);
            if (filteredDriver && filteredDriver.length) {
                this.dname = filteredDriver[0].first_name + ' ' + filteredDriver[0].last_name;
                // invoice store details
                this.invoice.driverName = filteredDriver[0].first_name + " " + filteredDriver[0].last_name;
                this.invoice.contactNo = filteredDriver[0].mobile;
                this.invoice.address = filteredDriver[0].address;
            }
            const param = {
                did: this.did,
                start: moment__WEBPACK_IMPORTED_MODULE_1__(this.from).format('YYYY-MM-DD HH:mm:00'),
                end: moment__WEBPACK_IMPORTED_MODULE_1__(this.to).format('YYYY-MM-DD HH:mm:59'),
                includePaidOrders: this.includePaidOrders == true ? 1 : 0
            };
            this.spinner.show();
            this.apiCalled = false;
            this.driverOrders = [];
            this.invoice.orders = [];
            this.api.post('drivers/getDriverStat', param).then((respData) => {
                this.apiCalled = true;
                this.spinner.hide();
                if (respData && respData.status === 200 && respData.data.calculatedOrdersList) {
                    this.totalShippingAmount = respData.data.totalDeliveryAmount;
                    this.totalOrdersAmount = respData.data.totalOrdersAmount;
                    this.totalOrdersAmountWithoutDelivery = respData.data.totalOrdersAmountWithoutDelivery;
                    this.totalCashOrdersAmount = respData.data.totalCashOrdersAmount;
                    this.totalCashOrdersAmountWithoutDelivery = respData.data.totalCashOrdersAmountWithoutDelivery;
                    respData.data.calculatedOrdersList.forEach((element) => {
                        this.driverOrders.push(element);
                        this.invoice.orders.push(new Order(element.paid, element.str_name_en + " | " + (element.str_name_ar).split(' ').reverse().join(' '), element.status, element.pay_method, element.customer_adrs_en + " | " + (element.customer_adrs_ar).split(' ').reverse().join(' '), element.time, element.zone_shipping_price, element.zone_shipping_price));
                    });
                }
            }, error => {
                this.spinner.hide();
                console.log(error);
                this.apiCalled = true;
                this.error('Something went wrong');
            }).catch((error) => {
                this.spinner.hide();
                console.log(error);
                this.apiCalled = true;
                this.error('Something went wrong');
            });
            // get all orders
            this.driverOrdersAll = [];
            this.api.post('drivers/getDriverStatWhereAllOrders', param).then((respData) => {
                this.apiCalled = true;
                if (respData && respData.status === 200 && respData.data.calculatedOrdersList) {
                    this.totalAllOrdersAmount = respData.data.totalOrdersAmount;
                    this.totalAllOrdersAmountWithoutDelivery = respData.data.totalOrdersAmountWithoutDelivery;
                    this.totalCashAllOrdersAmount = respData.data.totalCashOrdersAmount;
                    this.totalCashAllOrdersAmountWithoutDelivery = respData.data.totalCashOrdersAmountWithoutDelivery;
                    respData.data.calculatedOrdersList.forEach((element) => {
                        this.driverOrdersAll.push(element);
                    });
                }
            }, error => {
                console.log(error);
                this.apiCalled = true;
                this.error('Something went wrong');
            }).catch((error) => {
                console.log(error);
                this.apiCalled = true;
                this.error('Something went wrong');
            });
        }
        else {
            console.log('not valid');
            this.error('All Fields are required');
            return false;
        }
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
    generatePDF(action = 'open') {
        let totalDelivery = this.invoice.orders.reduce((sum, item) => (sum + parseFloat(item.delivery + "")), 0).toFixed(3);
        let totalAmount = this.invoice.orders.reduce((sum, item) => (sum + parseFloat(item.total + "")), 0).toFixed(3);
        let docDefinition = {
            pageSize: 'A4',
            pageOrientation: 'landscape',
            content: [
                {
                    text: 'Jim Gate | ' + "بوابة جيم".split(' ').reverse().join(' '),
                    fontSize: 16,
                    alignment: 'center',
                    color: '#2e3192'
                },
                {
                    text: 'INVOICE',
                    fontSize: 20,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#e08d29'
                },
                {
                    text: 'From: ' + moment__WEBPACK_IMPORTED_MODULE_1__(this.from).format('M/D/YYYY 00:00:00') + ' To: ' + moment__WEBPACK_IMPORTED_MODULE_1__(this.to).format('M/D/YYYY 23:59:59'),
                    fontSize: 10,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#000000'
                },
                {
                    text: 'Driver Details',
                    style: 'sectionHeader'
                },
                {
                    columns: [
                        [
                            {
                                text: "Name: " + this.invoice.driverName,
                                bold: true
                            },
                            { text: "Contact: " + this.invoice.contactNo },
                            { text: "Address: " + this.invoice.address }
                        ],
                        [
                            {
                                text: `Date: ${new Date().toLocaleString()}`,
                                alignment: 'right'
                            },
                            {
                                text: 'Bill No : ',
                                alignment: 'right'
                            }
                        ]
                    ]
                },
                {
                    text: 'Orders Details',
                    style: 'sectionHeader'
                },
                {
                    table: {
                        headerRows: 1,
                        widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                        body: [
                            [{ text: '#', style: 'tableHeader' },
                                { text: 'ID', style: 'tableHeader' },
                                { text: 'Store Name', style: 'tableHeader' },
                                { text: 'Status', style: 'tableHeader' },
                                { text: 'Payment', style: 'tableHeader' },
                                { text: 'Customer Address', style: 'tableHeader' },
                                { text: 'Date/Time', style: 'tableHeader' },
                                { text: 'Delivery', style: 'tableHeader' },
                                { text: 'Amount', style: 'tableHeader' }],
                            ...this.invoice.orders.map((item, i) => ([
                                { text: i, bold: false, fontSize: 9 },
                                { text: item.id, bold: false, fontSize: 9 },
                                { text: item.storeName, bold: false, fontSize: 9 },
                                { text: item.status, bold: false, fontSize: 9 },
                                { text: item.paymentMethod, bold: false, fontSize: 9 },
                                { text: item.customerAddress, bold: false, fontSize: 9 },
                                { text: item.dateTime, bold: false, fontSize: 9 },
                                { text: item.delivery, bold: false, fontSize: 9 },
                                { text: item.total, bold: false, fontSize: 9 }
                            ])),
                            [{ text: 'Total Delivery', colSpan: 8, style: 'tableFooter' }, {}, {}, {}, {}, {}, {}, {}, { text: parseFloat(totalDelivery).toFixed(3), fontSize: 12 }],
                            [{ text: 'Total Amount', colSpan: 8, style: 'tableFooter' }, {}, {}, {}, {}, {}, {}, {}, { text: parseFloat(totalAmount).toFixed(3), fontSize: 12 }],
                        ],
                    }
                },
                {
                    text: 'Additional Details',
                    style: 'sectionHeader'
                },
                {
                    text: this.invoice.additionalDetails,
                    margin: [0, 0, 0, 15]
                },
                {
                    columns: [
                        [{ qr: `${this.invoice.driverName}`, fit: '50' }],
                        [{ text: 'Signature', alignment: 'right', italics: true }],
                    ]
                },
                {
                    text: 'Terms and Conditions',
                    style: 'sectionHeader'
                },
                {
                    ul: [
                        'All prices are in OMR.',
                        'This invoice includes ONLY delivered orders.',
                        'This is system generated invoice.',
                    ],
                }
            ],
            styles: _config_customStyles__WEBPACK_IMPORTED_MODULE_4__.styles,
            defaultStyle: _config_customStyles__WEBPACK_IMPORTED_MODULE_4__.defaultStyle
        };
        if (action === 'download') {
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default().createPdf(docDefinition).download();
        }
        else if (action === 'print') {
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default().createPdf(docDefinition).print();
        }
        else {
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default().createPdf(docDefinition).open();
        }
    }
}
DriverStatsComponent.ɵfac = function DriverStatsComponent_Factory(t) { return new (t || DriverStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__.ApisService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ng2_toasty__WEBPACK_IMPORTED_MODULE_7__.ToastyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__.UtilService)); };
DriverStatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DriverStatsComponent, selectors: [["app-driver-stats"]], decls: 41, vars: 18, consts: [["type", "ball-pulse-sync", "color", "#e74c3c"], [2, "font-size", "20px", "color", "#e74c3c"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-body", "reset-table", "p-t-0"], [1, "form-group", "row"], [1, "col-sm-12"], ["name", "select", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-6"], ["type", "datetime-local", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "checkbox", 3, "checked", "change"], [1, "btn", "btn-danger", "btn-round", 3, "click"], ["class", "btn btn-success btn-round", 3, "click", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], ["class", "row", "id", "print-section", 4, "ngIf"], [3, "value"], [1, "btn", "btn-success", "btn-round", 3, "click"], [2, "text-align", "center"], ["id", "print-section", 1, "row"], [1, "card", 2, "padding", "20px"], [2, "text-align", "center", "color", "#7ec6aa"], [2, "text-align", "center", "color", "#ED7669"], [2, "text-align", "left", "font-weight", "bold", "margin", "0px", "color", "#aaafad"], [2, "text-align", "left", "font-weight", "bold", "color", "#7EC6AA"], [1, "table-responsive"], ["datatable", "", 1, "row-border", "hover", 3, "dtOptions"], [2, "background-color", "#f5deb3"], [2, "background-color", "#ffebcd"], [4, "ngIf"], [1, "row", 2, "padding", "20px"], [1, "col-sm-4", 2, "text-align", "center"], [2, "font-weight", "bold", "margin", "0px !important", "color", "#7EC6AA"], [2, "color", "black !important", "margin", "0px !important"], [4, "ngFor", "ngForOf"], ["colspan", "10", 1, "no-data-available"], [1, "col-sm-3", 2, "text-align", "center"]], template: function DriverStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DriverStatsComponent_Template_select_ngModelChange_14_listener($event) { return ctx.did = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, DriverStatsComponent_option_15_Template, 2, 3, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 11)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DriverStatsComponent_Template_input_ngModelChange_19_listener($event) { return ctx.from = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 11)(21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function DriverStatsComponent_Template_input_ngModelChange_23_listener($event) { return ctx.to = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 7)(25, "div", 8)(26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function DriverStatsComponent_Template_input_change_26_listener() { return ctx.includePaidOrders = !ctx.includePaidOrders; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, " Include paid orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 7)(29, "div", 8)(30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DriverStatsComponent_Template_button_click_30_listener() { return ctx.getStats(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, DriverStatsComponent_button_33_Template, 2, 1, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DriverStatsComponent_Template_button_click_35_listener() { return ctx.resetDriverOrders(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, DriverStatsComponent_h2_37_Template, 2, 1, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, DriverStatsComponent_div_38_Template, 67, 36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, DriverStatsComponent_div_39_Template, 54, 27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "ng2-toasty");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.api.translate("Please wait..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.api.translate("Get Stats"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.api.translate("Please select Driver"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.did);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.drivers);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.api.translate("From DateTime"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.from)("placeholder", ctx.api.translate("From DateTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.api.translate("To DateTime"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.to)("placeholder", ctx.api.translate("To DateTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.includePaidOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.api.translate("Get Stats"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.did && ctx.from && ctx.to && (ctx.driverOrders == null ? null : ctx.driverOrders.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.api.translate("Reset Driver Orders"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.did && ctx.from && ctx.to && !(ctx.driverOrders == null ? null : ctx.driverOrders.length) && ctx.apiCalled);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.did && ctx.from && ctx.to && (ctx.driverOrders == null ? null : ctx.driverOrders.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.did && ctx.from && ctx.to && (ctx.driverOrdersAll == null ? null : ctx.driverOrdersAll.length));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, ng2_toasty__WEBPACK_IMPORTED_MODULE_7__.ToastyComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_9__.DataTableDirective] });


/***/ }),

/***/ 43762:
/*!***********************************************************!*\
  !*** ./src/app/pages/driver-stats/driver-stats.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverStatsModule": () => (/* binding */ DriverStatsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _driver_stats_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver-stats-routing.module */ 1464);
/* harmony import */ var _driver_stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver-stats.component */ 17703);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-print */ 16186);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 87078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);







class DriverStatsModule {
}
DriverStatsModule.ɵfac = function DriverStatsModule_Factory(t) { return new (t || DriverStatsModule)(); };
DriverStatsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DriverStatsModule });
DriverStatsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _driver_stats_routing_module__WEBPACK_IMPORTED_MODULE_0__.DriverStatsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ngx_print__WEBPACK_IMPORTED_MODULE_6__.NgxPrintModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DriverStatsModule, { declarations: [_driver_stats_component__WEBPACK_IMPORTED_MODULE_1__.DriverStatsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _driver_stats_routing_module__WEBPACK_IMPORTED_MODULE_0__.DriverStatsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ngx_print__WEBPACK_IMPORTED_MODULE_6__.NgxPrintModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule] }); })();


/***/ })

}]);