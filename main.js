(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "./src/app/cart-page/cart-page.component.ts");
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productlist/productlist.component */ "./src/app/productlist/productlist.component.ts");
/* harmony import */ var _payment_transaction_confirmation_payment_transaction_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-transaction-confirmation/payment-transaction-confirmation.component */ "./src/app/payment-transaction-confirmation/payment-transaction-confirmation.component.ts");
/* harmony import */ var _payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment-page/payment-page.component */ "./src/app/payment-page/payment-page.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/page404/page404.component.ts");
/* harmony import */ var _payment_error_page_payment_error_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment-error-page/payment-error-page.component */ "./src/app/payment-error-page/payment-error-page.component.ts");
/* harmony import */ var _payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment-confirmation/payment-confirmation.component */ "./src/app/payment-confirmation/payment-confirmation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'payment', component: _payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_7__["PaymentPageComponent"] },
    { path: 'page404', component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_8__["Page404Component"] },
    { path: 'productlist', component: _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_5__["ProductlistComponent"] },
    { path: 'cart', component: _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__["CartPageComponent"] },
    { path: 'payment-error', component: _payment_error_page_payment_error_page_component__WEBPACK_IMPORTED_MODULE_9__["PaymentErrorPageComponent"] },
    { path: 'payment-confirmation', component: _payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_10__["PaymentConfirmationComponent"] },
    { path: 'payment-info-confirmation', component: _payment_transaction_confirmation_payment_transaction_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["PaymentTransactionConfirmationComponent"] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/page404',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- Navigation -->\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productlist/productlist.component */ "./src/app/productlist/productlist.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart-page/cart-page.component */ "./src/app/cart-page/cart-page.component.ts");
/* harmony import */ var _payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment-page/payment-page.component */ "./src/app/payment-page/payment-page.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/page404/page404.component.ts");
/* harmony import */ var _payment_error_page_payment_error_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payment-error-page/payment-error-page.component */ "./src/app/payment-error-page/payment-error-page.component.ts");
/* harmony import */ var _payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payment-confirmation/payment-confirmation.component */ "./src/app/payment-confirmation/payment-confirmation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var src_app_product_detail_product_detail_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/product-detail/product-detail-routing.module */ "./src/app/product-detail/product-detail-routing.module.ts");
/* harmony import */ var src_app_productlist_productlist_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/productlist/productlist-routing.module */ "./src/app/productlist/productlist-routing.module.ts");
/* harmony import */ var _payment_transaction_confirmation_payment_transaction_confirmation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./payment-transaction-confirmation/payment-transaction-confirmation.component */ "./src/app/payment-transaction-confirmation/payment-transaction-confirmation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_6__["ProductlistComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
                _cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__["CartPageComponent"],
                _payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_9__["PaymentPageComponent"],
                _page404_page404_component__WEBPACK_IMPORTED_MODULE_10__["Page404Component"],
                _payment_error_page_payment_error_page_component__WEBPACK_IMPORTED_MODULE_11__["PaymentErrorPageComponent"],
                _payment_confirmation_payment_confirmation_component__WEBPACK_IMPORTED_MODULE_12__["PaymentConfirmationComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _payment_transaction_confirmation_payment_transaction_confirmation_component__WEBPACK_IMPORTED_MODULE_20__["PaymentTransactionConfirmationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                src_app_product_detail_product_detail_routing_module__WEBPACK_IMPORTED_MODULE_18__["ProductDetailRoutingModule"],
                src_app_productlist_productlist_routing_module__WEBPACK_IMPORTED_MODULE_19__["ProductlistRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart-page/cart-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/cart-page/cart-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container cart-page-body\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-10 col-md-offset-1\">\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Produit</th>\r\n                        <th></th>\r\n                        <th class=\"text-center\"></th>\r\n                        <th class=\"text-center\">Prix</th>\r\n                        <th> </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngIf=\" cart == null\">\r\n                        <td class=\"col-sm-12 col-md-12\">\r\n                            <h1>Votre panier est vide!</h1>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let show of cart.tickets\">\r\n                        <td class=\"col-sm-8 col-md-6\">\r\n                            <div class=\"media\">\r\n                                <a class=\"thumbnail pull-left\" href=\"#\">\r\n                                    <img class=\"media-object\" src=\"http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png\"\r\n                                        style=\"width: 72px; height: 72px;\"> </a>\r\n                                <div class=\"media-body\" style=\"margin-left:5%;\">\r\n                                    <h4 class=\"media-heading\">\r\n                                        <a href=\"#\">{{show.title}}</a>\r\n                                    </h4>\r\n                                    <h5 class=\"media-heading\"> by\r\n                                        <a href=\"#\">{{show.artistName}}</a>\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"col-sm-2 col-md-2\" style=\"text-align: center\">\r\n                        </td>\r\n                        <td class=\"col-sm-1 col-md-1 text-center\">\r\n                            \r\n                        </td>\r\n                        <td class=\"col-sm-1 col-md-1 text-center\">\r\n                            <strong>{{show.price}}$</strong>\r\n                        </td>\r\n                        <td class=\"col-sm-1 col-md-1\">\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeTicket(show)\">\r\n                                <span class=\"glyphicon glyphicon-remove\"></span> Retirer\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"cart == null\">\r\n                        <td>   </td>\r\n                        <td>   </td>\r\n                        <td>   </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"cart == null\">\r\n                        <td>   </td>\r\n                        <td>   </td>\r\n                        <td>   </td>\r\n                        \r\n                    </tr>\r\n                    <tr>\r\n                        <td>   </td>\r\n                        <td>   </td>\r\n                        <td>   </td>\r\n                        <td>\r\n                            <h3>Total</h3>\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            <h3>\r\n                                <strong>{{cartPrice}}$</strong>\r\n                            </h3>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>   </td>\r\n                        <td>   </td>\r\n                        <td>   </td>\r\n                        <td>\r\n                            <a href=\"/home\">\r\n                            <button type=\"button\" class=\"btn btn-default\">\r\n                                <span class=\"glyphicon glyphicon-shopping-cart\"></span> Continuer a magasiner\r\n                            </button>\r\n                        </a>\r\n                        </td>\r\n                        <td>\r\n                            <a href=\"/payment\" *ngIf=\"cart != null\">\r\n                                <button type=\"button\" class=\"btn btn-success\" [disabled]=\"cart == null\">\r\n                                    Passer la commande\r\n                                </button>\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cart-page/cart-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/cart-page/cart-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart-page/cart-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cart-page/cart-page.component.ts ***!
  \**************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartPageComponent = /** @class */ (function () {
    function CartPageComponent(cartService) {
        this.cartService = cartService;
    }
    CartPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCartData();
        this.cartService.currentCartQuantity.subscribe(function (qty) { return _this.cartQuantity = qty; });
    };
    CartPageComponent.prototype.getCartData = function () {
        var _this = this;
        this.cartService.getCart()
            .subscribe(function (res) {
            var response = res.json();
            _this.cart = response;
            _this.cartPrice = _this.cart.price;
            _this.getCartQuantity();
        });
    };
    CartPageComponent.prototype.removeTicket = function (ticket) {
        var index = this.cart.tickets.indexOf(ticket, 0);
        if (index > -1) {
            this.cart.tickets.splice(index, 1);
        }
        this.updateCartPrice(this.cart);
        this.updateCartQty(this.cart);
        this.getCartPrice();
        this.getCartQuantity();
        localStorage.setItem('Cart', JSON.stringify(this.cart));
        this.cartService.changeCartQuantity(this.cart.tickets.length);
        this.cartService.removeFromCart(ticket);
    };
    CartPageComponent.prototype.updateCartPrice = function (cart) {
        var price = 0.0;
        cart.tickets.forEach(function (element) {
            price = price + element.price;
        });
        cart.price = price;
    };
    CartPageComponent.prototype.updateCartQty = function (cart) {
        this.cart.quantity = this.cart.tickets.length;
    };
    CartPageComponent.prototype.getCartPrice = function () {
        var price = 0.0;
        this.cart.tickets.forEach(function (element) {
            price = price + element.price;
        });
        this.cartPrice = price;
    };
    CartPageComponent.prototype.getCartQuantity = function () {
        this.cartQuantity = this.cart.tickets.length;
    };
    CartPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-page',
            template: __webpack_require__(/*! ./cart-page.component.html */ "./src/app/cart-page/cart-page.component.html"),
            styles: [__webpack_require__(/*! ./cart-page.component.scss */ "./src/app/cart-page/cart-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CartPageComponent);
    return CartPageComponent;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = /** @class */ (function () {
    function CartService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.cartQuantitySource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.getCartQty());
        this.currentCartQuantity = this.cartQuantitySource.asObservable();
        this.backendUrl = "http://localhost:8080";
    }
    CartService.prototype.changeCartQuantity = function (qty) {
        this.cartQuantitySource.next(qty);
    };
    CartService.prototype.getCartQty = function () {
        if (localStorage.getItem('SessionId')) {
            var sessionId = JSON.parse(localStorage.getItem('SessionId'));
            if (localStorage.getItem('Cart')) {
                var cart = JSON.parse(localStorage.getItem('Cart'));
                return cart.tickets.length;
            }
        }
        return 0;
    };
    CartService.prototype.getCart = function () {
        var sessionId = "";
        if (localStorage.getItem("SessionId")) {
            sessionId = JSON.parse(localStorage.getItem("SessionId"));
        }
        return this.http.get(this.backendUrl + "/cart/" + sessionId);
    };
    CartService.prototype.createCart = function () {
        var cart = {};
        localStorage.setItem("cart", JSON.stringify(cart));
    };
    CartService.prototype.addToCart = function (qty, body) {
        var _this = this;
        if (!localStorage.getItem("Cart")) {
            localStorage.setItem("Cart", "{}");
        }
        var cart = JSON.parse(localStorage.getItem("Cart"));
        if (!cart) {
            cart.quantity = 0;
        }
        var fullCart = false;
        var sessionId = JSON.parse(localStorage.getItem("SessionId"));
        if (sessionId == null) {
            this.dataService.initSessionId();
            sessionId = JSON.parse(localStorage.getItem("SessionId"));
        }
        if (cart.quantity + qty <= 6 || cart.quantity == undefined) {
            return this.http.put(this.backendUrl + "/cart/" + sessionId + "?qty=" + qty, body)
                .subscribe(function (res) {
                cart = res.json();
                _this.changeCartQuantity(cart.tickets.length);
                localStorage.setItem("Cart", JSON.stringify(cart));
            });
        }
        else {
            fullCart = true;
            return fullCart;
        }
    };
    CartService.prototype.removeFromCart = function (ticket) {
        var id = JSON.parse(localStorage.getItem("SessionId"));
        return this.http.patch(this.backendUrl + "/cart/remove/" + id, ticket)
            .subscribe(function (res) {
            var cart = res.json();
            localStorage.setItem("Cart", JSON.stringify(cart));
        });
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.backendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoint;
    }
    DataService.prototype.setSearchQuery = function (searchQuery) {
        this.searchQuery = searchQuery;
    };
    DataService.prototype.getShow = function (id) {
        return this.http.get(this.backendUrl + "/shows/singleshow/" + id);
    };
    DataService.prototype.getShows = function (query) {
        return this.http.get(this.backendUrl + "/shows/" + query);
    };
    DataService.prototype.getAllShows = function () {
        return this.http.get(this.backendUrl + "/shows/allshows/");
    };
    DataService.prototype.getHomePage = function () {
        return this.http.get(this.backendUrl + "/pages/homepage");
    };
    DataService.prototype.getOrder = function () {
        return this.http.get(this.backendUrl + "/orders/" + JSON.parse(localStorage.getItem("SessionId")));
    };
    DataService.prototype.postForm = function (body) {
        return this.http.post(this.backendUrl + "/form", body);
    };
    DataService.prototype.initSessionId = function () {
        this.http.get(this.backendUrl + "/cart/sessionId")
            .subscribe(function (res) {
            var response = res.json();
            var sessionId = response.sessionId;
            localStorage.setItem("SessionId", JSON.stringify(sessionId));
        });
    };
    DataService.prototype.getHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("Authorization", "Basic " + btoa("user:password"));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        return headers;
    };
    DataService.prototype.getBanner = function () {
        return this.http.get('https://e18-analytique-backend.herokuapp.com/api/banniere?format=horizontal&token=cc97a744-4cae-4d45-9575-add6c3aaa313');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"banner\" [innerHTML]=\"analytiqueBanner\" style=\"height: 100px; width: 800px; margin-top: 5%; margin-bottom:5%; margin: 0 auto;\">\r\n    \r\n  </div>\r\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <!-- Slide One - Set the background image for this slide in the line below -->\r\n      <div class=\"carousel-item active\" style=\"background-image: url('https://i1.wp.com/www.kstreetmanila.com/wp-content/uploads/2017/06/K-Hiphop-concert-in-Manila-announced-set-in-September.jpg?resize=1200%2C580'); width:950px; margin:0 auto;\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h3>First Slide</h3>\r\n          <p>This is a description for the first slide.</p>\r\n        </div>\r\n      </div>\r\n      <!-- Slide Two - Set the background image for this slide in the line below -->\r\n      <div class=\"carousel-item\" style=\"background-image: url('https://media.paruvendu.fr/image/celine-dion-lyon/WB15/6/6/WB156664422_1.jpeg')\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h3>Second Slide</h3>\r\n          <p>This is a description for the second slide.</p>\r\n        </div>\r\n      </div>\r\n      <!-- Slide Three - Set the background image for this slide in the line below -->\r\n      <div class=\"carousel-item\" style=\"background-image: url('https://postmediaedmontonjournal2.files.wordpress.com/2017/05/entertainment-us-music-national-concert-day.jpeg?quality=80&strip=all&w=840&h=630&crop=1')\">\r\n        <div class=\"carousel-caption d-none d-md-block\">\r\n          <h3>Third Slide</h3>\r\n          <p>This is a description for the third slide.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</header>\r\n\r\n<!-- Page Content -->\r\n<div class=\"container featured-offers\">\r\n\r\n  <!-- Portfolio Section -->\r\n  <h2>Concerts en vedette</h2>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-sm-6 portfolio-item\" *ngFor=\"let show of featuredShows\">\r\n      <div class=\"card h-100\">\r\n        <a href=\"/productdetail/{{show.sku}}\">\r\n          <img class=\"card-img-top\" src=\"{{show.imageUrl}}\" alt=\"\" height=\"200px\">\r\n        </a>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">\r\n            <a href=\"/productdetail/{{show.sku}}\">{{show.title}}</a>\r\n          </h4>\r\n          <p class=\"card-text\">{{show.price}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"source\">\r\n    <span>https://startbootstrap.com/template-overviews/modern-business/</span>\r\n  </div>\r\n\r\n  <!-- /.row -->"

/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 992px) {\n  body {\n    padding-top: 56px; } }\n\n.carousel-item {\n  height: 65vh;\n  min-height: 300px;\n  background: no-repeat center center scroll;\n  background-size: cover; }\n\n.portfolio-item {\n  margin-bottom: 30px; }\n\n.featured-offers {\n  margin-top: 5%;\n  margin-bottom: 5%; }\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(dataService) {
        this.dataService = dataService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.getHomepageContent();
        this.getAnalyticBanner();
    };
    HomepageComponent.prototype.getHomepageContent = function () {
        var _this = this;
        this.dataService.getHomePage()
            .subscribe(function (res) {
            var response = res.json();
            _this.banners = response.banners;
            _this.featuredShows = response.shows;
        });
    };
    HomepageComponent.prototype.getAnalyticBanner = function () {
        var _this = this;
        this.dataService.getBanner()
            .subscribe(function (res) {
            _this.analytiqueBanner = res.text();
        });
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"main\">\r\n\r\n      <h3>Veuillez vous connecter</h3>\r\n\r\n      <form role=\"form\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputUsernameEmail\">Nom d'utilisateur </label>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputUsernameEmail\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputPassword\">Mot de passe</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword\">\r\n        </div>\r\n        <div class=\"login-buttons\">\r\n          <a href=\"/profilepage\" class=\"btn btn btn-primary col-md-12\">Connexion</a>\r\n          <button type=\"submit\" class=\"btn btn btn-primary col-md-12\" style=\"margin-top:5%;\">\r\n            Connexion Via réseau social\r\n          </button>\r\n        </div>\r\n      </form>\r\n\r\n      <a href=\"/register\">Créer un compte</a>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  max-width: 320px;\n  margin: 0 auto;\n  font-size: 12px; }\n\n.login-or {\n  position: relative;\n  font-size: 18px;\n  color: #aaa;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.span-or {\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: -2px;\n  margin-left: -25px;\n  background-color: #fff;\n  width: 50px;\n  text-align: center; }\n\n.hr-or {\n  background-color: #cdcdcd;\n  height: 1px;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\nh3 {\n  text-align: center;\n  line-height: 300%; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" href=\"/\">Eventrium</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" id=\"login-link\" alt=\"Option non disponible\">Connexion\r\n                        <span class=\"sr-only\">(current)</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"/cart\">\r\n                        <i class=\"fas fa-shopping-cart\"></i> ({{qty}})\r\n                    </a>\r\n                </li>\r\n\r\n                <li class=\"nav-item\">\r\n                        <form #searchForm = \"ngForm\" (ngSubmit)=\"searchShows(searchForm)\" style=\"display:flex;\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Recherche\" [(ngModel)]=\"search\" name=\"search\" required>\r\n\r\n                            <span class=\"input-group-btn\">\r\n                                    <button class=\"btn btn-search\" type=\"submit\" [disabled]=\"searchForm.value.search == ''\">\r\n                                        <i class=\"fas fa-search\"></i>\r\n                                    </button>\r\n                            </span>\r\n                        </form>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n@font-face {\n  font-family: \"Logo-font\";\n  src: url(\"/assets/fonts/Fridays.ttf\"); }\nhtml, body {\n  height: 100%; }\nnav #login-link {\n  color: darkgray !important; }\nnav .nav-link {\n  color: white !important; }\nnav .navbar-brand:hover, nav .nav-link:hover {\n  color: #5b99ff !important; }\nnav .nav-link:visited {\n  text-decoration: none;\n  color: white; }\nnav .btn-search {\n  background-color: #5b99ff; }\n.navbar-brand {\n  font-family: \"Logo-font\"; }\n.page-content {\n  padding-top: 56px;\n  min-height: 85%;\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, cartService, dataService) {
        this.router = router;
        this.cartService = cartService;
        this.dataService = dataService;
        this.search = "";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateCartQuantity();
        this.cartService.currentCartQuantity.subscribe(function (qty) { return _this.qty = qty; });
    };
    NavbarComponent.prototype.searchShows = function (searchFrom) {
        this.router.navigateByUrl("/productlist/" + searchFrom.value.search);
    };
    NavbarComponent.prototype.updateCartQuantity = function () {
        if (JSON.parse(localStorage.getItem("Cart"))) {
            this.qty = JSON.parse(localStorage.getItem("Cart")).quantity;
        }
        else {
            this.qty = 0;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/page404/page404.component.html":
/*!************************************************!*\
  !*** ./src/app/page404/page404.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <div class=\"text-center\"><i class=\"fa fa-5x fa-frown-o\" style=\"color:#d9534f;\"></i></div>\r\n        <h1 class=\"text-center\">404 Page introuvable<p> </p><p><small class=\"text-center\"> La page que vous cherchez semble introuvable.</small></p></h1>\r\n        <p class=\"text-center\">Veillez cliquez sur le bouton de retour ou cliquez sur le bouton suivant.</p>\r\n        <p class=\"text-center\"><a class=\"btn btn-primary\" href=\"#\"><i class=\"fa fa-home\"></i> Retour à la page d'accueil</a></p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page404/page404.component.scss":
/*!************************************************!*\
  !*** ./src/app/page404/page404.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page404/page404.component.ts":
/*!**********************************************!*\
  !*** ./src/app/page404/page404.component.ts ***!
  \**********************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.scss */ "./src/app/page404/page404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/payment-confirmation/payment-confirmation.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/payment-confirmation/payment-confirmation.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:80px;\">\r\n\r\n      <h2>Confirmation de paiement</h2>\r\n\r\n      \r\n      <div class=\"row\" >\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4\"></div>\r\n      </div>\r\n\r\n      <div class=\"row\" >\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4\"><b>Numero de confirmation<br> {{orderInfos.confirmationNumber}}</b></div>\r\n      </div>\r\n      <div class=\"row\" >\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4\"><b>25/05/2018</b></div>\r\n      </div>  \r\n\r\n      <div class=\"row\" >\r\n        <div class=\"col-4\">   </div>\r\n        <div class=\"col-4\">    </div>\r\n        <div class=\"col-4\">    </div>\r\n      </div>\r\n\r\n      <div class=\"row\" >\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4\"></div>\r\n      </div>\r\n\r\n      <div class=\"row\" >\r\n        <div class=\"col-4\"><h5>Facturé à</h5> </div>\r\n        <div class=\"col-4\">    </div>\r\n        <div class=\"col-4\"> <h5>Facturé par</h5></div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">{{orderInfos.firstName}} {{orderInfos.lastName}}</div>\r\n        <div class=\"col-sm-4\"> </div>\r\n        <div class=\"col-sm-4\">Eventrium</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">{{orderInfos.address}} </div>\r\n        <div class=\"col-md-4\"> </div>\r\n        <div class=\"col-md-4\">56 rue peel</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4\">Montréal,QC</div>\r\n        <div class=\"col-lg-4\"> </div>\r\n        <div class=\"col-lg-4\">Montreal,QC</div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-4\">{{orderInfos.postalCode}}</div>\r\n        <div class=\"col-xl-4\"></div>\r\n        <div class=\"col-xl-4\">H3C 1L3</div>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <h3>Détails de la commande</h3>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n          Tickets\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">Tickets</div>\r\n            <div class=\"col-md-6\">.col-md-6</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">.col-md-4</div>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <h3>Détail de la transaction</h3>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-8\">.col-12 .col-md-8</div>\r\n        <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\r\n        <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\r\n        <div class=\"col-6 col-md-4\">.col-6 .col-md-4</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">.col-6</div>\r\n        <div class=\"col-6\">.col-6</div>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n    </div> <!-- /container -->\r\n\r\n    <!-- Optional JavaScript -->\r\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\" crossorigin=\"anonymous\"></script>\r\n"

/***/ }),

/***/ "./src/app/payment-confirmation/payment-confirmation.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/payment-confirmation/payment-confirmation.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment-confirmation/payment-confirmation.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/payment-confirmation/payment-confirmation.component.ts ***!
  \************************************************************************/
/*! exports provided: PaymentConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfirmationComponent", function() { return PaymentConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentConfirmationComponent = /** @class */ (function () {
    function PaymentConfirmationComponent(dataService) {
        this.dataService = dataService;
    }
    PaymentConfirmationComponent.prototype.ngOnInit = function () {
        this.getOrderInfos();
    };
    PaymentConfirmationComponent.prototype.getOrderInfos = function () {
        var _this = this;
        this.dataService.getOrder()
            .subscribe(function (res) {
            var response = res.json();
            _this.orderInfos = response;
            localStorage.removeItem("cart");
            localStorage.removeItem("SessionId");
        });
    };
    PaymentConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-confirmation',
            template: __webpack_require__(/*! ./payment-confirmation.component.html */ "./src/app/payment-confirmation/payment-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./payment-confirmation.component.scss */ "./src/app/payment-confirmation/payment-confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PaymentConfirmationComponent);
    return PaymentConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/payment-error-page/payment-error-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/payment-error-page/payment-error-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  payment-error-page works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/payment-error-page/payment-error-page.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/payment-error-page/payment-error-page.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment-error-page/payment-error-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/payment-error-page/payment-error-page.component.ts ***!
  \********************************************************************/
/*! exports provided: PaymentErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentErrorPageComponent", function() { return PaymentErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentErrorPageComponent = /** @class */ (function () {
    function PaymentErrorPageComponent() {
    }
    PaymentErrorPageComponent.prototype.ngOnInit = function () {
    };
    PaymentErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-error-page',
            template: __webpack_require__(/*! ./payment-error-page.component.html */ "./src/app/payment-error-page/payment-error-page.component.html"),
            styles: [__webpack_require__(/*! ./payment-error-page.component.scss */ "./src/app/payment-error-page/payment-error-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentErrorPageComponent);
    return PaymentErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/payment-page/payment-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/payment-page/payment-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"py-5 text-center\">\r\n      <h2>Completez la commande</h2>\r\n      </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 order-md-2 mb-4\">\r\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n          <span class=\"text-muted\">Votre panier</span>\r\n          <span class=\"badge badge-secondary badge-pill\">{{cart.quantity}}</span>\r\n        </h4>\r\n        <ul class=\"list-group mb-3\">\r\n          <li *ngFor=\"let ticket of cart.tickets\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n            <div>\r\n              <h6 class=\"my-0\">{{ticket.title}}</h6>\r\n              <small class=\"text-muted\">{{ticket.artistName}}</small>\r\n            </div>\r\n            <span class=\"text-muted\">{{ticket.price}}</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between\">\r\n              <span>Total </span>\r\n              <strong>{{cart.price}}</strong>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n      <div class=\"col-md-8 order-md-1\">\r\n        <h4 class=\"mb-3\">Adresse de facturation</h4>\r\n\r\n\r\n        <form class=\"needs-validation\" novalidate=\"\" #paymentInfoForm=\"ngForm\" (ngSubmit)=\"saveCustomerInfo(paymentInfoForm, this.cart)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"firstName\">Prénom</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required=\"\" [(ngModel)]=\"firstName\" name=\"firstName\">\r\n              <div class=\"invalid-feedback\">\r\n                Un prénom valide est nécéssaire.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"lastName\">Nom</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required=\"\" [(ngModel)]=\"lastName\" name=\"lastName\">\r\n              <div class=\"invalid-feedback\">\r\n                Un nom valide est nécéssaire.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"email\">Courriel</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@exemple.com\" [(ngModel)]=\"email\" name=\"email\" required>\r\n            <div class=\"invalid-feedback\">\r\n              SVP, Veuillez entrer un email valide\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"address\">Adresse</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required [(ngModel)]=\"address\" name=\"address\" required>\r\n            <div class=\"invalid-feedback\">\r\n              SVP, Entrez votre adresse.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"address2\">Adresse 2 <span class=\"text-muted\">(Optional)</span></label>\r\n            <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\" [(ngModel)]=\"address2\" name=\"address2\">\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5 mb-3\">\r\n              <label for=\"country\">Pays</label>\r\n              <select class=\"custom-select d-block w-100\" id=\"country\" required [(ngModel)]=\"country\" name=\"country\">\r\n                <option value=\"\">Selectionnez...</option>\r\n                <option>Canada</option>\r\n                <option>United States</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\">\r\n                Veuillez choisir un pays valide.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 mb-3\">\r\n              <label for=\"state\">Région</label>\r\n              <select class=\"custom-select d-block w-100\" id=\"state\" required=\"\" [(ngModel)]=\"state\" name=\"state\">\r\n                <option value=\"\">Selectionnez...</option>\r\n                <option>Québec</option>\r\n                <option>California</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\">\r\n                Veuillez choisir une région valide.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"zip\">Code Postal</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required=\"\" [(ngModel)]=\"postalCode\" name=\"postalCode\">\r\n              <div class=\"invalid-feedback\">\r\n                Code postal requis.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          \r\n          <h4 class=\"mb-3\">Paiement\r\n          </h4>\r\n          <div class=\"row\">\r\n              <div class=\"alert alert-danger col-md-6 mb-4\" role=\"alert\" *ngIf=\"nameValid == false\">\r\n                  Veuillez entrer un nom valide.\r\n              </div>\r\n              <div class=\"alert alert-danger col-md-6 mb-4\" role=\"alert\" *ngIf=\"cardValid == false\">\r\n                  Numéro de carte de crédit invalide.\r\n              </div>\r\n            </div>\r\n          <!--<div class=\"d-block my-3\">\r\n            <div class=\"custom-control custom-radio\">\r\n              <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked=\"\" required=\"\" [(ngModel)]=\"ccnumber\" name=\"ccnumber\">\r\n              <label class=\"custom-control-label\" for=\"credit\">Carte de crédit</label>\r\n            </div>\r\n          </div>-->\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"cc-name\">Nom sur la carte</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required=\"\" [(ngModel)]=\"nameOnCard\" name=\"nameOnCard\">\r\n              <small class=\"text-muted\">Nom complet sur la carte</small>\r\n              <div class=\"invalid-feedback\">\r\n                Le nom sur la carte est requis\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"cc-number\">Numero de Carte</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-numbers\" placeholder=\"\" required=\"\" [(ngModel)]=\"ccNumbers\" name=\"ccNumbers\">\r\n              <div class=\"invalid-feedback\">\r\n                Le numero de carte est requis\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"alert alert-danger col-md-8 mb-4\" role=\"alert\" *ngIf=\"dateValid == false\">\r\n                Date expirée ou format invalide YYYY MM.\r\n            </div>\r\n            <div class=\"alert alert-danger col-md-4 mb-4\" role=\"alert\" *ngIf=\"cvvValid == false\">\r\n                Numéro CVV invalide.\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 mb-4\">\r\n              <label for=\"cc-expiration\">Année (YYYY)</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-annee\" placeholder=\"\" required=\"\" [(ngModel)]=\"ccAnnee\" name=\"ccAnnee\">\r\n              <div class=\"invalid-feedback\">\r\n                Annee d'expiration requise\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 mb-4\">\r\n                <label for=\"cc-expiration\">Mois (MM)</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"cc-mois\" placeholder=\"\" required=\"\" [(ngModel)]=\"ccMois\" name=\"ccMois\">\r\n                <div class=\"invalid-feedback\">\r\n                  Mois d'expiration requis\r\n                </div>\r\n              </div>\r\n            <div class=\"col-md-4 mb-4\">\r\n              <label for=\"cc-expiration\">CVV</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required=\"\" [(ngModel)]=\"cvv\" name=\"cvv\">\r\n              <div class=\"invalid-feedback\">\r\n                Le code de sécurité est requis\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr class=\"mb-4\">\r\n          <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue</button>\r\n          <br>\r\n        </form>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/payment-page/payment-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/payment-page/payment-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  font-size: 12px;\n  font-weight: normal; }\n"

/***/ }),

/***/ "./src/app/payment-page/payment-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/payment-page/payment-page.component.ts ***!
  \********************************************************/
/*! exports provided: PaymentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageComponent", function() { return PaymentPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transaction.service */ "./src/app/transaction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentPageComponent = /** @class */ (function () {
    function PaymentPageComponent(cartService, dataService, transactionService, router) {
        this.cartService = cartService;
        this.dataService = dataService;
        this.transactionService = transactionService;
        this.router = router;
        this.todayDate = new Date();
        this.todayAnnee = this.todayDate.getFullYear();
        this.todayMois = this.todayDate.getMonth() + 1;
    }
    PaymentPageComponent.prototype.ngOnInit = function () {
        this.populateCart();
    };
    PaymentPageComponent.prototype.validateCC = function () {
        this.cardValid = false;
        this.dateValid = false;
        this.nameValid = false;
        this.cvvValid = false;
        //Valide credit card numbers with luhn algorithm.
        this.ccCardValid();
        //Validate credit card date.
        this.ccDateValid();
        //Validate name does not contain number(s).
        this.ccValidNameOnCard();
        //valide CVV is a number of lenght 3.
        this.ccValidateCVV();
    };
    PaymentPageComponent.prototype.ccValidateCVV = function () {
        if (typeof this.cvv !== 'undefined' && (this.cvv.length == 3 || this.cvv.length == 4)) {
            if (Number(this.cvv) > 0) {
                this.cvvValid = true;
            }
            else {
                this.cvvValid = false;
            }
        }
        else {
            this.cvvValid = false;
            console.log(this.cvv.length);
        }
    };
    PaymentPageComponent.prototype.ccValidNameOnCard = function () {
        if (typeof this.nameOnCard !== 'undefined') {
            if (/^[A-Za-z\s]+$/.test(this.nameOnCard)) {
                this.nameValid = true;
            }
            else {
                this.nameValid = false;
            }
        }
        else {
            this.nameValid = false;
        }
    };
    //Validate credit card date.
    PaymentPageComponent.prototype.ccDateValid = function () {
        if (this.ccAnnee > this.todayAnnee ||
            this.ccAnnee == this.todayAnnee && this.ccMois >= this.todayMois) {
            this.dateValid = true;
        }
        else {
            this.dateValid = false;
        }
    };
    //Valide credit card numbers with luhn algorithm.
    PaymentPageComponent.prototype.ccCardValid = function () {
        if (typeof this.ccNumbers !== 'undefined') {
            if (this.ccLuhnValid(this.ccNumbers) && Object.keys(this.ccNumbers).length != 0) {
                this.cardValid = true;
            }
            else if (!this.ccLuhnValid(this.ccNumbers)) {
                this.cardValid = false;
            }
        }
        else {
            this.cardValid = false;
        }
    };
    //Source of luhn algorithm: https://github.com/theAlgorithmist/FormValidation
    PaymentPageComponent.prototype.ccLuhnValid = function (cardNumber) {
        var digit;
        var n;
        var sum;
        var j;
        sum = 0;
        var numbers = cardNumber.split('').reverse().map(function (val) { return parseFloat(val); });
        var len = numbers.length;
        n = 0;
        j = 0;
        while (j < len) {
            digit = numbers[n];
            digit = +digit;
            if (n % 2) {
                digit *= 2;
                if (digit < 10)
                    sum += digit;
                else
                    sum += digit - 9;
            }
            else
                sum += digit;
            n = ++j;
        }
        return sum % 10 === 0;
    };
    PaymentPageComponent.prototype.saveCustomerInfo = function (paymentInfoForm) {
        var _this = this;
        this.validateCC();
        console.log(paymentInfoForm, "here is your form");
        var form = paymentInfoForm.value;
        var requestBody = {};
        this.populateRequestBody(requestBody, form, this.cart);
        this.transactionService.createTransaction(requestBody)
            .subscribe(function (res) {
            var response = res.json();
            if (response.status == 'P') {
                console.log('transaction created');
                _this.router.navigate(['/payment-transaction-confirmation']);
            }
        });
    };
    PaymentPageComponent.prototype.populateRequestBody = function (requestBody, form, cart) {
        requestBody.merchantKey = "8c9946a7-0300-4048-89da-214c28ab9f51";
        requestBody.cardLastName = form.lastName;
        requestBody.cartFirstName = form.firstName;
        requestBody.cartNumber = form.ccNumber;
        requestBody.cardExpiration = form.exp;
        requestBody.cvv = form.cvv;
        requestBody.amounth = cart.price;
    };
    PaymentPageComponent.prototype.populateCart = function () {
        var _this = this;
        this.cartService.getCart()
            .subscribe(function (res) {
            var response = res.json();
            _this.cart = response;
        });
    };
    PaymentPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-page',
            template: __webpack_require__(/*! ./payment-page.component.html */ "./src/app/payment-page/payment-page.component.html"),
            styles: [__webpack_require__(/*! ./payment-page.component.scss */ "./src/app/payment-page/payment-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PaymentPageComponent);
    return PaymentPageComponent;
}());



/***/ }),

/***/ "./src/app/payment-transaction-confirmation/payment-transaction-confirmation.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/payment-transaction-confirmation/payment-transaction-confirmation.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"py-5 text-center\">\r\n      <h2>Confirmez vos informations</h2>\r\n      </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 order-md-2 mb-4\">\r\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n          <span class=\"text-muted\">Votre panier</span>\r\n          <span class=\"badge badge-secondary badge-pill\">{{cart.quantity}}</span>\r\n        </h4>\r\n        <ul class=\"list-group mb-3\">\r\n          <li *ngFor=\"let ticket of cart.tickets\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n            <div>\r\n              <h6 class=\"my-0\">{{ticket.title}}</h6>\r\n              <small class=\"text-muted\">{{ticket.artistName}}</small>\r\n            </div>\r\n            <span class=\"text-muted\">{{ticket.price}}</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between\">\r\n              <span>Total </span>\r\n              <strong>{{cart.price}}</strong>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n      <div class=\"col-md-8 order-md-1\">\r\n        <h4 class=\"mb-3\">Adresse de facturation</h4>\r\n\r\n\r\n        <form class=\"needs-validation\" novalidate=\"\" #paymentInfoForm=\"ngForm\" (ngSubmit)=\"saveCustomerInfo(paymentInfoForm)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"firstName\">Prénom</label>\r\n              <h3>Jude</h3>\r\n            </div>\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"lastName\">Nom</label>\r\n              <h3>Fort</h3>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"email\">Courriel</label>\r\n            <h3>jude.fort.1@ens.etsmtl.ca</h3>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"address\">Adresse</label>\r\n            <h3>9881 rue de la rue</h3>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"address2\">Adresse 2</label>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5 mb-3\">\r\n              <label for=\"country\">Pays</label>\r\n              <h3>Canada</h3>\r\n            </div>\r\n            <div class=\"col-md-4 mb-3\">\r\n              <label for=\"state\">Région</label>\r\n              <h3>Quebec</h3>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"zip\">Code Postal</label>\r\n              <h3>H1E 2L1</h3>\r\n            </div>\r\n          </div>\r\n          <hr class=\"mb-4\">\r\n          <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue</button>\r\n        </form>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/payment-transaction-confirmation/payment-transaction-confirmation.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/payment-transaction-confirmation/payment-transaction-confirmation.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment-transaction-confirmation/payment-transaction-confirmation.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/payment-transaction-confirmation/payment-transaction-confirmation.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PaymentTransactionConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTransactionConfirmationComponent", function() { return PaymentTransactionConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentTransactionConfirmationComponent = /** @class */ (function () {
    function PaymentTransactionConfirmationComponent() {
    }
    PaymentTransactionConfirmationComponent.prototype.ngOnInit = function () {
    };
    PaymentTransactionConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-transaction-confirmation',
            template: __webpack_require__(/*! ./payment-transaction-confirmation.component.html */ "./src/app/payment-transaction-confirmation/payment-transaction-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./payment-transaction-confirmation.component.scss */ "./src/app/payment-transaction-confirmation/payment-transaction-confirmation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentTransactionConfirmationComponent);
    return PaymentTransactionConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/product-detail/product-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProductDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailRoutingModule", function() { return ProductDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var productDetailRoutes = [
    { path: 'productdetail', component: _product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"] },
    { path: 'productdetail/:sku', component: _product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"] }
];
var ProductDetailRoutingModule = /** @class */ (function () {
    function ProductDetailRoutingModule() {
    }
    ProductDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(productDetailRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ProductDetailRoutingModule);
    return ProductDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-detail-container col-lg-8\">\r\n\r\n  <div class=\"row row-eq-height first-row\">\r\n    <div class=\"col-sm-12 col-md-6 col-lg-5 image-part\">\r\n      <img src=\"{{showData.imageUrl}}\" width=\"400px\">\r\n    </div>\r\n\r\n    <div class=\"col-sm-12 col-md-6 col-lg-6 product-actions\">\r\n      <div class=\"product-name\">\r\n        <h3>{{showData.title}}</h3>\r\n        <h6>Artiste</h6>\r\n        <h5>{{showData.artistName}}</h5>\r\n        <h6>Salle</h6>\r\n        <h5>{{showData.idSalle}}</h5>\r\n      </div>\r\n\r\n      <form #addToCartForm=\"ngForm\" (ngSubmit)=\"addToCart(addToCartForm)\">\r\n        <div class=\"cart-action\">\r\n          <h4>{{showData.price}}$</h4>\r\n\r\n          <div class=\"notAvailable\" *ngIf=\"showData.availableTickets.length ==0\">\r\n            <h3>Billets non disponibles pour ce spectacle</h3>\r\n          </div>\r\n\r\n          <div class=\"quantity\" *ngIf=\"showData.availableTickets.length !=0 && !showData.saleDone\">\r\n            <p>Quantité</p>\r\n            <select class=\"dropdown\" [(ngModel)]=\"quantity\" name=\"quantity\" class=\"form-control\" required>\r\n              <option [ngValue]=\"1\" selected>1</option>\r\n              <option [ngValue]=\"2\" *ngIf=\"showData.availableTickets.length >=2\">2</option>\r\n              <option [ngValue]=\"3\" *ngIf=\"showData.availableTickets.length >=3\">3</option>\r\n              <option [ngValue]=\"4\" *ngIf=\"showData.availableTickets.length >=4\">4</option>\r\n              <option [ngValue]=\"5\" *ngIf=\"showData.availableTickets.length >=5\">5</option>\r\n              <option [ngValue]=\"6\" *ngIf=\"showData.availableTickets.length >=6\">6</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"displayError\">\r\n            Quantité maximale de billets atteinte\r\n          </div>\r\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showData.saleDone \">\r\n            Cette vente est terminée\r\n          </div>\r\n          <button class=\"btn btn-success\" type=\"submit\" *ngIf=\"showData.availableTickets.length !=0\" [disabled]=\"showData.availableTickets.length ==0 || showData.saleDone || displayError\">Ajouter au panier</button>\r\n\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row row-eq-height second-row\">\r\n    <div class=\"col-sm-11 col-md-10 col-lg-10\">\r\n      <h4>Description</h4>\r\n      <p>{{showData.description}}</p>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-detail-container {\n  margin: 0 auto;\n  float: none;\n  margin-top: 5%;\n  margin-bottom: 5%; }\n  .product-detail-container .cart-action {\n    margin-top: 5%;\n    height: 25px; }\n  .product-detail-container .cart-action .quantity {\n      margin-bottom: 2%; }\n  .product-detail-container .cart-action .quantity .dropdown {\n        text-align: center;\n        border-radius: 3px; }\n  .product-detail-container .cart-action .input-qty {\n      text-align: center; }\n  .product-detail-container .first-row {\n    min-height: 80%; }\n  .product-detail-container .second-row {\n    margin-top: 3%; }\n  .product-detail-container .image-part img {\n    max-width: 95%; }\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(dataService, cartService, route) {
        this.dataService = dataService;
        this.cartService = cartService;
        this.route = route;
        this.quantity = 1;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getShowData();
        if (!localStorage.getItem("SessionId")) {
            this.initiateSessionId();
        }
    };
    ProductDetailComponent.prototype.getShowData = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.showId = params['sku'];
        });
        this.dataService.getShow(this.showId)
            .subscribe(function (res) {
            _this.showData = res.json();
        });
    };
    ProductDetailComponent.prototype.addToCart = function (addToCartForm) {
        var body = this.showId;
        var qty = addToCartForm.value.quantity;
        var res = this.cartService.addToCart(qty, body);
        if (res == true) {
            this.displayError = true;
        }
    };
    ProductDetailComponent.prototype.initiateSessionId = function () {
        this.dataService.initSessionId();
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/product-detail/product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/productlist/productlist-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/productlist/productlist-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductlistRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistRoutingModule", function() { return ProductlistRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _productlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productlist.component */ "./src/app/productlist/productlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var productlistRoutes = [
    { path: 'productlist', component: _productlist_component__WEBPACK_IMPORTED_MODULE_2__["ProductlistComponent"] },
    { path: 'productlist/:query', component: _productlist_component__WEBPACK_IMPORTED_MODULE_2__["ProductlistComponent"] }
];
var ProductlistRoutingModule = /** @class */ (function () {
    function ProductlistRoutingModule() {
    }
    ProductlistRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(productlistRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ProductlistRoutingModule);
    return ProductlistRoutingModule;
}());



/***/ }),

/***/ "./src/app/productlist/productlist.component.html":
/*!********************************************************!*\
  !*** ./src/app/productlist/productlist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\r\n<div class=\"container\">\r\n\r\n  <!-- Page Heading -->\r\n  <h1 *ngIf=\"showsList.length > 0\" class=\"my-4\">Résultats pour\r\n    <small>{{query}}</small> - {{showsList.length}}\r\n  </h1>\r\n\r\n  <h1 *ngIf=\"showsList.length == 0\" class=\"my-4\">Aucun Résultats ! \r\n  </h1>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-sm-6 portfolio-item\" *ngFor=\"let show of showsList\">\r\n      <div class=\"card h-100\">\r\n        <a href=\"/productdetail/{{show.sku}}\">\r\n          <img class=\"card-img-top\" src=\"{{show.imageUrl}}\" alt=\"\">\r\n        </a>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">\r\n            <a href=\"/productdetail/{{show.sku}}\">{{show.title}}</a>\r\n          </h4>\r\n          <p class=\"card-text\">{{show.price}}$<br><span *ngIf=\"show.saleDone\" style=\"color:red;\">Vente terminée</span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- /.row -->\r\n\r\n  <!-- Pagination -->\r\n  <!--    <ul class=\"pagination justify-content-center\">\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n          <span aria-hidden=\"true\">&laquo;</span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\">1</a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\">2</a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\">3</a>\r\n      </li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n          <span aria-hidden=\"true\">&raquo;</span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n      </li>\r\n    </ul>-->\r\n\r\n</div>\r\n<!-- /.container -->"

/***/ }),

/***/ "./src/app/productlist/productlist.component.scss":
/*!********************************************************!*\
  !*** ./src/app/productlist/productlist.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-top {\n  height: 200px; }\n"

/***/ }),

/***/ "./src/app/productlist/productlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/productlist/productlist.component.ts ***!
  \******************************************************/
/*! exports provided: ProductlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistComponent", function() { return ProductlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductlistComponent = /** @class */ (function () {
    function ProductlistComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ProductlistComponent.prototype.ngOnInit = function () {
        this.getShows();
    };
    ProductlistComponent.prototype.getShows = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.query = params['query'];
            _this.callService(_this.query);
        });
    };
    ProductlistComponent.prototype.callService = function (request) {
        var _this = this;
        this.dataService.getShows(request)
            .subscribe(function (res) {
            _this.showsList = res.json();
        });
    };
    ProductlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productlist',
            template: __webpack_require__(/*! ./productlist.component.html */ "./src/app/productlist/productlist.component.html"),
            styles: [__webpack_require__(/*! ./productlist.component.scss */ "./src/app/productlist/productlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductlistComponent);
    return ProductlistComponent;
}());



/***/ }),

/***/ "./src/app/transaction.service.ts":
/*!****************************************!*\
  !*** ./src/app/transaction.service.ts ***!
  \****************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionService = /** @class */ (function () {
    function TransactionService(http) {
        this.http = http;
    }
    TransactionService.prototype.createTransaction = function (requestBody) {
        return this.http.post('https://passerelle.ca-central-1.elasticbeanstalk.com/api/transactions', requestBody);
    };
    TransactionService.prototype.confirmTransaction = function (requestBody, requestId) {
        return this.http.post('https://passerelle.ca-central-1.elasticbeanstalk.com/api/transactions/' + requestId + '/confirm', requestBody);
    };
    TransactionService.prototype.cancel = function (requestBody, requestId) {
        return this.http.post('https://passerelle.ca-central-1.elasticbeanstalk.com/api/transactions/' + requestId + '/cancel', requestBody);
    };
    TransactionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    //apiEndPoint:"http://localhost:8080"
    apiEndPoint: "https://eventriumbackend.herokuapp.com/"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\codioca.NTER\GitHub\e18-vente1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map