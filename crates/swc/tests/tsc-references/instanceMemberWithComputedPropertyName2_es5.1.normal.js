// https://github.com/microsoft/TypeScript/issues/33857
// @useDefineForClassFields: true
// @target: es2015
"use strict";
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var x = 1;
var C = function C() {
    _class_call_check(this, C);
};
