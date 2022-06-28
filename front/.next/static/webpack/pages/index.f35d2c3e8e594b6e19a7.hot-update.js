webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\react-nodebird\\front\\components\\LoginForm.js",
    _templateObject,
    _templateObject2,
    _this = undefined,
    _s = $RefreshSig$();









var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin-top: 10px;\n  float: right;\n"])));
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  padding: 10px;\n"])));
_c2 = FormWrapper;

var LoginForm = function LoginForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      logInLoading = _useSelector.logInLoading;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(id, password);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_8__["loginRequestAction"])({
      id: id,
      password: password
    }));
  }, [id, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(FormWrapper, {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
        htmlFor: "user-id",
        children: "\uC544\uC774\uB514"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        name: "user-id",
        value: id,
        onChange: onChangeId,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
        htmlFor: "user-password",
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        name: "user-password",
        type: "password",
        value: password,
        onChange: onChangePassword,
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ButtonWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "primary",
        htmlType: "submit",
        loading: logInLoading,
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/signup",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 33
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 30
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(LoginForm, "6lmlpvpeBUMtCoXSedmAuNb8v60=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c3 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIkxvZ2luRm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImxvZ0luTG9hZGluZyIsInVzZUlucHV0IiwiaWQiLCJvbkNoYW5nZUlkIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwibG9naW5SZXF1ZXN0QWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsdUxBQW5CO0tBQU1GLGE7QUFLTixJQUFNRyxXQUFXLEdBQUdGLGlFQUFNLENBQUNHLHlDQUFELENBQVQscUtBQWpCO01BQU1ELFc7O0FBSU4sSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtFQUFBOztFQUN0QixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztFQUNBLG1CQUF5QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtFQUFBLENBQUQsQ0FBcEM7RUFBQSxJQUFRQyxZQUFSLGdCQUFRQSxZQUFSOztFQUNBLGdCQUF5QkMsK0RBQVEsQ0FBQyxFQUFELENBQWpDO0VBQUE7RUFBQSxJQUFPQyxFQUFQO0VBQUEsSUFBV0MsVUFBWDs7RUFDQSxpQkFBcUNGLCtEQUFRLENBQUMsRUFBRCxDQUE3QztFQUFBO0VBQUEsSUFBT0csUUFBUDtFQUFBLElBQWlCQyxnQkFBakI7O0VBRUEsSUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDckNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxFQUFaLEVBQWdCRSxRQUFoQjtJQUNBVCxRQUFRLENBQUNlLHlFQUFrQixDQUFDO01BQUVSLEVBQUUsRUFBRkEsRUFBRjtNQUFNRSxRQUFRLEVBQVJBO0lBQU4sQ0FBRCxDQUFuQixDQUFSO0VBQ0QsQ0FIK0IsRUFHN0IsQ0FBQ0YsRUFBRCxFQUFLRSxRQUFMLENBSDZCLENBQWhDO0VBS0Esb0JBQ0UscUVBQUMsV0FBRDtJQUFhLFFBQVEsRUFBRUUsWUFBdkI7SUFBQSx3QkFDRTtNQUFBLHdCQUNFO1FBQU8sT0FBTyxFQUFDLFNBQWY7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FERixlQUVFO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FGRixlQUdFLHFFQUFDLDBDQUFEO1FBQU8sSUFBSSxFQUFDLFNBQVo7UUFBc0IsS0FBSyxFQUFFSixFQUE3QjtRQUFpQyxRQUFRLEVBQUVDLFVBQTNDO1FBQXVELFFBQVE7TUFBL0Q7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUhGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLGVBTUU7TUFBQSx3QkFDRTtRQUFPLE9BQU8sRUFBQyxlQUFmO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREYsZUFFSTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRkosZUFHRSxxRUFBQywwQ0FBRDtRQUFPLElBQUksRUFBQyxlQUFaO1FBQTRCLElBQUksRUFBQyxVQUFqQztRQUE0QyxLQUFLLEVBQUVDLFFBQW5EO1FBQTZELFFBQVEsRUFBRUMsZ0JBQXZFO1FBQXlGLFFBQVE7TUFBakc7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUhGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQU5GLGVBV0UscUVBQUMsYUFBRDtNQUFBLHdCQUNFLHFFQUFDLDJDQUFEO1FBQVEsSUFBSSxFQUFDLFNBQWI7UUFBdUIsUUFBUSxFQUFDLFFBQWhDO1FBQXlDLE9BQU8sRUFBRUwsWUFBbEQ7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FERixlQUVFLHFFQUFDLGdEQUFEO1FBQU0sSUFBSSxFQUFDLFNBQVg7UUFBQSx1QkFBcUI7VUFBQSx1QkFBRyxxRUFBQywyQ0FBRDtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFIO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBckI7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVhGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBa0JELENBN0JEOztHQUFNTixTO1VBQ2FFLHVELEVBQ1FDLHVELEVBQ0FJLHVELEVBQ1lBLHVEOzs7TUFKakNQLFM7QUErQlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYzNWQyYzNlOGU1OTRiNmUxOWE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcbiAgcGFkZGluZzogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBsb2dJbkxvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCwgcGFzc3dvcmQpO1xyXG4gICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKHsgaWQsIHBhc3N3b3JkIH0pKTtcclxuICB9LCBbaWQsIHBhc3N3b3JkXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1pZFwiIHZhbHVlPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9IHJlcXVpcmVkIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSByZXF1aXJlZCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT7roZzqt7jsnbg8L0J1dHRvbj5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPjxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+PC9hPjwvTGluaz5cclxuICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgPC9Gb3JtV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=