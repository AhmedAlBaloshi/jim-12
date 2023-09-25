"use strict";
(self["webpackChunkJimAdmin"] = self["webpackChunkJimAdmin"] || []).push([[464],{

/***/ 99493:
/*!***********************************************************!*\
  !*** ./src/app/pages/contacts/contacts-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsRoutingModule": () => (/* binding */ ContactsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.component */ 28506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);




const routes = [
    {
        path: '',
        component: _contacts_component__WEBPACK_IMPORTED_MODULE_0__.ContactsComponent
    }
];
class ContactsRoutingModule {
}
ContactsRoutingModule.ɵfac = function ContactsRoutingModule_Factory(t) { return new (t || ContactsRoutingModule)(); };
ContactsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactsRoutingModule });
ContactsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 28506:
/*!******************************************************!*\
  !*** ./src/app/pages/contacts/contacts.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 15439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/apis.service */ 56070);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 24006);







const _c0 = ["scrollMe"];
const _c1 = ["messages"];
function ContactsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.api.mediaURL + ctx_r0.avtar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.type);
} }
function ContactsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_div_11_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const item_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.chatUser(item_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", item_r5.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.api.mediaURL + item_r5.cover, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r5.type, " ");
} }
function ContactsComponent_span_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", msg_r8.message, " ");
} }
function ContactsComponent_span_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", msg_r8.message, " ");
} }
function ContactsComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ContactsComponent_span_15_div_2_Template, 5, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ContactsComponent_span_15_div_3_Template, 5, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", msg_r8.from_id == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", msg_r8.from_id != "0");
} }
function ContactsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ContactsComponent_div_16_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.message = $event); })("keydown.enter", function ContactsComponent_div_16_Template_input_keydown_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.send()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_div_16_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.send()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r4.message)("placeholder", ctx_r4.api.translate("Send Message"));
} }
class ContactsComponent {
    constructor(api, util) {
        this.api = api;
        this.util = util;
        this.users = [];
        this.dummy = [];
        this.messages = [];
        this.resetChanges = () => {
            this.users = this.dummy;
        };
        this.api.auth();
        const param = {
            id: 0
        };
        this.dummy = Array(10);
        this.users = [];
        this.api.post('chats/getByGroup', param).then((data) => {
            console.log(data);
            if (data && data.status === 200) {
                const info = [];
                const info2 = [];
                const info3 = [];
                data.data.forEach(element => {
                    if (element.message_type === 'users') {
                        info2.push(element.from_id);
                        info2.push(element.room_id);
                    }
                    else if (element.message_type === 'store') {
                        info.push(element.from_id);
                        info.push(element.room_id);
                    }
                    else if (element.message_type === 'drivers') {
                        info3.push(element.from_id);
                        info3.push(element.room_id);
                    }
                });
                const uniq = [...new Set(info)];
                console.log('uniq->>', uniq);
                const uid = {
                    id: uniq.join()
                };
                this.api.post('stores/getChatsNames', uid).then((uids) => {
                    this.dummy = [];
                    console.log(uids);
                    if (uids && uids.status === 200) {
                        // this.users = uids.data;
                        uids.data.forEach(element => {
                            console.log(element);
                            const dats = {
                                id: element.uid,
                                name: element.name,
                                cover: element.cover,
                                type: 'store'
                            };
                            this.users.push(dats);
                        });
                    }
                }, error => {
                    console.log(error);
                    this.users = [];
                    this.dummy = [];
                });
                const uniq2 = [...new Set(info2)];
                console.log('uniq->>', uniq2);
                const uid2 = {
                    id: uniq2.join()
                };
                this.api.post('users/getChatsNames', uid2).then((uids) => {
                    this.dummy = [];
                    console.log(uids);
                    if (uids && uids.status === 200) {
                        // this.users = uids.data;
                        uids.data.forEach(element => {
                            console.log(element);
                            const dats = {
                                id: element.id,
                                name: element.first_name + ' ' + element.last_name,
                                cover: element.cover,
                                type: 'users'
                            };
                            this.users.push(dats);
                        });
                        console.log('all users-->>', this.users);
                    }
                }, error => {
                    console.log(error);
                    this.users = [];
                    this.dummy = [];
                });
                const uniq3 = [...new Set(info3)];
                console.log('uniq->>', uniq2);
                const uid3 = {
                    id: uniq3.join()
                };
                this.api.post('drivers/getChatsNames', uid3).then((uids) => {
                    this.dummy = [];
                    console.log(uids);
                    if (uids && uids.status === 200) {
                        // this.users = uids.data;
                        uids.data.forEach(element => {
                            console.log(element);
                            const dats = {
                                id: element.id,
                                name: element.first_name + ' ' + element.last_name,
                                cover: element.cover,
                                type: 'drivers'
                            };
                            this.users.push(dats);
                        });
                        console.log('all users-->>', this.users);
                    }
                }, error => {
                    console.log(error);
                    this.users = [];
                    this.dummy = [];
                });
            }
            else {
                this.dummy = [];
            }
        }, error => {
            console.log(error);
        }).catch((error) => {
            console.log(error);
        });
        this.interval = setInterval(() => {
            console.log('calling in interval');
            this.getMessages();
            this.getMessages2();
        }, 12000);
        this.util.successEject().subscribe((data) => {
            console.log('yes eject it');
            clearInterval(this.interval);
        });
    }
    canDeactivate() {
        console.log('ok');
    }
    ;
    getMessages() {
        const param = {
            id: 0 + '_' + this.id,
            oid: this.id
        };
        this.api.post('chats/getById', param).then((data) => {
            console.log(data);
            if (data && data.status === 200) {
                this.messages = data.data;
                this.scrollToBottom();
            }
        }, error => {
            console.log(error);
        }).catch((error) => {
            console.log(error);
        });
    }
    getMessages2() {
        const param = {
            id: this.id + '_' + 0,
            oid: this.id
        };
        this.api.post('chats/getById', param).then((data) => {
            console.log(data);
            if (data && data.status === 200) {
                this.messages = data.data;
                this.scrollToBottom();
            }
        }, error => {
            console.log(error);
        }).catch((error) => {
            console.log(error);
        });
    }
    getMessages3() {
        console.log('message from drivers');
        const param = {
            id: this.id + '_' + 0,
            oid: this.id
        };
        this.api.post('chats/getById', param).then((data) => {
            console.log(data);
            if (data && data.status === 200) {
                this.messages = data.data;
                this.scrollToBottom();
            }
        }, error => {
            console.log(error);
        }).catch((error) => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
    search(str) {
        this.resetChanges();
        console.log('string', str);
        this.users = this.filterItems(str);
    }
    send() {
        console.log('this.mess', this.message);
        if (this.message && this.id) {
            const text = this.message;
            this.message = '';
            let fromMessage = '';
            if (this.type === 'users') {
                fromMessage = 0 + '_' + this.id;
            }
            else if (this.type === 'store') {
                fromMessage = this.id + '_' + 0;
            }
            else if (this.type === 'drivers') {
                fromMessage = 0 + '_' + this.id;
            }
            console.log('send');
            const param = {
                room_id: this.id,
                uid: fromMessage,
                from_id: 0,
                message: text,
                message_type: 'admin',
                status: 1,
                timestamp: moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD HH:mm:ss')
            };
            this.scrollToBottom();
            this.api.post('chats/save', param).then((data) => {
                console.log(data);
                if (data && data.status === 200) {
                    if (this.type === 'users') {
                        this.getMessages();
                    }
                    else {
                        this.getMessages2();
                    }
                }
                else {
                }
            }, error => {
                console.log(error);
            }).catch((error) => {
                console.log(error);
            });
        }
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    setFilteredItems() {
        console.log('clear');
        this.users = [];
        this.users = this.dummy;
    }
    filterItems(searchTerm) {
        return this.users.filter((item) => {
            if (item.type === 'venue') {
                return item.fname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            }
            else {
                return item.fullname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            }
        });
    }
    chatUser(item) {
        console.log(item);
        this.type = item.type;
        this.name = item.name;
        this.avtar = item.cover;
        this.selectedId = item.id;
        this.id = item.id;
        this.messages = [];
        if (this.type === 'users') {
            this.getMessages();
        }
        else if (this.type === 'store') {
            this.getMessages2();
        }
        else if (this.type === 'drivers') {
            this.getMessages3();
        }
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_1__.ApisService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService)); };
ContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], viewQuery: function ContactsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.messagesList = _t);
    } }, hostBindings: function ContactsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("beforeunload", function ContactsComponent_beforeunload_HostBindingHandler() { return ctx.canDeactivate(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 17, vars: 7, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-body", "reset-table", "p-t-0"], [1, "form-group", "row", 2, "height", "60vh", "border", "1px solid lightgray"], [1, "col-sm-4", 2, "height", "60vh", "overflow", "scroll", "padding", "0px", "border-right", "1px solid lightgray"], ["type", "text", 1, "form-control", "form-control-round", 2, "margin", "10px 0px", 3, "placeholder", "input"], ["style", "border-bottom: 1px solid lightgray;padding: 10px;margin: 10px;background: lightcoral;color: white;", 4, "ngIf"], ["style", "border-bottom: 1px solid lightgray;padding: 10px;margin: 10px;", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "col-sm-8", 2, "height", "60vh", "overflow", "scroll", "position", "relative"], [1, "lower_div", 3, "scrollTop"], ["scrollMe", ""], [4, "ngFor", "ngForOf"], ["style", "position: absolute;bottom: 10px;width: 90%;display: flex;flex-direction: row;justify-content: space-between;align-items: center;", 4, "ngIf"], [2, "border-bottom", "1px solid lightgray", "padding", "10px", "margin", "10px", "background", "lightcoral", "color", "white"], [2, "display", "flex"], ["onError", "this.src='assets/images/user.png'", "alt", "chat-user", 1, "img-responsive", 2, "height", "40px", "width", "40px", "border-radius", "50%", 3, "src"], [2, "margin-left", "10px"], [2, "font-size", ".6rem", "color", "white"], [2, "border-bottom", "1px solid lightgray", "padding", "10px", "margin", "10px", 3, "id", "click"], [2, "display", "flex", "align-items", "center"], [2, "font-size", ".6rem", "color", "gray"], ["messages", ""], ["class", "main_div_right", 4, "ngIf"], ["class", "main_div_left", 4, "ngIf"], [1, "main_div_right"], [1, "msg_div"], [1, "inner_msg"], [1, "tri_right"], [1, "main_div_left"], [1, "tri_left"], [2, "position", "absolute", "bottom", "10px", "width", "90%", "display", "flex", "flex-direction", "row", "justify-content", "space-between", "align-items", "center"], ["type", "text", 1, "form-control", "form-control-round", 3, "ngModel", "placeholder", "ngModelChange", "keydown.enter"], [1, "btn", "btn-danger", "btn-icon", 2, "margin-left", "10px", 3, "click"], [1, "icofont", "icofont-location-arrow"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ContactsComponent_Template_input_input_9_listener($event) { return ctx.search($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ContactsComponent_div_10_Template, 8, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ContactsComponent_div_11_Template, 8, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10)(13, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ContactsComponent_span_15_Template, 4, 2, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ContactsComponent_div_16_Template, 4, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.api.translate("Support"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx.api.translate("Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scrollTop", _r2.scrollHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.id);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: [".lower_div[_ngcontent-%COMP%] {\n  padding: 20px;\n  height: 50vh;\n  overflow: scroll;\n}\n.lower_div[_ngcontent-%COMP%]   .main_div_right[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n}\n.lower_div[_ngcontent-%COMP%]   .main_div_right[_ngcontent-%COMP%]   .msg_div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 80%;\n  margin-bottom: 15px;\n}\n.lower_div[_ngcontent-%COMP%]   .main_div_right[_ngcontent-%COMP%]   .msg_div[_ngcontent-%COMP%]   .inner_msg[_ngcontent-%COMP%] {\n  background-color: #f0eff5;\n  padding: 10px;\n  border-radius: 5px;\n}\n.lower_div[_ngcontent-%COMP%]   .main_div_right[_ngcontent-%COMP%]   .tri_right[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-top: 10px solid #f0eff5;\n  border-left: 10px solid transparent;\n  bottom: 10px;\n}\n.lower_div[_ngcontent-%COMP%]   .main_div_left[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n.lower_div[_ngcontent-%COMP%]   .main_div_left[_ngcontent-%COMP%]   .msg_div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 80%;\n  margin-bottom: 15px;\n}\n.lower_div[_ngcontent-%COMP%]   .main_div_left[_ngcontent-%COMP%]   .msg_div[_ngcontent-%COMP%]   .inner_msg[_ngcontent-%COMP%] {\n  background-color: gray;\n  padding: 10px;\n  border-radius: 5px;\n  color: white;\n}\n.lower_div[_ngcontent-%COMP%]   .main_div_left[_ngcontent-%COMP%]   .tri_left[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  position: absolute;\n  border-top: 10px solid var(--ion-color-main2);\n  border-right: 10px solid transparent;\n  bottom: 10px;\n}"] });


/***/ }),

/***/ 50464:
/*!***************************************************!*\
  !*** ./src/app/pages/contacts/contacts.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsModule": () => (/* binding */ ContactsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-routing.module */ 99493);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.component */ 28506);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);





class ContactsModule {
}
ContactsModule.ɵfac = function ContactsModule_Factory(t) { return new (t || ContactsModule)(); };
ContactsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ContactsModule });
ContactsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactsModule, { declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);