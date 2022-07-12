webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\react-nodebird\\front\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();












var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};

var Profile = function Profile() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
      followersLimit = _useState[0],
      setFollowersLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
      followingsLimit = _useState2[0],
      setFollowingsLimit = _useState2[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])("http://localhost:3065/user/followers?limit=".concat(followersLimit), fetcher),
      followersData = _useSWR.data,
      followerError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])("http://localhost:3065/user/followings?limit=".concat(followingsLimit), fetcher),
      followingsData = _useSWR2.data,
      followingError = _useSWR2.error;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    }
  }, [me && me.id]);
  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowersLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowingsLimit(function (prev) {
      return prev + 3;
    });
  }, []);

  if (!me) {
    return '내 정보 로딩중...';
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: "'\uD314\uB85C\uC789/\uD314\uB85C\uC6CC \uB85C\uB529 \uC911 \uC5D0\uB7EC \uBC1C\uC0DD'"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("title", {
        children: "NodeBird | \uB0B4 \uD504\uB85C\uD544"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      header: "\uD314\uB85C\uC789",
      data: followingsData,
      onClickMore: loadMoreFollowings
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      header: "\uD314\uB85C\uC6CC",
      data: followersData,
      onClickMore: loadMoreFollowers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(Profile, "n+4WJwbO4ambwoUUudau0cWVZWo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_5__["default"], swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Profile;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJmb2xsb3dlcnNMaW1pdCIsInNldEZvbGxvd2Vyc0xpbWl0IiwiZm9sbG93aW5nc0xpbWl0Iiwic2V0Rm9sbG93aW5nc0xpbWl0IiwidXNlU1dSIiwiZm9sbG93ZXJzRGF0YSIsImZvbGxvd2VyRXJyb3IiLCJlcnJvciIsImZvbGxvd2luZ3NEYXRhIiwiZm9sbG93aW5nRXJyb3IiLCJ1c2VFZmZlY3QiLCJpZCIsIlJvdXRlciIsInB1c2giLCJsb2FkTW9yZUZvbGxvd2VycyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93aW5ncyIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUlBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7RUFBQSxPQUFTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZTtJQUFFRyxlQUFlLEVBQUU7RUFBbkIsQ0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRDtJQUFBLE9BQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7RUFBQSxDQUEvQyxDQUFUO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtFQUFBOztFQUNwQixtQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtFQUFBLENBQUQsQ0FBMUI7RUFBQSxJQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztFQUVBLGdCQUE0Q0Msc0RBQVEsQ0FBQyxDQUFELENBQXBEO0VBQUEsSUFBT0MsY0FBUDtFQUFBLElBQXVCQyxpQkFBdkI7O0VBQ0EsaUJBQThDRixzREFBUSxDQUFDLENBQUQsQ0FBdEQ7RUFBQSxJQUFPRyxlQUFQO0VBQUEsSUFBd0JDLGtCQUF4Qjs7RUFFQSxjQUFzREMsbURBQU0sc0RBQStDSixjQUEvQyxHQUFpRWQsT0FBakUsQ0FBNUQ7RUFBQSxJQUFjbUIsYUFBZCxXQUFRWixJQUFSO0VBQUEsSUFBb0NhLGFBQXBDLFdBQTZCQyxLQUE3Qjs7RUFDQSxlQUF3REgsbURBQU0sdURBQWdERixlQUFoRCxHQUFtRWhCLE9BQW5FLENBQTlEO0VBQUEsSUFBY3NCLGNBQWQsWUFBUWYsSUFBUjtFQUFBLElBQXFDZ0IsY0FBckMsWUFBOEJGLEtBQTlCOztFQUVBRyx1REFBUyxDQUFDLFlBQU07SUFDZCxJQUFHLEVBQUVaLEVBQUUsSUFBSUEsRUFBRSxDQUFDYSxFQUFYLENBQUgsRUFBbUI7TUFDakJDLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0lBQ0Q7RUFDRixDQUpRLEVBSU4sQ0FBQ2YsRUFBRSxJQUFJQSxFQUFFLENBQUNhLEVBQVYsQ0FKTSxDQUFUO0VBTUEsSUFBTUcsaUJBQWlCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUMxQ2QsaUJBQWlCLENBQUMsVUFBQ2UsSUFBRDtNQUFBLE9BQVVBLElBQUksR0FBRyxDQUFqQjtJQUFBLENBQUQsQ0FBakI7RUFDRCxDQUZvQyxFQUVsQyxFQUZrQyxDQUFyQztFQUlBLElBQU1DLGtCQUFrQixHQUFHRix5REFBVyxDQUFDLFlBQU07SUFDM0NaLGtCQUFrQixDQUFDLFVBQUNhLElBQUQ7TUFBQSxPQUFVQSxJQUFJLEdBQUcsQ0FBakI7SUFBQSxDQUFELENBQWxCO0VBQ0QsQ0FGcUMsRUFFbkMsRUFGbUMsQ0FBdEM7O0VBSUEsSUFBSSxDQUFDbEIsRUFBTCxFQUFTO0lBQ1AsT0FBTyxhQUFQO0VBQ0Q7O0VBRUQsSUFBSVEsYUFBYSxJQUFJRyxjQUFyQixFQUFxQztJQUNuQ1MsT0FBTyxDQUFDWCxLQUFSLENBQWNELGFBQWEsSUFBSUcsY0FBL0I7SUFDQSxvQkFBTztNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUFQO0VBQ0Q7O0VBRUQsb0JBQ0UscUVBQUMsNkRBQUQ7SUFBQSx3QkFDRSxxRUFBQyxnREFBRDtNQUFBLHVCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLGVBSUUscUVBQUMsb0VBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUpGLGVBS0UscUVBQUMsOERBQUQ7TUFBWSxNQUFNLEVBQUMsb0JBQW5CO01BQXlCLElBQUksRUFBRUQsY0FBL0I7TUFBK0MsV0FBVyxFQUFFUztJQUE1RDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBTEYsZUFNRSxxRUFBQyw4REFBRDtNQUFZLE1BQU0sRUFBQyxvQkFBbkI7TUFBeUIsSUFBSSxFQUFFWixhQUEvQjtNQUE4QyxXQUFXLEVBQUVTO0lBQTNEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FORjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQVVELENBMUNEOztHQUFNcEIsTztVQUNXQyx1RCxFQUt1Q1MsMkMsRUFDRUEsMkM7OztLQVBwRFYsTzs7QUE0RFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuMTEwNTYyMWI0N2U2NzA0MTQ1OTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtJztcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmRhdGEpO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbZm9sbG93ZXJzTGltaXQsIHNldEZvbGxvd2Vyc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG4gIGNvbnN0IFtmb2xsb3dpbmdzTGltaXQsIHNldEZvbGxvd2luZ3NMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBmb2xsb3dlcnNEYXRhLCBlcnJvcjogZm9sbG93ZXJFcnJvciB9ID0gdXNlU1dSKGBodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlci9mb2xsb3dlcnM/bGltaXQ9JHtmb2xsb3dlcnNMaW1pdH1gLCBmZXRjaGVyKTtcclxuICBjb25zdCB7IGRhdGE6IGZvbGxvd2luZ3NEYXRhLCBlcnJvcjogZm9sbG93aW5nRXJyb3IgfSA9IHVzZVNXUihgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvZm9sbG93aW5ncz9saW1pdD0ke2ZvbGxvd2luZ3NMaW1pdH1gLCBmZXRjaGVyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9XHJcbiAgfSwgW21lICYmIG1lLmlkXSk7XHJcblxyXG4gIGNvbnN0IGxvYWRNb3JlRm9sbG93ZXJzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Rm9sbG93ZXJzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvYWRNb3JlRm9sbG93aW5ncyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldEZvbGxvd2luZ3NMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCFtZSkge1xyXG4gICAgcmV0dXJuICfrgrQg7KCV67O0IOuhnOuUqeykkS4uLic7XHJcbiAgfVxyXG5cclxuICBpZiAoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yKTtcclxuICAgIHJldHVybiA8ZGl2PiftjJTroZzsnokv7YyU66Gc7JuMIOuhnOuUqSDspJEg7JeQ65+sIOuwnOyDnSc8L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5vZGVCaXJkIHwg64K0IO2UhOuhnO2VhDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5pY2tuYW1lRWRpdEZvcm0gLz5cclxuICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7J6JXCIgZGF0YT17Zm9sbG93aW5nc0RhdGF9IG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2luZ3N9IC8+XHJcbiAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOybjFwiIGRhdGE9e2ZvbGxvd2Vyc0RhdGF9IG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2Vyc30gLz5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdnZXRTZXJ2ZXJTaWRlUHJvcHMgU3RhcnQnKTtcclxuICBjb25zb2xlLmxvZyhjb250ZXh0LnJlcS5oZWFkZXJzKTtcclxuICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICBpZihjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIH1cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pXHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gIGNvbnNvbGUubG9nKCdnZXRTZXJ2ZXJTaWRlUHJvcHMgRW5kJyk7XHJcbiAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=