webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(loadMyInfo),
    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(logIn),
    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),
    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),
    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(follow),
    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(unfollow),
    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadMyInfo),
    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogIn),
    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),
    _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignUp),
    _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollow),
    _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnfollow),
    _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);





function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

;

function loadMyInfo() {
  var result;
  return _regeneratorRuntime().wrap(function loadMyInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
            error: _context.t0.response.data
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

;

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

;

function logIn(action) {
  var result;
  return _regeneratorRuntime().wrap(function logIn$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
            error: _context2.t0.response.data
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

;

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function logOut() {
  return _regeneratorRuntime().wrap(function logOut$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context3.next = 12;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            error: _context3.t0.response.data
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data); // data: email, password, nickname
} // post, put, patch만 데이터 넘길수 있음


function signUp(action) {
  var result;
  return _regeneratorRuntime().wrap(function signUp$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);

        case 3:
          result = _context4.sent;
          console.log(result);
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });

        case 7:
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            error: _context4.t0.response.data
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
}

function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/follow');
}

function follow(action) {
  return _regeneratorRuntime().wrap(function follow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
            error: _context5.t0.response.data
          });

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/unfollow');
}

function unfollow(action) {
  return _regeneratorRuntime().wrap(function unfollow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);

        case 3:
          _context6.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context6.next = 11;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
            error: _context6.t0.response.data
          });

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}

function watchLoadMyInfo() {
  return _regeneratorRuntime().wrap(function watchLoadMyInfo$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchLogIn() {
  return _regeneratorRuntime().wrap(function watchLogIn$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchLogOut() {
  return _regeneratorRuntime().wrap(function watchLogOut$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchSignUp() {
  return _regeneratorRuntime().wrap(function watchSignUp$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchFollow() {
  return _regeneratorRuntime().wrap(function watchFollow$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchUnfollow() {
  return _regeneratorRuntime().wrap(function watchUnfollow$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function userSaga() {
  return _regeneratorRuntime().wrap(function userSaga$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow)]);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2FkTXlJbmZvIiwibG9nSW4iLCJsb2dPdXQiLCJzaWduVXAiLCJmb2xsb3ciLCJ1bmZvbGxvdyIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93IiwidXNlclNhZ2EiLCJsb2FkTXlJbmZvQVBJIiwiYXhpb3MiLCJnZXQiLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiZGF0YSIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiZXJyb3IiLCJyZXNwb25zZSIsImxvZ0luQVBJIiwicG9zdCIsImFjdGlvbiIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJsb2dPdXRBUEkiLCJMT0dfT1VUX1NVQ0NFU1MiLCJjb25zb2xlIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwibG9nIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiZm9sbG93QVBJIiwiZGVsYXkiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwidW5mb2xsb3dBUEkiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwiU0lHTl9VUF9SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxvSjs7c0RBY1VBLFU7dURBbUJBQyxLO3VEQW1CQUMsTTt1REFtQkFDLE07dURBbUJBQyxNO3VEQW9CQUMsUTt1REFnQkFDLGU7dURBSUFDLFU7dURBSUFDLFc7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QUFBQTs7QUFJZSxTQUFVTyxRQUFWO0VBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUNiLE9BQU13Qyw4REFBRyxDQUFDLENBQ1JDLCtEQUFJLENBQUMvQyxlQUFELENBREksRUFFUitDLCtEQUFJLENBQUM5QyxVQUFELENBRkksRUFHUjhDLCtEQUFJLENBQUM3QyxXQUFELENBSEksRUFJUjZDLCtEQUFJLENBQUM1QyxXQUFELENBSkksRUFLUjRDLCtEQUFJLENBQUMzQyxXQUFELENBTEksRUFNUjJDLCtEQUFJLENBQUMxQyxhQUFELENBTkksQ0FBRCxDQUFUOztRQURhO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTJlMGQ1YjAwMGEzNDg2YzgxNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gIExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsIFxyXG4gIExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsIEZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkVcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpXHJcbn07XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pXHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpXHJcbn07XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pXHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpOyAgLy8gZGF0YTogZW1haWwsIHBhc3N3b3JkLCBuaWNrbmFtZVxyXG59ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9zdCwgcHV0LCBwYXRjaOunjCDrjbDsnbTthLAg64SY6ri47IiYIOyeiOydjFxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2ZvbGxvdycpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdW5mb2xsb3cnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICBdKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=