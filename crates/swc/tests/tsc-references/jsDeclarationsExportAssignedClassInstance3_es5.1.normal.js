import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
// @allowJs: true
// @checkJs: true
// @target: es5
// @outDir: ./out
// @declaration: true
// @filename: index.js
var Foo = function Foo() {
    "use strict";
    _class_call_check(this, Foo);
    this.member = 10;
};
Foo.stat = 10;
module.exports = new Foo();
module.exports.additional = 20;
