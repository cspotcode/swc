import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import MC from "./a";
export default function MyClass() {};
MyClass.bar = function C() {
    "use strict";
    _class_call_check(this, C);
}, MyClass.bar, MC.bar;
