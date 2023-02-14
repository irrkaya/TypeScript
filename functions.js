function sum(x, y) {
    return x + y;
}
function sum1(x, y) {
    return x + y;
}
sum("g", 5);
sum1(5, 5);
var sum2 = function (x, y) {
    return x + y;
};
console.log(sum(2, 3));
console.log(sum("Sydney", 3));
console.log(sum1(2, 3));
console.log(sum2(5, 3));
function sum3(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(sum3(5, 8));
function invite(firstInvited) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    return others.join(" ");
}
console.log(invite("Irene", "Mila", "Mark", "Boncuk", "Chabby"));
function invite1() {
    var others = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        others[_i] = arguments[_i];
    }
    return others.join(" ");
}
console.log(invite1());
