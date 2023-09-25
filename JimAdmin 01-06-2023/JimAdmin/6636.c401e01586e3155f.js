"use strict";
(self["webpackChunkJimAdmin"] = self["webpackChunkJimAdmin"] || []).push([[6636],{

/***/ 41319:
/*!*****************************************************!*\
  !*** ./src/app/pages/stats/stats-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsRoutingModule": () => (/* binding */ StatsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _stats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats.component */ 91947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




const routes = [
    {
        path: '',
        component: _stats_component__WEBPACK_IMPORTED_MODULE_0__.StatsComponent
    }
];
class StatsRoutingModule {
}
StatsRoutingModule.ɵfac = function StatsRoutingModule_Factory(t) { return new (t || StatsRoutingModule)(); };
StatsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StatsRoutingModule });
StatsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StatsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 91947:
/*!************************************************!*\
  !*** ./src/app/pages/stats/stats.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsComponent": () => (/* binding */ StatsComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 15439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../assets/vfs_fonts.js */ 97991);
/* harmony import */ var _config_pdfFonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../config/pdfFonts */ 20381);
/* harmony import */ var _config_customStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/customStyles */ 31983);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 54641);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ 56070);
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-toasty */ 84977);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 68423);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/card/card.component */ 53949);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ 87078);

// importing the fonts and icons needed



// import the pdfmake library










function StatsComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r5.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", item_r5.name_en, " - ", item_r5.name_ar, " ");
} }
function StatsComponent_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StatsComponent_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.generatePDF()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.api.translate("Generate PDF"), "");
} }
function StatsComponent_h2_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r2.api.translate("No Orders Found"), "\n");
} }
function StatsComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 25)(2, "app-card", 26)(3, "div", 27)(4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 30)(7, "div", 31)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("cardClass", "counter-card-1")("blockClass", "card-body-big");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r3.groundTotalServiceTax.toFixed(3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.api.translate("Total Service Tax"));
} }
function StatsComponent_div_43_tbody_35_tr_1_span_7_br_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "br");
} }
function StatsComponent_div_43_tbody_35_tr_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, StatsComponent_div_43_tbody_35_tr_1_span_7_br_2_Template, 1, 0, "br", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orders_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" Name: ", orders_r14.prdct_name_en, " , Price: ", orders_r14.crt_price_type == "single" ? orders_r14.crt_price : orders_r14.crt_price.price, " , Qty: ", orders_r14.crt_pqty, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r11.orders.length - 1 !== i_r15);
} }
function StatsComponent_div_43_tbody_35_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 47)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td")(6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, StatsComponent_div_43_tbody_35_tr_1_span_7_Template, 3, 4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("#", item_r11.paid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", item_r11.orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r11.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r11.pay_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r11.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("OMR ", item_r11.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("OMR ", item_r11.delivery_charge, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("OMR ", item_r11.discount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("OMR ", item_r11.grand_total, "");
} }
function StatsComponent_div_43_tbody_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StatsComponent_div_43_tbody_35_tr_1_Template, 22, 10, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r8.storeOrder);
} }
function StatsComponent_div_43_tbody_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} }
function StatsComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 32)(1, "div", 3)(2, "div", 33)(3, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 38)(12, "table", 39)(13, "thead")(14, "tr", 40)(15, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, StatsComponent_div_43_tbody_35_Template, 2, 1, "tbody", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, StatsComponent_div_43_tbody_36_Template, 4, 0, "tbody", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 11)(40, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 44)(47, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.storename);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("", ctx_r4.getDate(ctx_r4.from), " ", ctx_r4.api.translate("to"), " ", ctx_r4.getDate(ctx_r4.to), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.storename);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.today());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dtOptions", ctx_r4.dtOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("#"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Id"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Date/Time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Delivery"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r4.api.translate("Amount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r4.storeOrder == null ? null : ctx_r4.storeOrder.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r4.storeOrder == null ? null : ctx_r4.storeOrder.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r4.api.translate("Total"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r4.api.translate("Commission"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r4.api.translate("Amount Pay"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r4.getCurrency(), " ", ctx_r4.totalAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r4.getCurrency(), " ", ctx_r4.commisionAmount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r4.getCurrency(), " ", ctx_r4.toPay, "");
} }
// PDFMAKE fonts
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default().vfs) = _assets_vfs_fonts_js__WEBPACK_IMPORTED_MODULE_1__.pdfMake.vfs;
(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default().fonts) = _config_pdfFonts__WEBPACK_IMPORTED_MODULE_2__.pdfCustomFonts;
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// pdfMake.fonts = {
//   ReadexPro: {
//     normal: 'ReadexPro-Regular.ttf',
//     bold: 'ReadexPro-Medium.ttf',
//     italics: 'ReadexPro-Regular.ttf',
//     bolditalics: 'ReadexPro-Medium.ttf'
//   }
// };
class Order {
    constructor(id = null, description = null, status = null, paymentMethod = null, dateTime = null, unitPrice = null, delivery = null, discount = null, total = null, serviceTax = null) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.paymentMethod = paymentMethod;
        this.dateTime = dateTime;
        this.unitPrice = unitPrice;
        this.delivery = delivery;
        this.discount = discount;
        this.total = total;
        this.serviceTax = serviceTax;
    }
}
class Invoice {
    constructor() {
        this.orders = [];
        // Initially one empty product row we will show 
        //this.orders.push(new Order());
    }
}
class StatsComponent {
    constructor(api, toastyService, spinner, util) {
        this.api = api;
        this.toastyService = toastyService;
        this.spinner = spinner;
        this.util = util;
        this.stores = [];
        this.allOrders = [];
        this.storeOrder = [];
        this.totalAmount = 0;
        this.commisionAmount = 0;
        this.toPay = 0;
        this.totalAmountsFromOrder = 0;
        this.groundTotalServiceTax = 0;
        this.cashPaidOrders = true;
        this.visaPaidOrders = true;
        this.invoice = new Invoice();
        this.dtOptions = {};
        this.api.auth();
        this.getRest();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 20
        };
    }
    getRest() {
        this.stores = [];
        this.spinner.show();
        this.api.get('stores').then((datas) => {
            this.spinner.hide();
            console.log(datas);
            if (datas && datas.data.length) {
                this.stores = datas.data;
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
    getStats() {
        this.groundTotalServiceTax = 0;
        if (this.storeId && this.from && this.to && this.storecommission) {
            const filteredStore = this.stores.filter(x => x.uid === this.storeId);
            if (filteredStore && filteredStore.length) {
                this.storename = filteredStore[0].name_en + " - " + filteredStore[0].name_ar;
                //this.storecommission = 19; // parseFloat(filteredStore[0].commission);
                // invoice store details
                this.invoice.storeName = filteredStore[0].name_en;
                this.invoice.contactNo = filteredStore[0].mobile;
                this.invoice.address = filteredStore[0].address_en;
            }
            const param = {
                sid: this.storeId,
                start: moment__WEBPACK_IMPORTED_MODULE_0__(this.from).format('YYYY-MM-DD 00:00:00'),
                end: moment__WEBPACK_IMPORTED_MODULE_0__(this.to).format('YYYY-MM-DD 23:59:59'),
                cashPaidOrders: this.cashPaidOrders == true ? 1 : 0,
                visaPaidOrders: this.visaPaidOrders == true ? 1 : 0,
            };
            this.spinner.show();
            this.apiCalled = false;
            this.storeOrder = [];
            this.invoice.orders = [];
            this.api.post('orders/storeStats', param).then((data) => {
                this.apiCalled = true;
                this.spinner.hide();
                if (data && data.status === 200 && data.data.length) {
                    let total = 0;
                    data.data.forEach((element) => {
                        if (((x) => { try {
                            JSON.parse(x);
                            return true;
                        }
                        catch (e) {
                            return false;
                        } })(element.orders)) {
                            element.orders = JSON.parse(element.orders);
                            element.time = moment__WEBPACK_IMPORTED_MODULE_0__(element.time).format('YYYY-MM-DD HH:mm');
                            if (element.status === 'delivered' || element.status === 'undefined') {
                                total = total + (parseFloat(element.total));
                                this.storeOrder.push(element);
                                let description = "";
                                element.orders.forEach((elem) => {
                                    if (elem.crt_price_type == 'single')
                                        description = description + "Name: " + elem.prdct_name_en + " , Price: " + parseFloat((elem.crt_price - elem.prdct_internal_tax).toString()).toFixed(3) + " , Qty: " + elem.crt_pqty + "\n";
                                    else if (elem.crt_price_type == 'selection')
                                        description = description + "Name: " + elem.prdct_name_en + " , Price: " + parseFloat((elem.crt_price.price - elem.prdct_internal_tax).toString()).toFixed(3) + " , Qty: " + elem.crt_pqty + "\n";
                                });
                                var totalServiceTax = 0;
                                element.orders.forEach((elem) => {
                                    totalServiceTax = totalServiceTax + (parseFloat((Number(elem.prdct_internal_tax) * Number(elem.crt_pqty)).toString()));
                                    this.groundTotalServiceTax = this.groundTotalServiceTax + (parseFloat((Number(elem.prdct_internal_tax) * Number(elem.crt_pqty)).toString()));
                                });
                                element.total = (element.total - Number(totalServiceTax));
                                element.grand_total = (element.grand_total - Number(totalServiceTax));
                                this.invoice.orders.push(new Order(element.paid, description, element.status, element.pay_method, element.time, parseFloat(element.total).toFixed(3), parseFloat(element.delivery_charge).toFixed(3), parseFloat(element.discount).toFixed(3), parseFloat(element.grand_total).toFixed(3), parseFloat(element.serviceTax).toFixed(3)));
                                description = "";
                            }
                        }
                    });
                    setTimeout(() => {
                        function percentage(num, per) {
                            return (num / 100) * per;
                        }
                        const totalPrice = percentage(total, parseFloat(this.storecommission));
                        this.commisionAmount = totalPrice.toFixed(3);
                        this.totalAmount = total;
                        this.toPay = this.commisionAmount;
                    }, 1000);
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
    getCommisions(total) {
        return ((parseFloat(total) * this.storecommission) / 100).toFixed(3);
    }
    today() {
        return moment__WEBPACK_IMPORTED_MODULE_0__().format('ll');
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_0__(date).format('ll');
    }
    getName() {
        return this.storeOrder[0].name + '_' + moment__WEBPACK_IMPORTED_MODULE_0__(this.from).format('DDMMYYYY') + '_' + moment__WEBPACK_IMPORTED_MODULE_0__(this.to).format('DDMMYYYY');
    }
    getCurrency() {
        return this.util.currecny;
    }
    generatePDF(action = 'open') {
        let totalPrice = this.invoice.orders.reduce((sum, item) => (sum + parseFloat(item.unitPrice + "")), 0).toFixed(3);
        let totalDelivery = this.invoice.orders.reduce((sum, item) => (sum + parseFloat(item.delivery + "")), 0).toFixed(3);
        let totalAmount = this.invoice.orders.reduce((sum, item) => (sum + parseFloat(item.total + "")), 0).toFixed(3);
        let totalCommission = this.getCommisions(this.invoice.orders.reduce((sum, item) => (sum + parseFloat(item.unitPrice + "")), 0));
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
                    text: 'From: ' + moment__WEBPACK_IMPORTED_MODULE_0__(this.from).format('M/D/YYYY 00:00:00') + ' To: ' + moment__WEBPACK_IMPORTED_MODULE_0__(this.to).format('M/D/YYYY 23:59:59'),
                    fontSize: 10,
                    bold: true,
                    alignment: 'center',
                    decoration: 'underline',
                    color: '#000000'
                },
                {
                    text: 'Store Details',
                    style: 'sectionHeader'
                },
                {
                    columns: [
                        [
                            {
                                text: "Name: " + this.invoice.storeName,
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
                        widths: ['auto', 'auto', '*', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                        body: [
                            [{ text: '#', style: 'tableHeader' },
                                { text: 'ID', style: 'tableHeader' },
                                { text: 'Description', style: 'tableHeader' },
                                { text: 'Status', style: 'tableHeader' },
                                { text: 'Payment', style: 'tableHeader' },
                                { text: 'Date/Time', style: 'tableHeader' },
                                { text: 'Price', style: 'tableHeader' },
                                { text: 'Delivery', style: 'tableHeader' },
                                { text: 'Discount', style: 'tableHeader' },
                                { text: 'Tax', style: 'tableHeader' },
                                { text: 'Amount', style: 'tableHeader' }],
                            ...this.invoice.orders.map((item, i) => ([
                                { text: i, bold: false, fontSize: 9 },
                                { text: item.id, bold: false, fontSize: 9 },
                                { text: item.description, bold: false, fontSize: 9 },
                                { text: item.status, bold: false, fontSize: 9 },
                                { text: item.paymentMethod, bold: false, fontSize: 9 },
                                { text: item.dateTime, bold: false, fontSize: 9 },
                                { text: item.unitPrice, bold: false, fontSize: 9 },
                                { text: item.delivery, bold: false, fontSize: 9 },
                                { text: item.discount, bold: false, fontSize: 9 },
                                { text: 0, bold: false, fontSize: 9 },
                                { text: item.total, bold: false, fontSize: 9 }
                            ])),
                            [{ text: 'Total Price', colSpan: 10, style: 'tableFooter' }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { text: parseFloat(totalPrice).toFixed(3), fontSize: 12 }],
                            [{ text: 'Total Delivery', colSpan: 10, style: 'tableFooter' }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { text: parseFloat(totalDelivery).toFixed(3), fontSize: 12 }],
                            [{ text: 'Total Amount', colSpan: 10, style: 'tableFooter' }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { text: parseFloat(totalAmount).toFixed(3), fontSize: 12 }],
                            [{ text: 'Commission (' + this.storecommission + '%)', colSpan: 10, style: 'tableFooter' }, {}, {}, {}, {}, {}, {}, {}, {}, {}, { text: parseFloat(totalCommission).toFixed(3), fontSize: 12 }]
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
                        [{ qr: `${this.invoice.storeName}`, fit: '50' }],
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
                        'Commission formula = ((total) * storecommission) / 100).',
                        'This is system generated invoice.',
                    ],
                }
            ],
            styles: _config_customStyles__WEBPACK_IMPORTED_MODULE_3__.styles,
            defaultStyle: _config_customStyles__WEBPACK_IMPORTED_MODULE_3__.defaultStyle
        };
        if (action === 'download') {
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default().createPdf(docDefinition).download();
        }
        else if (action === 'print') {
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default().createPdf(docDefinition).print();
        }
        else {
            // pdfMake.createPdf(
            //   docDefinition,
            //   null, // tableLayouts
            //   {
            //     MyFontName: {
            //       normal: 'Roboto-Regular.ttf',
            //       bold: 'Roboto-Medium.ttf',
            //       italics: 'Roboto-Italic.ttf',
            //       bolditalics: 'Roboto-MediumItalic.ttf'
            //     }
            //   },
            //   pdfFonts.pdfMake.vfs).open();
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default().createPdf(docDefinition).open();
        }
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__.ApisService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ng2_toasty__WEBPACK_IMPORTED_MODULE_6__.ToastyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__.UtilService)); };
StatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 45, vars: 18, consts: [["type", "ball-pulse-sync", "color", "#e74c3c"], [2, "font-size", "20px", "color", "#e74c3c"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-body", "reset-table", "p-t-0"], [1, "form-group", "row"], [1, "col-sm-8"], ["name", "select", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-6"], ["type", "date", "placeholder", "Expire Date", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-12"], ["type", "checkbox", 3, "checked", "change"], [1, "btn", "btn-danger", "btn-round", 3, "click"], ["class", "btn btn-success btn-round", 3, "click", 4, "ngIf"], ["style", "text-align: center;", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row", "id", "print-section", 4, "ngIf"], [3, "value"], [1, "btn", "btn-success", "btn-round", 3, "click"], [2, "text-align", "center"], [1, "col-md-12", "col-xl-4"], [3, "cardClass", "blockClass"], [1, "row", 2, "cursor", "pointer"], [1, "col-6", "counter-card-icon"], [1, "icofont", "icofont-money"], [1, "col-6", "text-right"], [1, "counter-card-text"], ["id", "print-section", 1, "row"], [1, "card", 2, "padding", "20px"], [2, "text-align", "center", "color", "#7ec6aa"], [2, "text-align", "center", "color", "#ED7669"], [2, "text-align", "left", "font-weight", "bold", "margin", "0px", "color", "#aaafad"], [2, "text-align", "left", "font-weight", "bold", "color", "#7EC6AA"], [1, "table-responsive"], ["datatable", "", 1, "row-border", "hover", 3, "dtOptions"], [1, "text-uppercase", 2, "color", "#7ec6aa"], [4, "ngIf"], [1, "row", 2, "padding", "20px"], [2, "text-align", "right", "font-weight", "bold", "margin", "0px !important", "color", "#7EC6AA"], [1, "col-sm-2"], [2, "color", "black !important", "margin", "0px !important", "text-align", "right"], ["style", "background-color: #F5F8FA;", 4, "ngFor", "ngForOf"], [2, "background-color", "#F5F8FA"], [2, "width", "150px !important", "white-space", "pre-wrap"], [4, "ngFor", "ngForOf"], ["colspan", "10", 1, "no-data-available"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function StatsComponent_Template_select_ngModelChange_14_listener($event) { return ctx.storeId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, StatsComponent_option_15_Template, 2, 3, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 11)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function StatsComponent_Template_input_ngModelChange_19_listener($event) { return ctx.storecommission = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 13)(21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function StatsComponent_Template_input_ngModelChange_23_listener($event) { return ctx.from = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 13)(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function StatsComponent_Template_input_ngModelChange_27_listener($event) { return ctx.to = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 7)(29, "div", 15)(30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function StatsComponent_Template_input_change_30_listener() { return ctx.cashPaidOrders = !ctx.cashPaidOrders; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, " Cash paid orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 15)(33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function StatsComponent_Template_input_change_33_listener() { return ctx.visaPaidOrders = !ctx.visaPaidOrders; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, " Visa paid orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 7)(36, "div", 15)(37, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StatsComponent_Template_button_click_37_listener() { return ctx.getStats(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, StatsComponent_button_40_Template, 2, 1, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, StatsComponent_h2_41_Template, 2, 1, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, StatsComponent_div_42_Template, 12, 4, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, StatsComponent_div_43_Template, 53, 28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "ng2-toasty");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.api.translate("Please wait..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.api.translate("Get Stats"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.api.translate("Please select store"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.storeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.stores);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.api.translate("Commission (%)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.storecommission);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.api.translate("From Date"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.api.translate("To Date"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.to);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.cashPaidOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx.visaPaidOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.api.translate("Get Stats"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.storeId && ctx.from && ctx.to && (ctx.storeOrder == null ? null : ctx.storeOrder.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.storeId && ctx.from && ctx.to && !(ctx.storeOrder == null ? null : ctx.storeOrder.length) && ctx.apiCalled);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.storeId && ctx.from && ctx.to && (ctx.storeOrder == null ? null : ctx.storeOrder.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.storeId && ctx.from && ctx.to && (ctx.storeOrder == null ? null : ctx.storeOrder.length));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, ng2_toasty__WEBPACK_IMPORTED_MODULE_6__.ToastyComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, angular_datatables__WEBPACK_IMPORTED_MODULE_9__.DataTableDirective] });


/***/ }),

/***/ 6636:
/*!*********************************************!*\
  !*** ./src/app/pages/stats/stats.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsModule": () => (/* binding */ StatsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _stats_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats-routing.module */ 41319);
/* harmony import */ var _stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats.component */ 91947);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-print */ 16186);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 87078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);







class StatsModule {
}
StatsModule.ɵfac = function StatsModule_Factory(t) { return new (t || StatsModule)(); };
StatsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: StatsModule });
StatsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _stats_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ngx_print__WEBPACK_IMPORTED_MODULE_6__.NgxPrintModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StatsModule, { declarations: [_stats_component__WEBPACK_IMPORTED_MODULE_1__.StatsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _stats_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ngx_print__WEBPACK_IMPORTED_MODULE_6__.NgxPrintModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule] }); })();


/***/ })

}]);