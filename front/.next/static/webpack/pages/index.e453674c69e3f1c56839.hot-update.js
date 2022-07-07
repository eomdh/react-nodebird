webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\react-nodebird\\front\\components\\PostCard.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();














var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 20px;\n"])));
_c = CardWrapper;

var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      commentFormOpend = _useState[0],
      setCommentFormOpend = _useState[1];

  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var liked = post.Likers.find(function (v) {
    return v.id === id;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      removePostLoading = _useSelector.removePostLoading,
      retweetFailure = _useSelector.retweetFailure;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (retweetFailure) {
      alert('리트윗 실패');
    }
  }, [retweetFailure]);
  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setCommentFormOpend(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(CardWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 34
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retrweet", false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "primary",
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 19
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, _this)],
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 22
      }, _this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 24
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), commentFormOpend && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"], {
        header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Comment"], {
              author: item.User.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 27
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, _this);
};

_s(PostCard, "8WPaUhUSmAArsEhsExfkzbXVkmU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c2 = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c, _c2;

$RefreshReg$(_c, "CardWrapper");
$RefreshReg$(_c2, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmQiLCJzZXRDb21tZW50Rm9ybU9wZW5kIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidiIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmV0d2VldEZhaWx1cmUiLCJ1c2VFZmZlY3QiLCJhbGVydCIsIm9uTGlrZSIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uVW5saWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJvblJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwib25SZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwiSW1hZ2VzIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYseUtBQWpCO0tBQU1GLFc7O0FBSU4sSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztFQUFBOztFQUFBLElBQVhDLElBQVcsUUFBWEEsSUFBVztFQUM3QixJ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QUE7WUFBQTtZQUFBO1VBQUEsU0FEVTtRQUFBO01BSmQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQWhDSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQW9ERCxDQTdHRDs7R0FBTXBDLFE7VUFDYUcsdUQsRUFFTkssdUQsRUFFbUNBLHVEOzs7TUFMMUNSLFE7QUErR05BLFFBQVEsQ0FBQ3dDLFNBQVQsR0FBcUI7RUFDbkJ2QyxJQUFJLEVBQUV3QyxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0lBQ3BCbkMsRUFBRSxFQUFFa0MsaURBQVMsQ0FBQ0UsTUFETTtJQUVwQlQsSUFBSSxFQUFFTyxpREFBUyxDQUFDRyxNQUZJO0lBR3BCUixPQUFPLEVBQUVLLGlEQUFTLENBQUNJLE1BSEM7SUFJcEJDLFNBQVMsRUFBRUwsaURBQVMsQ0FBQ0ksTUFKRDtJQUtwQlIsUUFBUSxFQUFFSSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QixDQUxVO0lBTXBCWCxNQUFNLEVBQUVRLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCLENBTlk7SUFPcEIvQixNQUFNLEVBQUU0QixpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QjtFQVBZLENBQWhCLEVBUUhJO0FBVGdCLENBQXJCO0FBWWVoRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNDUzNjc0YzY5ZTNmMWM1NjgzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBDYXJkLCBQb3BvdmVyLCBCdXR0b24sIEF2YXRhciwgTGlzdCwgQ29tbWVudCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBSZXR3ZWV0T3V0bGluZWQsIEhlYXJ0T3V0bGluZWQsIEhlYXJ0VHdvVG9uZSwgTWVzc2FnZU91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vUG9zdENhcmRDb250ZW50XCI7XHJcbmltcG9ydCB7IExJS0VfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNULCBSRVRXRUVUX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xyXG5cclxuY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZCwgc2V0Q29tbWVudEZvcm1PcGVuZF0gPSB1c2VTdGF0ZShmYWxzZSk7ICBcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgodikgPT4gdi5pZCA9PT0gaWQpO1xyXG4gIGNvbnN0IHsgcmVtb3ZlUG9zdExvYWRpbmcsIHJldHdlZXRGYWlsdXJlIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJldHdlZXRGYWlsdXJlKSB7XHJcbiAgICAgIGFsZXJ0KCfrpqztirjsnJcg7Iuk7YyoJyk7XHJcbiAgICB9XHJcbiAgfSwgW3JldHdlZXRGYWlsdXJlXSk7XHJcblxyXG4gIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KVxyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBvblVubGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pXHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnRGb3JtT3BlbmQoKHByZXYpID0+ICFwcmV2KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBvblJldHdlZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pXHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFdyYXBwZXI+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0cndlZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9IC8+LFxyXG4gICAgICAgICAgbGlrZWRcclxuICAgICAgICAgICAgPyA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVW5saWtlfSAvPlxyXG4gICAgICAgICAgICA6IDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfSAvPixcclxuICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0gLz4sXHJcbiAgICAgICAgICA8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KFxyXG4gICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gXHJcbiAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIiBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30gb25DbGljaz17b25SZW1vdmVQb3N0fT7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICApfT5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgICBleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIHtjb21tZW50Rm9ybU9wZW5kICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKT0+IChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudCBcclxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4pfVxyXG4gICAgPC9DYXJkV3JhcHBlcj5cclxuICApXHJcbn1cclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBMaWtlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9