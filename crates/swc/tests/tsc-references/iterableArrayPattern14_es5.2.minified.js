import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _to_array from "@swc/helpers/src/_to_array.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var Bar = function() {
    "use strict";
    _class_call_check(this, Bar);
}, Foo = function(Bar) {
    "use strict";
    _inherits(Foo, Bar);
    var _super = _create_super(Foo);
    function Foo() {
        return _class_call_check(this, Foo), _super.apply(this, arguments);
    }
    return Foo;
}(Bar), FooIterator = function() {
    "use strict";
    function FooIterator() {
        _class_call_check(this, FooIterator);
    }
    var _proto = FooIterator.prototype;
    return _proto.next = function() {
        return {
            value: new Foo,
            done: !1
        };
    }, _proto[Symbol.iterator] = function() {
        return this;
    }, FooIterator;
}();
!function() {
    for(var _len = arguments.length, _tmp = Array(_len), _key = 0; _key < _len; _key++)_tmp[_key] = arguments[_key];
    var __tmp = _to_array(_tmp);
    __tmp[0], __tmp.slice(1);
}(new FooIterator);
