webpackHotUpdate_N_E("pages/hashtag/[tag]",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
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
    _this = undefined,
    _s = $RefreshSig$();















var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "PostCard__CardWrapper",
  componentId: "sc-10lmnn1-0"
})(["margin-bottom:20px;"]);
_c = CardWrapper;

var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
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
      removePostLoading = _useSelector.removePostLoading;

  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpend(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
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
        lineNumber: 73,
        columnNumber: 34
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["RetweetOutlined"], {
        onClick: onRetweet
      }, "retrweet", false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {
        onClick: onLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "primary",
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 19
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 19
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, _this)],
      title: post.Retweet ? "".concat(post.User.nickname, "\uB2D8\uC774 \uB9AC\uD2B8\uC717\uD558\uC168\uC2B5\uB2C8\uB2E4.") : null,
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 22
      }, _this),
      children: post.RetweetId && post.Retweet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        cover: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
          images: post.Retweet.Images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 47
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "user/".concat(post.Retweet.User.id),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
                children: post.Retweet.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 20
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 18
          }, _this),
          title: post.Retweet.User.nickname,
          description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
            postData: post.Retweet.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 14
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 12
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "user/".concat(post.User.id),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
            children: post.User.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 18
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 16
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 27
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 12
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), commentFormOpend && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"], {
        header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Comment"], {
              author: item.User.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "user/".concat(item.User.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
                  children: item.User.nickname[0]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 21
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, _this);
};

_s(PostCard, "Gi6kY9q7xNxCHM0sW/bvGMLTdpY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c2 = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    RetweetId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlBvc3RDYXJkIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmQiLCJzZXRDb21tZW50Rm9ybU9wZW5kIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidiIsInJlbW92ZVBvc3RMb2FkaW5nIiwib25MaWtlIiwidXNlQ2FsbGJhY2siLCJhbGVydCIsInR5cGUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJvblVubGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJvblRvZ2dsZUNvbW1lbnQiLCJwcmV2Iiwib25SZW1vdmVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIm9uUmV0d2VldCIsIlJFVFdFRVRfUkVRVUVTVCIsIkltYWdlcyIsIlVzZXIiLCJSZXR3ZWV0Iiwibmlja25hbWUiLCJSZXR3ZWV0SWQiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJhcnJheU9mIiwib2JqZWN0T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDJCQUFqQjtLQUFNRixXOztBQUlOLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7RUFBQTs7RUFBQSxJQUFYQyxJ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QUFBO1lBQUE7WUFBQTtVQUFBLFNBRFU7UUFBQTtNQUpkO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FGRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FuREo7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUEyRUQsQ0E5SEQ7O0dBQU1wQyxRO1VBQ2FHLHVELEVBRU5LLHVELEVBRW1CQSx1RDs7O01BTDFCUixRO0FBZ0lOQSxRQUFRLENBQUN3QyxTQUFULEdBQXFCO0VBQ25CdkMsSUFBSSxFQUFFd0MsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtJQUNwQm5DLEVBQUUsRUFBRWtDLGlEQUFTLENBQUNFLE1BRE07SUFFcEJYLElBQUksRUFBRVMsaURBQVMsQ0FBQ0csTUFGSTtJQUdwQlIsT0FBTyxFQUFFSyxpREFBUyxDQUFDSSxNQUhDO0lBSXBCQyxTQUFTLEVBQUVMLGlEQUFTLENBQUNJLE1BSkQ7SUFLcEJSLFFBQVEsRUFBRUksaURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FMVTtJQU1wQmIsTUFBTSxFQUFFVSxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QixDQU5ZO0lBT3BCL0IsTUFBTSxFQUFFNEIsaURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUIsQ0FQWTtJQVFwQlQsU0FBUyxFQUFFTSxpREFBUyxDQUFDRSxNQVJEO0lBU3BCVixPQUFPLEVBQUVRLGlEQUFTLENBQUNPLFFBQVYsQ0FBbUJQLGlEQUFTLENBQUNHLE1BQTdCO0VBVFcsQ0FBaEIsRUFVSEs7QUFYZ0IsQ0FBckI7QUFjZWpELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hhc2h0YWcvW3RhZ10uMzE2MzhjZWUxMWI1Y2QxZTE1OWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQ2FyZCwgUG9wb3ZlciwgQnV0dG9uLCBBdmF0YXIsIExpc3QsIENvbW1lbnQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgUmV0d2VldE91dGxpbmVkLCBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIE1lc3NhZ2VPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi9Db21tZW50Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gXCIuL1Bvc3RDYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgeyBMSUtFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfUkVRVUVTVCwgUkVUV0VFVF9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tIFwiLi9Gb2xsb3dCdXR0b25cIjtcclxuXHJcbmNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmQsIHNldENvbW1lbnRGb3JtT3BlbmRdID0gdXNlU3RhdGUoZmFsc2UpOyAgXHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQoKHYpID0+IHYuaWQgPT09IGlkKTtcclxuICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSlcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KVxyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5kKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KVxyXG4gIH0sIFtpZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRXcmFwcGVyPlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHJ3ZWV0XCIgb25DbGljaz17b25SZXR3ZWV0fSAvPixcclxuICAgICAgICAgIGxpa2VkXHJcbiAgICAgICAgICAgID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblVubGlrZX0gLz5cclxuICAgICAgICAgICAgOiA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uTGlrZX0gLz4sXHJcbiAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+LFxyXG4gICAgICAgICAgPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyhcclxuICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IFxyXG4gICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgIF19XHJcbiAgICAgICAgdGl0bGU9e3Bvc3QuUmV0d2VldCA/IGAke3Bvc3QuVXNlci5uaWNrbmFtZX3ri5jsnbQg66as7Yq47JyX7ZWY7IWo7Iq164uI64ukLmAgOiBudWxsfVxyXG4gICAgICAgIGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Bvc3QuUmV0d2VldElkICYmIHBvc3QuUmV0d2VldFxyXG4gICAgICAgID8gKDxDYXJkXHJcbiAgICAgICAgICAgICBjb3Zlcj17cG9zdC5SZXR3ZWV0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuUmV0d2VldC5JbWFnZXN9IC8+fVxyXG4gICAgICAgICAgID5cclxuICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgYXZhdGFyPXsoXHJcbiAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YHVzZXIvJHtwb3N0LlJldHdlZXQuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgIDxhPjxBdmF0YXI+e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT5cclxuICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlJldHdlZXQuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuUmV0d2VldC5jb250ZW50fSAvPn1cclxuICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NhcmQ+KVxyXG4gICAgICAgIDogKDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgICAgICA8TGluayBocmVmPXtgdXNlci8ke3Bvc3QuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICA8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcbiAgICAgICAgICAgLz4pfVxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIHtjb21tZW50Rm9ybU9wZW5kICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKT0+IChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudCBcclxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17KFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2B1c2VyLyR7aXRlbS5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj4pfVxyXG4gICAgPC9DYXJkV3JhcHBlcj5cclxuICApXHJcbn1cclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBMaWtlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgUmV0d2VldElkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUmV0d2VldDogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9