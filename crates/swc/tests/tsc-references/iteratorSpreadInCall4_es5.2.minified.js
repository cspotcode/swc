import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _to_consumable_array from "@swc/helpers/src/_to_consumable_array.mjs";
var SymbolIterator = function() {
    "use strict";
    function SymbolIterator() {
        _class_call_check(this, SymbolIterator);
    }
    var _proto = SymbolIterator.prototype;
    return _proto.next = function() {
        return {
            value: Symbol(),
            done: !1
        };
    }, _proto[Symbol.iterator] = function() {
        return this;
    }, SymbolIterator;
}();
(function(s1) {
    for(var _len = arguments.length, s = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)s[_key - 1] = arguments[_key];
}).apply(void 0, _to_consumable_array(new SymbolIterator));
