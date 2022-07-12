webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\react-nodebird\\front\\pages\\user\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();











var User = function User() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query.id;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts,
      hasMorePosts = _useSelector.hasMorePosts,
      loadPostsLoading = _useSelector.loadPostsLoading;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      userInfo = _useSelector2.userInfo;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var onScroll = function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 400) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_USER_POSTS_REQUEST"],
            data: id,
            lastId: lastId
          });
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length, hasMorePosts, id, loadPostsLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: [userInfo && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("title", {
        children: [userInfo.nickname, "\uB2D8\uC758 \uAE00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meta", {
        name: "description",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meta", {
        property: "og:description",
        content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meta", {
        property: "og:image",
        content: "https://nodebird.com/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("meta", {
        property: "og:url",
        content: "https://nodebird.com/user/".concat(id)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, _this), userInfo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: ["\uC9F9\uC9F9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, _this), userInfo.Posts]
      }, "twit", true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: ["\uD314\uB85C\uC789", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, _this), userInfo.Followings]
      }, "following", true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: ["\uD314\uB85C\uC6CC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, _this), userInfo.Followers]
      }, "follower", true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: userInfo.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 23
        }, _this),
        title: userInfo.nickname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }, _this) : null, mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 32
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};

_s(User, "FXTbcjoVaSS4w2oveElPGfnTqkc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = User;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (User);

var _c;

$RefreshReg$(_c, "User");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanMiXSwibmFtZXMiOlsiVXNlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwidXNlciIsInVzZXJJbmZvIiwidXNlRWZmZWN0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJsZW5ndGgiLCJ0eXBlIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJkYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuaWNrbmFtZSIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBOzs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0VBQUE7O0VBQ2pCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7RUFDQSxJQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0VBQ0EsSUFBUUMsRUFBUixHQUFlRixNQUFNLENBQUNHLEtBQXRCLENBQVFELEVBQVI7O0VBQ0EsbUJBQXNERSwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQWpCO0VBQUEsQ0FBRCxDQUFqRTtFQUFBLElBQVFDLFNBQVIsZ0JBQVFBLFNBQVI7RUFBQSxJQUFtQkMsWUFBbkIsZ0JBQW1CQSxZQUFuQjtFQUFBLElBQWlDQyxnQkFBakMsZ0JBQWlDQSxnQkFBakM7O0VB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O1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FEVjtRQUVFLEtBQUssRUFBRWhCLFFBQVEsQ0FBQ2dCO01BRmxCO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFuQkY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUZLLEdBMkJMLElBekNOLEVBMENHcEIsU0FBUyxDQUFDd0IsR0FBVixDQUFjLFVBQUN6QixJQUFEO01BQUEsb0JBQVUscUVBQUMsNERBQUQ7UUFBd0IsSUFBSSxFQUFFQTtNQUE5QixHQUFlQSxJQUFJLENBQUNKLEVBQXBCO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBVjtJQUFBLENBQWQsQ0ExQ0g7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUE4Q0QsQ0F4RUQ7O0dBQU1MLEk7VUFDYUUsdUQsRUFDRkUscUQsRUFFdUNHLHVELEVBQ2pDQSx1RDs7O0tBTGpCUCxJOztBQStGU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLjA2MTRiYzQ4MmE4OGNhOGI5YjYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEF2YXRhciwgQ2FyZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfVVNFUl9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuXHJcbmNvbnN0IFVzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgdXNlckluZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSA0MDApIHtcclxuICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICBjb25zdCBsYXN0SWQgPSBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdPy5pZDtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGlkLFxyXG4gICAgICAgICAgICBsYXN0SWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW21haW5Qb3N0cy5sZW5ndGgsIGhhc01vcmVQb3N0cywgaWQsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIHt1c2VySW5mbyAmJiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICAgIHt1c2VySW5mby5uaWNrbmFtZX1cclxuICAgICAgICAgICAg64uY7J2YIOq4gFxyXG4gICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Ake3VzZXJJbmZvLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfSAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake3VzZXJJbmZvLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfSAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Ake3VzZXJJbmZvLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfSAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL25vZGViaXJkLmNvbS9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2BodHRwczovL25vZGViaXJkLmNvbS91c2VyLyR7aWR9YH0gLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICl9XHJcbiAgICAgIHt1c2VySW5mb1xyXG4gICAgICAgID8gKFxyXG4gICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgIDxkaXYga2V5PVwidHdpdFwiPlxyXG4gICAgICAgICAgICAgICAg7Ke57Ke5XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHt1c2VySW5mby5Qb3N0c31cclxuICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dpbmdcIj5cclxuICAgICAgICAgICAgICAgIO2MlOuhnOyeiVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7dXNlckluZm8uRm9sbG93aW5nc31cclxuICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dlclwiPlxyXG4gICAgICAgICAgICAgICAg7YyU66Gc7JuMXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHt1c2VySW5mby5Gb2xsb3dlcnN9XHJcbiAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPnt1c2VySW5mby5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3VzZXJJbmZvLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIClcclxuICAgICAgICA6IG51bGx9XHJcbiAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgfVxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJzb3VyY2VSb290IjoiIn0=