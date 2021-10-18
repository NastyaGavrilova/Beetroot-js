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
  let span4 = document.getElementById("js-task4-span");
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

// task 5

btn5 = document.getElementById("js-task5-btn");
btn5.addEventListener("click", (e) => {
  e.preventDefault();
  let task5 = document.getElementById("js-task5-input1");
  let span5 = document.getElementById("js-task5-span");
  let num = task5.value;
  let sum = 0;
  for (var i = 1; i <= num - 1; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum == num) {
    return (span5.innerHTML = `Число ${num} совершенное`);
  } else {
    return (span5.innerHTML = `Число ${num} не совершенное`);
  }
});

// task 6

let btn6 = document.getElementById("js-task6-btn");
btn6.addEventListener("click", (e) => {
  e.preventDefault();
  let task6 = document.getElementById("js-task6-input1");
  let task6_1 = document.getElementById("js-task6-input2");
  let span6 = document.getElementById("js-task6-span");
  let num6 = task6.value;
  let num6_1 = task6_1.value;
  let result = [];

  for (let i = num6; i < num6_1; i++) {
    sum = 0;
    for (let n = 1; n <= i / 2; n++) {
      if (i % n === 0) sum += n;
    }
    if (i === sum) result.push(i);
  }
  return (span6.innerHTML = result);
});

//task 7

let btn7 = document.getElementById("js-task7-btn");
btn7.addEventListener("click", (e) => {
  e.preventDefault();

  let task7 = document.getElementById("js-task7-input1");
  let task7_1 = document.getElementById("js-task7-input2");
  let task7_2 = document.getElementById("js-task7-input3");
  let span7 = document.getElementById("js-task7-span");

  if (task7.value != "" && task7_1.value != "" && task7_2.value != "") {
    return (span7.innerHTML = `«${task7.value}:${task7_1.value}:${task7_2.value}»`);
  } else if (task7.value != "" && task7_1.value != "" && task7_2.value == "") {
    return (span7.innerHTML = `«${task7.value}:${task7_1.value}:00»`);
  } else if (task7.value != "" && task7_1.value == "" && task7_2.value != "") {
    return (span7.innerHTML = `«${task7.value}:00:${task7_2.value}»`);
  } else if (task7.value != "" && task7_1.value == "" && task7_2.value == "") {
    return (span7.innerHTML = `«${task7.value}:00:00»`);
  }
});

// task 8

let btn8 = document.getElementById("js-task8-btn");
btn8.addEventListener("click", (e) => {
  e.preventDefault();
  let task8 = document.getElementById("js-task8-input1");
  let hour = task8.value;
  let minutes = task8_1.value;
  let sec = task8_2.value;
  let task8_1 = document.getElementById("js-task8-input2");
  let task8_2 = document.getElementById("js-task8-input3");
  let span8 = document.getElementById("js-task8-span");

  let result = hour * 3600 + minutes * 60 + sec.value;
  return (span8.innerHTML = result + " секунд");
});
