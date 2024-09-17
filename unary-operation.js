function applyUnaryPlus(value) {
    return +value;
}

function applyUnaryMinus(value) {
    return -value;
}

function incrementBefore(value) {
    return ++value;
}

function incrementAfter(value) {
    return value++;
}

function decrementBefore(value) {
    return --value;
}

function decrementAfter(value) {
    return value--;
}

console.log("Unary Plus:", applyUnaryPlus("5"));
console.log("Unary Minus:", applyUnaryMinus(7));
console.log("Increment Before:", incrementBefore(10));
console.log("Increment After:", incrementAfter(10));
console.log("Decrement Before:", decrementBefore(10));
console.log("Decrement After:", decrementAfter(10));
