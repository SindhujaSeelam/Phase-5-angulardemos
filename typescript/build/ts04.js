"use strict";
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function greet() {
    console.log("Hello Welcome to Void Function...");
}
greet();
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(6, 7));
function exp(a, b = 2) {
    return a ** b;
}
console.log(exp(6, 9));
