function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    return call && ("object" === _typeof(call) || "function" == typeof call) ? call : (function(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    })(self);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var NonGeneric, Generics, _typeof = function(obj) {
    return obj && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
};
!function(NonGeneric) {
    var C = function(x) {
        "use strict";
        _classCallCheck(this, C);
    };
    new C(), new C("");
    var C21 = function(x) {
        "use strict";
        _classCallCheck(this, C21);
    };
    new C21(), new C21(""), new C21(1);
    var D = function(C2) {
        "use strict";
        function D() {
            return _classCallCheck(this, D), _possibleConstructorReturn(this, _getPrototypeOf(D).apply(this, arguments));
        }
        return _inherits(D, C2), D;
    }(C21);
    new D(), new D(1), new D("");
}(NonGeneric || (NonGeneric = {
})), (function(Generics) {
    var C = function(x) {
        "use strict";
        _classCallCheck(this, C);
    };
    new C(), new C("");
    var C22 = function(x) {
        "use strict";
        _classCallCheck(this, C22);
    };
    new C22(), new C22(""), new C22(1, 2);
    var D = function(C2) {
        "use strict";
        function D() {
            return _classCallCheck(this, D), _possibleConstructorReturn(this, _getPrototypeOf(D).apply(this, arguments));
        }
        return _inherits(D, C2), D;
    }(C22);
    new D(), new D(1), new D("");
})(Generics || (Generics = {
}));
