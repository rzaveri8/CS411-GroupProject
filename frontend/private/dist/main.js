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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
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

module.exports = "* {\n  border-radius: 0 !important;\n  -moz-border-radius: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6Ii4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Velozity</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav ml-md-auto d-md-flex\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/resume\" routerLinkActive=\"active\">Resume Parser\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/jobs\" routerLinkActive=\"active\">Job Search\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Log Out</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-item nav-link\" href=\"https://github.com/rzaveri8/CS411-GroupProject/\"> Learn More </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n\n<!-- <nav>\n  <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n  <br>\n  <a routerLink=\"/jobs\" routerLinkActive=\"active\"></a>\n  <br>\n  <a routerLink=\"/resume\" routerLinkActive=\"active\">Resume Parser</a>\n</nav> -->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'OSSPD';
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");



 // <-- NgModel lives here








// Define the routes
var ROUTES = [
    {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
    },
    {
        path: 'jobs',
        component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_8__["JobsComponent"]
    },
    {
        path: 'resume',
        component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"]
    },
    {
        path: 'homepage',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_8__["JobsComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(ROUTES) //add routes to app
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url(\"https://backgroundcheckall.com/wp-content/uploads/2017/12/contact-us-background-9.jpg\");\n   /* Full height */\n  height: 100%;\n\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.cnt {\nmax-width:1100;\n}\n\n.custom {\n    width: 210px !important;\n}\n\n.btnRight{\nmargin-left:90px;\n}\n\n.btnLeft{\nmargin-left:140px;\n}\n\n* {\n  border-radius: 0 !important;\n  -moz-border-radius: 0 !important;\n}\n\n.navbar .navbar-nav li a {\n    color: white;\n    font-size: 16px;\n}\n\n.content {\n    padding:20px;\n    margin-top: 20px;\n    padding-top: 20px;\n    position: relative;\n    /*background-color: #EAEAEA;\n    border: 3px solid #9C9C9C;*/\n    background-color: rgba(255, 255, 255, 0.3);\n    border-radius: 5px;\n    font-family: sans-serif;\n    text-align: center;\n    line-height: 1;\n    backdrop-filter: blur(10px);\n    -webkit-backdrop-filter: blur(10px);\n    max-width: 20%;\n    max-height: 50%;\n}\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEdBQThHO0dBQzdHLGdCQUFnQjtFQUNqQixZQUFZOztFQUVaLHNDQUFzQztFQUN0QywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQjsrQkFDMkI7SUFDM0IsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLGNBQWM7SUFDZCxlQUFlO0FBQ25CIiwiZmlsZSI6Ii4uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9iYWNrZ3JvdW5kY2hlY2thbGwuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzEyL2NvbnRhY3QtdXMtYmFja2dyb3VuZC05LmpwZ1wiKTtcbiAgIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIGhlaWdodDogMTAwJTtcblxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY250IHtcbm1heC13aWR0aDoxMTAwO1xufVxuXG4uY3VzdG9tIHtcbiAgICB3aWR0aDogMjEwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0blJpZ2h0e1xubWFyZ2luLWxlZnQ6OTBweDtcbn1cblxuLmJ0bkxlZnR7XG5tYXJnaW4tbGVmdDoxNDBweDtcbn1cblxuKiB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1uYXYgbGkgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6MjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNFQUVBRUE7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzlDOUM5QzsqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBtYXgtd2lkdGg6IDIwJTtcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XG59XG5cblxuXG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"bg\">\n<h1 class = \"pt-4\" style = \"text-align: center; font-family: Open Sans, sans-serif; font-size: 60px; color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\">Welcome Nicole!</h1>\n<div class = \"container content\">\n<div class = \"pt-3\" style = \"text-align: center;\">\n<img src=\"https://cdn.accounts.autodesk.com/content/identity/28.0.545.0609a05/z/Content/images/icons/user_X176.png\" width=\"200\" height=\"200\">\n</div>\n<div class = \"container pt-3\" style = \"text-align:left\">\n  <h2 style = \"font-family: Open Sans, sans-serif; font-size: 20px;\">Job:</h2>\n  <h2 style = \"font-family: Open Sans, sans-serif; font-size: 20px; margin-right:100%;\">Location:</h2>\n</div>\n</div>\n  <div class = \"container cnt pt-5\">\n    <button type=\"button\" class=\"custom btn-lg btn btn-primary active btnLeft\" >Jobs Recommender</button>\n    <button type=\"button\" class=\"custom btn-lg btn btn-primary active btnRight\" routerLink=\"/resume\" routerLinkActive=\"active\">Resume Parser</button>\n    <button type=\"button\" class=\"custom btn-lg btn btn-primary active btnRight\" routerLink=\"/jobs\" routerLinkActive=\"active\">Job Search</button>\n  </div>\n</div>\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(httpClient) {
        this.httpClient = httpClient;
        this.profile = [];
    }
    DashboardComponent.prototype.getProfile = function () {
        // return this.httpClient.get('/api/test')
        //   .subscribe((res) => 
        //     {
        //       console.log(res);
        //       this.profile = res;
        //     })
        this.profile = "hi";
        return;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.httpClient.get("/api/isLoggedIn").subscribe(function (res) {
            console.log(res);
        });
    };
    ;
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url(\"https://backgroundcheckall.com/wp-content/uploads/2017/12/contact-background-images-9.jpg\");\n   /* Full height */\n  height: 100%;\n\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.container {\n  max-width: 350px;\n  height: 165px;\n  border: 1px solid #9C9C9C;\n  background-color: #EAEAEA;\n}\n.pad {\npadding-top: 70px;\n}\n.custom-pad {\npadding-top: 10px;\n}\n.title-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n}\n.text-pad {\npadding-bottom:15px;\n}\n.btn-linkedin {\n  background: #0E76A8;\n  border-radius: 0;\n  color: #fff;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #084461;\n}\n.btn-linkedin:link, .btn-linkedin:visited {\n  color: #fff;\n}\n.btn-linkedin:active, .btn-linkedin:hover {\n  background: #084461;\n  color: #fff;\n}\n.verticalLine {\n  border-left: 1px solid #084461;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtIQUFrSDtHQUNqSCxnQkFBZ0I7RUFDakIsWUFBWTs7RUFFWixzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCOztBQUV6QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoiLi4vc3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9iYWNrZ3JvdW5kY2hlY2thbGwuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzEyL2NvbnRhY3QtYmFja2dyb3VuZC1pbWFnZXMtOS5qcGdcIik7XG4gICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDE2NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOUM5QzlDO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQUVBO1xufVxuXG4ucGFkIHtcbnBhZGRpbmctdG9wOiA3MHB4O1xufVxuXG4uY3VzdG9tLXBhZCB7XG5wYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnRpdGxlLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG4udGV4dC1wYWQge1xucGFkZGluZy1ib3R0b206MTVweDtcbn1cblxuLmJ0bi1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQ6ICMwRTc2QTg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDg0NDYxO1xufVxuXG4uYnRuLWxpbmtlZGluOmxpbmssIC5idG4tbGlua2VkaW46dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWxpbmtlZGluOmFjdGl2ZSwgLmJ0bi1saW5rZWRpbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwODQ0NjE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udmVydGljYWxMaW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDg0NDYxO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"bg\">\n  <a class=\"navbar-brand title-center custom-pad\">Velozity</a>\n  <br>\n  <a class=\"title-center navbar-brand\">Your One Stop Shop for Professional Development </a>\n  <div class = \"pad\"></div>\n  <div class=\"container\">\n    <div style = \"text-align: center\">\n      <h3 class=\"text-center pt-3\" style = \"color: #007bb6;\">Sign In</h3>\n      <a href=\"/api/auth/\" title=\"LinkedIn\" class=\"btn btn-linkedin btn-lg mt-3\"><i class=\"fab fa-linkedin\" style=\"font-size: 1.25em;\">&nbsp;</i><a class = \"verticalLine\"> Login with Linkedin</a></a>\n    </div>\n  </div>\n</div>\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.component.css":
/*!*****************************************!*\
  !*** ./src/app/jobs/jobs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-button{\n  width: 50%;\n  margin-left: 1rem;\n  margin-top: 5px;\n}\n\n.review-card{\n  /* border: 1px solid #8196c5; */\n  box-shadow: 0px 0px 5px 0px rgba(92, 216, 236, 0.75);\n}\n\n.nutshell-card{\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  box-shadow: 0px 0px 5px 0px rgb(222, 69, 62);\n  padding: 1rem;\n}\n\n.no-list{\n  list-style-type: none;\n}\n\n.intro{\n  font-family: 'Montserrat', sans-serif;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwrQkFBK0I7RUFHL0Isb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFHbkIsNENBQTRDO0VBQzVDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFDQUFxQzs7QUFFdkMiLCJmaWxlIjoiLi4vc3JjL2FwcC9qb2JzL2pvYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYnV0dG9ue1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucmV2aWV3LWNhcmR7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICM4MTk2YzU7ICovXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDkyLCAyMTYsIDIzNiwgMC43NSk7XG59XG5cbi5udXRzaGVsbC1jYXJke1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiKDIyMiwgNjksIDYyKTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLm5vLWxpc3R7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmludHJve1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/jobs/jobs.component.html":
/*!******************************************!*\
  !*** ./src/app/jobs/jobs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Velozity: One Stop Shop for Professional Development</title>\n  <base href=\"/\">\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n</head>\n<body>\n  <section class=\"intro\">\n  <h2 class=\"text-center pt-5\">What does <img src=\"../../assets/images/indeed-logo.png\" width=150px style=\"margin-bottom:10px;\"> think?</h2>\n  <h6 class=\"text-center pt-3\">See what people are saying about a job you want to pursue </h6>\n  <section class=\"search-sec d-flex align-items-center pt-3\">\n    <div class=\"container\">\n        <form action=\"#\" method=\"get\" novalidate=\"novalidate\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row d-flex justify-content-center\">\n                        <div class=\"col-lg-4 offset-lg-1 col-md-5 col-sm-12 p-0\">\n                            <input type = \"text\" class=\"form-control search-slt\" name=\"position\" [(ngModel)]=\"position\" placeholder=\"Enter Position\"/>\n                        </div>\n                         <div class=\"col-lg-3 col-md-5 col-sm-12 p-0\" style=\"margin-left: 10px;\">\n                            <input type=\"text\" class=\"form-control search-slt\" name=\"company\" [(ngModel)]=\"company\" placeholder=\"Enter Company\">\n                          </div>\n                        <div class=\"col-lg-3 col-md-1 col-sm-12 p-0\">\n                            <button type=\"button\" class=\"btn btn-danger wrn-btn custom-button\" (click) = \"getJobs()\">Search</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n  </section>\n</section>\n  <div class=\"col-12 pt-4\">\n  <div class=\"text-center\">\n    <h6 *ngIf=\"loading == true\"> Loading <img src=\"../../assets/images/gear.gif\" height=50px> </h6>\n    <div *ngIf=\"errorMessage == true\">\n      <h3> We weren't able to find any data for that job. Try another ! </h3>\n      <h4> Looking for suggestions ? Try these: </h4>\n      <ul>\n        <li class=\"no-list\"> Software Engineer at Microsoft </li>\n        <li class=\"no-list\"> Product Manager at Amazon </li>\n        <li class=\"no-list\"> Color Consultant at Sephora </li>\n        <li class=\"no-list\"> Designer at Apple </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"container hide-text\" *ngIf = \"jobs !== undefined\">\n    <h3>What's it like to be a {{ jobs.position }} at {{ jobs.company }} ? </h3>\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <h5 class=\"text-left pt-3 pb-0\">Reviews:</h5>\n        <div class=\"card review-card mb-3\" *ngFor = \"let review of jobs.reviews\" >\n          <div class=\"card-body\">\n            {{ review }}\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <h5 class=\"text-center mt-3\">In a nutshell: </h5>\n        <div class=\"card nutshell-card\">\n            <h6 class=\"text-left\">Company Rating: {{ jobs.rating }}</h6>\n            <div *ngIf = \"jobs.pros.length > 0\">\n            <h6 class=\"text-left\" style=\"color:green;\">Pros:</h6>\n            <ul *ngFor = \"let pro of jobs.pros\">\n              <li> {{ pro }} </li>\n            </ul>\n            </div>\n            <div *ngIf = \"jobs.cons.length > 0\">\n            <h6 class=\"text-left\" style=\"color:red;\">Cons:</h6>\n            <ul *ngFor = \"let con of jobs.cons\">\n              <li> {{ con }} </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n</div>\n</body>\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n"

/***/ }),

/***/ "./src/app/jobs/jobs.component.ts":
/*!****************************************!*\
  !*** ./src/app/jobs/jobs.component.ts ***!
  \****************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var JobsComponent = /** @class */ (function () {
    function JobsComponent(httpClient) {
        this.httpClient = httpClient;
    }
    JobsComponent.prototype.parseCompany = function (company_string) {
        var raw = company_string;
        return raw.replace(/\s+/g, '-').toLowerCase();
    };
    JobsComponent.prototype.parsePosition = function (position_string) {
        var raw = position_string;
        var string_contents = raw.split(" ");
        //check if only one word passed into position
        if (string_contents.length == 1) { //capitalize word and return
            var parsed = raw.charAt(0).toUpperCase() + raw.slice(1);
            //extract the first character of this string and "capitalize" it, and then leave the rest of the string as is and append it to a new string
            //console.log(position_string);
            return parsed;
        }
        //else run loop to capitalize each word
        for (var i = 0; i < string_contents.length; i++) {
            var raw_curr_string = string_contents[i];
            var parsed_string = raw_curr_string.charAt(0).toUpperCase() + raw_curr_string.slice(1);
            string_contents[i] = parsed_string;
        }
        //add '+' seperator in between strings
        var parsed = string_contents.join("+");
        //console.log(parsed);
        return parsed;
    };
    JobsComponent.prototype.buildUrl = function () {
        var comp = this.parseCompany(this.company);
        var pos = this.parsePosition(this.position);
        var baseUrl = "http://52.14.17.113:8080/api/all/";
        this.fullURL = baseUrl + comp + "/" + pos;
    };
    JobsComponent.prototype.getJobs = function () {
        var _this = this;
        this.jobs = undefined; //reset our jobs object so that the user doesn't see the old job information when doing a new search
        this.errorMessage = false; //reset error message
        this.loading = true;
        this.buildUrl();
        this.httpClient.get(this.fullURL).subscribe(function (res) {
            _this.loading = false;
            _this.rawResponse = res;
            if (_this.rawResponse.responseType == 404) {
                _this.errorMessage = true;
            }
            else {
                _this.errorMessage = false;
                _this.jobs = _this.rawResponse;
            }
        });
    };
    JobsComponent.prototype.ngOnInit = function () { };
    JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.component.html */ "./src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.css */ "./src/app/jobs/jobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/resume.service.ts":
/*!***********************************!*\
  !*** ./src/app/resume.service.ts ***!
  \***********************************/
/*! exports provided: ResumeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeService", function() { return ResumeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ResumeService = /** @class */ (function () {
    function ResumeService(httpClient) {
        this.httpClient = httpClient;
    }
    ResumeService.prototype.postFile = function (fileToUpload) {
        var endpoint = 'http://rezscore.com/a/f3f2cd/grade';
        var formData = new FormData();
        formData.append('resume', fileToUpload, fileToUpload.name);
        return this.httpClient
            .post(endpoint, formData, { responseType: 'text' });
    };
    ResumeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ResumeService);
    return ResumeService;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center pt-5\">\n  <h1>\n    Resume Grader\n  </h1>\n</div>\n\n<!-- <div class=\"form-group\">\n  <label for=\"file\">Choose File</label>\n  <input type=\"file\"\n         id=\"file\"\n         (change)=\"handleFileInput($event.target.files)\">\n</div> -->\n\n<div class=\"container\">\n  <div class=\"custom-file\" style=\"text-align: left;\">\n    <input type=\"file\" class=\"custom-file-input\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n    <label class=\"custom-file-label\" style=\"width:320px;\" for=\"file\">Choose file</label>\n  </div>\n</div>\n\n\n<div class=\"container hide-text\" *ngIf = \"resume !== undefined\">\n  <h4> <strong> Grade: </strong>{{ resume.rezscore.score[0].grade[0] }}</h4>\n  <h4> <strong>Advice Long: </strong>{{ resume.rezscore.advice[0].tip[0].long[0] }}</h4>\n  <h4> <strong>Advice Short: </strong>{{ resume.rezscore.advice[0].tip[0].short[0].a[0]._ }}</h4>\n  <h4> <strong>Percentile: </strong>{{ resume.rezscore.score[0].percentile[0] }} </h4>\n  <h4> <strong>Readability: </strong>{{ resume.rezscore.extended[0].ari_score[0] }}</h4>\n  <h4> <strong>Buzzword Percent: </strong>{{ resume.rezscore.extended[0].pct_buzzwords[0] }}</h4>\n  <h4> <strong>Whitespace Percent: </strong>{{ resume.rezscore.extended[0].pct_whitespace[0] }}</h4>\n  <h4> <strong>Word Count:</strong> {{ resume.rezscore.extended[0].wordcount[0] }}</h4>\n  <h4> <strong>First Industry Match:</strong> {{ resume.rezscore.industry[0].first_industry_match[0] }}</h4>\n  <h4> <strong>Second Industry Match: </strong>{{ resume.rezscore.industry[0].second_industry_match[0] }}</h4>\n  <h4> <strong>Third Industry Match:</strong> {{ resume.rezscore.industry[0].third_industry_match[0] }}</h4>\n  <h4> <strong>Most Popular Words:</strong></h4>\n    <ul>\n      <li *ngFor=\"let word of resume.rezscore.language[0].word\"> {{ word.string[0] }} </li>\n    </ul>\n  <h4> <strong>Brevity Score:</strong> {{ resume.rezscore.score[0].brevity_score[0] }} </h4>\n  <h4> <strong>Depth Score: </strong>{{ resume.rezscore.score[0].depth_score[0] }} </h4>\n  <h4> <strong>Impact Score: </strong>{{ resume.rezscore.score[0].impact_score[0] }} </h4>\n  <h4> <strong>Grade Blurb:</strong> {{ resume.rezscore.score[0].grade_blurb[0] }} </h4>\n  <h4> <strong>Grade Headline: </strong>{{ resume.rezscore.score[0].grade_headline[0] }} </h4>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xml2js */ "./node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resume_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resume.service */ "./src/app/resume.service.ts");





var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(httpClient, resumeService) {
        this.httpClient = httpClient;
        this.resumeService = resumeService;
        this.fileToUpload = null;
    }
    ResumeComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        this.uploadFileToActivity();
    };
    ResumeComponent.prototype.uploadFileToActivity = function () {
        var _this = this;
        this.resume = undefined;
        this.resumeService.postFile(this.fileToUpload).subscribe(function (data) {
            var res;
            Object(xml2js__WEBPACK_IMPORTED_MODULE_3__["parseString"])(data, function (err, result) {
                res = result;
            });
            _this.resume = res;
            console.log(_this.resume);
        }, function (error) {
            console.log(error);
        });
    };
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _resume_service__WEBPACK_IMPORTED_MODULE_4__["ResumeService"]])
    ], ResumeComponent);
    return ResumeComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/manujadesilva/Desktop/CS411/semester-project/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map