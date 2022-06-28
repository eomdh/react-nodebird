webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initialState = {
  isLoggingIn: false,
  // 로그인 시도중
  isLoggedIn: false,
  isLoggingOut: false,
  // 로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {}
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: 'LOG_IN_REQUEST',
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: 'LOG_OUT_REQUEST'
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOG_IN_REQUEST':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: true
        });
      }
      ;

    case 'LOG_IN_SUCCESS':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: false,
          isLoggedIn: true,
          me: _objectSpread(_objectSpread({}, action.data), {}, {
            nickname: 'eomdh'
          })
        });
      }
      ;

    case 'LOG_IN_FAILURE':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: false,
          isLoggedIn: false
        });
      }
      ;

    case 'LOG_OUT_REQUEST':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingOut: true
        });
      }
      ;

    case 'LOG_OUT_SUCCESS':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingOut: false,
          isLoggedIn: false,
          me: null
        });
      }
      ;

    case 'LOG_OUT_FAILURE':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingOut: false
        });
      }
      ;

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdPdXQiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJuaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxXQUFXLEVBQUUsS0FEYTtFQUNMO0VBQ3JCQyxVQUFVLEVBQUUsS0FGYztFQUcxQkMsWUFBWSxFQUFFLEtBSFk7RUFHTDtFQUNyQkMsRUFBRSxFQUFFLElBSnNCO0VBSzFCQyxVQUFVLEVBQUUsRUFMYztFQU0xQkMsU0FBUyxFQUFFO0FBTmUsQ0FBckI7QUFTQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLElBQUQsRUFBVTtFQUMxQyxPQUFPO0lBQ0xDLElBQUksRUFBRSxnQkFERDtJQUVMRCxJQUFJLEVBQUpBO0VBRkssQ0FBUDtBQUlELENBTE07QUFPQSxJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07RUFDdkMsT0FBTztJQUNMRCxJQUFJLEVBQUU7RUFERCxDQUFQO0FBR0QsQ0FKTTs7QUFNUCxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztFQUFBLElBQWpDQyxLQUFpQyx1RUFBekJaLFlBQXlCO0VBQUEsSUFBWGEsTUFBVzs7RUFDaEQsUUFBUUEsTUFBTSxDQUFDSixJQUFmO0lBQ0UsS0FBSyxnQkFBTDtNQUF1QjtRQUNyQix1Q0FDS0csS0FETDtVQUVFWCxXQUFXLEVBQUU7UUFGZjtNQUlEO01BQUE7O0lBQ0QsS0FBSyxnQkFBTDtNQUF1QjtRQUNyQix1Q0FDS1csS0FETDtVQUVFWCxXQUFXLEVBQUUsS0FGZjtVQUdFQyxVQUFVLEVBQUUsSUFIZDtVQUlFRSxFQUFFLGtDQUFPUyxNQUFNLENBQUNMLElBQWQ7WUFBb0JNLFFBQVEsRUFBRTtVQUE5QjtRQUpKO01BTUQ7TUFBQTs7SUFDRCxLQUFLLGdCQUFMO01BQXVCO1FBQ3JCLHVDQUNLRixLQURMO1VBRUVYLFdBQVcsRUFBRSxLQUZmO1VBR0VDLFVBQVUsRUFBRTtRQUhkO01BS0Q7TUFBQTs7SUFDRCxLQUFLLGlCQUFMO01BQXdCO1FBQ3RCLHVDQUNLVSxLQURMO1VBRUVULFlBQVksRUFBRTtRQUZoQjtNQUlEO01BQUE7O0lBQ0QsS0FBSyxpQkFBTDtNQUF3QjtRQUN0Qix1Q0FDS1MsS0FETDtVQUVFVCxZQUFZLEVBQUUsS0FGaEI7VUFHRUQsVUFBVSxFQUFFLEtBSGQ7VUFJRUUsRUFBRSxFQUFFO1FBSk47TUFNRDtNQUFBOztJQUNELEtBQUssaUJBQUw7TUFBd0I7UUFDdEIsdUNBQ0tRLEtBREw7VUFFRVQsWUFBWSxFQUFFO1FBRmhCO01BSUQ7TUFBQTs7SUFDRDtNQUFTO1FBQ1AseUJBQ0tTLEtBREw7TUFHRDtFQTlDSDtBQWdERCxDQWpERDs7QUFtRGVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmM5ZjFiNjFhZDgxMWYyMmQzOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNMb2dnaW5nSW46IGZhbHNlLCAgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gIGlzTG9nZ2luZ091dDogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogJ0xPR19JTl9SRVFVRVNUJyxcclxuICAgIGRhdGEsXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6ICdMT0dfT1VUX1JFUVVFU1QnLFxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0xPR19JTl9SRVFVRVNUJzoge1xyXG4gICAgICByZXR1cm4gIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNhc2UgJ0xPR19JTl9TVUNDRVNTJzoge1xyXG4gICAgICByZXR1cm4gIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICBtZTogeyAuLi5hY3Rpb24uZGF0YSwgbmlja25hbWU6ICdlb21kaCcgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY2FzZSAnTE9HX0lOX0ZBSUxVUkUnOiB7XHJcbiAgICAgIHJldHVybiAge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcclxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNhc2UgJ0xPR19PVVRfUkVRVUVTVCc6IHtcclxuICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2dnaW5nT3V0OiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY2FzZSAnTE9HX09VVF9TVUNDRVNTJzoge1xyXG4gICAgICByZXR1cm4gIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIG1lOiBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY2FzZSAnTE9HX09VVF9GQUlMVVJFJzoge1xyXG4gICAgICByZXR1cm4gIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB9XHJcbiAgICB9ICAgICAgXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==