// checking whether other types are subtypes of type parameters with constraints
function f1(x, y) {
    var r = true ? x : y;
    var r = true ? y : x;
}
// V > U > T
function f2(x, y, z) {
    var r = true ? x : y;
    var r = true ? y : x;
    // ok
    var r2 = true ? z : y;
    var r2 = true ? y : z;
    // ok
    var r2a = true ? z : x;
    var r2b = true ? x : z;
}
// Date > U > T
function f3(x, y) {
    var r = true ? x : y;
    var r = true ? y : x;
    // ok
    var r2 = true ? x : new Date();
    var r2 = true ? new Date() : x;
    // ok
    var r3 = true ? y : new Date();
    var r3 = true ? new Date() : y;
}
class C1 {
}
class C2 {
}
var E1;
(function(E) {
    E[E["A"] = 0] = "A";
})(E1 || (E1 = {
}));
function f22() {
}
(function(f) {
    f.bar = 1;
})(f22 || (f22 = {
}));
class c1 {
}
(function(c) {
    c.bar = 1;
})(c1 || (c1 = {
}));
function f4(x) {
    var r0 = true ? x : null; // ok
    var r0 = true ? null : x; // ok
    var u;
    var r0b = true ? u : x; // ok
    var r0b = true ? x : u; // ok
}
function f5(x) {
    var r1 = true ? 1 : x; // ok
    var r1 = true ? x : 1; // ok
}
function f6(x) {
    var r2 = true ? '' : x; // ok
    var r2 = true ? x : ''; // ok
}
function f7(x) {
    var r3 = true ? true : x; // ok
    var r3 = true ? x : true; // ok
}
function f8(x) {
    var r4 = true ? new Date() : x; // ok
    var r4 = true ? x : new Date(); // ok
}
function f9(x) {
    var r5 = true ? /1/ : x; // ok
    var r5 = true ? x : /1/; // ok
}
function f10(x) {
    var r6 = true ? {
        foo: 1
    } : x; // ok
    var r6 = true ? x : {
        foo: 1
    }; // ok
}
function f11(x) {
    var r7 = true ? ()=>{
    } : x; // ok
    var r7 = true ? x : ()=>{
    }; // ok
}
function f12(x1) {
    var r8 = true ? (x)=>{
        return x;
    } : x1; // ok
    var r8b = true ? x1 : (x)=>{
        return x;
    }; // ok, type parameters not identical across declarations
}
function f13(x) {
    var i1;
    var r9 = true ? i1 : x; // ok
    var r9 = true ? x : i1; // ok
}
function f14(x) {
    var c1;
    var r10 = true ? c1 : x; // ok
    var r10 = true ? x : c1; // ok
}
function f15(x) {
    var c2;
    var r12 = true ? c2 : x; // ok
    var r12 = true ? x : c2; // ok
}
function f16(x) {
    var r13 = true ? E1 : x; // ok
    var r13 = true ? x : E1; // ok
    var r14 = true ? E1.A : x; // ok
    var r14 = true ? x : E1.A; // ok
}
function f17(x) {
    var af;
    var r15 = true ? af : x; // ok
    var r15 = true ? x : af; // ok
}
function f18(x) {
    var ac;
    var r16 = true ? ac : x; // ok
    var r16 = true ? x : ac; // ok
}
function f19(x) {
    function f17(a) {
        var r17 = true ? x : a; // ok
        var r17 = true ? a : x; // ok
    }
    function f18(a) {
        var r18 = true ? x : a; // ok
        var r18 = true ? a : x; // ok
    }
}
function f20(x) {
    var r19 = true ? new Object() : x; // ok
    var r19 = true ? x : new Object(); // ok
}
function f21(x) {
    var r20 = true ? {
    } : x; // ok
    var r20 = true ? x : {
    }; // ok
}
