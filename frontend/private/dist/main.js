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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-jobs></app-jobs>\n<!-- <app-resume></app-resume> -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jobs/jobs.component */ "./src/app/jobs/jobs.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");



 // <-- NgModel lives here






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_7__["JobsComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

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


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.component.css":
/*!*****************************************!*\
  !*** ./src/app/jobs/jobs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-button{\n  width: 50%;\n  margin-left: 1rem;\n  margin-top: 5px;\n}\n\n.review-card{\n  /* border: 1px solid #8196c5; */\n  box-shadow: 0px 0px 5px 0px rgba(92, 216, 236, 0.75);\n}\n\n.nutshell-card{\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  box-shadow: 0px 0px 5px 0px rgb(222, 69, 62);\n  padding: 1rem;\n}\n\n.no-list{\n  list-style-type: none;\n}\n\n.intro{\n  font-family: 'Montserrat', sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9qb2JzL2pvYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtFQUcvQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUduQiw0Q0FBNEM7RUFDNUMsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDIiwiZmlsZSI6ImFwcC9qb2JzL2pvYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYnV0dG9ue1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucmV2aWV3LWNhcmR7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICM4MTk2YzU7ICovXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDkyLCAyMTYsIDIzNiwgMC43NSk7XG59XG5cbi5udXRzaGVsbC1jYXJke1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiKDIyMiwgNjksIDYyKTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLm5vLWxpc3R7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmludHJve1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/jobs/jobs.component.html":
/*!******************************************!*\
  !*** ./src/app/jobs/jobs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <section class=\"intro\">\n  <h2 class=\"text-center pt-5\">What does <img src=\"../../assets/images/indeed-logo.png\" width=150px style=\"margin-bottom:10px;\"> think?</h2>\n  <h6 class=\"text-center pt-3\">See what people are saying about a job you want to pursue </h6>\n  <section class=\"search-sec d-flex align-items-center pt-3\">\n    <div class=\"container\">\n        <form action=\"#\" method=\"get\" novalidate=\"novalidate\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"row d-flex justify-content-center\">\n                        <div class=\"col-lg-4 offset-lg-1 col-md-5 col-sm-12 p-0\">\n                            <input type = \"text\" class=\"form-control search-slt\" name=\"position\" [(ngModel)]=\"position\" placeholder=\"Enter Position\"/>\n                        </div>\n                         <div class=\"col-lg-3 col-md-5 col-sm-12 p-0\" style=\"margin-left: 10px;\">\n                            <input type=\"text\" class=\"form-control search-slt\" name=\"company\" [(ngModel)]=\"company\" placeholder=\"Enter Company\">\n                          </div>\n                        <div class=\"col-lg-3 col-md-1 col-sm-12 p-0\">\n                            <button type=\"button\" class=\"btn btn-danger wrn-btn custom-button\" (click) = \"getJobs()\">Search</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n  </section>\n</section>\n  <div class=\"col-12 pt-4\">\n  <div class=\"text-center\">\n    <h6 *ngIf=\"loading == true\"> Loading <img src=\"../../assets/images/gear.gif\" height=50px> </h6>\n    <div *ngIf=\"errorMessage == true\">\n      <h3> We weren't able to find any data for that job. Try another ! </h3>\n      <h4> Looking for suggestions ? Try these: </h4>\n      <ul>\n        <li class=\"no-list\"> Software Engineer at Microsoft </li>\n        <li class=\"no-list\"> Product Manager at Amazon </li>\n        <li class=\"no-list\"> Color Consultant at Sephora </li>\n        <li class=\"no-list\"> Designer at Apple </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"container hide-text\" *ngIf = \"jobs !== undefined\">\n    <h3>What's it like to be a {{ jobs.position }} at {{ jobs.company }} ? </h3>\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <h5 class=\"text-left pt-3 pb-0\">Reviews:</h5>\n        <div class=\"card review-card mb-3\" *ngFor = \"let review of jobs.reviews\" >\n          <div class=\"card-body\">\n            {{ review }}\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <h5 class=\"text-center mt-3\">In a nutshell: </h5>\n        <div class=\"card nutshell-card\">\n            <h6 class=\"text-left\">Company Rating: {{ jobs.rating }}</h6>\n            <div *ngIf = \"jobs.pros.length > 0\">\n            <h6 class=\"text-left\" style=\"color:green;\">Pros:</h6>\n            <ul *ngFor = \"let pro of jobs.pros\">\n              <li> {{ pro }} </li>\n            </ul>\n            </div>\n            <div *ngIf = \"jobs.cons.length > 0\">\n            <h6 class=\"text-left\" style=\"color:red;\">Cons:</h6>\n            <ul *ngFor = \"let con of jobs.cons\">\n              <li> {{ con }} </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n</div>\n</body>\n"

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
        console.log(fileToUpload);
        var endpoint = 'http://rezscore.com/a/f3f2cd/grade';
        var formData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"text-center pt-5\">\n  <p>\n    Resume Grader\n  </p>\n</div>\n\n<div class=\"text-center pt-5\">\n  <textarea name=\"resume\" [(ngModel)]=\"resStr\"></textarea>\n</div>\n\n\n<button type=\"button\" class=\"btn btn-danger wrn-btn custom-button text-center\" (click) = \"getResume()\">Search</button>\n\n<div class=\"text-center pt-5\">\n  <form enctype=\"multipart/form-data\">\n    <input type=\"file\" name=\"resume\">\n    <input type=\"submit\" />\n  </form>\n</div>\n\n<div class=\"container hide-text\" *ngIf = \"resume !== undefined\">\n  <h1> Grade: {{ resume.rezscore.score[0].grade[0] }}</h1>\n  <h2> Advice: {{ resume.rezscore.advice[0].tip[0].long[0] }}</h2>\n  <h2> Percentile: {{ resume.rezscore.score[0].percentile[0] }} </h2>\n</div> -->\n\n<div class=\"form-group\">\n  <label for=\"file\">Choose File</label>\n  <input type=\"file\"\n         id=\"file\"\n         (change)=\"handleFileInput($event.target.files)\">\n</div>\n"

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





// declare var require: any;
// const example = require('../../../../linkedin/app');
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(httpClient, resumeService) {
        this.httpClient = httpClient;
        this.resumeService = resumeService;
        this.fileToUpload = null;
    }
    ResumeComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
        this.uploadFileToActivity();
    };
    ResumeComponent.prototype.uploadFileToActivity = function () {
        this.resumeService.postFile(this.fileToUpload).subscribe(function (data) {
            // do something, if upload success
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ResumeComponent.prototype.getResume = function () {
        var _this = this;
        var link = "http://rezscore.com/a/f3f2cd/grade?resume=" + this.resStr;
        this.httpClient.get(link, { responseType: 'text' }).subscribe(function (response) {
            var res;
            Object(xml2js__WEBPACK_IMPORTED_MODULE_3__["parseString"])(response, function (err, result) {
                console.dir(result); // Prints JSON object!
                res = result;
            });
            _this.resume = res;
        });
    };
    ResumeComponent.prototype.ngOnInit = function () {
        // testng();
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