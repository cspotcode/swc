// The || operator permits the operands to be of any type.
// If the || expression is not contextually typed, the right operand is contextually typed
// by the type of the left operand and the result is of the best common type of the two
// operand types.
var a1;
// bug 786110
var r = a1 || function(a) {
    return a.toLowerCase();
};
