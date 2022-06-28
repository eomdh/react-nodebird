webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\react-nodebird\\front\\components\\UserProfile.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();







var ButtonWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 20px;\n"])));
_c = ButtonWrapper;

var UserProfile = function UserProfile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      logOutLoading = _useSelector.logOutLoading;

  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["logoutRequestAction"])());
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: ["\uC9F9\uC9F9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 27
      }, _this), "0"]
    }, "twit", true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: ["\uD314\uB85C\uC789", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 34
      }, _this), "0"]
    }, "followings", true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: ["\uD314\uB85C\uC6CC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 33
      }, _this), "0"]
    }, "followers", true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, _this)],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        children: me.nickname[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ButtonWrapper, {
      onClick: onLogout,
      loading: logOutLoading,
      children: "\uB85C\uADF8\uC544\uC6C3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(UserProfile, "KSithAraRRJw2v5XJbc7ujjjxTU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c2 = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c, _c2;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJCdXR0b25XcmFwcGVyIiwic3R5bGVkIiwiQnV0dG9uIiwiVXNlclByb2ZpbGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImxvZ091dExvYWRpbmciLCJvbkxvZ291dCIsInVzZUNhbGxiYWNrIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGFBQWEsR0FBR0MsaUVBQU0sQ0FBQ0MsMkNBQUQsQ0FBVCxzS0FBbkI7S0FBTUYsYTs7QUFJTixJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0VBQUE7O0VBQ3hCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0VBQ0EsbUJBQThCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQWpCO0VBQUEsQ0FBRCxDQUF6QztFQUFBLElBQVFDLEVBQVIsZ0JBQVFBLEVBQVI7RUFBQSxJQUFZQyxhQUFaLGdCQUFZQSxhQUFaOztFQUVBLElBQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ2pDUixRQUFRLENBQUNTLDBFQUFtQixFQUFwQixDQUFSO0VBQ0QsQ0FGMkIsQ0FBNUI7RUFJQSxvQkFDRSxxRUFBQyx5Q0FBRDtJQUNFLE9BQU8sRUFBRSxjQUNQO01BQUEsd0NBQWtCO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBbEI7SUFBQSxHQUFTLE1BQVQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURPLGVBRVA7TUFBQSw4Q0FBeUI7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUF6QjtJQUFBLEdBQVMsWUFBVDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBRk8sZUFHUDtNQUFBLDhDQUF3QjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQXhCO0lBQUEsR0FBUyxXQUFUO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FITyxDQURYO0lBQUEsd0JBT0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO01BQ0UsTUFBTSxlQUFFLHFFQUFDLDJDQUFEO1FBQUEsVUFBU0osRUFBRSxDQUFDSyxRQUFILENBQVksQ0FBWjtNQUFUO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FEVjtNQUVFLEtBQUssRUFBRUwsRUFBRSxDQUFDSztJQUZaO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FQRixlQVdFLHFFQUFDLGFBQUQ7TUFBZSxPQUFPLEVBQUVILFFBQXhCO01BQWtDLE9BQU8sRUFBRUQsYUFBM0M7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FYRjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQWVELENBdkJEOztHQUFNUCxXO1VBQ2FFLHVELEVBQ2FDLHVEOzs7TUFGMUJILFc7QUF5QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0NGYyOWJiMjcyOGM1ODgyZGM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBsb2dvdXRSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lLCBsb2dPdXRMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBvbkxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgfSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRcclxuICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgIDxkaXYga2V5PVwidHdpdFwiPuynueynuTxiciAvPjA8L2Rpdj4sXHJcbiAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dpbmdzXCI+7YyU66Gc7J6JPGJyIC8+MDwvZGl2PixcclxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2Vyc1wiPu2MlOuhnOybjDxiciAvPjA8L2Rpdj5cclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgIGF2YXRhcj17PEF2YXRhcj57bWUubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbldyYXBwZXIgb25DbGljaz17b25Mb2dvdXR9IGxvYWRpbmc9e2xvZ091dExvYWRpbmd9PuuhnOq3uOyVhOybgzwvQnV0dG9uV3JhcHBlcj5cclxuICAgIDwvQ2FyZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=