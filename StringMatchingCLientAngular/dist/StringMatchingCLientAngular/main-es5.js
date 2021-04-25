function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/chat/chat.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'StringMatchingCLientAngular';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "WKWKW ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat");
        }
      },
      directives: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"]],
      styles: [".login[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tmax-width: 600px;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\tmax-width: 1170px;\r\n\tmargin: auto;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.inbox_people[_ngcontent-%COMP%] {\r\n\tbackground: #f8f8f8 none repeat scroll 0 0;\r\n\tfloat: left;\r\n\toverflow: hidden;\r\n\twidth: 40%;\r\n\tborder-right: 1px solid #c4c4c4;\r\n}\r\n\r\n.inbox_msg[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #c4c4c4;\r\n\tclear: both;\r\n\toverflow: hidden;\r\n}\r\n\r\n.top_spac[_ngcontent-%COMP%] {\r\n\tmargin: 20px 0 0;\r\n}\r\n\r\n.channel_heading[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\twidth: 40%;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\ttext-align: right;\r\n\twidth: 60%;\r\n}\r\n\r\n.headind_srch[_ngcontent-%COMP%] {\r\n\tpadding: 10px 29px 10px 20px;\r\n\toverflow: hidden;\r\n\tborder-bottom: 1px solid #c4c4c4;\r\n}\r\n\r\n.channel_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n\tcolor: #05728f;\r\n\tfont-size: 21px;\r\n\tmargin: auto;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #cdcdcd;\r\n\tborder-width: 0 0 1px 0;\r\n\twidth: 80%;\r\n\tpadding: 2px 0 4px 6px;\r\n\tbackground: none;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tpadding: 0;\r\n\tcolor: #707070;\r\n\tfont-size: 18px;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\r\n\tmargin: 0 0 0 -27px;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n\tfont-size: 15px;\r\n\tcolor: #464646;\r\n\tmargin: 0 0 8px 0;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tfont-size: 13px;\r\n\tfloat: right;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tfont-size: 14px;\r\n\tcolor: #989898;\r\n\tmargin: auto\r\n}\r\n\r\n.chat_img[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\twidth: 11%;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\tpadding: 0 0 0 15px;\r\n\twidth: 88%;\r\n}\r\n\r\n.chat_people[_ngcontent-%COMP%] {\r\n\toverflow: hidden;\r\n\tclear: both;\r\n}\r\n\r\n.chat_list[_ngcontent-%COMP%] {\r\n\tborder-bottom: 1px solid #c4c4c4;\r\n\tmargin: 0;\r\n\tpadding: 18px 16px 10px;\r\n}\r\n\r\n.inbox_chat[_ngcontent-%COMP%] {\r\n\theight: 550px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n.active_chat[_ngcontent-%COMP%] {\r\n\tbackground: #ebebeb;\r\n}\r\n\r\n.incoming_msg_img[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\twidth: 6%;\r\n}\r\n\r\n.received_msg[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tpadding: 0 0 0 10px;\r\n\tvertical-align: top;\r\n\twidth: 92%;\r\n}\r\n\r\n.received_withd_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tbackground: #ebebeb none repeat scroll 0 0;\r\n\tborder-radius: 3px;\r\n\tcolor: #646464;\r\n\tfont-size: 14px;\r\n\tmargin: 0;\r\n\tpadding: 5px 10px 5px 12px;\r\n\twidth: 100%;\r\n}\r\n\r\n.time_date[_ngcontent-%COMP%] {\r\n\tcolor: #747474;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin: 8px 0 0;\r\n}\r\n\r\n.received_withd_msg[_ngcontent-%COMP%] {\r\n\twidth: 57%;\r\n}\r\n\r\n.mesgs[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\tpadding: 30px 15px 0 25px;\r\n\twidth: 60%;\r\n}\r\n\r\n.sent_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tbackground: #05728f none repeat scroll 0 0;\r\n\tborder-radius: 3px;\r\n\tfont-size: 14px;\r\n\tmargin: 0;\r\n\tcolor: #fff;\r\n\tpadding: 5px 10px 5px 12px;\r\n\twidth: 100%;\r\n}\r\n\r\n.outgoing_msg[_ngcontent-%COMP%] {\r\n\toverflow: hidden;\r\n\tmargin: 26px 0 26px;\r\n}\r\n\r\n.sent_msg[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n\twidth: 46%;\r\n}\r\n\r\n.input_msg_write[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tcolor: #4c4c4c;\r\n\tfont-size: 15px;\r\n\tmin-height: 48px;\r\n\twidth: 100%;\r\n}\r\n\r\n.type_msg[_ngcontent-%COMP%] {\r\n\tborder-top: 1px solid #c4c4c4;\r\n\tposition: relative;\r\n}\r\n\r\n.msg_send_btn[_ngcontent-%COMP%] {\r\n\tbackground: #05728f none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tborder-radius: 50%;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tfont-size: 17px;\r\n\theight: 33px;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 11px;\r\n\twidth: 33px;\r\n}\r\n\r\n.messaging[_ngcontent-%COMP%] {\r\n\tpadding: 0 0 50px 0;\r\n}\r\n\r\n.msg_history[_ngcontent-%COMP%] {\r\n\theight: 516px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n\tlist-style-type: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixRQUFRO0NBQ1IsU0FBUztDQUNULGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsMENBQTBDO0NBQzFDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsNEJBQTRCO0NBQzVCLGdCQUFnQjtDQUNoQixnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qix1QkFBdUI7Q0FDdkIsVUFBVTtDQUNWLHNCQUFzQjtDQUN0QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxtREFBbUQ7Q0FDbkQsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixjQUFjO0NBQ2QsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2Q7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsU0FBUztDQUNULHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsU0FBUztBQUNWOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsMENBQTBDO0NBQzFDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsZUFBZTtDQUNmLFNBQVM7Q0FDVCwwQkFBMEI7Q0FDMUIsV0FBVztBQUNaOztBQUVBO0NBQ0MsY0FBYztDQUNkLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsMENBQTBDO0NBQzFDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsU0FBUztDQUNULFdBQVc7Q0FDWCwwQkFBMEI7Q0FDMUIsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxtREFBbUQ7Q0FDbkQsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLDZCQUE2QjtDQUM3QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQywwQ0FBMEM7Q0FDMUMsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsZUFBZTtDQUNmLGVBQWU7Q0FDZixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsV0FBVztBQUNaOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWF4LXdpZHRoOiA2MDBweDtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cdG1heC13aWR0aDogMTE3MHB4O1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW1nIHtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmJveF9wZW9wbGUge1xyXG5cdGJhY2tncm91bmQ6ICNmOGY4Zjggbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M0YzRjNDtcclxufVxyXG5cclxuLmluYm94X21zZyB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcclxuXHRjbGVhcjogYm90aDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udG9wX3NwYWMge1xyXG5cdG1hcmdpbjogMjBweCAwIDA7XHJcbn1cclxuXHJcbi5jaGFubmVsX2hlYWRpbmcge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5zcmNoX2JhciB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5oZWFkaW5kX3NyY2gge1xyXG5cdHBhZGRpbmc6IDEwcHggMjlweCAxMHB4IDIwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcclxufVxyXG5cclxuLmNoYW5uZWxfaGVhZGluZyBoNCB7XHJcblx0Y29sb3I6ICMwNTcyOGY7XHJcblx0Zm9udC1zaXplOiAyMXB4O1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnNyY2hfYmFyIGlucHV0IHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjY2RjZGNkO1xyXG5cdGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xyXG5cdHdpZHRoOiA4MCU7XHJcblx0cGFkZGluZzogMnB4IDAgNHB4IDZweDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIGJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG5cdGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcblx0cGFkZGluZzogMDtcclxuXHRjb2xvcjogIzcwNzA3MDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG5cdG1hcmdpbjogMCAwIDAgLTI3cHg7XHJcbn1cclxuXHJcbi5jaGF0X2liIGg1IHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Y29sb3I6ICM0NjQ2NDY7XHJcblx0bWFyZ2luOiAwIDAgOHB4IDA7XHJcbn1cclxuXHJcbi5jaGF0X2liIGg1IHNwYW4ge1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jaGF0X2liIHAge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRjb2xvcjogIzk4OTg5ODtcclxuXHRtYXJnaW46IGF1dG9cclxufVxyXG5cclxuLmNoYXRfaW1nIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMTElO1xyXG59XHJcblxyXG4uY2hhdF9pYiB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0cGFkZGluZzogMCAwIDAgMTVweDtcclxuXHR3aWR0aDogODglO1xyXG59XHJcblxyXG4uY2hhdF9wZW9wbGUge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Y2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jaGF0X2xpc3Qge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAxOHB4IDE2cHggMTBweDtcclxufVxyXG5cclxuLmluYm94X2NoYXQge1xyXG5cdGhlaWdodDogNTUwcHg7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uYWN0aXZlX2NoYXQge1xyXG5cdGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbn1cclxuXHJcbi5pbmNvbWluZ19tc2dfaW1nIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDYlO1xyXG59XHJcblxyXG4ucmVjZWl2ZWRfbXNnIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMCAwIDAgMTBweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cdHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5yZWNlaXZlZF93aXRoZF9tc2cgcCB7XHJcblx0YmFja2dyb3VuZDogI2ViZWJlYiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjb2xvcjogIzY0NjQ2NDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGltZV9kYXRlIHtcclxuXHRjb2xvcjogIzc0NzQ3NDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bWFyZ2luOiA4cHggMCAwO1xyXG59XHJcblxyXG4ucmVjZWl2ZWRfd2l0aGRfbXNnIHtcclxuXHR3aWR0aDogNTclO1xyXG59XHJcblxyXG4ubWVzZ3Mge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHBhZGRpbmc6IDMwcHggMTVweCAwIDI1cHg7XHJcblx0d2lkdGg6IDYwJTtcclxufVxyXG5cclxuLnNlbnRfbXNnIHAge1xyXG5cdGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm91dGdvaW5nX21zZyB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRtYXJnaW46IDI2cHggMCAyNnB4O1xyXG59XHJcblxyXG4uc2VudF9tc2cge1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHR3aWR0aDogNDYlO1xyXG59XHJcblxyXG4uaW5wdXRfbXNnX3dyaXRlIGlucHV0IHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0Ym9yZGVyOiBtZWRpdW0gbm9uZTtcclxuXHRjb2xvcjogIzRjNGM0YztcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0bWluLWhlaWdodDogNDhweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnR5cGVfbXNnIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tc2dfc2VuZF9idG4ge1xyXG5cdGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRib3JkZXI6IG1lZGl1bSBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdGhlaWdodDogMzNweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0dG9wOiAxMXB4O1xyXG5cdHdpZHRoOiAzM3B4O1xyXG59XHJcblxyXG4ubWVzc2FnaW5nIHtcclxuXHRwYWRkaW5nOiAwIDAgNTBweCAwO1xyXG59XHJcblxyXG4ubXNnX2hpc3Rvcnkge1xyXG5cdGhlaWdodDogNTE2cHg7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/chat/chat.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); //import {ChatComponent} from './chat/chat.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chat/chat.component.ts":
  /*!****************************************!*\
    !*** ./src/app/chat/chat.component.ts ***!
    \****************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _server_interface_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../server-interface.service */
    "./src/app/server-interface.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ChatComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.resps[i_r2]);
      }
    }

    var ChatComponent = /*#__PURE__*/function () {
      //currentUser: User;
      function ChatComponent(serverInterfaceService) {
        _classCallCheck(this, ChatComponent);

        this.serverInterfaceService = serverInterfaceService;
        this.title = 'angular-chat'; //channel: ChannelData;

        this.username = '';
        this.newMessage = '';
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.messages = ["mess1", "mess2", "mess3"];
          this.resps = ["resp1", "resp1", "resp1"];
          this.serverInterfaceService.sendDummy();
          console.log(this.serverInterfaceService.getTasks());
        }
      }, {
        key: "sendMessage_",
        value: function sendMessage_() {
          console.log("pressed");
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.newMessage.trim() === '')) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    try {
                      console.log(this.newMessage);
                      this.messages[this.messages.length] = this.newMessage;
                      this.resps[this.resps.length] = this.newMessage;
                      this.newMessage = '';
                    } catch (err) {
                      console.log(err);
                    }

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_server_interface_service__WEBPACK_IMPORTED_MODULE_2__["ServerInterfaceService"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      decls: 15,
      vars: 2,
      consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", "integrity", "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", "crossorigin", "anonymous"], ["href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css", "type", "text/css", "rel", "stylesheet"], [1, "text-center"], [1, "messaging"], [1, "inbox_msg"], [1, "inbox_people"], [1, "mesgs"], [1, "msg_history"], ["class", "message", 4, "ngFor", "ngForOf"], [1, "type_msg"], [1, "input_msg_write", 3, "ngSubmit"], ["type", "text", "placeholder", "Type a message", "name", "newMessage", 1, "write_msg", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "msg_send_btn"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane-o", 3, "click"], [1, "message"], [1, "incoming_msg"], [1, "incoming_msg_img"], [1, "received_msg"], [1, "received_withd_msg"], [1, "outgoing_msg"], [1, "sent_msg"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "CHAT BOT REGEX");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ChatComponent_li_9_Template, 11, 2, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ChatComponent_Template_form_ngSubmit_11_listener() {
            return ctx.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.newMessage = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_i_click_14_listener() {
            return ctx.sendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newMessage);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".login[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tmax-width: 600px;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\tmax-width: 1170px;\r\n\tmargin: auto;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\n.inbox_people[_ngcontent-%COMP%] {\r\n\tbackground: #f8f8f8 none repeat scroll 0 0;\r\n\tfloat: left;\r\n\toverflow: hidden;\r\n    height: 100%;    \r\n    width: 100%;\r\n\tborder-right: 1px solid #c4c4c4;\r\n}\r\n\r\n.inbox_msg[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #c4c4c4;\r\n    height: 100%;\r\n\tclear: both;\r\n\toverflow: hidden;\r\n}\r\n\r\n.top_spac[_ngcontent-%COMP%] {\r\n\tmargin: 20px 0 0;\r\n}\r\n\r\n.channel_heading[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\twidth: 40%;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\ttext-align: right;\r\n\twidth: 60%;\r\n}\r\n\r\n.headind_srch[_ngcontent-%COMP%] {\r\n\tpadding: 10px 29px 10px 20px;\r\n\toverflow: hidden;\r\n\tborder-bottom: 1px solid #c4c4c4;\r\n}\r\n\r\n.channel_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n\tcolor: #05728f;\r\n\tfont-size: 21px;\r\n\tmargin: auto;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tborder: 1px solid #cdcdcd;\r\n\tborder-width: 0 0 1px 0;\r\n\twidth: 80%;\r\n\tpadding: 2px 0 4px 6px;\r\n\tbackground: none;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tpadding: 0;\r\n\tcolor: #707070;\r\n\tfont-size: 18px;\r\n}\r\n\r\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\r\n\tmargin: 0 0 0 -27px;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n\tfont-size: 15px;\r\n\tcolor: #464646;\r\n\tmargin: 0 0 8px 0;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tfont-size: 13px;\r\n\tfloat: right;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tfont-size: 14px;\r\n\tcolor: #989898;\r\n\tmargin: auto\r\n}\r\n\r\n.chat_img[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\twidth: 11%;\r\n}\r\n\r\n.chat_ib[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\tpadding: 0 0 0 15px;\r\n\twidth: 88%;\r\n}\r\n\r\n.chat_people[_ngcontent-%COMP%] {\r\n\toverflow: hidden;\r\n\tclear: both;\r\n}\r\n\r\n.chat_list[_ngcontent-%COMP%] {\r\n\tborder-bottom: 1px solid #c4c4c4;\r\n\tmargin: 0;\r\n\tpadding: 18px 16px 10px;\r\n}\r\n\r\n.inbox_chat[_ngcontent-%COMP%] {\r\n\theight: 550px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n.active_chat[_ngcontent-%COMP%] {\r\n\tbackground: #ebebeb;\r\n}\r\n\r\n.incoming_msg_img[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\twidth: 0%;\r\n}\r\n\r\n.received_msg[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tpadding: 0 0 0 10px;\r\n\tvertical-align: top;\r\n\twidth: 100%;\r\n}\r\n\r\n.received_withd_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tbackground: #ebebeb none repeat scroll 0 0;\r\n\tborder-radius: 3px;\r\n\tcolor: #646464;\r\n\tfont-size: 14px;\r\n\tmargin: 0;\r\n\tpadding: 5px 10px 5px 12px;\r\n\twidth: 100%;\r\n}\r\n\r\n.time_date[_ngcontent-%COMP%] {\r\n\tcolor: #747474;\r\n\tdisplay: block;\r\n\tfont-size: 12px;\r\n\tmargin: 8px 0 0;\r\n}\r\n\r\n.received_withd_msg[_ngcontent-%COMP%] {\r\n\twidth: 57%;\r\n}\r\n\r\n.mesgs[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n\tfloat: left;\r\n\tpadding: 30px 15px 0 25px;\r\n\twidth: 100%;\r\n}\r\n\r\n.sent_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tbackground: #05728f none repeat scroll 0 0;\r\n\tborder-radius: 3px;\r\n\tfont-size: 14px;\r\n\tmargin: 0;\r\n\tcolor: #fff;\r\n\tpadding: 5px 10px 5px 12px;\r\n\twidth: 100%;\r\n}\r\n\r\n.outgoing_msg[_ngcontent-%COMP%] {\r\n\toverflow: hidden;\r\n\tmargin: 26px 0 26px;\r\n}\r\n\r\n.sent_msg[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n\twidth: 46%;\r\n}\r\n\r\n.input_msg_write[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tcolor: #4c4c4c;\r\n\tfont-size: 15px;\r\n\tmin-height: 48px;\r\n\twidth: 100%;\r\n}\r\n\r\n.type_msg[_ngcontent-%COMP%] {\r\n\tborder-top: 1px solid #c4c4c4;\r\n\tposition: relative;\r\n}\r\n\r\n.msg_send_btn[_ngcontent-%COMP%] {\r\n\tbackground: #05728f none repeat scroll 0 0;\r\n\tborder: medium none;\r\n\tborder-radius: 50%;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tfont-size: 17px;\r\n\theight: 33px;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 11px;\r\n\twidth: 33px;\r\n}\r\n\r\n.messaging[_ngcontent-%COMP%] {\r\n\tpadding: 0 0 0px 0;\r\n    height: 100%;\r\n}\r\n\r\n.msg_history[_ngcontent-%COMP%] {\r\n\theight: 516px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n\tlist-style-type: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixRQUFRO0NBQ1IsU0FBUztDQUNULGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsMENBQTBDO0NBQzFDLFdBQVc7Q0FDWCxnQkFBZ0I7SUFDYixZQUFZO0lBQ1osV0FBVztDQUNkLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLHlCQUF5QjtJQUN0QixZQUFZO0NBQ2YsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixnQkFBZ0I7Q0FDaEIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsdUJBQXVCO0NBQ3ZCLFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsbURBQW1EO0NBQ25ELG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsY0FBYztDQUNkLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0NBQWdDO0NBQ2hDLFNBQVM7Q0FDVCx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjs7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGVBQWU7Q0FDZixTQUFTO0NBQ1QsMEJBQTBCO0NBQzFCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsZUFBZTtDQUNmLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0NBQ2YsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixXQUFXO0FBQ1o7O0FBRUE7Q0FDQywwQ0FBMEM7Q0FDMUMsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixTQUFTO0NBQ1QsV0FBVztDQUNYLDBCQUEwQjtDQUMxQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7QUFDWDs7QUFFQTtDQUNDLG1EQUFtRDtDQUNuRCxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZUFBZTtDQUNmLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWF4LXdpZHRoOiA2MDBweDtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cdG1heC13aWR0aDogMTE3MHB4O1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW1nIHtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmJveF9wZW9wbGUge1xyXG5cdGJhY2tncm91bmQ6ICNmOGY4Zjggbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbn1cclxuXHJcbi5pbmJveF9tc2cge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRvcF9zcGFjIHtcclxuXHRtYXJnaW46IDIwcHggMCAwO1xyXG59XHJcblxyXG4uY2hhbm5lbF9oZWFkaW5nIHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uc3JjaF9iYXIge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHR3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uaGVhZGluZF9zcmNoIHtcclxuXHRwYWRkaW5nOiAxMHB4IDI5cHggMTBweCAyMHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbn1cclxuXHJcbi5jaGFubmVsX2hlYWRpbmcgaDQge1xyXG5cdGNvbG9yOiAjMDU3MjhmO1xyXG5cdGZvbnQtc2l6ZTogMjFweDtcclxuXHRtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5zcmNoX2JhciBpbnB1dCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcclxuXHRib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcclxuXHR3aWR0aDogODAlO1xyXG5cdHBhZGRpbmc6IDJweCAwIDRweCA2cHg7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiBidXR0b24ge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRib3JkZXI6IG1lZGl1bSBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Y29sb3I6ICM3MDcwNzA7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuXHRtYXJnaW46IDAgMCAwIC0yN3B4O1xyXG59XHJcblxyXG4uY2hhdF9pYiBoNSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGNvbG9yOiAjNDY0NjQ2O1xyXG5cdG1hcmdpbjogMCAwIDhweCAwO1xyXG59XHJcblxyXG4uY2hhdF9pYiBoNSBzcGFuIHtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2hhdF9pYiBwIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y29sb3I6ICM5ODk4OTg7XHJcblx0bWFyZ2luOiBhdXRvXHJcbn1cclxuXHJcbi5jaGF0X2ltZyB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDExJTtcclxufVxyXG5cclxuLmNoYXRfaWIge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHBhZGRpbmc6IDAgMCAwIDE1cHg7XHJcblx0d2lkdGg6IDg4JTtcclxufVxyXG5cclxuLmNoYXRfcGVvcGxlIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY2hhdF9saXN0IHtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMThweCAxNnB4IDEwcHg7XHJcbn1cclxuXHJcbi5pbmJveF9jaGF0IHtcclxuXHRoZWlnaHQ6IDU1MHB4O1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmFjdGl2ZV9jaGF0IHtcclxuXHRiYWNrZ3JvdW5kOiAjZWJlYmViO1xyXG59XHJcblxyXG4uaW5jb21pbmdfbXNnX2ltZyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAwJTtcclxufVxyXG5cclxuLnJlY2VpdmVkX21zZyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDAgMCAwIDEwcHg7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlY2VpdmVkX3dpdGhkX21zZyBwIHtcclxuXHRiYWNrZ3JvdW5kOiAjZWJlYmViIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGNvbG9yOiAjNjQ2NDY0O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogNXB4IDEwcHggNXB4IDEycHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aW1lX2RhdGUge1xyXG5cdGNvbG9yOiAjNzQ3NDc0O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRtYXJnaW46IDhweCAwIDA7XHJcbn1cclxuXHJcbi5yZWNlaXZlZF93aXRoZF9tc2cge1xyXG5cdHdpZHRoOiA1NyU7XHJcbn1cclxuXHJcbi5tZXNncyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0cGFkZGluZzogMzBweCAxNXB4IDAgMjVweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlbnRfbXNnIHAge1xyXG5cdGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm91dGdvaW5nX21zZyB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRtYXJnaW46IDI2cHggMCAyNnB4O1xyXG59XHJcblxyXG4uc2VudF9tc2cge1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHR3aWR0aDogNDYlO1xyXG59XHJcblxyXG4uaW5wdXRfbXNnX3dyaXRlIGlucHV0IHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcblx0Ym9yZGVyOiBtZWRpdW0gbm9uZTtcclxuXHRjb2xvcjogIzRjNGM0YztcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0bWluLWhlaWdodDogNDhweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnR5cGVfbXNnIHtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tc2dfc2VuZF9idG4ge1xyXG5cdGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuXHRib3JkZXI6IG1lZGl1bSBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdGhlaWdodDogMzNweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0dG9wOiAxMXB4O1xyXG5cdHdpZHRoOiAzM3B4O1xyXG59XHJcblxyXG4ubWVzc2FnaW5nIHtcclxuXHRwYWRkaW5nOiAwIDAgMHB4IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tc2dfaGlzdG9yeSB7XHJcblx0aGVpZ2h0OiA1MTZweDtcclxuXHRvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-chat',
          templateUrl: './chat.component.html',
          styleUrls: ['./chat.component.css']
        }]
      }], function () {
        return [{
          type: _server_interface_service__WEBPACK_IMPORTED_MODULE_2__["ServerInterfaceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/server-interface.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/server-interface.service.ts ***!
    \*********************************************/

  /*! exports provided: ServerInterfaceService */

  /***/
  function srcAppServerInterfaceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerInterfaceService", function () {
      return ServerInterfaceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! axios */
    "./node_modules/axios/index.js");
    /* harmony import */


    var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

    var ServerInterfaceService = /*#__PURE__*/function () {
      //public Task : task;
      function ServerInterfaceService() {
        _classCallCheck(this, ServerInterfaceService);

        this.url = "http://localhost:5000";
        console.log("Server Interface Initialized");
      }

      _createClass(ServerInterfaceService, [{
        key: "sendDummy",
        value: function sendDummy() {
          var Tugas = {
            date: "25-04-2021",
            kodeMataKuliah: "IF0000",
            jenisTugas: "Tugas",
            topikTugas: "PR"
          };
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.url + "/task/add", Tugas).then(function (res) {
            return console.log(res.data);
          });
        }
      }, {
        key: "sendTask",
        value: function sendTask(Tugas) {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.url + "/task/add", Tugas).then(function (res) {
            return console.log(res.data);
          });
        }
      }, {
        key: "getTasks",
        value: function getTasks() {
          var Tugas;
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.url + "/task").then(function (res) {
            if (res.data.length > 0) {
              console.log(res.data);
            }
          });
          return Tugas;
        }
      }]);

      return ServerInterfaceService;
    }();

    ServerInterfaceService.ɵfac = function ServerInterfaceService_Factory(t) {
      return new (t || ServerInterfaceService)();
    };

    ServerInterfaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServerInterfaceService,
      factory: ServerInterfaceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerInterfaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ZEPHYRUS GU502GU\Desktop\Kuliah\Semester 4\strategi algoritma\Tubes3\Tubes3_13519008\StringMatchingCLientAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map