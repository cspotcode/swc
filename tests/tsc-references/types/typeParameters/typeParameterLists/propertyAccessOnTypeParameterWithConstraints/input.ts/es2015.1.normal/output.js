// generic types should behave as if they have properties of their constraint type
// no errors expected 
class C {
    f() {
        var x;
        var a = x['getDate'](); // number
        return a + x.getDate();
    }
}
var r = new C().f();
var i;
var r2 = i.foo.getDate();
var r2b = i.foo['getDate']();
var a1;
var r3 = a1().getDate();
var r3b = a1()['getDate']();
var b = {
    foo: (x)=>{
        var a = x['getDate'](); // number
        return a + x.getDate();
    }
};
var r4 = b.foo(new Date());
