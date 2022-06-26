import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "test"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "test"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
// @target: esnext
var Foo = /*#__PURE__*/ function() {
    "use strict";
    function Foo() {
        _class_call_check(this, Foo);
    }
    Foo.m = function m(strings) {
        return new this();
    };
    return Foo;
}();
Foo.m(_templateObject());
Foo.m(_templateObject1());
