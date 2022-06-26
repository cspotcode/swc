var Errors, WithGenericSignaturesInBaseType;
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
!function(Errors) {
    var Base = function() {
        "use strict";
        _class_call_check(this, Base);
    }, Derived = function(Base) {
        "use strict";
        _inherits(Derived, Base);
        var _super = _create_super(Derived);
        function Derived() {
            return _class_call_check(this, Derived), _super.apply(this, arguments);
        }
        return Derived;
    }(Base), Derived2 = function(Derived) {
        "use strict";
        _inherits(Derived2, Derived);
        var _super = _create_super(Derived2);
        function Derived2() {
            return _class_call_check(this, Derived2), _super.apply(this, arguments);
        }
        return Derived2;
    }(Derived), OtherDerived = function(Base) {
        "use strict";
        _inherits(OtherDerived, Base);
        var _super = _create_super(OtherDerived);
        function OtherDerived() {
            return _class_call_check(this, OtherDerived), _super.apply(this, arguments);
        }
        return OtherDerived;
    }(Base);
    foo2(function(x) {
        return null;
    }), foo7(function(x) {
        return function(r) {
            return null;
        };
    }), foo8(function(x, y) {
        return function(r) {
            return null;
        };
    }), foo10(function() {
        for(var _len = arguments.length, x = Array(_len), _key = 0; _key < _len; _key++)x[_key] = arguments[_key];
        return null;
    }), foo11(function(x, y) {
        return null;
    }), foo12(function(x, y) {
        return null;
    }), foo15(function(x) {
        return null;
    }), foo15(function(x) {
        return 1;
    }), foo16(function(x) {
        return null;
    }), foo17(function(x) {
        return null;
    });
}(Errors || (Errors = {})), WithGenericSignaturesInBaseType || (WithGenericSignaturesInBaseType = {}), foo2(function(x) {
    return [
        ""
    ];
}), foo3(function(x) {
    return null;
});
