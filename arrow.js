
// function doubleIt(num) {
//     return num * 2;
// }
//===========================================
//Another way to declare a function. Hear function name is optional because the function store in another variable.

// const doubleIt = function myFunction(num) {
//     return num * 2;
// }
//============================================
//Syntax hello = () => "Hello World!";
// const doubleIt = (num) => num * 2;
// const add = (x,y) => x + y;
//==========================================
//No parameter arrow function
// const giveMe5 = () => 5;
// const result = giveMe5();
// console.log(result);
//==========================================

//When you write More statement after arrow(=>) then used {}.
const dMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = dMath(7, 5);
console.log(result);

