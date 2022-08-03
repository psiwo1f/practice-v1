// anonymous function cant be recursive?

// arrow functions are syntactically anynomous
// how to do recursion with arrow functions?

// to do recursion with anonymous function the concept of Y combinator is used



// output 24 for multiT(4), correct
function multiN(n) {
    if (n < 2) return n;
    return n * multiN(n-1)
}

// output 24 for multiF(4), correct
const multiF = function (n) {
    if (n < 2) return n;
    return n * multiF(n-1)
}

// output 24 for multiT(4), correct
const multiS = n => {
    if (n < 2) return n;
    return n * multiS(n-1)
}

// outputs undefined
const multiT = n => {
    n < 2 ? n : n * multiT(n-1)
}

console.log(multiN(4))