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
  let span2 = document.getElementById("js-task2-span");
  let total = 1;
  for (i = task2.value; i > 1; i--) {
    total *= i;
  }
  return (span2.innerHTML = total);
});

// task 3
let btn3 = document.getElementById("js-task3-btn");
btn3.addEventListener("click", (e) => {
  e.preventDefault();
  let task3 = document.getElementById("js-task3-input1");
  let task3_1 = document.getElementById("js-task3-input2");
  let task3_2 = document.getElementById("js-task3-input3");
  let span3 = document.getElementById("js-task3-span");
  if (isNaN(task3.value, task3_1.value, task3_2.value)) {
    return (span3.innerHTML = "Введеное число не цифра");
  }
  return (span3.innerHTML = `${task3.value}${task3_1.value}${task3_2.value}`);
});

// task 4

let btn4 = document.getElementById("js-task4-btn");
btn4.addEventListener("click", (e) => {
  e.preventDefault();
  let task4 = document.getElementById("js-task4-input1");
  let task4_1 = document.getElementById("js-task4-input2");
  let span4 = document.getElementById("js-task3-span");
  let result;
  if (task4.value != "" && task4_1.value != "") {
    result = task4.value * task4_1.value;
    return (span4.innerHTML = result);
  } else if (task4.value != "" && task4_1.value == "") {
    result = Math.pow(task4.value, 2);
    return (span4.innerHTML = result);
  } else if (task4.value == "" && task4_1.value != "") {
    result = Math.pow(task4_1.value, 2);
    return (span4.innerHTML = result);
  }
});
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
