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
    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(loadUser),
    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(logIn),
    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),
    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),
    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(changeNickname),
    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(follow),
    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(unfollow),
    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(removeFollower),
    _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(loadFollowers),
    _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(loadFollowings),
    _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadMyInfo),
    _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadUser),
    _marked14 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogIn),
    _marked15 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),
    _marked16 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignUp),
    _marked17 = /*#__PURE__*/_regeneratorRuntime().mark(watchChangeNickname),
    _marked18 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollow),
    _marked19 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnfollow),
    _marked20 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemoveFollower),
    _marked21 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadFollowers),
    _marked22 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadFollowings),
    _marked23 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);





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

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/user/".concat(data));
}

;

function loadUser() {
  var result;
  return _regeneratorRuntime().wrap(function loadUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
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
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
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

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

;

function logIn(action) {
  var result;
  return _regeneratorRuntime().wrap(function logIn$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
            error: _context3.t0.response.data
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

;

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

;

function logOut() {
  return _regeneratorRuntime().wrap(function logOut$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
          });

        case 5:
          _context4.next = 12;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            error: _context4.t0.response.data
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

;

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data); // data: email, password, nickname
}

; // post, put, patch만 데이터 넘길수 있음

function signUp(action) {
  var result;
  return _regeneratorRuntime().wrap(function signUp$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);

        case 3:
          result = _context5.sent;
          console.log(result);
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });

        case 7:
          _context5.next = 13;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            error: _context5.t0.response.data
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 9]]);
}

;

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

;

function changeNickname(action) {
  var result;
  return _regeneratorRuntime().wrap(function changeNickname$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);

        case 3:
          result = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
            data: result.data
          });

        case 6:
          _context6.next = 12;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
            error: _context6.t0.response.data
          });

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}

;

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/user/".concat(data, "/follow"));
}

;

function follow(action) {
  var result;
  return _regeneratorRuntime().wrap(function follow$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          _context7.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
            error: _context7.t0.response.data
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

;

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/user/".concat(data, "/follow"));
}

;

function unfollow(action) {
  var result;
  return _regeneratorRuntime().wrap(function unfollow$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);

        case 3:
          result = _context8.sent;
          _context8.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
            data: result.data
          });

        case 6:
          _context8.next = 12;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          _context8.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
            error: _context8.t0.response.data
          });

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 8]]);
}

;

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/user/follower/".concat(data));
}

;

function removeFollower(action) {
  var result;
  return _regeneratorRuntime().wrap(function removeFollower$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);

        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
            data: result.data
          });

        case 6:
          _context9.next = 12;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          _context9.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
            error: _context9.t0.response.data
          });

        case 12:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 8]]);
}

;

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followers', data);
}

function loadFollowers(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadFollowers$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI, action.data);

        case 3:
          result = _context10.sent;
          _context10.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context10.next = 13;
          break;

        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          _context10.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
            error: _context10.t0.response.data
          });

        case 13:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 8]]);
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followings', data);
}

function loadFollowings(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadFollowings$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowingsAPI, action.data);

        case 3:
          result = _context11.sent;
          _context11.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context11.next = 13;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          _context11.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
            error: _context11.t0.response.data
          });

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 8]]);
}

function watchLoadMyInfo() {
  return _regeneratorRuntime().wrap(function watchLoadMyInfo$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

;

function watchLoadUser() {
  return _regeneratorRuntime().wrap(function watchLoadUser$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

;

function watchLogIn() {
  return _regeneratorRuntime().wrap(function watchLogIn$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

;

function watchLogOut() {
  return _regeneratorRuntime().wrap(function watchLogOut$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

;

function watchSignUp() {
  return _regeneratorRuntime().wrap(function watchSignUp$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

;

function watchChangeNickname() {
  return _regeneratorRuntime().wrap(function watchChangeNickname$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

;

function watchFollow() {
  return _regeneratorRuntime().wrap(function watchFollow$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

;

function watchUnfollow() {
  return _regeneratorRuntime().wrap(function watchUnfollow$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

;

function watchRemoveFollower() {
  return _regeneratorRuntime().wrap(function watchRemoveFollower$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

;

function watchLoadFollowers() {
  return _regeneratorRuntime().wrap(function watchLoadFollowers$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

;

function watchLoadFollowings() {
  return _regeneratorRuntime().wrap(function watchLoadFollowings$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

;
function userSaga() {
  return _regeneratorRuntime().wrap(function userSaga$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings)]);

        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}
;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2FkTXlJbmZvIiwibG9hZFVzZXIiLCJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsImNoYW5nZU5pY2tuYW1lIiwiZm9sbG93IiwidW5mb2xsb3ciLCJyZW1vdmVGb2xsb3dlciIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5ncyIsIndhdGNoTG9hZE15SW5mbyIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsInVzZXJTYWdhIiwibG9hZE15SW5mb0FQSSIsImF4aW9zIiwiZ2V0IiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsImRhdGEiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsImVycm9yIiwicmVzcG9uc2UiLCJsb2FkVXNlckFQSSIsImFjdGlvbiIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJsb2dJbkFQSSIsInBvc3QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwibG9nT3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiY29uc29sZSIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcEFQSSIsImxvZyIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImNoYW5nZU5pY2tuYW1lQVBJIiwicGF0Y2giLCJuaWNrbmFtZSIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJmb2xsb3dBUEkiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwidW5mb2xsb3dBUEkiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsInJlbW92ZUZvbGxvd2VyQVBJIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsImxvYWRGb2xsb3dlcnNBUEkiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsImxvYWRGb2xsb3dpbmdzQVBJIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfT1VUX1JFUVVFU1QiLCJTSUdOX1VQX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxvSjs7c0RBbUJVQSxVO3VEQW1CQUMsUTt1REFtQkFDLEs7dURBbUJBQyxNO3VEQW1CQUMsTTt1REFtQkFDLGM7dURBbUJBQyxNO3VEQW1CQUMsUTt1REFtQkFDLGM7d0RBbUJBQyxhO3dEQW9CQUMsYzt3REFnQkFDLGU7d0RBSUFDLGE7d0RBSUFDLFU7d0RBSUFDLFc7d0RBSUFDLFc7d0RBSUFDLG1CO3dEQUlBQyxXO3dEQUlBQyxhO3dEQUlBQyxtQjt3REFJQUMsa0I7d0RBSUFDLG1CO3dEQUllQyxROztBQS9RekI7QUFDQTtBQUNBOztBQWNBLFNBQVNDLGFBQVQsR0FBeUI7RUFDdkIsT0FBT0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVLE9BQVYsQ0FBUDtBQUNEOztBQUFBOztBQUVELFNBQVV6QixV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RSwrREFBSSxDQUFDbkUsV0FBRCxDQVBJLEVBUVJtRSwrREFBSSxDQUFDbEUsYUFBRCxDQVJJLEVBU1JrRSwrREFBSSxDQUFDakUsbUJBQUQsQ0FUSSxFQVVSaUUsK0RBQUksQ0FBQ2hFLGtCQUFELENBVkksRUFXUmdFLCtEQUFJLENBQUMvRCxtQkFBRCxDQVhJLENBQUQsQ0FBVDs7UUFEYTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQTtBQWNkIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGY2NjM0MjY0OTJhZGY3NjU5NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFxyXG4gIExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX01ZX0lORk9fU1VDQ0VTUywgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1JFUVVFU1QsIExPQURfVVNFUl9TVUNDRVNTLCBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLCBcclxuICBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUywgTE9HX09VVF9GQUlMVVJFLFxyXG4gIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsIEZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUywgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkVcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpXHJcbn07XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pXHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX1gKVxyXG59O1xyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59O1xyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JylcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpOyAgLy8gZGF0YTogZW1haWwsIHBhc3N3b3JkLCBuaWNrbmFtZVxyXG59OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9zdCwgcHV0LCBwYXRjaOunjCDrjbDsnbTthLAg64SY6ri47IiYIOyeiOydjFxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSlcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIHsgbmlja25hbWU6IGRhdGEgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pXHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSlcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59O1xyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSlcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VycycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93aW5ncycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgbG9hZEZvbGxvd2Vycyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICBdKVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9