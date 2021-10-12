const log = console.log;

// 1st task
let firstRange = +prompt("Enter the start of the range");
let secondRange = +prompt("Enter the end of the range");

let sum = 0;

while (firstRange < secondRange) {
  firstRange++;
  sum += firstRange;
}
log(`Sum is ${sum}`);

// 2nd task
let firstNum = +prompt("Enter the first number");
let secNum = +prompt("Enter the second number");

while (firstNum != 0 && secNum != 0) {
  if (firstNum > secNum) {
    firstNum = firstNum % secNum;
  } else {
    secNum = secNum % firstNum;
  }
}
log(`The greatest common factor is ${firstNum + secNum}`);

// 3rd task
let number = +prompt("Enter any number: ");
let numberList = [];

for (i = 1; i < number; i++) {
  if (number % i == 0) {
    numberList.push(i);
  }
}
log(numberList);

// 4th task

let num = +prompt("Enter any number: ");
let numb = num;
let n = 1;
while (Math.floor((num /= 10))) {
  n++;
}
log(`In number ${numb}, ${n} digits`);

// // 5th task
let digits = [];

let zeroCount = 0;
let posCount = 0;
let negCount = 0;
let oddCount = 0;
let evenCount = 0;
while (true) {
  let value = prompt("Enter any number", 0);
  if (value === "" || value === null || !isFinite(value)) break;
  digits.push(+value);
}
for (i = 0; i <= digits.length; i++) {
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

  if (!confirm("Хотите ли вы решить еще один пример?")) break;
}
