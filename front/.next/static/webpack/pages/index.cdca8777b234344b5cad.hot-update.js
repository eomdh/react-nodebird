webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\react-nodebird\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_MY_INFO_REQUEST"]
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 400) {
        if (hasMorePosts && !loadPostsLoading) {
          // 다 불러왔거나, 불러오는 중이면 dispatch 안됨
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 14
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 32
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_s(Home, "oqG10cifXvQtI8RQRta7gdIVAso=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  loadMyInfoLoading: false,
  // 로그인 되어있는 유저 정보 불러오기
  loadMyInfoDone: false,
  loadMyInfoError: null,
  logInLoading: false,
  // 로그인
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입
  signUpDone: false,
  signupError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  // 닉네임 변경 
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 닉네임 변경 
  unfollowDone: false,
  unfollowError: null,
  me: null,
  signUpData: {},
  loginData: {}
}; // 오타 방지를 위해 액션을 변수로 지정

var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'SIGN_UP_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'SIGN_UP_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'SIGN_UP_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          nickname: action.data
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowDone = false;
        draft.unfollowError = null;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      default:
        break;
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaWQiLCJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ251cEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJzaWduVXBFcnJvciIsIlBvc3RzIiwidW5zaGlmdCIsImZpbHRlciIsInYiLCJGb2xsb3dpbmdzIiwicHVzaCIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07RUFBQTs7RUFDakIsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7RUFDQSxtQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtFQUFBLENBQUQsQ0FBMUI7RUFBQSxJQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztFQUNBLG9CQUFzREgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtFQUFBLENBQUQsQ0FBakU7RUFBQSxJQUFRQyxTQUFSLGlCQUFRQSxTQUFSO0VBQUEsSUFBbUJDLFlBQW5CLGlCQUFtQkEs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RCxNQUFNLENBQUNILElBQXZCO1FBQUEsQ0FBM0IsQ0FBdEI7UUFDQTs7TUFDRixLQUFLSixnQkFBTDtRQUNFUyxLQUFLLENBQUNqQyxlQUFOLEdBQXdCLEtBQXhCO1FBQ0FpQyxLQUFLLENBQUMvQixhQUFOLEdBQXNCNkIsTUFBTSxDQUFDRyxLQUE3QjtRQUNBOztNQUNGO1FBQ0U7SUExRko7RUE0RkQsQ0E3RmEsQ0FBZDtBQThGQSxDQS9GRjs7QUFpR2VKLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkY2E4Nzc3YjIzNDM0NGI1Y2FkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpOyBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICB9KVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSA0MDApIHtcclxuICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7ICAvLyDri6Qg67aI65+s7JmU6rGw64KYLCDrtojrn6zsmKTripQg7KSR7J2066m0IGRpc3BhdGNoIOyViOuQqFxyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsICAvLyDroZzqt7jsnbgg65CY7Ja07J6I64qUIOycoOyggCDsoJXrs7Qg67aI65+s7Jik6riwXHJcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLCAgICAgXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLCAgIFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsICAvLyDroZzqt7jsnbhcclxuICBsb2dJbkRvbmU6IGZhbHNlLCAgICAgXHJcbiAgbG9nSW5FcnJvcjogbnVsbCwgICAgIFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4NcclxuICBsb2dPdXREb25lOiBmYWxzZSwgICAgXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsIFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoVcclxuICBzaWduVXBEb25lOiBmYWxzZSwgICAgXHJcbiAgc2lnbnVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSBcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLCAgICBcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IFxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLCAgICBcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IFxyXG4gIHVuZm9sbG93RG9uZTogZmFsc2UsICAgIFxyXG4gIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufVxyXG5cclxuLy8g7Jik7YOAIOuwqeyngOulvCDsnITtlbQg7JWh7IWY7J2EIOuzgOyImOuhnCDsp4DsoJVcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhazsgXHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6IFxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgbmlja25hbWU6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbil9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9