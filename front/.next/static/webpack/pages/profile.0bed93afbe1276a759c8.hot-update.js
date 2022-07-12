webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\react-nodebird\\front\\components\\FollowList.js",
    _this = undefined,
    _s = $RefreshSig$();









var FollowList = function FollowList(_ref) {
  _s();

  var header = _ref.header,
      data = _ref.data,
      onClickMore = _ref.onClickMore,
      loading = _ref.loading;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var onCancel = function onCancel(id) {
    return function () {
      if (header === '팔로잉') {
        dispatch({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_REQUEST"],
          data: id
        });
      } else if (header === '팔로워') {
        dispatch({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["REMOVE_FOLLOWER_REQUEST"],
          // 팔로워 차단
          data: id
        });
      }
    };
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      marginBottom: 20
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }, _this),
    loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: onClickMore,
        loading: loading,
        children: "\uB354\uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }, _this),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        style: {
          marginTop: 20
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {
            onClick: onCancel(item.id)
          }, "stop", false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 27
          }, _this)],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
            description: item.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_s(FollowList, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onClickMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c;

$RefreshReg$(_c, "FollowList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwib25DbGlja01vcmUiLCJsb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2FuY2VsIiwiaWQiLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwibWFyZ2luQm90dG9tIiwiZ3V0dGVyIiwieHMiLCJtZCIsInRleHRBbGlnbiIsIm1hcmdpbiIsIml0ZW0iLCJtYXJnaW5Ub3AiLCJuaWNrbmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE0QztFQUFBOztFQUFBLElBQXpDQyxNQUF5QyxRQUF6Q0EsTUFBeUM7RUFBQSxJQUFqQ0MsSUFBaUMsUUFBakNBLElBQWlDO0VBQUEsSUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtFQUFBLElBQWRDLE9BQWMsUUFBZEEsT0FBYztFQUM3RCxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztFQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQ7SUFBQSxPQUFRLFlBQU07TUFDN0IsSUFBSVAsTUFBTSxLQUFLLEtBQWYsRUFBc0I7UUFDcEJJLFFBQVEsQ0FBQztVQUNQSSxJQUFJLEVBQUVDLCtEQURDO1VBRVBSLElBQUksRUFBRU07UUFGQyxDQUFELENBQVI7TUFJRCxDQUxELE1BS08sSUFBSVAsTUFBTSxLQUFLLEtBQWYsRUFBc0I7UUFDM0JJLFFBQVEsQ0FBQztVQUNQSSxJQUFJLEVBQUVFLHNFQURDO1VBQ3lCO1VBQ2hDVCxJQUFJLEVBQUVNO1FBRkMsQ0FBRCxDQUFSO01BSUQ7SUFDRixDQVpnQjtFQUFBLENBQWpCOztFQWNBLG9CQUNFLHFFQUFDLHlDQUFEO0lBQ0UsS0FBSyxFQUFFO01BQUVJLFlBQVksRUFBRTtJQUFoQixDQURUO0lBRUUsSUFBSSxFQUFFO01BQUVDLE1BQU0sRUFBRSxDQUFWO01BQWFDLEVBQUUsRUFBRSxDQUFqQjtNQUFvQkMsRUFBRSxFQUFFO0lBQXhCLENBRlI7SUFHRSxJQUFJLEVBQUMsT0FIUDtJQUlFLE1BQU0sZUFBRTtNQUFBLFVBQU9kO0lBQVA7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUpWO0lBS0UsUUFBUSxlQUFFO01BQUssS0FBSyxFQUFFO1FBQUVlLFNBQVMsRUFBRSxRQUFiO1FBQXVCQyxNQUFNLEVBQUU7TUFBL0IsQ0FBWjtNQUFBLHVCQUNSLHFFQUFDLDJDQUFEO1FBQVEsT0FBTyxFQUFFZCxXQUFqQjtRQUE4QixPQUFPLEVBQUVDLE9BQXZDO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBRFE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUxaO0lBT0UsUUFBUSxNQVBWO0lBUUUsVUFBVSxFQUFHRixJQVJmO0lBU0UsVUFBVSxFQUFFLG9CQUFDZ0IsSUFBRDtNQUFBLG9CQUNWLHFFQUFDLHlDQUFELENBQU0sSUFBTjtRQUFXLEtBQUssRUFBRTtVQUFFQyxTQUFTLEVBQUU7UUFBYixDQUFsQjtRQUFBLHVCQUNFLHFFQUFDLHlDQUFEO1VBQU0sT0FBTyxFQUFFLGNBQUMscUVBQUMsOERBQUQ7WUFBeUIsT0FBTyxFQUFFWixRQUFRLENBQUNXLElBQUksQ0FBQ1YsRUFBTjtVQUExQyxHQUFrQixNQUFsQjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBQUQsQ0FBZjtVQUFBLHVCQUNFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtZQUFXLFdBQVcsRUFBRVUsSUFBSSxDQUFDRTtVQUE3QjtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FEVTtJQUFBO0VBVGQ7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBbUJELENBcENEOztHQUFNcEIsVTtVQUNhTSx1RDs7O0tBRGJOLFU7QUFzQ05BLFVBQVUsQ0FBQ3FCLFNBQVgsR0FBdUI7RUFDckJwQixNQUFNLEVBQUVxQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURKO0VBRXJCdEIsSUFBSSxFQUFFb0IsaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQsVUFGRDtFQUdyQnJCLFdBQVcsRUFBRW1CLGlEQUFTLENBQUNJLElBQVYsQ0FBZUYsVUFIUDtFQUlyQnBCLE9BQU8sRUFBRWtCLGlEQUFTLENBQUNLLElBQVYsQ0FBZUg7QUFKSCxDQUF2QjtBQU9leEIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4wYmVkOTNhZmJlMTI3NmE3NTljOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBDYXJkLCBMaXN0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgU3RvcE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgVU5GT0xMT1dfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgRm9sbG93TGlzdCA9ICh7IGhlYWRlciwgZGF0YSwgb25DbGlja01vcmUsIGxvYWRpbmcgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb25DYW5jZWwgPSAoaWQpID0+ICgpID0+IHtcclxuICAgIGlmIChoZWFkZXIgPT09ICftjJTroZzsnoknKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IGlkLFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIGlmIChoZWFkZXIgPT09ICftjJTroZzsm4wnKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgIC8vIO2MlOuhnOybjCDssKjri6hcclxuICAgICAgICBkYXRhOiBpZCxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdFxyXG4gICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XHJcbiAgICAgIGdyaWQ9e3sgZ3V0dGVyOiA0LCB4czogMiwgbWQ6IDN9fVxyXG4gICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICBoZWFkZXI9ezxkaXY+eyBoZWFkZXIgfTwvZGl2Pn1cclxuICAgICAgbG9hZE1vcmU9ezxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAnMTBweCAwJyB9fT5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tNb3JlfSBsb2FkaW5nPXtsb2FkaW5nfT7rjZTrs7TquLA8L0J1dHRvbj48L2Rpdj59XHJcbiAgICAgIGJvcmRlcmVkXHJcbiAgICAgIGRhdGFTb3VyY2U9eyBkYXRhIH1cclxuICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIgb25DbGljaz17b25DYW5jZWwoaXRlbS5pZCl9Lz5dfT5cclxuICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgKX1cclxuICAgIC8+XHJcbiAgKVxyXG59O1xyXG5cclxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgb25DbGlja01vcmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==