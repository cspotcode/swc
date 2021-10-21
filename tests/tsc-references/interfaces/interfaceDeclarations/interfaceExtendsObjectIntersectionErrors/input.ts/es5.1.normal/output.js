function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var C1 = /*#__PURE__*/ function(_super) {
    "use strict";
    _inherits(C1, _super);
    function C1() {
        _classCallCheck(this, C1);
        return _possibleConstructorReturn(this, _getPrototypeOf(C1).apply(this, arguments));
    }
    return C1;
}(Constructor());
var C2 = /*#__PURE__*/ function(_super) {
    "use strict";
    _inherits(C2, _super);
    function C2() {
        _classCallCheck(this, C2);
        return _possibleConstructorReturn(this, _getPrototypeOf(C2).apply(this, arguments));
    }
    return C2;
}(Constructor());
var C3 = /*#__PURE__*/ function(_super) {
    "use strict";
    _inherits(C3, _super);
    function C3() {
        _classCallCheck(this, C3);
        return _possibleConstructorReturn(this, _getPrototypeOf(C3).apply(this, arguments));
    }
    return C3;
}(Constructor());
var C4 = /*#__PURE__*/ function(_super) {
    "use strict";
    _inherits(C4, _super);
    function C4() {
        _classCallCheck(this, C4);
        return _possibleConstructorReturn(this, _getPrototypeOf(C4).apply(this, arguments));
    }
    return C4;
}(Constructor());
var C5 = /*#__PURE__*/ function(_super) {
    "use strict";
    _inherits(C5, _super);
    function C5() {
        _classCallCheck(this, C5);
        return _possibleConstructorReturn(this, _getPrototypeOf(C5).apply(this, arguments));
    }
    return C5;
}(Constructor());
var EX1;
(function(EX) {
    EX[EX["A"] = 0] = "A";
    EX[EX["B"] = 1] = "B";
    EX[EX["C"] = 2] = "C";
})(EX1 || (EX1 = {
}));
