webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
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
  loadUserLoading: false,
  // 로그인 되어있는 유저 정보 불러오기
  loadUserDone: false,
  loadUserError: null,
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
  // 팔로우
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우
  unfollowDone: false,
  unfollowError: null,
  removeFollowerLoading: false,
  // 팔로워 차단 
  removeFollowerDone: false,
  removeFollowerError: null,
  loadFollowersLoading: false,
  // 팔로워 불러오기
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  // 팔로잉 불러오기
  loadFollowingsDone: false,
  loadFollowingsError: null,
  me: null,
  userInfo: null
}; // 오타 방지를 위해 액션을 변수로 지정

var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
var REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
var REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
var LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
var LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
var LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
var LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
var LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
var LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
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
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.userInfo = action.data;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

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
        draft.me.nickname = action.data.nickname;
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
          id: action.data.UserId
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
          return v.id !== action.data.UserId;
        });
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true;
        draft.removeFollowerDone = false;
        draft.removeFollowerError = null;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = true;
        draft.me.Followers = draft.me.Followers.filter(function (v) {
          return v.id !== action.data.UserId;
        });
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = null;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = action.data;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsDone = false;
        draft.loadFollowingsError = null;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = true;
        draft.me.Followings = action.data;
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWdudXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsIm1lIiwidXNlckluZm8iLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJzaWduVXBFcnJvciIsIm5pY2tuYW1lIiwiUG9zdHMiLCJ1bnNoaWZ0IiwiaWQiLCJmaWx0ZXIiLCJ2IiwiRm9sbG93aW5ncyIsInB1c2giLCJVc2VySWQiLCJGb2xsb3dlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUE5QjtRQUNBZ0QsS0FBSyxDQUFDOUMsbUJBQU4sR0FBNEI0QyxNQUFNLENBQUNHLEtBQW5DO1FBQ0E7O01BQ0Y7UUFDRTtJQWpLSjtFQW1LRCxDQXBLYSxDQUFkO0FBcUtBLENBdEtGOztBQXdLZUwsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMGM3ZWFhMTRlMWYzNjRiY2NlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgIC8vIOuhnOq3uOyduCDrkJjslrTsnojripQg7Jyg7KCAIOygleuztCDrtojrn6zsmKTquLBcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsICAgICBcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgIC8vIOuhnOq3uOyduCDrkJjslrTsnojripQg7Jyg7KCAIOygleuztCDrtojrn6zsmKTquLBcclxuICBsb2FkVXNlckRvbmU6IGZhbHNlLCAgICAgXHJcbiAgbG9hZFVzZXJFcnJvcjogbnVsbCwgICAgXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgIC8vIOuhnOq3uOyduFxyXG4gIGxvZ0luRG9uZTogZmFsc2UsICAgICBcclxuICBsb2dJbkVycm9yOiBudWxsLCAgICAgXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybg1xyXG4gIGxvZ091dERvbmU6IGZhbHNlLCAgICBcclxuICBsb2dPdXRFcnJvcjogbnVsbCwgXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLCAgICBcclxuICBzaWdudXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IFxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsICAgIFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasFxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLCAgICBcclxuICBmb2xsb3dFcnJvcjogbnVsbCxcclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrBcclxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLCAgICBcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDssKjri6ggXHJcbiAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSwgICAgXHJcbiAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCxcclxuICBsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsICAvLyDtjJTroZzsm4wg67aI65+s7Jik6riwXHJcbiAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLCAgICBcclxuICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7J6JIOu2iOufrOyYpOq4sFxyXG4gIGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsICAgIFxyXG4gIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgdXNlckluZm86IG51bGwsXHJcbn1cclxuXHJcbi8vIOyYpO2DgCDrsKnsp4Drpbwg7JyE7ZW0IOyVoeyFmOydhCDrs4DsiJjroZwg7KeA7KCVXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrOyBcclxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTogXHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuKX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=