function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var C = function C() {
    "use strict";
    _classCallCheck(this, C);
};
var str;
var bool;
var num;
var strOrNum;
var strOrBool;
var numOrBool;
var strOrNumOrBool;
var strOrC;
var numOrC;
var boolOrC;
var c;
//	A type guard of the form typeof x === s, 
//  where s is a string literal with the value 'string', 'number', or 'boolean',
//  - when true, narrows the type of x to the given primitive type, or
//  - when false, removes the primitive type from the type of x.
if (typeof strOrBool === "boolean") {
    bool = strOrBool; // boolean
} else {
    str = strOrBool; // string
}
if (typeof numOrBool === "boolean") {
    bool = numOrBool; // boolean
} else {
    num = numOrBool; // number
}
if (typeof strOrNumOrBool === "boolean") {
    bool = strOrNumOrBool; // boolean
} else {
    strOrNum = strOrNumOrBool; // string | number
}
if (typeof boolOrC === "boolean") {
    bool = boolOrC; // boolean
} else {
    c = boolOrC; // C
}
if (typeof strOrNum === "boolean") {
    var z1 = strOrNum; // {}
} else {
    var z2 = strOrNum; // string | number
}
// A type guard of the form typeof x !== s, where s is a string literal,
//  - when true, narrows the type of x by typeof x === s when false, or
//  - when false, narrows the type of x by typeof x === s when true.
if (typeof strOrBool !== "boolean") {
    str = strOrBool; // string
} else {
    bool = strOrBool; // boolean
}
if (typeof numOrBool !== "boolean") {
    num = numOrBool; // number
} else {
    bool = numOrBool; // boolean
}
if (typeof strOrNumOrBool !== "boolean") {
    strOrNum = strOrNumOrBool; // string | number
} else {
    bool = strOrNumOrBool; // boolean
}
if (typeof boolOrC !== "boolean") {
    c = boolOrC; // C
} else {
    bool = boolOrC; // boolean
}
if (typeof strOrNum !== "boolean") {
    var z11 = strOrNum; // string | number
} else {
    var z21 = strOrNum; // {}
}
