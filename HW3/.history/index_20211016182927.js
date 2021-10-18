const log = console.log;
// Task 1
let num1 = +prompt("Задание 1. Введите первое число:");
let num2 = +prompt("Задание 1. Введите второе число");

function comparison(arg1, arg2) {
  let one = 1;
  let minusOne = -1;
  let zero = 0;
  if (arg1 < arg2) {
    return log(minusOne);
  } else if (arg1 > arg2) {
    return log(one);
  } else if (arg1 == arg2) {
    return log(zero);
  }
}

comparison(num1, num2);

// task 2
let numbFactorial = +prompt(
  "Задание 2. Введите чилсло, для решения факториала"
);

function factorial(arg) {
  return arg ? arg * factorial(arg - 1) : 1;
}
log(factorial(numbFactorial));
