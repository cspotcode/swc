import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _extends from "@swc/helpers/src/_extends.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var React = require("react");
export function makeP(Ctor) {
    return function(_PureComponent) {
        "use strict";
        _inherits(_class, _PureComponent);
        var _super = _create_super(_class);
        function _class() {
            return _class_call_check(this, _class), _super.apply(this, arguments);
        }
        return _class.prototype.render = function() {
            return React.createElement(Ctor, _extends({}, this.props));
        }, _class;
    }(React.PureComponent);
}
