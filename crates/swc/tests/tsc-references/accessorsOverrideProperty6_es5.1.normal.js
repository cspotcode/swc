import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
// @target: esnext
// @useDefineForClassFields: false
var A = function A() {
    "use strict";
    _class_call_check(this, A);
    this.p = "yep";
};
var B = /*#__PURE__*/ function(A) {
    "use strict";
    _inherits(B, A);
    var _super = _create_super(B);
    function B() {
        _class_call_check(this, B);
        return _super.apply(this, arguments);
    }
    _create_class(B, [
        {
            key: "p",
            get: function get() {
                return "oh no";
            } // error
        }
    ]);
    return B;
}(A);
var C = function C() {
    "use strict";
    _class_call_check(this, C);
    this.p = 101;
};
var D = /*#__PURE__*/ function(C) {
    "use strict";
    _inherits(D, C);
    var _super = _create_super(D);
    function D() {
        _class_call_check(this, D);
        var _this;
        _this = _super.apply(this, arguments);
        _this._secret = 11;
        return _this;
    }
    _create_class(D, [
        {
            key: "p",
            get: function get() {
                return this._secret;
            } // error
            ,
            set: function set(value) {
                this._secret = value;
            } // error
        }
    ]);
    return D;
}(C);
