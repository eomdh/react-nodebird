webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\react-nodebird\\front\\components\\CommentForm.js",
    _this = undefined,
    _s = $RefreshSig$();









var CommentForm = function CommentForm(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      addCommentDone = _useSelector.addCommentDone,
      addCommentLoading = _useSelector.addCommentLoading;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      commentText = _useInput2[0],
      onChangeCommentText = _useInput2[1],
      setCommentText = _useInput2[2]; // 댓글 작성 완료되면 text 초기화


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [commentText, id]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
      style: {
        position: 'relative',
        margin: 0
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        raws: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        style: {
          position: 'absolute',
          right: 0,
          bottom: -40,
          zIndex: 1
        },
        type: "primary",
        htmlType: "submit",
        loading: addCommentLoading,
        children: "\uC090\uC57D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(CommentForm, "TkQ1pkz5HHxeoLHkjeNQHPXXfhA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50TG9hZGluZyIsInVzZUlucHV0IiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdENvbW1lbnQiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJ1c2VySWQiLCJwb3NpdGlvbiIsIm1hcmdpbiIsInJpZ2h0IiwiYm90dG9tIiwiekluZGV4IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztFQUFBOztFQUFBLElBQVhDLElBQVcsUUFBWEEsSUFBVztFQUNoQyxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0VBQ0EsSUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQTs7SUFBQSx5QkFBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQXRCLG1EQUFXLGVBQWVKLEVBQTFCO0VBQUEsQ0FBRCxDQUF0Qjs7RUFDQSxtQkFBOENDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0wsSUFBakI7RUFBQSxDQUFELENBQXpEO0VBQUEsSUFBUVEsY0FBUixnQkFBUUEsY0FBUjtFQUFBLElBQXdCQyxpQkFBeEIsZ0JBQXdCQSxpQkFBeEI7O0VBQ0EsZ0JBQTJEQywrREFBUSxDQUFDLEVBQUQsQ0FBbkU7RUFBQTtFQUFBLElBQU9DLFdBQVA7RUFBQSxJQUFvQkMsbUJBQXBCO0VBQUEsSUFBeUNDLGNBQXpDLGlCQUpnQyxDQU1oQzs7O0VBQ0FDLHVEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlOLGNBQUosRUFBb0I7TUFDbEJLLGNBQWMsQ0FBQyxFQUFELENBQWQ7SUFDRDtFQUNGLENBSlEsRUFJTixDQUFDTCxjQUFELENBSk0sQ0FBVDtFQU1BLElBQU1PLGVBQWUsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ3hDZixRQUFRLENBQUM7TUFDUGdCLElBQUksRUFBRUMsa0VBREM7TUFFUEMsSUFBSSxFQUFFO1FBQUVDLE9BQU8sRUFBRVQsV0FBWDtRQUF3QlUsTUFBTSxFQUFFckIsSUFBSSxDQUFDRyxFQUFyQztRQUF5Q21CLE1BQU0sRUFBRW5CO01BQWpEO0lBRkMsQ0FBRCxDQUFSO0VBSUQsQ0FMa0MsRUFLaEMsQ0FBQ1EsV0FBRCxFQUFjUixFQUFkLENBTGdDLENBQW5DO0VBT0Esb0JBQ0UscUVBQUMseUNBQUQ7SUFBTSxRQUFRLEVBQUVZLGVBQWhCO0lBQUEsdUJBQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO01BQVcsS0FBSyxFQUFFO1FBQUVRLFFBQVEsRUFBRSxVQUFaO1FBQXdCQyxNQUFNLEVBQUU7TUFBaEMsQ0FBbEI7TUFBQSx3QkFDRSxxRUFBQywwQ0FBRCxDQUFPLFFBQVA7UUFBZ0IsS0FBSyxFQUFFYixXQUF2QjtRQUFvQyxRQUFRLEVBQUVDLG1CQUE5QztRQUFtRSxJQUFJLEVBQUU7TUFBekU7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGLGVBRUUscUVBQUMsMkNBQUQ7UUFDRSxLQUFLLEVBQUU7VUFBRVcsUUFBUSxFQUFFLFVBQVo7VUFBd0JFLEtBQUssRUFBRSxDQUEvQjtVQUFrQ0MsTUFBTSxFQUFFLENBQUMsRUFBM0M7VUFBK0NDLE1BQU0sRUFBRTtRQUF2RCxDQURUO1FBRUUsSUFBSSxFQUFDLFNBRlA7UUFHRSxRQUFRLEVBQUMsUUFIWDtRQUlFLE9BQU8sRUFBRWxCLGlCQUpYO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBRkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBWUQsQ0FoQ0Q7O0dBQU1WLFc7VUFDYUcsdUQsRUFDTkUsdUQsRUFDbUNBLHVELEVBQ2FNLHVEOzs7S0FKdkRYLFc7QUFrQ05BLFdBQVcsQ0FBQzZCLFNBQVosR0FBd0I7RUFDdEI1QixJQUFJLEVBQUU2QixpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURELENBQXhCO0FBSWVoQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZjYxMDk3MTcxODNjMjFlODA3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCB7IGFkZENvbW1lbnREb25lLCBhZGRDb21tZW50TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBbY29tbWVudFRleHQsIG9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgLy8g64yT6riAIOyekeyEsSDsmYTro4zrkJjrqbQgdGV4dCDstIjquLDtmZRcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFkZENvbW1lbnREb25lKSB7XHJcbiAgICAgIHNldENvbW1lbnRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9LCBbYWRkQ29tbWVudERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGNvbnRlbnQ6IGNvbW1lbnRUZXh0LCBwb3N0SWQ6IHBvc3QuaWQsIHVzZXJJZDogaWQgfSxcclxuICAgIH0pO1xyXG4gIH0sIFtjb21tZW50VGV4dCwgaWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdENvbW1lbnR9PlxyXG4gICAgICA8Rm9ybS5JdGVtIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgPElucHV0LlRleHRBcmVhIHZhbHVlPXtjb21tZW50VGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudFRleHR9IHJhd3M9ezR9Lz5cclxuICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAwLCBib3R0b206IC00MCwgekluZGV4OiAxIH19XHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBsb2FkaW5nPXthZGRDb21tZW50TG9hZGluZ30+7IKQ7JW9PC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gIClcclxufTtcclxuXHJcbkNvbW1lbnRGb3JtLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9