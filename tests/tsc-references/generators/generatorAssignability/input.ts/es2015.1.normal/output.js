function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) {
                back = back.next = request;
            } else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _AwaitValue;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) {
            resume(front.key, front.arg);
        } else {
            back = null;
        }
    }
    this._invoke = send;
    if (typeof gen.return !== "function") {
        this.return = undefined;
    }
}
if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
        return this;
    };
}
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _AwaitValue(value) {
    this.wrapped = value;
}
function _wrapAsyncGenerator(fn) {
    return function() {
        return new AsyncGenerator(fn.apply(this, arguments));
    };
}
// spread iterable
[
    ...g1
]; // error
[
    ...g2
]; // ok
// binding pattern over iterable
let [x1] = g1; // error
let [x2] = g2; // ok
// binding rest pattern over iterable
let [...y1] = g1; // error
let [...y2] = g2; // ok
// assignment pattern over iterable
[_] = g1; // error
[_] = g2; // ok
// assignment rest pattern over iterable
[..._] = g1; // error
[..._] = g2; // ok
// for-of over iterable
for (_ of g1); // error
for (_ of g2); // ok
function _asyncfn() {
    _asyncfn = _asyncToGenerator(function*() {
        // for-await-of over iterable
        {
            var _iteratorAbruptCompletion = false, _didIteratorError = false, _iteratorError;
            try {
                for(var _iterator = _asyncIterator(g1), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false){
                    let _value = _step.value;
                    _ = _value;
                    ; // error
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (_iteratorAbruptCompletion && _iterator.return != null) {
                        yield _iteratorError.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
        {
            var _iteratorAbruptCompletion1 = false, _didIteratorError1 = false, _iteratorError1;
            try {
                for(var _iterator1 = _asyncIterator(g2), _step1; _iteratorAbruptCompletion1 = !(_step1 = yield _iterator1.next()).done; _iteratorAbruptCompletion1 = false){
                    let _value = _step1.value;
                    _ = _value;
                    ; // ok
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (_iteratorAbruptCompletion1 && _iterator1.return != null) {
                        yield _iteratorError1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        }
        // for-await-of over asynciterable
        {
            var _iteratorAbruptCompletion2 = false, _didIteratorError2 = false, _iteratorError2;
            try {
                for(var _iterator2 = _asyncIterator(g4), _step2; _iteratorAbruptCompletion2 = !(_step2 = yield _iterator2.next()).done; _iteratorAbruptCompletion2 = false){
                    let _value = _step2.value;
                    _ = _value;
                    ; // error
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (_iteratorAbruptCompletion2 && _iterator2.return != null) {
                        yield _iteratorError2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
        {
            var _iteratorAbruptCompletion3 = false, _didIteratorError3 = false, _iteratorError3;
            try {
                for(var _iterator3 = _asyncIterator(g5), _step3; _iteratorAbruptCompletion3 = !(_step3 = yield _iterator3.next()).done; _iteratorAbruptCompletion3 = false){
                    let _value = _step3.value;
                    _ = _value;
                    ; // ok
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally{
                try {
                    if (_iteratorAbruptCompletion3 && _iterator3.return != null) {
                        yield _iteratorError3.return();
                    }
                } finally{
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    });
    return _asyncfn.apply(this, arguments);
}
function asyncfn() {
    return _asyncfn.apply(this, arguments);
}
function* f1() {
    // yield* over iterable
    yield* g1; // error
    yield* g3; // ok
}
function _f2() {
    _f2 = _wrapAsyncGenerator(function*() {
        // yield* over iterable
        yield* g1; // error
        yield* g3; // ok
        // yield* over asynciterable
        yield* g4; // error
        yield* g6; // ok
    });
    return _f2.apply(this, arguments);
}
function f2() {
    return _f2.apply(this, arguments);
}
function _f3() {
    _f3 = _asyncToGenerator(function*() {
        const syncGenerator = function*() {
            yield 1;
            yield 2;
        };
        const o = {
            [Symbol.asyncIterator]: syncGenerator
        };
        {
            var _iteratorAbruptCompletion = false, _didIteratorError = false, _iteratorError;
            try {
                for(var _iterator = _asyncIterator(o), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false){
                    let _value = _step.value;
                    const x = _value;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (_iteratorAbruptCompletion && _iterator.return != null) {
                        yield _iteratorError.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    });
    return _f3.apply(this, arguments);
}
function f3() {
    return _f3.apply(this, arguments);
}
