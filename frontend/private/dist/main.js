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

module.exports = "* {\n  border-radius: 0 !important;\n  -moz-border-radius: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Velozity: One Stop Shop for Professional Development</title>\n  <base href=\"/\">\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n</head>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _recommender_recommender_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recommender/recommender.component */ "./src/app/recommender/recommender.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _saved_saved_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./saved/saved.component */ "./src/app/saved/saved.component.ts");



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
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"]
    },
    {
        path: 'jobs',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
        component: _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_10__["JobsComponent"]
    },
    {
        path: 'resume',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
        component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"]
    },
    {
        path: 'homepage',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"]
    },
    {
        path: 'recommender',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
        component: _recommender_recommender_component__WEBPACK_IMPORTED_MODULE_14__["RecommenderComponent"]
    },
    {
        path: 'logout',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"]
    },
    {
        path: 'saved',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
        component: _saved_saved_component__WEBPACK_IMPORTED_MODULE_17__["SavedComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_10__["JobsComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"],
                _recommender_recommender_component__WEBPACK_IMPORTED_MODULE_14__["RecommenderComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"],
                _saved_saved_component__WEBPACK_IMPORTED_MODULE_17__["SavedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(ROUTES),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(http) {
        this.http = http;
    }
    AuthGuard.prototype.canActivate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.http.get("/api/isLoggedIn").toPromise()];
                    case 1:
                        _a.response = _b.sent();
                        //console.log("The response is " + this.response);
                        this.isLoggedIn = this.response.logInStatus;
                        if (this.isLoggedIn == 1) {
                            //console.log("The user is logged in");
                            //console.log(this.isLoggedIn);
                            return [2 /*return*/, true];
                        }
                        else {
                            alert("You are not logged in. Please login with LinkedIn first");
                            //console.log(this.isLoggedIn);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        /* This service allows us to protect our routes and ensure that the user is logged in before they can access them. */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background-image: url('pen_paper.jpg');\n   /* Full height */\n\n  height: 100%;\n  height: 100vh;\n\n  /* Center and scale the image nicely */\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n}\n\n.custom {\n    width: 210px !important;\n}\n\n* {\n  border-radius: 0 !important;\n  -moz-border-radius: 0 !important;\n}\n\n.navbar .navbar-nav li a {\n    color: white;\n    font-size: 16px;\n}\n\n.content {\n    padding:20px;\n    margin-top: 20px;\n    padding-top: 50px;\n    position: relative;\n    background-color: rgba(255, 255, 255, 0.6);\n    font-family: sans-serif;\n    text-align: center;\n    line-height: 1;\n    height: 60%;\n    width: 57vh;\n}\n\n.button-space {\n  display: flex;\n  justify-content: space-around;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBMEQ7R0FDekQsZ0JBQWdCOztFQUVqQixZQUFZO0VBQ1osYUFBYTs7RUFFYixzQ0FBc0M7O0VBRXRDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCOztBQUV4Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGVuX3BhcGVyLmpwZ1wiKTtcbiAgIC8qIEZ1bGwgaGVpZ2h0ICovXG5cbiAgaGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xuXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxufVxuXG4uY3VzdG9tIHtcbiAgICB3aWR0aDogMjEwcHggIWltcG9ydGFudDtcbn1cblxuKiB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1uYXYgbGkgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6MjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGhlaWdodDogNjAlO1xuICAgIHdpZHRoOiA1N3ZoO1xufVxuXG4uYnV0dG9uLXNwYWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Velozity</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav ml-md-auto d-md-flex\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/resume\" routerLinkActive=\"active\">Resume Grader\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/jobs\" routerLinkActive=\"active\">Job Search\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/recommender\" routerLinkActive=\"active\">Job Recommender\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/saved\" routerLinkActive=\"active\"> Saved Jobs\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/logout\">Log Out</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-item nav-link\" href=\"https://github.com/rzaveri8/CS411-GroupProject/\"> Learn More </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Position</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Please input your current or desired position to continue.</p>\n        <input type=\"text\" placeholder=\"Enter Position\" [(ngModel)]=\"rawIndustry\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click) = \"updateIndustry()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class = \"bg\">\n  <h1 class = \"pt-4\" style = \"text-align: center; font-family: Open Sans, sans-serif; font-size: 60px; color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\">Welcome {{ profile.firstName }}!</h1>\n  <div class = \"container-fluid content\">\n    <div class = \"pt-50\" style = \"text-align: center;\">\n      <img src=\"{{ profile.pictureUrl }}\" width=\"240\" height=\"240\">\n    </div>\n    <div class = \"container pt-3\" style = \"text-align:left;\">\n      <p style = \"font-family: Open Sans, sans-serif; font-size: 20px;\" *ngIf = \"profile.industry != undefined\"><u>Job:</u> {{ profile.industry }} </p>\n      <p style = \"font-family: Open Sans, sans-serif; font-size: 20px;\" *ngIf = \"profile.location != undefined\"><u>Location:</u> {{ profile.location }}</p>\n      <p style = \"font-size: 15px; text-align: center;\"><i> Note: For best results, please upload resume first</i></p>\n    </div>\n  </div>\n    <div class = \"col-lg-12 button-space\" style = \"padding-top: 3%;\">\n      <button type=\"button\" class=\"custom btn-lg btn btn-primary active \" routerLink=\"/recommender\" routerLinkActive=\"active\">Job Recommender</button>\n      <button type=\"button\" class=\"custom btn-lg btn btn-primary active \" routerLink=\"/resume\" routerLinkActive=\"active\">Resume Grader</button>\n      <button type=\"button\" class=\"custom btn-lg btn btn-primary active \" routerLink=\"/jobs\" routerLinkActive=\"active\">Job Search</button>\n      <button type=\"button\" class=\"custom btn-lg btn btn-primary active\" (click)=\"updateIndustry()\"> Edit Profile </button>\n    </div>\n</div>\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(httpClient, router, user) {
        this.httpClient = httpClient;
        this.router = router;
        this.user = user;
        this.profile = [];
    }
    DashboardComponent.prototype.getProfile = function () {
        var _this = this;
        this.httpClient.get("/api/user").subscribe(function (res) {
            _this.profile = res;
            _this.user.industry = _this.profile.industry;
            if (_this.profile.industry == undefined) {
                _this.updateIndustry();
            }
        });
    };
    DashboardComponent.prototype.parsePosition = function (position_string) {
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
        //add space in between strings
        var parsed = string_contents.join(" ");
        return parsed;
    };
    DashboardComponent.prototype.updateIndustry = function () {
        $("#myModal").modal();
        this.profile.industry = this.parsePosition(this.rawIndustry);
        this.user.updateIndustry(this.profile.industry).subscribe(function (res) { }, function (error) {
            alert(error.error);
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    ;
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
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

module.exports = ".bg {\n  background-image: url('desk.jpg');\n   /* Full height */\n  height: 100%;\n  height: 100vh;\n\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.container {\n  max-width: 350px;\n  height: 165px;\n  border: 1px solid #9C9C9C;\n  background-color: #EAEAEA;\n}\n.pad {\npadding-top: 70px;\n}\n.custom-pad {\npadding-top: 10px;\n}\n.title-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n}\n.text-pad {\npadding-bottom:15px;\n}\n.btn-linkedin {\n  background: #0E76A8;\n  border-radius: 0;\n  color: #fff;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #084461;\n}\n.btn-linkedin:link, .btn-linkedin:visited {\n  color: #fff;\n}\n.btn-linkedin:active, .btn-linkedin:hover {\n  background: #084461;\n  color: #fff;\n}\n.verticalLine {\n  border-left: 1px solid #084461;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQXFEO0dBQ3BELGdCQUFnQjtFQUNqQixZQUFZO0VBQ1osYUFBYTs7RUFFYixzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCOztBQUV6QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoiYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHNcXGltYWdlc1xcZGVzay5qcGdcIik7XG4gICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDE2NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOUM5QzlDO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQUVBO1xufVxuXG4ucGFkIHtcbnBhZGRpbmctdG9wOiA3MHB4O1xufVxuXG4uY3VzdG9tLXBhZCB7XG5wYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnRpdGxlLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG4udGV4dC1wYWQge1xucGFkZGluZy1ib3R0b206MTVweDtcbn1cblxuLmJ0bi1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQ6ICMwRTc2QTg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDg0NDYxO1xufVxuXG4uYnRuLWxpbmtlZGluOmxpbmssIC5idG4tbGlua2VkaW46dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWxpbmtlZGluOmFjdGl2ZSwgLmJ0bi1saW5rZWRpbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwODQ0NjE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udmVydGljYWxMaW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDg0NDYxO1xufVxuXG4iXX0= */"

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

/***/ "./src/app/jobdata.service.ts":
/*!************************************!*\
  !*** ./src/app/jobdata.service.ts ***!
  \************************************/
/*! exports provided: JobdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobdataService", function() { return JobdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var JobdataService = /** @class */ (function () {
    function JobdataService(http) {
        this.http = http;
        this.jobsSaved = false;
    }
    JobdataService.prototype.getJobInfo = function () {
        return this.job;
    };
    JobdataService.prototype.setJobInfo = function (job) {
        this.job = job;
    };
    JobdataService.prototype.getJobs = function () {
        return this.http.get("/api/jobs");
    };
    JobdataService.prototype.saveJobsLocally = function (jobs) {
        this.jobsSaved = true;
        this.jobsLocalStore = jobs;
    };
    JobdataService.prototype.getLocallySavedJobs = function () {
        return this.jobsLocalStore;
    };
    JobdataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JobdataService);
    return JobdataService;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.component.css":
/*!*****************************************!*\
  !*** ./src/app/jobs/jobs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-button{\n  width: 50%;\n  margin-left: 1rem;\n  margin-top: 5px;\n}\n\n.review-card{\n  /* border: 1px solid #8196c5; */\n  box-shadow: 0px 0px 5px 0px rgba(92, 216, 236, 0.75);\n}\n\n.nutshell-card{\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  box-shadow: 0px 0px 5px 0px rgb(222, 69, 62);\n  padding: 1rem;\n}\n\n.no-list{\n  list-style-type: none;\n}\n\n.intro{\n  font-family: 'Montserrat', sans-serif;\n\n}\n\n.full-viewport {\n  /* The image used */\n  background-image: url('gray.jpg');\n  /* Full height */\n  min-height: 100%;\n  min-height: 100vh;\n\n  /* Center and scale the image nicely */\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.footer {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  margin: 35px 25px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9qb2JzL2pvYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtFQUcvQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUduQiw0Q0FBNEM7RUFDNUMsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUNBQXFDOztBQUV2Qzs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQ0FBcUQ7RUFDckQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7O0VBRWpCLHNDQUFzQzs7RUFFdEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC9qb2JzL2pvYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYnV0dG9ue1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucmV2aWV3LWNhcmR7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICM4MTk2YzU7ICovXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDkyLCAyMTYsIDIzNiwgMC43NSk7XG59XG5cbi5udXRzaGVsbC1jYXJke1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiKDIyMiwgNjksIDYyKTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLm5vLWxpc3R7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmludHJve1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXG59XG4uZnVsbC12aWV3cG9ydCB7XG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZ3JheS5qcGdcIik7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xuXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMzVweCAyNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/jobs/jobs.component.html":
/*!******************************************!*\
  !*** ./src/app/jobs/jobs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Velozity</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav ml-md-auto d-md-flex\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/resume\" routerLinkActive=\"active\">Resume Grader\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/jobs\" routerLinkActive=\"active\">Job Search\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/recommender\" routerLinkActive=\"active\">Job Recommender\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/saved\" routerLinkActive=\"active\"> Saved Jobs\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/logout\">Log Out</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-item nav-link\" href=\"https://github.com/rzaveri8/CS411-GroupProject/\"> Learn More </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n<body>\n<div class = \"full-viewport\">\n  <section class=\"intro\">\n  <h2 class=\"text-center pt-5\">Looking for a job?</h2>\n  <h6 class=\"text-center pt-3\">See what people are saying about a job you want to pursue </h6>\n  <section class=\"search-sec d-flex align-items-center pt-3\">\n    <div class=\"container\">\n        <form action=\"#\" method=\"get\" novalidate=\"novalidate\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row d-flex justify-content-center\">\n                        <div class=\"col-lg-4 offset-lg-1 col-md-5 col-sm-12 p-0\">\n                            <input type = \"text\" class=\"form-control search-slt\" name=\"position\" [(ngModel)]=\"position\" placeholder=\"Enter Position\"/>\n                        </div>\n                         <div class=\"col-lg-3 col-md-5 col-sm-12 p-0\" style=\"margin-left: 10px;\">\n                            <input type=\"text\" class=\"form-control search-slt\" name=\"company\" [(ngModel)]=\"company\" placeholder=\"Enter Company\">\n                          </div>\n                        <div class=\"col-lg-3 col-md-1 col-sm-12 p-0\">\n                            <button type=\"button\" class=\"btn btn-danger wrn-btn custom-button\" (click) = \"getJobs()\">Search</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n  </section>\n</section>\n\n    <div class=\"col-12 pt-4\">\n  <div class=\"text-center\">\n    <h6 *ngIf=\"glassLoad == true || indeedLoad == true\"> Loading <img src=\"../../assets/images/gear.gif\" height=50px> </h6>\n    <div *ngIf=\"iError == true && gError == true\">\n      <h3> We weren't able to find any data for that job. Try another! </h3>\n      <h4> Looking for suggestions ? Try these: </h4>\n      <ul>\n        <li class=\"no-list\"> Software Engineer at Microsoft </li>\n        <li class=\"no-list\"> Product Manager at Amazon </li>\n        <li class=\"no-list\"> Color Consultant at Sephora </li>\n        <li class=\"no-list\"> Designer at Apple </li>\n      </ul>\n    </div>\n  </div>\n  </div>\n\n<div class=\"container\">\n  <mat-tab-group *ngIf=\"indeedLoad == false && glassLoad == false\">\n    <div class=\"container hide-text\" *ngIf = \"iError == false && indeedLoad == false\">\n    <mat-tab label=\"Reviews\">\n      <h3 style = \"padding-top: 20px;\">What's it like to be a {{ indeedRes.position }} at {{ indeedRes.company }} ? </h3>\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <h5 class=\"text-left pt-3 pb-0\">Reviews:</h5>\n          <div class=\"card review-card mb-3\" style=\"margin-top:20px; margin-right: 30px; margin-left: 30px;\" *ngFor = \"let review of indeedRes.reviews\" >\n            <div class=\"card-body\">\n              {{ review }}\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\" style = \"padding-left: -10px;\">\n          <h5 class=\"text-center mt-3\">In a nutshell: </h5>\n          <div class=\"card nutshell-card\">\n              <h6 class=\"text-left\">Company Rating: {{ indeedRes.rating }}/5</h6>\n              <div *ngIf = \"indeedRes.pros.length > 0\">\n              <h6 class=\"text-left\" style=\"color:green;\">Pros:</h6>\n              <ul *ngFor = \"let pro of indeedRes.pros\">\n                <li> {{ pro }} </li>\n              </ul>\n              </div>\n              <div *ngIf = \"indeedRes.cons.length > 0\">\n              <h6 class=\"text-left\" style=\"color:red;\">Cons:</h6>\n              <ul *ngFor = \"let con of indeedRes.cons\">\n                <li> {{ con }} </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n    </div>\n    </mat-tab>\n\n    </div>\n  <div class=\"container hide-text\" *ngIf = \"gError == false && glassLoad == false\">\n  <mat-tab label=\"Interviews\">\n    <div class=\"card review-card mb-3\" style=\"margin-top:20px; margin-right: 30px; margin-left: 30px;\">\n      <div class=\"card-body\">\n        <div class=\"container\" style = \"padding: 10px;\">\n          <div class=\"row\">\n      <div class=\"col\" style = \"text-align:center;\"><p style = \"font-size:25px;\"><a style = \"font-size: 25px;\">Overall Interview Difficulty:</a> {{ glassRes.difficulty }}</p></div>\n          </div>\n          <div class=\"row\">\n        <!--   <div class = \"centerBlock\">-->\n            <div class=\"col-sm\">\n              <h4> Path to Interview: </h4>\n              <ul>\n              <li *ngFor = \"let path of glassRes.path\"> {{ path[0] }}: {{ path[1] }}</li>\n              </ul>\n              <!-- <p style = \"font-size: 30px;\">Experiences:</p> -->\n              <h4>Experiences:</h4>\n              <ul>\n              <li>{{ glassRes.experience[0] }}% Positive\n              <li> {{ glassRes.experience[1] }}% Negative or Neutral </li>\n              </ul>\n              <h4> Offers: </h4>\n              <ul>\n              <li> Accepted: {{ offers[0] }} </li>\n              <li> Declined: {{ offers[1] }} </li>\n              <li> No Offer: {{ offers[2] }} </li>\n              </ul>\n              </div>\n\n      <div class=\"col-sm\">\n        <h4> Interview Questions: </h4>\n        <ul>\n        <li *ngFor = \"let q of glassRes.questions\"> {{ q }}</li>\n      </ul>\n      </div>\n    </div>\n        </div>\n  </div>\n    </div>\n    <h4> Comments: </h4>\n      <div class=\"card review-card mb-3\" style=\"margin-top:20px; margin-right: 30px; margin-left: 30px;\" *ngFor = \"let comm of glassRes.comments\">\n        <div class=\"card-body\" > {{ comm }} </div>\n        </div>\n  </mat-tab>\n    </div>\n  </mat-tab-group>\n</div>\n</div>\n\n<footer class=\"page-footer font-small blue\" style = \"background: #e0e0e0;\">\n   <div class=\"footer-copyright text-center py-3 blue\">Results provided by <img style = \"width: 60px;\" src=\"../../assets/images/indeed-logo.png\"> and <img style = \"width: 75px;\" src=\"../../assets/images/glassdoor-logo.png\">\n    </div>\n  </footer>\n\n</body>\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n"

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
/* harmony import */ var _jobdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jobdata.service */ "./src/app/jobdata.service.ts");




var JobsComponent = /** @class */ (function () {
    function JobsComponent(httpClient, data) {
        this.httpClient = httpClient;
        this.data = data;
    }
    JobsComponent.prototype.parseInput = function (input_string, separator) {
        input_string = input_string.toLowerCase();
        var string_contents = input_string.split(" ");
        //check if only one word passed into position
        if (string_contents.length == 1) {
            return input_string;
        }
        //else add seperator in between words
        var parsed_input = string_contents.join(separator);
        return parsed_input;
    };
    JobsComponent.prototype.buildUrl = function () {
        var comp = this.parseInput(this.company, " ");
        var pos = this.parseInput(this.position, "+");
        var baseI = "http://52.14.17.113:8080/api/indeed/";
        var baseG = "/api/glassdoor/";
        this.indeedURL = baseI + comp + "/" + pos;
        this.glassURL = baseG + comp + "/" + pos;
    };
    // calculates how many offers accepted, declined, or not given
    JobsComponent.prototype.calcOffers = function () {
        var off = this.glassRes.offers;
        var yes = 0;
        var decline = 0;
        var no = 0;
        off.forEach(function (element) {
            if (element == "No Offer")
                no++;
            else if (element == "Declined Offer")
                decline++;
            else if (element == "Accepted Offer")
                yes++;
        });
        this.offers = [yes, decline, no];
    };
    // api call for glassdoor
    JobsComponent.prototype.getGlass = function () {
        var _this = this;
        this.httpClient.get(this.glassURL).subscribe(function (res) {
            _this.rawGResponse = res;
            _this.gError = false;
            _this.glassRes = _this.rawGResponse;
            console.log("success from glassdoor");
            _this.calcOffers();
            _this.glassLoad = false;
        }, function (err) {
            console.log(err);
            console.log("error with glassdoor");
            _this.gError = true;
            _this.glassLoad = false;
        });
    };
    // api call for indeed
    JobsComponent.prototype.getIndeed = function () {
        var _this = this;
        this.httpClient.get(this.indeedURL).subscribe(function (res) {
            _this.rawIResponse = res;
            if (_this.rawIResponse.responseType == 404) {
                console.log("error with indeed");
                _this.iError = true;
                _this.indeedLoad = false;
            }
            else {
                _this.iError = false;
                _this.indeedRes = _this.rawIResponse;
                _this.indeedRes.rating = _this.indeedRes.rating.toFixed(3);
                _this.indeedLoad = false;
                console.log("success from indeed");
            }
        }, function (err) {
            console.log("error with indeed");
            _this.iError = true;
            _this.indeedLoad = false;
        });
    };
    // executes on search button click
    JobsComponent.prototype.getJobs = function () {
        this.glassRes = undefined;
        this.indeedRes = undefined; //reset our jobs object so that the user doesn't see the old job information when doing a new search
        this.gError = false;
        this.iError = false;
        this.indeedLoad = true;
        this.glassLoad = true;
        this.buildUrl();
        this.getGlass();
        this.getIndeed();
    };
    JobsComponent.prototype.ngOnInit = function () {
        // pulls info from Jobdata service if there is anything there to grab 
        // (ie, user routed to this page by clicking on a recommended job)
        var jobdata = this.data.getJobInfo();
        if (jobdata != undefined) {
            this.position = jobdata[0];
            this.company = jobdata[1];
            jobdata = undefined;
            this.data.setJobInfo(jobdata); // resets this to undefined after the info has been pulled
            this.getJobs();
        }
    };
    JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.component.html */ "./src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.css */ "./src/app/jobs/jobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _jobdata_service__WEBPACK_IMPORTED_MODULE_3__["JobdataService"]])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"bg\">\n    <div class=\"container content\" style = \"text-align: center; padding-top: 100px;\">\n        <div class=\"col-md-12\">\n            <h1> We're sorry to see you go. </h1>\n            <p> Hope you stick around longer next time </p>\n            <a routerLink=\"/\">Click here to return to the homepage</a>\n        </div>\n    </div>\n</div>\n "

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(http) {
        this.http = http;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("/api/logout").subscribe(function (res) {
            //console.log("Attempting to logout");
            //console.log(this.response);
            _this.response = res;
        });
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/recommender/recommender.component.css":
/*!*******************************************************!*\
  !*** ./src/app/recommender/recommender.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-viewport {\n  /* The image used */\n  background-image: url('silver.jfif');\n\n  /* Full height */\n  min-height: 100%;\n  min-height: 100vh;\n\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.job-card {\n  color: white;\n  background-color: #212529;\n}\n\n.container-design {\n    position: absolute;\n    width: 40%;\n    height: 20%;\n    text-align: center;\n    background-color: white;\n    align-items: center;\n}\n\n.containerr {\n  display: flex;\n  padding-top: 30px;\n  align-items: center;\n}\n\n.element {\n    /* set border styling */\n    border-color: DCDCDC;\n    border-style: solid;\n    border-width: 6px;\n\n    /* set border roundness */\n    border-radius: 25px;\n    -moz-border-radius: 25px;\n    -webkit-border-radius: 25px;\n    background-color: #808080;\n    max-width: 1400px;\n    color: white;\n}\n\n.jumbotron{\nheight: 30vh;\n}\n\n.container-fluid {\n  padding-bottom: 400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWNvbW1lbmRlci9yZWNvbW1lbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG9DQUF3RDs7RUFFeEQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7O0VBRWpCLHNDQUFzQztFQUN0QywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7SUFFakIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJhcHAvcmVjb21tZW5kZXIvcmVjb21tZW5kZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXZpZXdwb3J0IHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zaWx2ZXIuamZpZlwiKTtcblxuICAvKiBGdWxsIGhlaWdodCAqL1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4uam9iLWNhcmQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG59XG5cbi5jb250YWluZXItZGVzaWduIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcnIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVsZW1lbnQge1xuICAgIC8qIHNldCBib3JkZXIgc3R5bGluZyAqL1xuICAgIGJvcmRlci1jb2xvcjogRENEQ0RDO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA2cHg7XG5cbiAgICAvKiBzZXQgYm9yZGVyIHJvdW5kbmVzcyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmp1bWJvdHJvbntcbmhlaWdodDogMzB2aDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctYm90dG9tOiA0MDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/recommender/recommender.component.html":
/*!********************************************************!*\
  !*** ./src/app/recommender/recommender.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Velozity</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav ml-md-auto d-md-flex\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/resume\" routerLinkActive=\"active\">Resume Grader\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/jobs\" routerLinkActive=\"active\">Job Search\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/recommender\" routerLinkActive=\"active\">Job Recommender\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/saved\" routerLinkActive=\"active\"> Saved Jobs\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/logout\">Log Out</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-item nav-link\" href=\"https://github.com/rzaveri8/CS411-GroupProject/\"> Learn More </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n<div class = \"full-viewport\">\n  <div class=\"jumbotron\" >\n  <div class=\"container\">\n    <p style = \"text-align: center; font-size: 35px;\">Recommended Jobs</p>\n    <br>\n    <button type=\"button\" class=\"custom btn-lg btn btn-primary active btn-format\" (click)=\"activateUpdateUserIndustryModal()\"> Edit Industry </button>\n    <span class=\"lead\" style = \"text-align: center; margin-left: 30px;\">Based on your current industry/position of <i>{{ user.industry }}</i>, we recommend the following jobs:</span>\n    <div>\n    </div>\n  </div>\n</div>\n  <div id=\"posModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">      \n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Enter Position</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>Please enter your position or industry to continue.</p>\n            <input type=\"text\" placeholder=\"Enter Position\" [(ngModel)]=\"rawIndustry\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click) = \"updateUserIndustry()\">Update</button>        \n          </div>\n      </div>\n    </div>\n  </div>\n\n    <h4 *ngIf=\"error\"> Error: {{ error }} </h4>\n    <h6 style = \"text-align:center; padding-top: 30px;\" *ngIf=\"loading == true\"> Loading <img src=\"../../assets/images/gear.gif\" height=50px> </h6>\n    <div *ngIf=\"jobs\">\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">      \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Job Search</h4>\n        </div>\n      <div class=\"modal-body\">\n        <p>Would you like to search this job?</p>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" routerLink=\"/jobs\" routerLinkActive=\"active\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class = \"full-viewport\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n    <!--      <h5 class=\"text-left pb-0\" *ngIf=\"industry\"> My Current Industry/Position: {{ industry }} </h5>-->\n          <h4 *ngIf=\"error\"> Error: {{ error }} </h4> \n          <!-- <div *ngIf=\"industry == undefined\">\n            <p> Please update your industry to execute an automatic job search. </p>\n            <input #industryField type=\"text\" class=\"form-control\" length=\"100\">\n            <button type=\"submit\" class=\"btn btn-default btn-small\" (click)=\"updateUserIndustry(industryField.value)\">Update</button>\n          </div> -->\n          <div class = \"container\" style = \"width: 600px;\"*ngIf=\"jobs\">\n            <div class=\"card mb-3\" *ngFor=\"let job of jobs\">\n              <div class=\"card-body job-card\" style = \"text-align: center;\" id=\"selectedJob\" (click)=\"jobSearch(job)\">\n                {{ job[0] }} - {{ job[1] }}\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n    </div>\n</div>\n "

/***/ }),

/***/ "./src/app/recommender/recommender.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recommender/recommender.component.ts ***!
  \******************************************************/
/*! exports provided: RecommenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommenderComponent", function() { return RecommenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _jobdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jobdata.service */ "./src/app/jobdata.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var RecommenderComponent = /** @class */ (function () {
    function RecommenderComponent(http, data, user) {
        this.http = http;
        this.data = data;
        this.user = user;
    }
    RecommenderComponent.prototype.jobSearch = function (job) {
        this.selectedJob = job;
        this.data.setJobInfo(this.selectedJob);
        $("#myModal").modal();
    };
    RecommenderComponent.prototype.activateUpdateUserIndustryModal = function () {
        $("#posModal").modal({
            backdrop: 'static',
            keyboard: false
        });
    };
    RecommenderComponent.prototype.updateUserIndustry = function () {
        var _this = this;
        console.log("The input is " + this.rawIndustry);
        this.error = "";
        this.user.updateIndustry(this.rawIndustry).subscribe(function (res) {
            _this.loading = true;
            _this.refresh();
        });
    };
    RecommenderComponent.prototype.refresh = function () {
        var _this = this;
        this.http.get("/api/jobs/").subscribe(function (res) {
            _this.user.updatedIndustry = false; //update our flag to represent that the user has not updated their industry since our most recent search
            _this.response = res;
            _this.jobs = _this.response.data;
            _this.loading = false;
            _this.error = "";
            _this.data.saveJobsLocally(_this.jobs);
        }, function (error) {
            _this.loading = false;
            _this.error = error.error.error;
            console.log("error with getJobs");
        });
    };
    RecommenderComponent.prototype.confirmUserIndustryAndGetJobs = function () {
        var _this = this;
        this.user.getIndustry().subscribe(function (res) {
            _this.response = res;
            _this.user.industry = _this.response.industry;
            _this.http.get("/api/jobs/").subscribe(function (res) {
                _this.response = res;
                _this.jobs = _this.response.data;
                _this.loading = false;
                _this.error = "";
                _this.data.saveJobsLocally(_this.jobs);
            }, function (error) {
                _this.loading = false;
                _this.error = error.error.error;
                console.log("error with getJobs");
            });
        }, function (error) {
            //Assume that the user does not have an industry set
            alert(error.error);
            _this.loading = false;
            _this.error = error.error;
            _this.canSearch = false;
            if (_this.user.industry == undefined) {
                _this.activateUpdateUserIndustryModal();
            }
        });
    };
    RecommenderComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.error = "";
        if (this.data.jobsSaved && !this.user.updatedIndustry) {
            console.log("Getting previously saved jobs");
            this.jobs = this.data.getLocallySavedJobs();
            this.loading = false;
        }
        else {
            console.log("Executing new job search");
            this.confirmUserIndustryAndGetJobs();
        }
    };
    RecommenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommender',
            template: __webpack_require__(/*! ./recommender.component.html */ "./src/app/recommender/recommender.component.html"),
            styles: [__webpack_require__(/*! ./recommender.component.css */ "./src/app/recommender/recommender.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _jobdata_service__WEBPACK_IMPORTED_MODULE_3__["JobdataService"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RecommenderComponent);
    return RecommenderComponent;
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

module.exports = ".bg {\n  background-image: url('keyboard.png');\n   /* Full height */\n\n  min-height: 100%;\n  min-height: 100vh;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.element {\n    /* set border styling */\n    border-color: #E0DDD7;\n    border-style: solid;\n    border-width: 5px;\n\n    /* set border roundness */\n    border-radius: 25px;\n    -moz-border-radius: 25px;\n    -webkit-border-radius: 25px;\n    height: 65%;\n    background-color: #E0DDD7;\n    max-width: 1400px;\n}\n\n.blur-box {\n    background-color: #E0DDD7;\n    box-shadow: 0 0 5px 10px #E0DDD7;\n}\n\n.b {\n  box-sizing: content-box;\n  display:inline-block;\n  position: relative;\n  margin: 1%;\n  float:left;\n  width:29%;\n  height:295px;\n  background-color: lightgrey;\n  border: 5px solid black;\n  padding: 10px;\n}\n\n.center-title1 {\n  padding-left: 145px;\n}\n\n.center-title2 {\n  padding-left: 335px;\n}\n\n.center-title3 {\n  padding-left: 376px;\n}\n\n.upload-photo {\n   position: absolute;\n   z-index: -1;\n}\n\n/*.container-fluid {\nbackground-color: lightgrey;\nwidth: 30%;\nheight: 20%;\n    border-radius: 25px;\n    -moz-border-radius: 25px;\n    -webkit-border-radius: 25px;\n    height: 65%;\n    background-color: #E0DDD7;\n    max-width: 1400px;\n    align: center;\n}*/\n\n.someselector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBeUQ7R0FDeEQsZ0JBQWdCOztFQUVqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0QywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7O0lBRWpCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7R0FDRyxrQkFBa0I7R0FDbEIsV0FBVztBQUNkOztBQUVBOzs7Ozs7Ozs7OztFQVdFOztBQUVGO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckIiLCJmaWxlIjoiYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMva2V5Ym9hcmQucG5nXCIpO1xuICAgLyogRnVsbCBoZWlnaHQgKi9cblxuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmVsZW1lbnQge1xuICAgIC8qIHNldCBib3JkZXIgc3R5bGluZyAqL1xuICAgIGJvcmRlci1jb2xvcjogI0UwRERENztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuXG4gICAgLyogc2V0IGJvcmRlciByb3VuZG5lc3MgKi9cbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgaGVpZ2h0OiA2NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRERENztcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcbn1cblxuLmJsdXItYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBEREQ3O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMTBweCAjRTBEREQ3O1xufVxuXG4uYiB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDElO1xuICBmbG9hdDpsZWZ0O1xuICB3aWR0aDoyOSU7XG4gIGhlaWdodDoyOTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNlbnRlci10aXRsZTEge1xuICBwYWRkaW5nLWxlZnQ6IDE0NXB4O1xufVxuLmNlbnRlci10aXRsZTIge1xuICBwYWRkaW5nLWxlZnQ6IDMzNXB4O1xufVxuXG4uY2VudGVyLXRpdGxlMyB7XG4gIHBhZGRpbmctbGVmdDogMzc2cHg7XG59XG5cbi51cGxvYWQtcGhvdG8ge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgei1pbmRleDogLTE7XG59XG5cbi8qLmNvbnRhaW5lci1mbHVpZCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG53aWR0aDogMzAlO1xuaGVpZ2h0OiAyMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGhlaWdodDogNjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMERERDc7XG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgYWxpZ246IGNlbnRlcjtcbn0qL1xuXG4uc29tZXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Velozity</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav ml-md-auto d-md-flex\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/resume\" routerLinkActive=\"active\">Resume Grader\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/jobs\" routerLinkActive=\"active\">Job Search\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/recommender\" routerLinkActive=\"active\">Job Recommender\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/saved\" routerLinkActive=\"active\"> Saved Jobs\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/logout\">Log Out</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-item nav-link\" href=\"https://github.com/rzaveri8/CS411-GroupProject/\"> Learn More </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n<div class = \"bg\">\n  <div class=\"text-center pt-4\">\n    <h1 style = \"color: white;\">\n    How <strong>strong</strong> is your resume?\n    </h1>\n    <p style = \"color: white; padding-top: 20px;\"><i>Upload your resume below and find out how your resume will look to employers</i></p>\n\n  </div>\n<div class=\"container-fluid\" style=\"width:360px; padding-top: 30px;\">\n<div class=\"custom-file\">\n    <input type=\"file\" class=\"custom-file-input\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n    <label class=\"custom-file-label\" style=\"width:320px;\" for=\"file\" *ngIf = \"fileToUpload == undefined\">Choose file</label>\n    <label class=\"custom-file-label\"style=\"width:320px;\" for=\"file\" *ngIf = \"fileToUpload != undefined\"> {{ fileToUpload.name }}</label>\n</div>\n  <p style = \"color: white;font-size: 15px;\">*Note: Parser only accepts docx, text and pdf files</p>\n</div>\n\n  <div style = \"padding-top:40px;\"></div>\n    <h6 style = \"text-align:center; color:white;\" *ngIf=\"loading == true\"> Loading <img src=\"../../assets/images/gear.gif\" height=50px> </h6>\n    <p style = \"color: white; padding-top: 20px; text-align:center;\" *ngIf = \"error == true\">There was an error. Make sure you upload only .pdf, .docx, or .txt files.</p>\n\n  <div class=\"hide-text\" *ngIf = \"resume !== undefined && error == false\">\n    <div class=\"hide-text element container blur-box\" style = \"padding-bottom: 100px;\">\n      <p style = \"text-align: center;font-size: 20px;\">Overall Grade:  {{ resume.rezscore.score[0].grade[0] }}</p>\n      <a class = \"center-title1\"><strong><u>Resume Overview</u></strong></a>\n      <a class = \"center-title2\"><strong><u>Grade Explanation</u></strong></a>\n      <a class = \"center-title3\"><strong><u>Statistics</u></strong></a>\n      <div class=\"b\">\n        <p><strong>Most Popular Words:</strong></p>\n          <ul>\n        <li *ngFor=\"let word of resume.rezscore.language[0].word\"> {{ word.string[0] }} </li>\n          </ul>\n        <p> <strong>First Industry Match:</strong> {{ resume.rezscore.industry[0].first_industry_match[0] }}</p>\n        <p> <strong>Second Industry Match: </strong>{{ resume.rezscore.industry[0].second_industry_match[0] }}</p>\n        <p> <strong>Third Industry Match:</strong> {{ resume.rezscore.industry[0].third_industry_match[0] }}</p>\n      </div>\n      <div class=\"b\">\n        <p><strong>Grade Headline: </strong>{{ resume.rezscore.score[0].grade_headline[0] }} </p>\n        <p><strong>Grade Blurb:</strong> {{ resume.rezscore.score[0].grade_blurb[0] }} </p>\n        <a><strong>Advice: </strong>{{ resume.rezscore.advice[0].tip[0].long[0] }}</a>&nbsp;\n        <a>{{ resume.rezscore.advice[0].tip[0].short[0].a[0]._ }}</a>\n      </div>\n      <div class=\"b\">\n        <p *ngIf=\"resume.rezscore.score[0].percentile != undefined\"> <strong>Percentile: </strong>{{ resume.rezscore.score[0].percentile[0] }} </p>\n        <p *ngIf=\"resume.rezscore.extended[0].ari_score[0] != undefined\"> <strong>Readability: </strong>{{ resume.rezscore.extended[0].ari_score[0] }}</p>\n        <p *ngIf=\"resume.rezscore.extended[0].pct_buzzwords[0] != undefined\"> <strong>Buzzword Percent: </strong>{{ resume.rezscore.extended[0].pct_buzzwords[0] }}%</p>\n        <p *ngIf=\"resume.rezscore.extended[0].pct_whitespace[0] != undefined\"> <strong>Whitespace Percent: </strong>{{ resume.rezscore.extended[0].pct_whitespace[0] }}%</p>\n        <p *ngIf=\"resume.rezscore.extended[0].wordcount[0] != undefined\"> <strong>Word Count:</strong> {{ resume.rezscore.extended[0].wordcount[0] }}</p>\n        <p *ngIf=\"resume.rezscore.score[0].brevity_score[0] != undefined\"> <strong>Brevity Score:</strong> {{ resume.rezscore.score[0].brevity_score[0] }}/100 </p>\n        <p *ngIf=\"resume.rezscore.score[0].depth_score[0] != undefined\"> <strong>Depth Score: </strong>{{ resume.rezscore.score[0].depth_score[0] }}/100 </p>\n        <p *ngIf=\"resume.rezscore.score[0].impact_score[0] != undefined\"> <strong>Impact Score: </strong>{{ resume.rezscore.score[0].impact_score[0] }}/100 </p>\n      </div>\n  </div>\n  </div>\n</div>\n\n\n "

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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");






var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(httpClient, resumeService, userS) {
        this.httpClient = httpClient;
        this.resumeService = resumeService;
        this.userS = userS;
        this.fileToUpload = null;
    }
    ResumeComponent.prototype.resumeFormat = function () {
        // Changes to percents
        this.resume.rezscore.extended[0].pct_buzzwords[0] = this.resume.rezscore.extended[0].pct_buzzwords[0] * 100;
        this.resume.rezscore.extended[0].pct_buzzwords[0] = this.resume.rezscore.extended[0].pct_buzzwords[0].toFixed(2);
        this.resume.rezscore.extended[0].pct_whitespace[0] = this.resume.rezscore.extended[0].pct_whitespace[0] * 100;
        this.resume.rezscore.extended[0].pct_whitespace[0] = this.resume.rezscore.extended[0].pct_whitespace[0].toFixed(2);
        // Capitalizes first letter of most popular words
        this.resume.rezscore.language[0].word.forEach(function (element) {
            element.string[0] = element.string[0].charAt(0).toUpperCase() + element.string[0].slice(1);
        });
        // Uncapitalizes grade headline
        this.resume.rezscore.score[0].grade_headline[0] = this.resume.rezscore.score[0].grade_headline[0].charAt(0) + this.resume.rezscore.score[0].grade_headline[0].slice(1).toLowerCase();
    };
    ResumeComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        this.uploadFileToActivity();
    };
    ResumeComponent.prototype.uploadFileToActivity = function () {
        var _this = this;
        this.resume = undefined;
        this.loading = true;
        this.error = false;
        if (this.fileToUpload.type == "application/pdf" || this.fileToUpload.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || this.fileToUpload.type == "text/plain") {
            console.log("valid file");
            this.resumeService.postFile(this.fileToUpload).subscribe(function (data) {
                var res;
                Object(xml2js__WEBPACK_IMPORTED_MODULE_3__["parseString"])(data, function (err, result) {
                    res = result;
                });
                _this.resume = res;
                _this.userS.updateResumeGrade(_this.resume.rezscore.score[0].grade[0][0]);
                _this.resumeFormat();
                console.log(_this.resume);
                _this.loading = false;
            }, function (error) {
                console.log(error);
                _this.error = true;
            });
        }
        else {
            console.log("Invalid file type");
            this.loading = false;
            this.error = true;
        }
    };
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _resume_service__WEBPACK_IMPORTED_MODULE_4__["ResumeService"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/saved/saved.component.css":
/*!*******************************************!*\
  !*** ./src/app/saved/saved.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-viewport {\n  /* The image used */\n  background-image: url('silver.jfif');\n\n  /* Full height */\n  min-height: 100%;\n  min-height: 100vh;\n\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.job-card {\n  color: white;\n  background-color: #212529;\n}\n\n.container-design {\n    position: absolute;\n    width: 40%;\n    height: 20%;\n    text-align: center;\n    background-color: white;\n    align-items: center;\n}\n\n.containerr {\n  display: flex;\n  padding-top: 30px;\n  align-items: center;\n}\n\n.element {\n    /* set border styling */\n    border-color: DCDCDC;\n    border-style: solid;\n    border-width: 6px;\n\n    /* set border roundness */\n    border-radius: 25px;\n    -moz-border-radius: 25px;\n    -webkit-border-radius: 25px;\n    background-color: #808080;\n    max-width: 1400px;\n    color: white;\n}\n\n.jumbotron{\nheight: 30vh;\n}\n\n.container-fluid {\n  padding-bottom: 400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zYXZlZC9zYXZlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG9DQUF3RDs7RUFFeEQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7O0VBRWpCLHNDQUFzQztFQUN0QywyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7SUFFakIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJhcHAvc2F2ZWQvc2F2ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXZpZXdwb3J0IHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zaWx2ZXIuamZpZlwiKTtcblxuICAvKiBGdWxsIGhlaWdodCAqL1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4uam9iLWNhcmQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG59XG5cbi5jb250YWluZXItZGVzaWduIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcnIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVsZW1lbnQge1xuICAgIC8qIHNldCBib3JkZXIgc3R5bGluZyAqL1xuICAgIGJvcmRlci1jb2xvcjogRENEQ0RDO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA2cHg7XG5cbiAgICAvKiBzZXQgYm9yZGVyIHJvdW5kbmVzcyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmp1bWJvdHJvbntcbmhlaWdodDogMzB2aDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctYm90dG9tOiA0MDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/saved/saved.component.html":
/*!********************************************!*\
  !*** ./src/app/saved/saved.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Velozity</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav ml-md-auto d-md-flex\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/resume\" routerLinkActive=\"active\">Resume Grader\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/jobs\" routerLinkActive=\"active\">Job Search\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/recommender\" routerLinkActive=\"active\">Job Recommender\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/saved\" routerLinkActive=\"active\"> Saved Jobs\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/logout\">Log Out</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-item nav-link\" href=\"https://github.com/rzaveri8/CS411-GroupProject/\"> Learn More </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n<div class = \"full-viewport\">\n  <div class=\"jumbotron\" >\n  <div class=\"container\">\n    <p style = \"text-align: center; font-size: 35px;\">Saved Jobs</p>\n    <br>\n    <!-- <button type=\"button\" class=\"custom btn-lg btn btn-primary active btn-format\" (click)=\"activateUpdateUserIndustryModal()\"> Edit Industry </button> -->\n    <span class=\"lead\" style = \"text-align: center; margin-left: 30px;\">Belows are the jobs you have favorited:</span>\n    <div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class = \"full-viewport\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n    <!--      <h5 class=\"text-left pb-0\" *ngIf=\"industry\"> My Current Industry/Position: {{ industry }} </h5>-->\n          <h4 *ngIf=\"error\"> Error: {{ error }} </h4>\n          <!-- <div *ngIf=\"industry == undefined\">\n            <p> Please update your industry to execute an automatic job search. </p>\n            <input #industryField type=\"text\" class=\"form-control\" length=\"100\">\n            <button type=\"submit\" class=\"btn btn-default btn-small\" (click)=\"updateUserIndustry(industryField.value)\">Update</button>\n          </div> -->\n          <div class = \"container\" style = \"width: 600px;\"*ngIf=\"jobs\">\n            <div class=\"card mb-3\" *ngFor=\"let job of jobs\">\n              <div class=\"card-body job-card\" style = \"text-align: center;\" id=\"selectedJob\" (click)=\"jobSearch(job)\">\n                {{ job[0] }} - {{ job[1] }}\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/saved/saved.component.ts":
/*!******************************************!*\
  !*** ./src/app/saved/saved.component.ts ***!
  \******************************************/
/*! exports provided: SavedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedComponent", function() { return SavedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _jobdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jobdata.service */ "./src/app/jobdata.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var SavedComponent = /** @class */ (function () {
    function SavedComponent(http, data, user) {
        this.http = http;
        this.data = data;
        this.user = user;
    }
    SavedComponent.prototype.ngOnInit = function () {
        this.http.get("/api/user/getSaveJob").subscribe(function (res) {
            console.log("yay");
        }, function (err) {
            console.log("boo");
        });
    };
    SavedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saved',
            template: __webpack_require__(/*! ./saved.component.html */ "./src/app/saved/saved.component.html"),
            styles: [__webpack_require__(/*! ./saved.component.css */ "./src/app/saved/saved.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _jobdata_service__WEBPACK_IMPORTED_MODULE_3__["JobdataService"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SavedComponent);
    return SavedComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        this.updatedIndustry = false;
        this.industry = undefined;
    }
    UserService.prototype.getIndustry = function () {
        this.updatedIndustry = false;
        return this.http.get("/api/user/getIndustry");
    };
    UserService.prototype.updateIndustry = function (newIndustry) {
        this.updatedIndustry = true;
        this.industry = newIndustry;
        var reqBody = "industry=" + newIndustry;
        return this.http.post("/api/user/setIndustry", reqBody, this.httpOptions);
    };
    UserService.prototype.updateResumeGrade = function (resumeGrade) {
        var body = "grade=" + resumeGrade;
        this.http.post("/api/user/setresumegrade", body, this.httpOptions).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    UserService.prototype.getResumeGrade = function () {
        return this.http.get("/api/user/getresumegrade");
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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