// const log = console.log;
// Task 1
let btn1 = document.getElementById("js-task1-btn");
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  let task = document.getElementById("js-task1-input1");
  let task1 = document.getElementById("js-task1-input2");
  let span1 = document.getElementById("js-task1-span");
  let one = 1;
  let minusOne = -1;
  let zero = 0;
  if (task.value < task1.value) {
    return (span1.innerHTML = minusOne);
  } else if (task.value > task1.value) {
    return (span1.innerHTML = one);
  } else if (task.value == task1.value) {
    return (span1.innerHTML = zero);
  }
});

// task 2
let btn2 = document.getElementById("js-task2-btn");
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  let task2 = document.getElementById("js-task2-input1");
  let span2 = document.getElementById("");
  let total = 1;
  for (i = task2; i > 1; i--) {
    total *= i;
  }
  return;
});
// let numbFactorial = +prompt(
//   "Задание 2. Введите чилсло, для решения факториала"
// );

// let factorial = (arg) => {
//   return arg ? arg * factorial(arg - 1) : 1;
// };
// log(factorial(numbFactorial));

// task 3
// let numb1 = +prompt("Задание 3. Введите первое число");
// let numb2 = +prompt("Задание 3. Введите второе число");
// let numb3 = +prompt("Задание 3. Введите третье число");
// let singleNum = (n, n1, n2) => {
//   if (isNaN(n, n1, n2)) {
//     return log(`Введенное исло не цыфра!`);
//   }
//   return log(`${n}${n1}${n2}`);
// };
// singleNum(numb1, numb2, numb3);

// task 4

// let side = +prompt("Задание 4. Введите первую сторону.");
// let side1 = +prompt("Задание 4. Введите второю сторону.");

// let square = (s, s1) => {
//   let square1;
//   if (s != "" && s1 != "") {
//     square1 = s * s1;
//     return log(`Площадь прямоугольника ${square1}`);
//   } else if (s != "" && s1 == "") {
//     square1 = s * s;
//     log(`Площадь квадрата ${square1}`);
//   } else if (s == "" && s1 != "") {
//     square1 = s1 * s1;
//     log(`Площадь квадрата ${square1}`);
//   }
// };

// square(side, side1);
