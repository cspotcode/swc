import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
// @target: es5
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    var _proto = C.prototype;
    _proto.bar = function bar() {
        return 0;
    };
    _proto[this.bar()] = function() {};
    return C;
}();
