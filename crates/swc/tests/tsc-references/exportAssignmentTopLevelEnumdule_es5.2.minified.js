!function(foo) {
    foo[foo.red = 0] = "red", foo[foo.green = 1] = "green", foo[foo.blue = 2] = "blue";
}(foo || (foo = {})), (foo || (foo = {})).answer = 42;
var color, foo = require("./foo_0");
color === foo.green && (color = foo.answer), module.exports = foo;
export { };
