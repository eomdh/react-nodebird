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
      children: "\uD314\uB85C\uC789/\uD314\uB85C\uC6CC \uB85C\uB529 \uC911 \uC5D0\uB7EC \uBC1C\uC0DD"
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
      onClickMore: loadMoreFollowings,
      loading: !followingsData && !followingError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      header: "\uD314\uB85C\uC6CC",
      data: followersData,
      onClickMore: loadMoreFollowers,
      loading: !followersData && !followerError
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJmb2xsb3dlcnNMaW1pdCIsInNldEZvbGxvd2Vyc0xpbWl0IiwiZm9sbG93aW5nc0xpbWl0Iiwic2V0Rm9sbG93aW5nc0xpbWl0IiwidXNlU1dSIiwiZm9sbG93ZXJzRGF0YSIsImZvbGxvd2VyRXJyb3IiLCJlcnJvciIsImZvbGxvd2luZ3NEYXRhIiwiZm9sbG93aW5nRXJyb3IiLCJ1c2VFZmZlY3QiLCJpZCIsIlJvdXRlciIsInB1c2giLCJsb2FkTW9yZUZvbGxvd2VycyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93aW5ncyIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUlBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7RUFBQSxPQUFTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZTtJQUFFRyxlQUFlLEVBQUU7RUFBbkIsQ0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRDtJQUFBLE9BQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7RUFBQSxDQUEvQyxDQUFUO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtFQUFBOztFQUNwQixtQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtFQUFBLENBQUQsQ0FBMUI7RUFBQSxJQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztFQUVBLGdCQUE0Q0Msc0RBQVEsQ0FBQyxDQUFELENBQXBEO0VBQUEsSUFBT0MsY0FBUDtFQUFBLElBQXVCQyxpQkFBdkI7O0VBQ0EsaUJBQThDRixzREFBUSxDQUFDLENBQUQsQ0FBdEQ7RUFBQSxJQUFPRyxlQUFQO0VBQUEsSUFBd0JDLGtCQUF4Qjs7RUFFQSxjQUFzREMsbURBQU0sc0RBQStDSixjQUEvQyxHQUFpRWQsT0FBakUsQ0FBNUQ7RUFBQSxJQUFjbUIsYUFBZCxXQUFRWixJQUFSO0VBQUEsSUFBb0NhLGFBQXBDLFdBQTZCQyxLQUE3Qjs7RUFDQSxlQUF3REgsbURBQU0sdURBQWdERixlQUFoRCxHQUFtRWhCLE9BQW5FLENBQTlEO0VBQUEsSUFBY3NCLGNBQWQsWUFBUWYsSUFBUjtFQUFBLElBQXFDZ0IsY0FBckMsWUFBOEJGLEtBQTlCOztFQUVBRyx1REFBUyxDQUFDLFlBQU07SUFDZCxJQUFHLEVBQUVaLEVBQUUsSUFBSUEsRUFBRSxDQUFDYSxFQUFYLENBQUgsRUFBbUI7TUFDakJDLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0lBQ0Q7RUFDRixDQUpRLEVBSU4sQ0FBQ2YsRUFBRSxJQUFJQSxFQUFFLENBQUNhLEVBQVYsQ0FKTSxDQUFUO0VBTUEsSUFBTUcsaUJBQWlCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUMxQ2QsaUJBQWlCLENBQUMsVUFBQ2UsSUFBRDtNQUFBLE9BQVVBLElBQUksR0FBRyxDQUFqQjtJQUFBLENBQUQsQ0FBakI7RUFDRCxDQUZvQyxFQUVsQyxFQUZrQyxDQUFyQztFQUlBLElBQU1DLGtCQUFrQixHQUFHRix5REFBVyxDQUFDLFlBQU07SUFDM0NaLGtCQUFrQixDQUFDLFVBQUNhLElBQUQ7TUFBQSxPQUFVQSxJQUFJLEdBQUcsQ0FBakI7SUFBQSxDQUFELENBQWxCO0VBQ0QsQ0FGcUMsRUFFbkMsRUFGbUMsQ0FBdEM7O0VBSUEsSUFBSSxDQUFDbEIsRUFBTCxFQUFTO0lBQ1AsT0FBTyxhQUFQO0VBQ0Q7O0VBRUQsSUFBSVEsYUFBYSxJQUFJRyxjQUFyQixFQUFxQztJQUNuQ1MsT0FBTyxDQUFDWCxLQUFSLENBQWNELGFBQWEsSUFBSUcsY0FBL0I7SUFDQSxvQkFBTztNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUFQO0VBQ0Q7O0VBRUQsb0JBQ0UscUVBQUMsNkRBQUQ7SUFBQSx3QkFDRSxxRUFBQyxnREFBRDtNQUFBLHVCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLGVBSUUscUVBQUMsb0VBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUpGLGVBS0UscUVBQUMsOERBQUQ7TUFBWSxNQUFNLEVBQUMsb0JBQW5CO01BQXlCLElBQUksRUFBRUQsY0FBL0I7TUFBK0MsV0FBVyxFQUFFUyxrQkFBNUQ7TUFBZ0YsT0FBTyxFQUFFLENBQUNULGNBQUQsSUFBbUIsQ0FBQ0M7SUFBN0c7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUxGLGVBTUUscUVBQUMsOERBQUQ7TUFBWSxNQUFNLEVBQUMsb0JBQW5CO01BQXlCLElBQUksRUFBRUosYUFBL0I7TUFBOEMsV0FBVyxFQUFFUyxpQkFBM0Q7TUFBOEUsT0FBTyxFQUFFLENBQUNULGFBQUQsSUFBa0IsQ0FBQ0M7SUFBMUc7TUFBQTtNQUFBO01BQUE7SUFBQSxTQU5GO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBVUQsQ0ExQ0Q7O0dBQU1aLE87VUFDV0MsdUQsRUFLdUNTLDJDLEVBQ0VBLDJDOzs7S0FQcERWLE87O0FBNERTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjQxM2QwOTQ4YmYwYjlhNmFiZjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybSc7XHJcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRm9sbG93TGlzdCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKTtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW2ZvbGxvd2Vyc0xpbWl0LCBzZXRGb2xsb3dlcnNMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcclxuICBjb25zdCBbZm9sbG93aW5nc0xpbWl0LCBzZXRGb2xsb3dpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogZm9sbG93ZXJzRGF0YSwgZXJyb3I6IGZvbGxvd2VyRXJyb3IgfSA9IHVzZVNXUihgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7Zm9sbG93ZXJzTGltaXR9YCwgZmV0Y2hlcik7XHJcbiAgY29uc3QgeyBkYXRhOiBmb2xsb3dpbmdzRGF0YSwgZXJyb3I6IGZvbGxvd2luZ0Vycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCwgZmV0Y2hlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighKG1lICYmIG1lLmlkKSkge1xyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfVxyXG4gIH0sIFttZSAmJiBtZS5pZF0pO1xyXG5cclxuICBjb25zdCBsb2FkTW9yZUZvbGxvd2VycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldEZvbGxvd2Vyc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBsb2FkTW9yZUZvbGxvd2luZ3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRGb2xsb3dpbmdzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmICghbWUpIHtcclxuICAgIHJldHVybiAn64K0IOygleuztCDroZzrlKnspJEuLi4nO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvcik7XHJcbiAgICByZXR1cm4gPGRpdj7tjJTroZzsnokv7YyU66Gc7JuMIOuhnOuUqSDspJEg7JeQ65+sIOuwnOyDnTwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Tm9kZUJpcmQgfCDrgrQg7ZSE66Gc7ZWEPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Tmlja25hbWVFZGl0Rm9ybSAvPlxyXG4gICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsnolcIiBkYXRhPXtmb2xsb3dpbmdzRGF0YX0gb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93aW5nc30gbG9hZGluZz17IWZvbGxvd2luZ3NEYXRhICYmICFmb2xsb3dpbmdFcnJvcn0vPlxyXG4gICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsm4xcIiBkYXRhPXtmb2xsb3dlcnNEYXRhfSBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dlcnN9IGxvYWRpbmc9eyFmb2xsb3dlcnNEYXRhICYmICFmb2xsb3dlckVycm9yfS8+XHJcbiAgICA8L0FwcExheW91dD5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zb2xlLmxvZygnZ2V0U2VydmVyU2lkZVByb3BzIFN0YXJ0Jyk7XHJcbiAgY29uc29sZS5sb2coY29udGV4dC5yZXEuaGVhZGVycyk7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICB9KVxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBjb25zb2xlLmxvZygnZ2V0U2VydmVyU2lkZVByb3BzIEVuZCcpO1xyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwic291cmNlUm9vdCI6IiJ9