const log = console.log;
// Task 1
let num1 = +prompt("Задание 1. Введите первое число:");
let num2 = +prompt("Задание 1. Введите второе число");

let comparison = (arg1, arg2) => {
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
};
comparison(num1, num2);

// task 2
let numbFactorial = +prompt(
  "Задание 2. Введите чилсло, для решения факториала"
);

let factorial = (arg) => {
  return arg ? arg * factorial(arg - 1) : 1;
};
log(factorial(numbFactorial));

// task 3
let numb1 = +prompt("Задание 3. Введите первое число");
let numb2 = +prompt("Задание 3. Введите второе число");
let numb3 = +prompt("Задание 3. Введите третье число");
let singleNum = (n, n1, n2) => {
  if (isNaN(n, n1, n2)) {
    return log(`Введенное исло не цыфра!`);
  }
  return log(`${n}${n1}${n2}`);
};
singleNum(numb1, numb2, numb3);

// task 4

let side = +prompt("Задание 4. Введите первую сторону.");
let side1 = +prompt("Задание 4. Введите второю сторону.");

let square = (s, s1) => {
  let square1;
  if (s != "" && s1 != "") {
    square1 = s * s1;
    return log(`Площадь прямоугольника ${square1}`);
  } else if (s != "" && s1 == "") {
    square1 = s * s;
    log(`Площадь квадрата ${square1}`);
  } else if (s == "" && s1 != "") {
    square1 = s1 * s1;
    log(`Площадь квадрата ${square1}`);
  }
};

square(side, side1);
