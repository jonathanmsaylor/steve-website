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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio-page/portfolio-page.component */ "./src/app/portfolio-page/portfolio-page.component.ts");
/* harmony import */ var _resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume-page/resume-page.component */ "./src/app/resume-page/resume-page.component.ts");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "./src/app/projects-page/projects-page.component.ts");







var routes = [
    { path: '', pathMatch: 'full', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'projects', component: _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsPageComponent"] },
    { path: 'portfolio', component: _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioPageComponent"] },
    { path: 'resume', component: _resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_5__["ResumePageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
        this.isIn = false; // store state
    }
    AppComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "./src/app/projects-page/projects-page.component.ts");
/* harmony import */ var _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio-page/portfolio-page.component */ "./src/app/portfolio-page/portfolio-page.component.ts");
/* harmony import */ var _resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume-page/resume-page.component */ "./src/app/resume-page/resume-page.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsPageComponent"],
                _portfolio_page_portfolio_page_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioPageComponent"],
                _resume_page_resume_page_component__WEBPACK_IMPORTED_MODULE_8__["ResumePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* * {border: 1px solid red;} */\r\n\r\nhtml, body {\r\n    background: linear-gradient(rgba(210, 180, 140, 0.822), rgba(194, 128, 47, 0.048), rgba(210, 180, 140, 0.089));\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    overflow-x: hidden; \r\n}\r\n\r\nfooter {\r\n    background: linear-gradient(rgba(210, 180, 140, 0.822), rgba(194, 128, 47, 0.048), rgba(210, 180, 140, 0.089));\r\n    padding: 8%;\r\n}\r\n\r\n#homecontainer {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    font-family: bauhus;\r\n    font-size: 20px;\r\n}\r\n\r\n.homerows{\r\n    padding: 15px;\r\n}\r\n\r\n/* Extra Small Devices, Phones */\r\n\r\n@media only screen and (min-width: 1px) {\r\n    #setdesigner {\r\n        justify-content: center;\r\n        font-family: bauhaus;\r\n        font-size: 30px;\r\n        letter-spacing: 2px;\r\n    }\r\n    .logo {\r\n        width: 25%;\r\n        padding: 3px;\r\n        margin: 2px;\r\n    }\r\n    h1 {\r\n        font-family: bauhaus;\r\n        font-size: 45px;\r\n        color: white;\r\n    }\r\n    .artd {\r\n        font-family: bauhus;\r\n        font-size: 18px;\r\n    }\r\n    .btn-block {\r\n        border:none;\r\n        cursor:pointer;\r\n        outline:none;\r\n        font-family: bauhaus;\r\n        padding: 10px;\r\n        background: radial-gradient(ellipse at center, rgba(169,3,41,0.81) 0%,rgba(143,2,34,0.89) 44%,rgba(109,0,25,1) 100%);\r\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfa90329', endColorstr='#6d0019',GradientType=1 );        color: white;\r\n        font-size: 20px;\r\n        letter-spacing: 2px;\r\n        border-radius: 10px;\r\n        margin: 10px;\r\n        border: 2px solid black;\r\n  }\r\n  .col-4 {\r\n      text-align: center;\r\n      margin: 0;\r\n      padding: 0;\r\n      overflow: hidden;\r\n  }\r\n  .fa {\r\n    padding: 15px;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n    margin: 25%;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n  }\r\n  .fa-imdb {\r\n      color: goldenrod;\r\n  }\r\n.icon-bar {\r\n    position: fixed;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n  }\r\n  \r\n  .icon-bar a {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 16px;\r\n    transition: all 0.3s ease;\r\n    color: white;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  /* Small Devices, Tablets */\r\n  \r\n  @media only screen and (min-width: 768px) {\r\n\r\n  }\r\n  \r\n  /* Medium Devices, Desktops */\r\n  \r\n  @media only screen and (min-width: 992px) {\r\n    .logo {\r\n        width: 50%;\r\n        padding: 3px;\r\n    }\r\n  }\r\n  \r\n  /* Large Devices, Wide Screens */\r\n  \r\n  @media only screen and (min-width: 1200px) {\r\n\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnQ0FBZ0M7O0FBRWhDO0lBQ0ksK0dBQStHO0lBQy9HLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSwrR0FBK0c7SUFDL0csWUFBWTtDQUNmOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0NBQ25COztBQUNEO0lBQ0ksY0FBYztDQUNqQjs7QUFDRCxpQ0FBaUM7O0FBRWpDO0lBQ0k7UUFDSSx3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixvQkFBb0I7S0FDdkI7SUFDRDtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsWUFBWTtLQUNmO0lBQ0Q7UUFDSSxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGFBQWE7S0FDaEI7SUFDRDtRQUNJLG9CQUFvQjtRQUNwQixnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsYUFBYTtRQUNiLHFCQUFxQjtRQUNyQixjQUFjO1FBR2QscUhBQXFIO1FBQ3JILHNIQUFzSCxRQUFRLGFBQWE7UUFDM0ksZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsYUFBYTtRQUNiLHdCQUF3QjtHQUM3QjtFQUNEO01BQ0ksbUJBQW1CO01BQ25CLFVBQVU7TUFDVixXQUFXO01BQ1gsaUJBQWlCO0dBQ3BCO0VBQ0Q7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsd0JBQXdCO0dBQ3pCO0VBQ0Q7TUFDSSxpQkFBaUI7R0FDcEI7QUFDSDtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1Qsb0NBQW9DO0lBRXBDLDRCQUE0QjtHQUM3Qjs7RUFFRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsZ0JBQWdCO0dBQ2pCOztFQUVELDRCQUE0Qjs7RUFFNUI7O0dBRUM7O0VBRUQsOEJBQThCOztFQUU5QjtJQUNFO1FBQ0ksV0FBVztRQUNYLGFBQWE7S0FDaEI7R0FDRjs7RUFFRCxpQ0FBaUM7O0VBRWpDOztHQUVDO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogKiB7Ym9yZGVyOiAxcHggc29saWQgcmVkO30gKi9cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjEwLCAxODAsIDE0MCwgMC44MjIpLCByZ2JhKDE5NCwgMTI4LCA0NywgMC4wNDgpLCByZ2JhKDIxMCwgMTgwLCAxNDAsIDAuMDg5KSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcclxufVxyXG5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjEwLCAxODAsIDE0MCwgMC44MjIpLCByZ2JhKDE5NCwgMTI4LCA0NywgMC4wNDgpLCByZ2JhKDIxMCwgMTgwLCAxNDAsIDAuMDg5KSk7XHJcbiAgICBwYWRkaW5nOiA4JTtcclxufVxyXG4jaG9tZWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGJhdWh1cztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uaG9tZXJvd3N7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi8qIEV4dHJhIFNtYWxsIERldmljZXMsIFBob25lcyAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxcHgpIHtcclxuICAgICNzZXRkZXNpZ25lciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGJhdWhhdXM7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGJhdWhhdXM7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5hcnRkIHtcclxuICAgICAgICBmb250LWZhbWlseTogYmF1aHVzO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5idG4tYmxvY2sge1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogYmF1aGF1cztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgxNjksMyw0MSwwLjgxKSAwJSwgcmdiYSgxNDMsMiwzNCwwLjg5KSA0NCUsIHJnYmEoMTA5LDAsMjUsMSkgMTAwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDE2OSwzLDQxLDAuODEpIDAlLHJnYmEoMTQzLDIsMzQsMC44OSkgNDQlLHJnYmEoMTA5LDAsMjUsMSkgMTAwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDE2OSwzLDQxLDAuODEpIDAlLHJnYmEoMTQzLDIsMzQsMC44OSkgNDQlLHJnYmEoMTA5LDAsMjUsMSkgMTAwJSk7XHJcbiAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNjZmE5MDMyOScsIGVuZENvbG9yc3RyPScjNmQwMDE5JyxHcmFkaWVudFR5cGU9MSApOyAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICAuY29sLTQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmZhIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDI1JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5mYS1pbWRiIHtcclxuICAgICAgY29sb3I6IGdvbGRlbnJvZDtcclxuICB9XHJcbi5pY29uLWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLmljb24tYmFyIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogU21hbGwgRGV2aWNlcywgVGFibGV0cyAqL1xyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1lZGl1bSBEZXZpY2VzLCBEZXNrdG9wcyAqL1xyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogTGFyZ2UgRGV2aWNlcywgV2lkZSBTY3JlZW5zICovXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <title>Steven M. Saylor</title>\n  <base href=\"/\">\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\"\n    crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/aos@next/dist/aos.css\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\" integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n    crossorigin=\"anonymous\"></script>\n\n</head>\n\n<body>\n  <header>\n    <div class=\"container\" style=\"margin: 40px; width: auto;\">\n      <div class=\"row\" style=\"text-align: center;\">\n        <div class=\"col-sm-6\">\n          <div class=\"row\" style=\"justify-content: center;\">\n            <div data-aos=\"fade-down\" data-aos-offset=\"200\" data-aos-delay=\"600\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">\n              <h1>Steven M. Saylor</h1>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-8\" style=\"padding: 0;\">\n              <div id=\"setdesigner\" class=\"row\" style=\"margin: 0;\">\n                <div data-aos=\"fade\" data-aos-offset=\"200\" data-aos-delay=\"1000\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\">\n                  <p>Set Designer</p>\n                </div>\n              </div>\n              <div class=\"row justify-content-center\" style=\"margin: 0;\">\n                <div data-aos=\"fade\" data-aos-offset=\"200\" data-aos-delay=\"1400\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\">\n                  <h3 class=\"artd\">Art Directors Guild Local 800</h3>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4\" id=\"logobox\">\n              <div data-aos=\"fade\" data-aos-offset=\"200\" data-aos-delay=\"1800\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\">\n                <img class=\"logo\" src=\"http://www.mafilm.org/wp-content/uploads/2018/05/Iatse-800.png\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12\" style=\"padding: 10px; color: black; width: 90%;\">\n          <div class=\"row\">\n            <div class=\"col-sm-4\" style=\"padding: 5px;\">\n              <button class=\"btn-block shadow-lg\">\n                <div routerLink=\"/projects\">Projects</div>\n              </button>\n            </div>\n            <div class=\"col-sm-4\" style=\"padding: 5px;\">\n              <button class=\"btn-block shadow-lg\">\n                <div routerLink=\"/portfolio\">Portfolio</div>\n              </button>\n            </div>\n            <div class=\"col-sm-4\" style=\"padding: 5px;\">\n              <button class=\"btn-block shadow-lg\">\n                <div routerLink=\"/resume\">Resume</div>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <div class=\"container\" id=\"homecontainer\">\n    <div class=\"homerows\">\n      <div data-aos=\"fade-left\" data-aos-offset=\"100\" data-aos-delay=\"120\" data-aos-duration=\"1300\" data-aos-easing=\"ease-in-out\">\n        <div class=\"row\">\n          <p>Steven has over 25 years in the movie industry and has successfully completed over 70 projects, which include television\n            (over 400 episodes) and features. His past experience have allowed him to bring something different and unique\n            to his Set Designer career. He is well respected in the film industry and highly sought after for his innovative\n            designs and steadfast work ethic.</p>\n        </div>\n      </div>\n      <hr>\n      <div>\n        <div data-aos=\"fade-right\" data-aos-offset=\"200\" data-aos-delay=\"120\" data-aos-duration=\"1300\" data-aos-easing=\"ease-in-out\">\n          <div class=\"row\">\n            <p>Steven started his first his first architectural design company when he was 18 years old. At this time Steven\n              was honing his skills in architectural design and managing clients, contractors, engineers and city county\n              officals.\n            </p>\n          </div>\n        </div>\n        <hr>\n        <div data-aos=\"fade-left\" data-aos-offset=\"200\" data-aos-delay=\"120\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">\n          <div class=\"row\">\n            <p>Steven went on to work at a civil engineering firm to expand his knowledge in other areas. These included street\n              and utility design, hillside design and construction and onstruction and earthquake retrofitting. He then obtained\n              his general contracting license from the State of California and began operating his own architectural design\n              and construction company. The firm quickly grew to include the managing of employees, enigneers and construction\n              crews. Steven's firm successfully designed and completed over 700 projects.\n            </p>\n          </div>\n        </div>\n        <hr>\n        <div data-aos=\"fade-right\" data-aos-offset=\"200\" data-aos-delay=\"120\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">\n          <div class=\"row\">\n            <p>In 1991 Steven joined MCA/Universal Studios immediately after the infamous New York Street fire. Steven began\n              designing part of the new backlot while being tasked to use his knowledge in design and construction to work\n              as a project manager for permanent studio projects. These projects included studio infrastructure, hillside\n              stabilization, office construction, building relocation and managing the construction and permitting of an\n              approximately 1m square feet, 10 story building to include concrete and steel construction.</p>\n          </div>\n        </div>\n        <hr>\n        <div data-aos=\"fade-left\" data-aos-offset=\"200\" data-aos-delay=\"120\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">\n          <div class=\"row\">\n            <p>While at MCA/universal studios Steven took on the role of Damage Assesment Team leader and was trained by the\n              State of California in post earthquake damage assessment. After the 1994 Northridge earthquake Steven was deputized\n              by the county of Los Angeles as a building inspector with the purpose of assessing the safet and structural\n              integrity of buildings. A new opportunity arose and Steven joined 20th Century Fox as a project manager. Utilizing\n              his knowledge in structure concrete and steel construction. He coordinated projects such as the new Fox Broadcasting\n              building (managing the capping of 25 oil wells), a parking structure and the new Crafts building.</p>\n          </div>\n        </div>\n        <hr>\n      </div>\n    </div>\n  </div>\n  <div data-aos=\"fade-up\" data-aos-offset=\"10\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n    <footer>\n      <p class=\"txt-railway\" style=\"font-family: bauhus; font-size: 27px; color: black; text-align: center; margin: 0;\">- Get In Touch -</p>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <a href=\"https://www.imdb.com/name/nm0768513/\" class=\"fa fa-imdb shadow-lg\"></a>\n        </div>\n        <div class=\"col-6\">\n          <a href=\"mailto:StevenMSaylor@gmail.com\" class=\"fa fa-google shadow-lg\"></a>\n        </div>\n      </div>\n    </footer>\n  </div>\n  <script src=\"https://unpkg.com/aos@next/dist/aos.js\"></script>\n  <script>\n    AOS.init();\n  </script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-page/portfolio-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/portfolio-page/portfolio-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: hidden; \n}\nfooter {\n    background: linear-gradient(rgba(210, 180, 140, 0.822), rgba(194, 128, 47, 0.048), rgba(210, 180, 140, 0.089));\n    padding: 8%;\n}\n.scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n.container {\n    margin-top: 26px;\n}\n.card {\n    display: inline-block;\n  }\nimg {\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n}\n#portfoliocontainer {\n    background-color: tan;\n    border: 1px solid black;\n    padding-bottom: 20px;\n}\n#featurefilm {\n    font-size: 25px;\n    padding-top: 10px;\n}\n.container-fluid {\n    border-radius: 20px;\n}\n.navbar.navbar-1 .navbar-toggler-icon {\n    background-image: url('https://mdbootstrap.com/img/svg/hamburger6.svg?color=000');\n}\n.navbar.navbar-1 .navbar-toggler {\n    border: none;\n    background: linear-gradient(to right, rgba(169,3,41,0.67) 0%,rgba(143,2,34,0.82) 44%,rgba(109,0,25,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#aba90329', endColorstr='#6d0019',GradientType=1 );\n}\n.navbar {\n    background: rgb(254,255,232);\n    background: linear-gradient(to right, rgba(254,255,232,1) 0%,rgba(175,132,58,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffe8', endColorstr='#af843a',GradientType=1 );\n}\n.nav-item {\n    font-size: 20px;\n    letter-spacing: 5px;\n}\n.navbar-brand {\n    font-size: 26px;\n    color: maroon;\n    font-family: bauhus;\n    -webkit-text-decoration: bold;\n            text-decoration: bold;\n}\n.nav-link {\n    color: black;\n    font-size: 20px;\n    font-family: bauhus;\n    padding: 15px;\n}\n#projects {\n    color: black; \n    font-family: bauhus; \n    letter-spacing: 6px; \n    font-size: 25px; \n    border-radius: 300px; \n    margin-left: 20px;\n    margin-right: 20px;\n    padding: 5px; \n    background: rgb(254,255,232);\n    background: linear-gradient(to right, rgba(254,255,232,1) 0%,rgba(175,132,58,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffe8', endColorstr='#af843a',GradientType=1 );   border: 1px solid black; \n}\n.col-4 {\n    text-align: center;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n.fa {\n  padding: 15px;\n  font-size: 40px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n  margin: 25%;\n  border: 1px solid black;\n  background-color: white;\n}\n.fa-imdb {\n    color: goldenrod;\n}\n.icon-bar {\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.icon-bar a {\n  display: block;\n  text-align: center;\n  padding: 16px;\n  transition: all 0.3s ease;\n  color: white;\n  font-size: 20px;\n}\n/* * { border: 1px solid red;} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvLXBhZ2UvcG9ydGZvbGlvLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLCtHQUErRztJQUMvRyxZQUFZO0NBQ2Y7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtDQUFrQztDQUNuQztBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxzQkFBc0I7R0FDdkI7QUFDSDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxrRkFBa0Y7Q0FDckY7QUFDRDtJQUNJLGFBQWE7SUFHYiw0R0FBNEc7SUFDNUcsc0hBQXNIO0NBQ3pIO0FBQ0Q7SUFDSSw2QkFBNkI7SUFHN0Isc0ZBQXNGO0lBQ3RGLG9IQUFvSDtDQUN2SDtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsOEJBQXNCO1lBQXRCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFHN0Isc0ZBQXNGO0lBQ3RGLG9IQUFvSCxHQUFHLHdCQUF3QjtDQUNsSjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsb0NBQW9DO0VBRXBDLDRCQUE0QjtDQUM3QjtBQUVEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFDRCxpQ0FBaUMiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8tcGFnZS9wb3J0Zm9saW8tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxufVxuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMTAsIDE4MCwgMTQwLCAwLjgyMiksIHJnYmEoMTk0LCAxMjgsIDQ3LCAwLjA0OCksIHJnYmEoMjEwLCAxODAsIDE0MCwgMC4wODkpKTtcbiAgICBwYWRkaW5nOiA4JTtcbn1cbi5zY3JvbGxpbmctd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuLmNhcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI3BvcnRmb2xpb2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGFuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuI2ZlYXR1cmVmaWxtIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLm5hdmJhci5uYXZiYXItMSAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21kYm9vdHN0cmFwLmNvbS9pbWcvc3ZnL2hhbWJ1cmdlcjYuc3ZnP2NvbG9yPTAwMCcpO1xufVxuLm5hdmJhci5uYXZiYXItMSAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDE2OSwzLDQxLDAuNjcpIDAlLCByZ2JhKDE0MywyLDM0LDAuODIpIDQ0JSwgcmdiYSgxMDksMCwyNSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDE2OSwzLDQxLDAuNjcpIDAlLHJnYmEoMTQzLDIsMzQsMC44MikgNDQlLHJnYmEoMTA5LDAsMjUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDE2OSwzLDQxLDAuNjcpIDAlLHJnYmEoMTQzLDIsMzQsMC44MikgNDQlLHJnYmEoMTA5LDAsMjUsMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNhYmE5MDMyOScsIGVuZENvbG9yc3RyPScjNmQwMDE5JyxHcmFkaWVudFR5cGU9MSApO1xufVxuLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NCwyNTUsMjMyKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NCwyNTUsMjMyLDEpIDAlLCByZ2JhKDE3NSwxMzIsNTgsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTQsMjU1LDIzMiwxKSAwJSxyZ2JhKDE3NSwxMzIsNTgsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NCwyNTUsMjMyLDEpIDAlLHJnYmEoMTc1LDEzMiw1OCwxKSAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZlZmZlOCcsIGVuZENvbG9yc3RyPScjYWY4NDNhJyxHcmFkaWVudFR5cGU9MSApO1xufVxuLm5hdi1pdGVtIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbi5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogbWFyb29uO1xuICAgIGZvbnQtZmFtaWx5OiBiYXVodXM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBib2xkO1xufVxuLm5hdi1saW5rIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBiYXVodXM7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbiNwcm9qZWN0cyB7XG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICBmb250LWZhbWlseTogYmF1aHVzOyBcbiAgICBsZXR0ZXItc3BhY2luZzogNnB4OyBcbiAgICBmb250LXNpemU6IDI1cHg7IFxuICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4OyBcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4OyBcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU0LDI1NSwyMzIpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU0LDI1NSwyMzIsMSkgMCUsIHJnYmEoMTc1LDEzMiw1OCwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NCwyNTUsMjMyLDEpIDAlLHJnYmEoMTc1LDEzMiw1OCwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU0LDI1NSwyMzIsMSkgMCUscmdiYSgxNzUsMTMyLDU4LDEpIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmVmZmU4JywgZW5kQ29sb3JzdHI9JyNhZjg0M2EnLEdyYWRpZW50VHlwZT0xICk7ICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxufVxuXG4uY29sLTQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZhIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDI1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmZhLWltZGIge1xuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XG59XG4uaWNvbi1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uaWNvbi1iYXIgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLyogKiB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDt9ICovIl19 */"

/***/ }),

/***/ "./src/app/portfolio-page/portfolio-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/portfolio-page/portfolio-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <!-- For Angular Routing -->\n  <base href='/'>\n\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\"\n    crossorigin=\"anonymous\">\n\n  <link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/aos@next/dist/aos.css\" />\n\n</head>\n\n<body>\n  <!--Navbar-->\n  <nav class=\"navbar navbar-1 white shadow-sm\">\n\n    <!-- Navbar brand -->\n    <a class=\"navbar-brand\" href=\"#\">Steven M. Saylor</a>\n\n    <!-- Collapse button -->\n    <button class=\"navbar-toggler shadow-sm\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent15\" aria-controls=\"navbarSupportedContent15\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Collapsible content -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent15\">\n\n      <!-- Links -->\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/projects\">Projects</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/resume\">Resume</a>\n        </li>\n      </ul>\n      <!-- Links -->\n\n    </div>\n    <!-- Collapsible content -->\n\n  </nav>\n  <hr>\n  <!--/.Navbar-->\n  <div data-aos=\"fade-left\" data-aos-offset=\"200\" data-aos-delay=\"800\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">\n    <div class=\"row justify-content-center shadow-lg\" id=\"projects\" style=\"border: none\">\n      <p style=\"margin: 0;\">Portfolio</p>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"container-fluid shadow-lg\" id=\"portfoliocontainer\">\n      <div class=\"row justify-content-center\" id=\"featurefilm\">\n        <p style=\"margin-top: 10px; margin-bottom: 0; font-family: bauhus; color: white; letter-spacing: 3px;\">Feature Films</p>\n      </div>\n      <hr>\n      <div class=\"scrolling-wrapper\">\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjM5MDk2NDIxMF5BMl5BanBnXkFtZTgwNjU5NDk3NTM@._V1_SY1000_CR0,0,675,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BZjk4ZTMwMTYtOTk1NC00OTA0LWFhMGYtZTBjMzViMDY2YWZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTg3OTM4NTM4NV5BMl5BanBnXkFtZTgwOTI3NDc0OTE@._V1_SY1000_CR0,0,673,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BNTY1MDU1NzYzN15BMl5BanBnXkFtZTgwOTA0MDQyNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BNjk3NTE1OTMyNV5BMl5BanBnXkFtZTgwNDgzNzM2NDE@._V1_SY1000_CR0,0,647,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjM2MzI3Mzg2OF5BMl5BanBnXkFtZTgwODc2Mjk4MDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SY1000_CR0,0,675,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjE1OTM2NjgzNV5BMl5BanBnXkFtZTcwNzc0MTc5Ng@@._V1_SY1000_CR0,0,710,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTYzNDM0ODQxMF5BMl5BanBnXkFtZTcwOTMyMzMzMg@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTkzMDU0NTg3MF5BMl5BanBnXkFtZTcwNzU1MjU1Mg@@._V1_SY1000_CR0,0,675,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTQwNDM2MTMwMl5BMl5BanBnXkFtZTgwMjE4NjQxMTE@._V1_SY1000_CR0,0,665,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTIzMDQyNDgwNl5BMl5BanBnXkFtZTcwMDA0MTc3MQ@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjA5MjAyNzcxMF5BMl5BanBnXkFtZTcwNTk2MzI5MQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTU3MDU3ODQzM15BMl5BanBnXkFtZTgwMzg2OTkwMzE@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTIzNjE1NDg1N15BMl5BanBnXkFtZTcwOTg2NTMzMQ@@._V1_SY1000_CR0,0,671,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTY1MzIwNDQyNl5BMl5BanBnXkFtZTcwNDEwNzYyMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTQ5ODgzNjQ3OF5BMl5BanBnXkFtZTcwNTYyMTQzMQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTI4ODQ4MzgzMl5BMl5BanBnXkFtZTcwODc5NTUzMQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTQ3MTY0MjU3M15BMl5BanBnXkFtZTYwMzkwOTc5._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTk4NzAwOTkwMF5BMl5BanBnXkFtZTYwMDM3MTM3._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BNjgwMjkxNzY4OV5BMl5BanBnXkFtZTcwNzIyNTY1Mw@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMGM0NzE2YjgtZGQ4YS00MmY3LTg4ZDMtYjUwNTNiNTJhNTQ5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg\">\n        </div>\n      </div>\n      <div class=\"row justify-content-center\" id=\"featurefilm\">\n        <p style=\"margin-top: 10px; margin-bottom: 0; font-family: bauhus; color: white; letter-spacing: 3px;\">Television Series</p>\n      </div>\n      <hr>\n      <div class=\"scrolling-wrapper\">\n\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BNDM2OTU4Mjk4OV5BMl5BanBnXkFtZTgwNzk1OTYzNjM@._V1_SY1000_CR0,0,704,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjQyOTQ3Njc5M15BMl5BanBnXkFtZTgwMzgyNjAxNTM@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BNWIwMDc3YTYtMTYyYi00YTNlLWJhOTEtNWQ1ZmRlZDYzNjE4L2ltYWdlXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_SY1000_SX750_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BYzM5OWU5YmMtYzQ0ZC00YWQ2LWFmMzUtNTA2YWI2Yzk0ZmMxXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BZGIxZmU2MDQtMWU4My00ZTkzLWE1ZjItY2U0NTE2ZDA0ZWVhXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjQwNjUxNzcyOV5BMl5BanBnXkFtZTgwNTc3NjcwNzE@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjMzNzM1MDI4NV5BMl5BanBnXkFtZTgwNjk1OTYzNjM@._V1_SY1000_CR0,0,675,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjE3MTAxMzc0MV5BMl5BanBnXkFtZTgwNDkyOTg1MzI@._V1_SY1000_SX800_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTczNjAyMDg1Nl5BMl5BanBnXkFtZTgwMDQyNTA2OTE@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTgzNjkzNjMxOF5BMl5BanBnXkFtZTgwMTcyMTg2OTE@._V1_SY1000_CR0,0,735,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BOTM0NzU0ODA0Ml5BMl5BanBnXkFtZTgwMjE5ODIxOTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjE3NDE3OTA3M15BMl5BanBnXkFtZTgwMjEzMzUxMjE@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMzU3ODgxOTMyMl5BMl5BanBnXkFtZTgwOTk4MDA0MDE@._V1_SY1000_CR0,0,659,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTQ3MTUyODIxOF5BMl5BanBnXkFtZTgwMzMwODY0MTE@._V1_SY1000_SX750_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BZjNiOTA4YTEtYmE0Ni00Mzg4LTg1OTgtNTE0YWE3YTc0MDVhXkEyXkFqcGdeQXVyNjc3OTUzNzM@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTkyODg2MzQwMV5BMl5BanBnXkFtZTgwNTA2MjE1MDI@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTUwNTYwMDc3MV5BMl5BanBnXkFtZTcwNzc5MjYzNA@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTMxNzE4OTE2OV5BMl5BanBnXkFtZTcwNDQxMTY4MQ@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTM4MDg2NTk1OF5BMl5BanBnXkFtZTcwNzI4OTY5MQ@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTQ0MzA1MDgyOF5BMl5BanBnXkFtZTcwODkwMDU1MQ@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTk0NzUzNDA2MV5BMl5BanBnXkFtZTcwMzM4MDM0MQ@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjA3ODMxMzM5NF5BMl5BanBnXkFtZTgwMDM1NjU0OTE@._V1_SY1000_CR0,0,647,1000_AL_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMjEyNjEyMDE5NV5BMl5BanBnXkFtZTcwNzQzNzIzMQ@@._V1._CR31,2,313,472_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTk2Mjc0NTM2N15BMl5BanBnXkFtZTcwNTI5OTU3MQ@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BN2IwOTNhNTEtYjM5NS00NjFiLWI5YTYtYzBkZWFiNTBhNzEzXkEyXkFqcGdeQXVyMjcyMDU4NA@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BYmFkZWM2ZDItNDFhMC00YzlkLWE3ZjEtYWY4ZWEyZDVjMzc3XkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTIxNzg1MTk4NF5BMl5BanBnXkFtZTcwNDkyNzM2MQ@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTg1NTI0MTUxMl5BMl5BanBnXkFtZTcwODE1MzgyMQ@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BMTI0NzEzOTkxNF5BMl5BanBnXkFtZTcwMTQzMjQyMQ@@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BN2E5ZDRkMDUtYjlmYi00Y2M0LWFjOTgtZDU0NmQzNjI3NDdlXkEyXkFqcGdeQXVyMTEwODg2MDY@._V1_.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://m.media-amazon.com/images/M/MV5BNzM3MzM2MTIxNl5BMl5BanBnXkFtZTcwMzAwMDEzMQ@@._V1_UY268_CR3,0,182,268_AL_.jpg\">\n        </div>\n      </div>\n      <div class=\"row justify-content-center\" id=\"featurefilm\">\n        <p style=\"margin-top: 10px; margin-bottom: 0; font-family: bauhus; color: white; letter-spacing: 3px;\">Backlots</p>\n      </div>\n      <hr>\n      <div class=\"scrolling-wrapper\">\n        <div class=\"card\">\n          <img src=\"http://www.thestudiotour.com/wp/wp-content/gallery/ush-backlot-brownstone-street-before-2008/a3.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"http://www.thestudiotour.com/wp/wp-content/gallery/ush-backlot-brownstone-street-2/c24.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"http://www.thestudiotour.com/wp/wp-content/gallery/ush-backlot-brownstone-street-2/c27.jpg\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://goldenoakranch.com/wp-content/gallery/house-10/adirondack-lodge-front-view.jpg?rand=69912855.57656345\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://goldenoakranch.com/wp-content/gallery/house-13/fieldstone-house-long-walkway.jpg?rand=10374018.70114097\">\n        </div>\n        <div class=\"card\">\n          <img src=\"https://goldenoakranch.com/wp-content/gallery/house-14/federal-colonial-house-two-story.jpg?rand=23203629.59889393\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div data-aos=\"fade-left\" data-aos-offset=\"100\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n    <footer>\n      <hr>\n      <p class=\"txt-railway\" style=\"font-family: bauhus; font-size: 27px; color: black; text-align: center; margin: 0;\">- Get In Touch -</p>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <a href=\"https://www.imdb.com/name/nm0768513/\" class=\"fa fa-imdb shadow-lg\"></a>\n        </div>\n        <div class=\"col-6\">\n          <a href=\"mailto:StevenMSaylor@gmail.com\" class=\"fa fa-google shadow-lg\"></a>\n        </div>\n      </div>\n    </footer>\n  </div>\n  <script src=\"https://unpkg.com/aos@next/dist/aos.js\"></script>\n  <script>\n    AOS.init();\n  </script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/portfolio-page/portfolio-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portfolio-page/portfolio-page.component.ts ***!
  \************************************************************/
/*! exports provided: PortfolioPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPageComponent", function() { return PortfolioPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var PortfolioPageComponent = /** @class */ (function () {
    function PortfolioPageComponent() {
    }
    PortfolioPageComponent.prototype.ngOnInit = function () {
    };
    PortfolioPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio-page',
            template: __webpack_require__(/*! ./portfolio-page.component.html */ "./src/app/portfolio-page/portfolio-page.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-page.component.css */ "./src/app/portfolio-page/portfolio-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioPageComponent);
    return PortfolioPageComponent;
}());



/***/ }),

/***/ "./src/app/projects-page/projects-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/projects-page/projects-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: hidden; \n}\nfooter {\n    background: linear-gradient(rgba(210, 180, 140, 0.822), rgba(194, 128, 47, 0.048), rgba(210, 180, 140, 0.089));\n    padding: 8%;\n}\n.navbar.navbar-1 .navbar-toggler-icon {\n    background-image: url('https://mdbootstrap.com/img/svg/hamburger6.svg?color=000');\n}\n.navbar.navbar-1 .navbar-toggler {\n    border: none;\n    background: linear-gradient(to right, rgba(169,3,41,0.67) 0%,rgba(143,2,34,0.82) 44%,rgba(109,0,25,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#aba90329', endColorstr='#6d0019',GradientType=1 );\n}\n.navbar {\n    background: rgb(254,255,232);\n    background: linear-gradient(to right, rgba(254,255,232,1) 0%,rgba(175,132,58,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffe8', endColorstr='#af843a',GradientType=1 );\n}\n.nav-item {\n    font-size: 20px;\n    letter-spacing: 5px;\n}\n.navbar-brand {\n    font-size: 26px;\n    color: maroon;\n    font-family: bauhus;\n    -webkit-text-decoration: bold;\n            text-decoration: bold;\n}\n.nav-link {\n    color: black;\n    font-size: 20px;\n    font-family: bauhus;\n    padding: 15px;\n}\n#projects {\n    color: black; \n    font-family: bauhus; \n    letter-spacing: 6px; \n    font-size: 25px; \n    border-radius: 300px; \n    margin-left: 20px;\n    margin-right: 20px;\n    padding: 5px; \n    background: rgb(254,255,232);\n    background: linear-gradient(to right, rgba(254,255,232,1) 0%,rgba(175,132,58,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffe8', endColorstr='#af843a',GradientType=1 );   border: 1px solid black; \n}\n.col-4 {\n    text-align: center;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n.fa {\n  padding: 15px;\n  font-size: 40px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n  margin: 25%;\n  border: 1px solid black;\n  background-color: white;\n}\n.fa-imdb {\n    color: goldenrod;\n}\n.icon-bar {\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.icon-bar a {\n  display: block;\n  text-align: center;\n  padding: 16px;\n  transition: all 0.3s ease;\n  color: white;\n  font-size: 20px;\n}\n/* * { border: 1px solid red;} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMtcGFnZS9wcm9qZWN0cy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSwrR0FBK0c7SUFDL0csWUFBWTtDQUNmO0FBQ0Q7SUFDSSxrRkFBa0Y7Q0FDckY7QUFDRDtJQUNJLGFBQWE7SUFHYiw0R0FBNEc7SUFDNUcsc0hBQXNIO0NBQ3pIO0FBQ0Q7SUFDSSw2QkFBNkI7SUFHN0Isc0ZBQXNGO0lBQ3RGLG9IQUFvSDtDQUN2SDtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsOEJBQXNCO1lBQXRCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw2QkFBNkI7SUFHN0Isc0ZBQXNGO0lBQ3RGLG9IQUFvSCxHQUFHLHdCQUF3QjtDQUNsSjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsb0NBQW9DO0VBRXBDLDRCQUE0QjtDQUM3QjtBQUVEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFDRCxpQ0FBaUMiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy1wYWdlL3Byb2plY3RzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcbn1cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjEwLCAxODAsIDE0MCwgMC44MjIpLCByZ2JhKDE5NCwgMTI4LCA0NywgMC4wNDgpLCByZ2JhKDIxMCwgMTgwLCAxNDAsIDAuMDg5KSk7XG4gICAgcGFkZGluZzogOCU7XG59XG4ubmF2YmFyLm5hdmJhci0xIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWRib290c3RyYXAuY29tL2ltZy9zdmcvaGFtYnVyZ2VyNi5zdmc/Y29sb3I9MDAwJyk7XG59XG4ubmF2YmFyLm5hdmJhci0xIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMTY5LDMsNDEsMC42NykgMCUsIHJnYmEoMTQzLDIsMzQsMC44MikgNDQlLCByZ2JhKDEwOSwwLDI1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMTY5LDMsNDEsMC42NykgMCUscmdiYSgxNDMsMiwzNCwwLjgyKSA0NCUscmdiYSgxMDksMCwyNSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTY5LDMsNDEsMC42NykgMCUscmdiYSgxNDMsMiwzNCwwLjgyKSA0NCUscmdiYSgxMDksMCwyNSwxKSAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2FiYTkwMzI5JywgZW5kQ29sb3JzdHI9JyM2ZDAwMTknLEdyYWRpZW50VHlwZT0xICk7XG59XG4ubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU0LDI1NSwyMzIpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU0LDI1NSwyMzIsMSkgMCUsIHJnYmEoMTc1LDEzMiw1OCwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NCwyNTUsMjMyLDEpIDAlLHJnYmEoMTc1LDEzMiw1OCwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU0LDI1NSwyMzIsMSkgMCUscmdiYSgxNzUsMTMyLDU4LDEpIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmVmZmU4JywgZW5kQ29sb3JzdHI9JyNhZjg0M2EnLEdyYWRpZW50VHlwZT0xICk7XG59XG4ubmF2LWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGNvbG9yOiBtYXJvb247XG4gICAgZm9udC1mYW1pbHk6IGJhdWh1cztcbiAgICB0ZXh0LWRlY29yYXRpb246IGJvbGQ7XG59XG4ubmF2LWxpbmsge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IGJhdWh1cztcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuI3Byb2plY3RzIHtcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIGZvbnQtZmFtaWx5OiBiYXVodXM7IFxuICAgIGxldHRlci1zcGFjaW5nOiA2cHg7IFxuICAgIGZvbnQtc2l6ZTogMjVweDsgXG4gICAgYm9yZGVyLXJhZGl1czogMzAwcHg7IFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiA1cHg7IFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTQsMjU1LDIzMik7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTQsMjU1LDIzMiwxKSAwJSwgcmdiYSgxNzUsMTMyLDU4LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU0LDI1NSwyMzIsMSkgMCUscmdiYSgxNzUsMTMyLDU4LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTQsMjU1LDIzMiwxKSAwJSxyZ2JhKDE3NSwxMzIsNTgsMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZWZmZTgnLCBlbmRDb2xvcnN0cj0nI2FmODQzYScsR3JhZGllbnRUeXBlPTEgKTsgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXG59XG4uY29sLTQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZhIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDI1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmZhLWltZGIge1xuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XG59XG4uaWNvbi1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uaWNvbi1iYXIgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLyogKiB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDt9ICovIl19 */"

/***/ }),

/***/ "./src/app/projects-page/projects-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/projects-page/projects-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <title>Steven M. Saylor</title>\n  <base href=\"/\">\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\"\n    crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/aos@next/dist/aos.css\" />\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\" integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n    crossorigin=\"anonymous\"></script>\n\n</head>\n\n<body>\n  <!--Navbar-->\n  <nav class=\"navbar navbar-1 white shadow-sm\">\n\n    <!-- Navbar brand -->\n    <a class=\"navbar-brand\" href=\"#\">Steven M. Saylor</a>\n\n    <!-- Collapse button -->\n    <button class=\"navbar-toggler shadow-sm\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent15\" aria-controls=\"navbarSupportedContent15\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Collapsible content -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent15\">\n\n      <!-- Links -->\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/portfolio\">Portfolio</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/resume\">Resume</a>\n        </li>\n      </ul>\n      <!-- Links -->\n\n    </div>\n    <!-- Collapsible content -->\n\n  </nav>\n  <hr>\n  <!--/.Navbar-->\n  <div data-aos=\"fade\" data-aos-offset=\"200\" data-aos-delay=\"800\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">\n    <div class=\"row justify-content-center shadow-lg\" id=\"projects\" style=\"border: none\">\n      <p style=\"margin: 0;\">Projects</p>\n    </div>\n  </div>\n  <br>\n  <div data-aos=\"fade-left\" data-aos-offset=\"200\" data-aos-delay=\"1200\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">\n    <div class=\"container shadow-lg\" style=\"border-radius: 15px; margin: 10px; width: 90%; padding: 10px;\">\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/1281BRIDGEAVIONICSBL.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/FEEDBINADD2BRICK1.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/FEEDBINADD2SECTIONS1.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row\" style=\"margin: 5px;\" style=\"margin: 5px;\">\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/FEEDBINADD2WINDOW1.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/Gohanhouse3dstruct40.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/HARRYPOTTTERROSEWIND.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/HILLTOP11.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/HILLTOP21.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/mon1.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/3DView5.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/SAPHIEELEV11.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/SAPHIEELEV21.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/SideHatchModel1.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/sloan1.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/3DView5.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/SS90210INTLIAMSGARAG.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/efbSS90210INTLIAMSGARAG.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/1opsREFLECTIVECEILIN.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/03ICU10FLOORPLAN2017.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/03ICU11CEILINGPLAN20.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/rendertest.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/90THIRDRAILDETAIL201.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/12790gELEVATOR111509.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/12790gELEVATOR201509.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/BLADEModel1.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/1281BRIDGEGLASSSCREE.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/f3c3DView4.jpg\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/TPBLP2072308Model1.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/TPPBlock3FACADE31320.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/3dView3.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/workshop3Layout11.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/workshopSECTIONS1.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/dadset1.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n      <div class=\"row shadow-sm\" style=\"margin: 5px;\">\n        <div class=\"col-sm-6\">\n          <img src=\"http://u.cubeupload.com/jsaylor23/f42BENCH1.png\" style=\"width: 100%; height: 100%;\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <hr>\n  <br>\n  <div data-aos=\"fade-left\" data-aos-offset=\"10\" data-aos-delay=\"200\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n  <footer>\n      <p class=\"txt-railway\" style=\"font-family: bauhus; font-size: 27px; color: black; text-align: center; margin: 0;\">- Get In Touch -</p>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <a href=\"https://www.imdb.com/name/nm0768513/\" class=\"fa fa-imdb shadow-lg\"></a>\n      </div>\n      <div class=\"col-6\">\n        <a href=\"mailto:StevenMSaylor@gmail.com\" class=\"fa fa-google shadow-lg\"></a>\n      </div>\n    </div>\n  </footer>\n  </div>\n  <script src=\"https://unpkg.com/aos@next/dist/aos.js\"></script>\n  <script>\n    AOS.init();\n  </script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/projects-page/projects-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/projects-page/projects-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function() { return ProjectsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ProjectsPageComponent = /** @class */ (function () {
    function ProjectsPageComponent() {
    }
    ProjectsPageComponent.prototype.ngOnInit = function () {
    };
    ProjectsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects-page',
            template: __webpack_require__(/*! ./projects-page.component.html */ "./src/app/projects-page/projects-page.component.html"),
            styles: [__webpack_require__(/*! ./projects-page.component.css */ "./src/app/projects-page/projects-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsPageComponent);
    return ProjectsPageComponent;
}());



/***/ }),

/***/ "./src/app/resume-page/resume-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/resume-page/resume-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: hidden; \n}\nfooter {\n    background: linear-gradient(rgba(210, 180, 140, 0.822), rgba(194, 128, 47, 0.048), rgba(210, 180, 140, 0.089));\n    padding: 8%;\n}\n.navbar.navbar-1 .navbar-toggler-icon {\n    background-image: url('https://mdbootstrap.com/img/svg/hamburger6.svg?color=000');\n}\n.navbar.navbar-1 .navbar-toggler {\n    border: none;\n    background: linear-gradient(to right, rgba(169,3,41,0.67) 0%,rgba(143,2,34,0.82) 44%,rgba(109,0,25,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#aba90329', endColorstr='#6d0019',GradientType=1 );\n}\n.navbar {\n    background: rgb(254,255,232);\n    background: linear-gradient(to right, rgba(254,255,232,1) 0%,rgba(175,132,58,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffe8', endColorstr='#af843a',GradientType=1 );\n}\n.nav-item {\n    font-size: 20px;\n    letter-spacing: 5px;\n}\n.navbar-brand {\n    font-size: 26px;\n    color: maroon;\n    font-family: bauhus;\n    -webkit-text-decoration: bold;\n            text-decoration: bold;\n}\n.nav-link {\n    color: black;\n    font-size: 20px;\n    font-family: bauhus;\n    padding: 15px;\n}\n#projects {\n    color: black; \n    font-family: bauhus; \n    letter-spacing: 6px; \n    font-size: 25px; \n    border-radius: 300px; \n    margin-left: 20px;\n    margin-right: 20px;\n    padding: 5px; \n    background: rgb(254,255,232);\n    background: linear-gradient(to right, rgba(254,255,232,1) 0%,rgba(175,132,58,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffe8', endColorstr='#af843a',GradientType=1 );   border: 1px solid black; \n}\n.col-4 {\n    text-align: center;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n#res1 {\n    width: 100%;\n    height: 100%;\n    padding-right: 15%;\n    margin-top: 10%;\n}\n#res2 {\n    width: 100%;\n    height: 100%;\n    margin-bottom: 10%;\n    padding-right: 15%;\n}\n.fa {\n  padding: 15px;\n  font-size: 40px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n  margin: 25%;\n  border: 1px solid black;\n  background-color: white;\n}\n.fa-imdb {\n    color: goldenrod;\n}\n.icon-bar {\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.icon-bar a {\n  display: block;\n  text-align: center;\n  padding: 16px;\n  transition: all 0.3s ease;\n  color: white;\n  font-size: 20px;\n}\n/* * { border: 1px solid red;} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lLXBhZ2UvcmVzdW1lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLCtHQUErRztJQUMvRyxZQUFZO0NBQ2Y7QUFDRDtJQUNJLGtGQUFrRjtDQUNyRjtBQUNEO0lBQ0ksYUFBYTtJQUdiLDRHQUE0RztJQUM1RyxzSEFBc0g7Q0FDekg7QUFDRDtJQUNJLDZCQUE2QjtJQUc3QixzRkFBc0Y7SUFDdEYsb0hBQW9IO0NBQ3ZIO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDZCQUE2QjtJQUc3QixzRkFBc0Y7SUFDdEYsb0hBQW9ILEdBQUcsd0JBQXdCO0NBQ2xKO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0NBQ3RCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsd0JBQXdCO0NBQ3pCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsb0NBQW9DO0VBRXBDLDRCQUE0QjtDQUM3QjtBQUVEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixnQkFBZ0I7Q0FDakI7QUFDRCxpQ0FBaUMiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUtcGFnZS9yZXN1bWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxufVxuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMTAsIDE4MCwgMTQwLCAwLjgyMiksIHJnYmEoMTk0LCAxMjgsIDQ3LCAwLjA0OCksIHJnYmEoMjEwLCAxODAsIDE0MCwgMC4wODkpKTtcbiAgICBwYWRkaW5nOiA4JTtcbn1cbi5uYXZiYXIubmF2YmFyLTEgLm5hdmJhci10b2dnbGVyLWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tZGJvb3RzdHJhcC5jb20vaW1nL3N2Zy9oYW1idXJnZXI2LnN2Zz9jb2xvcj0wMDAnKTtcbn1cbi5uYXZiYXIubmF2YmFyLTEgLm5hdmJhci10b2dnbGVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxNjksMyw0MSwwLjY3KSAwJSwgcmdiYSgxNDMsMiwzNCwwLjgyKSA0NCUsIHJnYmEoMTA5LDAsMjUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgxNjksMyw0MSwwLjY3KSAwJSxyZ2JhKDE0MywyLDM0LDAuODIpIDQ0JSxyZ2JhKDEwOSwwLDI1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxNjksMyw0MSwwLjY3KSAwJSxyZ2JhKDE0MywyLDM0LDAuODIpIDQ0JSxyZ2JhKDEwOSwwLDI1LDEpIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjYWJhOTAzMjknLCBlbmRDb2xvcnN0cj0nIzZkMDAxOScsR3JhZGllbnRUeXBlPTEgKTtcbn1cbi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTQsMjU1LDIzMik7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTQsMjU1LDIzMiwxKSAwJSwgcmdiYSgxNzUsMTMyLDU4LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU0LDI1NSwyMzIsMSkgMCUscmdiYSgxNzUsMTMyLDU4LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTQsMjU1LDIzMiwxKSAwJSxyZ2JhKDE3NSwxMzIsNTgsMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZWZmZTgnLCBlbmRDb2xvcnN0cj0nI2FmODQzYScsR3JhZGllbnRUeXBlPTEgKTtcbn1cbi5uYXYtaXRlbSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG4ubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgY29sb3I6IG1hcm9vbjtcbiAgICBmb250LWZhbWlseTogYmF1aHVzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogYm9sZDtcbn1cbi5uYXYtbGluayB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogYmF1aHVzO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4jcHJvamVjdHMge1xuICAgIGNvbG9yOiBibGFjazsgXG4gICAgZm9udC1mYW1pbHk6IGJhdWh1czsgXG4gICAgbGV0dGVyLXNwYWNpbmc6IDZweDsgXG4gICAgZm9udC1zaXplOiAyNXB4OyBcbiAgICBib3JkZXItcmFkaXVzOiAzMDBweDsgXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDVweDsgXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NCwyNTUsMjMyKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NCwyNTUsMjMyLDEpIDAlLCByZ2JhKDE3NSwxMzIsNTgsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTQsMjU1LDIzMiwxKSAwJSxyZ2JhKDE3NSwxMzIsNTgsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NCwyNTUsMjMyLDEpIDAlLHJnYmEoMTc1LDEzMiw1OCwxKSAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZlZmZlOCcsIGVuZENvbG9yc3RyPScjYWY4NDNhJyxHcmFkaWVudFR5cGU9MSApOyAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBcbn1cbi5jb2wtNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4jcmVzMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG4jcmVzMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG59XG4uZmEge1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMjUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZmEtaW1kYiB7XG4gICAgY29sb3I6IGdvbGRlbnJvZDtcbn1cbi5pY29uLWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5pY29uLWJhciBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4vKiAqIHsgYm9yZGVyOiAxcHggc29saWQgcmVkO30gKi8iXX0= */"

/***/ }),

/***/ "./src/app/resume-page/resume-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/resume-page/resume-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <title>Steven M. Saylor</title>\n  <base href=\"/\">\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\"\n    crossorigin=\"anonymous\">\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/aos@next/dist/aos.css\" />\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\" integrity=\"sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut\"\n    crossorigin=\"anonymous\"></script>\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\"\n    crossorigin=\"anonymous\"></script>\n\n</head>\n\n<body>\n  <!--Navbar-->\n  <nav class=\"navbar navbar-1 white shadow-sm\">\n\n    <!-- Navbar brand -->\n    <a class=\"navbar-brand\" href=\"#\">Steven M. Saylor</a>\n\n    <!-- Collapse button -->\n    <button class=\"navbar-toggler shadow-sm\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent15\" aria-controls=\"navbarSupportedContent15\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Collapsible content -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent15\">\n\n      <!-- Links -->\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/portfolio\">Portfolio</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/projects\">Projects</a>\n        </li>\n      </ul>\n      <!-- Links -->\n    </div>\n    <!-- Collapsible content -->\n  </nav>\n  <!--/.Navbar-->\n  <hr>\n  <div class=\"container\">\n    <div class=\"row shadow-sm\">\n      <img id=\"res1\" src=\"http://u.cubeupload.com/jsaylor23/946SteveResume201810071.png\">\n      <img id=\"res2\" src=\"http://u.cubeupload.com/jsaylor23/e99SteveResume201810072.png\">\n    </div>\n  </div>\n  <div data-aos=\"fade-left\" data-aos-offset=\"10\" data-aos-delay=\"200\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in\">\n    <footer>\n      <p class=\"txt-railway\" style=\"font-family: bauhus; font-size: 27px; color: black; text-align: center; margin: 0; margin-top: 10%;\">- Get In Touch -</p>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <a href=\"https://www.imdb.com/name/nm0768513/\" class=\"fa fa-imdb shadow-lg\"></a>\n        </div>\n        <div class=\"col-6\">\n          <a href=\"mailto:StevenMSaylor@gmail.com\" class=\"fa fa-google shadow-lg\"></a>\n        </div>\n      </div>\n    </footer>\n  </div>\n  <script src=\"https://unpkg.com/aos@next/dist/aos.js\"></script>\n  <script>\n    AOS.init();\n  </script>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/resume-page/resume-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/resume-page/resume-page.component.ts ***!
  \******************************************************/
/*! exports provided: ResumePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumePageComponent", function() { return ResumePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ResumePageComponent = /** @class */ (function () {
    function ResumePageComponent() {
    }
    ResumePageComponent.prototype.ngOnInit = function () {
    };
    ResumePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume-page',
            template: __webpack_require__(/*! ./resume-page.component.html */ "./src/app/resume-page/resume-page.component.html"),
            styles: [__webpack_require__(/*! ./resume-page.component.css */ "./src/app/resume-page/resume-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumePageComponent);
    return ResumePageComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/JS/projects/steveWebsite/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map