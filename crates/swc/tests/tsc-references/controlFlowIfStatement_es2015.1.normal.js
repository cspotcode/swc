// @allowUnreachableCode: true
let x;
let cond;
x = /a/;
if (x /* RegExp */ , x = true) {
    x; // boolean
    x = "";
} else {
    x; // boolean
    x = 42;
}
x; // string | number
function a() {
    let x;
    if (cond) {
        x = 42;
    } else {
        x = "";
        return;
    }
    x; // number
}
function b() {
    let x;
    if (cond) {
        x = 42;
        throw "";
    } else {
        x = "";
    }
    x; // string
}
function c(data) {
    if (typeof data === 'string') {
        return JSON.parse(data);
    } else {
        return data;
    }
}
function d(data) {
    if (typeof data === 'string') {
        throw new Error('will always happen');
    } else {
        return data;
    }
}
function e(x) {
    if (x.p === "A") {
        let a = null;
    }
}
