const log = console.log;
// Task 1
let num1 = prompt("Задание 1. Введите первое число:");
let num2 = prompt("Задание 1. Введите второе число");

function comparison(arg1, arg2) {
  let one = 1;
  let minusOne = -1;
  let zero = 0;
  if (arg1 < arg2) {
    return minusOne;
  } else if (arg1 > arg2) {
    return one;
  } else if (arg1 == arg2) {
    return zero;
  }
}

comparison(num1, num2);
