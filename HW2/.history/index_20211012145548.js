const log = console.log;

// 1st task
let firstRange = +prompt("Введите начало диапозона");
let secondRange = +prompt("Введите конец диапозона");

let sum = 0;

while (firstRange < secondRange) {
  firstRange++;
  sum += firstRange;
}
log(`Сума всех чисел вашого диапозона ${sum}`);

// 2nd task
let firstNum = +prompt("Введите первое число");
let secNum = +prompt("Введите второе число");

while (firstNum != 0 && secNum != 0) {
  if (firstNum > secNum) {
    firstNum = firstNum % secNum;
  } else {
    secNum = secNum % firstNum;
  }
}
log(`Наибольший общий делитель ${firstNum + secNum}`);

// 3rd task
let number = +prompt("Введите любое число: ");
let numberList = [];

for (i = 1; i < number; i++) {
  if (number % i == 0) {
    numberList.push(i);
  }
}
log(`Все делители ${numberList}`);

// 4th task

let num = +prompt("Введите любое число: ");
let numb = num;
let n = 1;
while (Math.floor((num /= 10))) {
  n++;
}
log(`В числе ${numb}, ${n} цифр`);

// // 5th task
let digits = [];

let zeroCount = 0;
let posCount = 0;
let negCount = 0;
let oddCount = 0;
let evenCount = 0;
while (true) {
  let value = prompt(
    "Введите любое число(отриц., положит., чет., нечет., нулевое).Если хотите закончить напишите - Нет.",
    0
  );
  if (value === "Нет" || value === null || !isFinite(value)) break;
  digits.push(+value);
}
for (let i = 0; i <= digits.length; i++) {
  if (digits[i] === 0) {
    zeroCount++;
  } else if (digits[i] > 0) {
    posCount++;
  } else if (digits[i] < 0) {
    negCount++;
  }

  if (digits[i] % 2 === 0 && digits[i] != 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log(digits);
console.log("ZeroCount: " + zeroCount);
console.log("PositiveCount : " + posCount);
console.log("NegativeCount: " + negCount);
console.log("Odd Count: " + oddCount);
console.log("Even Count: " + evenCount);

// 6th task
while (true) {
  const a = +prompt("Введите первое число");
  const b = +prompt("Введите второе число");
  const op = prompt("Выберете знак - + / *");
  const action = {
    "+": () => a + b,
    "-": () => a - b,
    "/": () => a / b,
    "*": () => a * b,
  }[op];
  if (action) alert(action());

  let val = +prompt("Хотите ли вы решить еще один пример?", "Нет");
  if (val == "Нет" || val === null || !isFinite(val)) break;
}

// 7th task
let count = prompt("Введите число", "");
let step = +prompt("На сколько сдвинуть", "0"),
  arr = count.split("");

for (let i = 0; i < step; i++) {
  arr.push(arr.shift());
}
log(arr.join``, "Ваше число со сдвигом");
