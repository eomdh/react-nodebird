webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\react-nodebird\\front\\components\\UserProfile.js",
    _this = undefined,
    _s = $RefreshSig$();







var ButtonWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"]).withConfig({
  displayName: "UserProfile__ButtonWrapper",
  componentId: "sc-b71tg5-0"
})(["margin-top:20px;"]);
_c = ButtonWrapper;

var UserProfile = function UserProfile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      logOutLoading = _useSelector.logOutLoading;

  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_REQUEST"]
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: ["\uC9F9\uC9F9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 27
      }, _this), me.Posts.length]
    }, "twit", true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: ["\uD314\uB85C\uC789", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 34
      }, _this), me.Followings.length]
    }, "followings", true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: ["\uD314\uB85C\uC6CC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }, _this), me.Followers.length]
    }, "followers", true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this)],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Link, {
        href: "/user/".concat(me.id),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: me.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, _this),
      title: me.nickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ButtonWrapper, {
      onClick: onLogout,
      loading: logOutLoading,
      children: "\uB85C\uADF8\uC544\uC6C3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(UserProfile, "KSithAraRRJw2v5XJbc7ujjjxTU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJCdXR0b25XcmFwcGVyIiwic3R5bGVkIiwiQnV0dG9uIiwiVXNlclByb2ZpbGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImxvZ091dExvYWRpbmciLCJvbkxvZ291dCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxPR19PVVRfUkVRVUVTVCIsIlBvc3RzIiwibGVuZ3RoIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImlkIiwibmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLGlFQUFNLENBQUNDLDJDQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsd0JBQW5CO0tBQU1GLGE7O0FBSU4sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtFQUFBOztFQUN4QixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztFQUNBLG1CQUE4QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtFQUFBLENBQUQsQ0FBekM7RUFBQSxJQUFRQyxFQUFSLGdCQUFRQSxFQUFSO0VBQUEsSUFBWUMsYUFBWixnQkFBWUEsYUFBWjs7RUFFQSxJQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUNqQ1IsUUFBUSxDQUFDO01BQ1BTLElBQUksRUFBRUMsOERBQWVBO0lBRGQsQ0FBRCxDQUFSO0VBR0QsQ0FKMkIsRUFJekIsRUFKeUIsQ0FBNUI7RUFNQSxvQkFDRSxxRUFBQyx5Q0FBRDtJQUNFLE9BQU8sRUFBRSxjQUNQO01BQUEsd0NBQWtCO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBbEIsRUFBeUJMLEVBQUUsQ0FBQ00sS0FBSCxDQUFTQyxNQUFsQztJQUFBLEdBQVMsTUFBVDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBRE8sZUFFUDtNQUFBLDhDQUF5QjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQXpCLEVBQWdDUCxFQUFFLENBQUNRLFVBQUgsQ0FBY0QsTUFBOUM7SUFBQSxHQUFTLFlBQVQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUZPLGVBR1A7TUFBQSw4Q0FBd0I7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUF4QixFQUErQlAsRUFBRSxDQUFDUyxTQUFILENBQWFGLE1BQTVDO0lBQUEsR0FBUyxXQUFUO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FITyxDQURYO0lBQUEsd0JBT0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO01BQ0UsTUFBTSxlQUNKLHFFQUFDLElBQUQ7UUFBTSxJQUFJLGtCQUFXUCxFQUFFLENBQUNVLEVBQWQsQ0FBVjtRQUFBLHVCQUNFLHFFQUFDLDJDQUFEO1VBQUEsVUFBU1YsRUFBRSxDQUFDVyxRQUFILENBQVksQ0FBWjtRQUFUO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRko7TUFNRSxLQUFLLEVBQUVYLEVBQUUsQ0FBQ1c7SUFOWjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBUEYsZUFlRSxxRUFBQyxhQUFEO01BQWUsT0FBTyxFQUFFVCxRQUF4QjtNQUFrQyxPQUFPLEVBQUVELGFBQTNDO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBZkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFtQkQsQ0E3QkQ7O0dBQU1QLFc7VUFDYUUsdUQsRUFDYUMsdUQ7OztNQUYxQkgsVztBQStCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLjdjY2NjMDE1OWI0ODQ0NDc2NmYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQoQnV0dG9uKWBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUsIGxvZ091dExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IG9uTG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkXHJcbiAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj7sp7nsp7k8YnIgLz57bWUuUG9zdHMubGVuZ3RofTwvZGl2PixcclxuICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ3NcIj7tjJTroZzsnok8YnIgLz57bWUuRm9sbG93aW5ncy5sZW5ndGh9PC9kaXY+LFxyXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93ZXJzXCI+7YyU66Gc7JuMPGJyIC8+e21lLkZvbGxvd2Vycy5sZW5ndGh9PC9kaXY+XHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICBhdmF0YXI9eyhcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke21lLmlkfWB9PlxyXG4gICAgICAgICAgICA8QXZhdGFyPnttZS5uaWNrbmFtZVswXX08L0F2YXRhcj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbldyYXBwZXIgb25DbGljaz17b25Mb2dvdXR9IGxvYWRpbmc9e2xvZ091dExvYWRpbmd9PuuhnOq3uOyVhOybgzwvQnV0dG9uV3JhcHBlcj5cclxuICAgIDwvQ2FyZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=