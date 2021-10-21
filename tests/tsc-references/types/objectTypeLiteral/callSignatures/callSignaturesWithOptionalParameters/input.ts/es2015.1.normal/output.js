// Optional parameters should be valid in all the below casts
function foo(x) {
}
var f = function foo(x) {
};
var f2 = (x, y)=>{
};
foo(1);
foo();
f(1);
f();
f2(1);
f2(1, 2);
class C {
    foo(x) {
    }
}
var c;
c.foo();
c.foo(1);
var i;
i();
i(1);
i.foo(1);
i.foo(1, 2);
var a;
a();
a(1);
a.foo();
a.foo(1);
var b = {
    foo (x1) {
    },
    a: function foo(x, y) {
    },
    b: (x)=>{
    }
};
b.foo();
b.foo(1);
b.a(1);
b.a(1, 2);
b.b();
b.b(1);
