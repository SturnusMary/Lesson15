'use strict';

//#1 
function fib(n) {
let fibonacciNumbers = [1, 1];
    for (let i = 2; i < n; i++) {
        fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
     }
     return fibonacciNumbers[n - 1];
}
console.log(fib(7));

//#2 
function getRecurrence(divisible, quantity, ultimate) {
    let num = 0;
    for(let i = divisible; i > ultimate; i /= quantity) {
        num++;
    }
    return num;
    }
console.log(getRecurrence(1000, 2, 50));


