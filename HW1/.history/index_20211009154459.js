// 1st task
let age = prompt("How old are you?");
const log = console.log;

if (age < 0) {
  log("You are a fetus!");
} else if (age >= 0 && age <= 2) {
  log("You are baby!");
} else if (age > 2 && age <= 12) {
  log("You are child!");
} else if (age > 12 && age <= 18) {
  log("You are teen!");
} else if (age > 18 && age <= 60) {
  log("You are adult!");
} else {
  log("You are pensioner!");
}

// 2nd task
let symbol = prompt("Enter any number from 0 to 9:");

switch (Number(symbol)) {
  case 0:
    log(")");
  case 1:
    log("!");
    break;
  case 2:
    log("@");
    break;
  case 3:
    log("#");
    break;
  case 4:
    log("$");
    break;
  case 5:
    log("%");
    break;
  case 6:
    log("^");
    break;
  case 7:
    log("&");
    break;
  case 8:
    log("*");
    break;
  case 9:
    log("(");
    break;
}

// 3rd task
let number = prompt("Enter a three-digit number: ");
let number1 = parseInt(number / 100);
let number2 = parseInt(number / 10) % 10;
let number3 = number % 10;
if (number >= 100 && number < 1000) {
  if (number1 === number2 || number2 === number3 || number1 === number3) {
    alert("Match numbers found");
  } else {
    alert("No matches found");
  }
} else {
  alert(`Number ${Number(number)} is not a three-digit number`);
}
// 4th task
let year = prompt("Enter year:  ");
if (
  Number(year) % 4 == 0 ||
  (Number(year) % 400 == 0 && Number(year) % 100 != 0)
) {
  log(`This ${Number(year)} year is a leap year!`);
} else {
  log(`This ${Number(year)} year is not a leap year!`);
}

// 5th task

let num = prompt("Enter a five-digit number: ");
let num1;
let num2;
let num3;
let num4;
let num5;
let num6;
let num7;
if (num > 9999 && num < 100000) {
  num1 = Math.floor(num / 10000);
  num2 = num % 10000;
  num3 = Math.floor(num2 / 1000);
  num4 = num2 % 1000;
  num5 = num4 % 100;
  num6 = Math.floor(num5 / 10);
  num7 = num5 % 10;
  if (num1 === num7 && num3 === num6) {
    log(`Number ${Number(num)} is polindrom`);
  } else {
    log(`Number ${Number(num)} is not polindrom`);
  }
} else {
  alert(`Number ${Number(num)} is not a five-digit number`);
}

// 6th task
let usd = prompt("Enter amount of money: ");
let uerUsd = 0.86;
let uanUsd = 26.33;
let aznUsd = 1.7;
let cash;
let currency = prompt(
  "Enter currency code, 1 - usd/uer,2 - usd/uan, 3-usd/azn"
);
if (currency == 1) {
  cash = usd / uerUsd;
  log(`You have ${Number(cash)} uer`);
} else if (currency == 2) {
  cash = usd / uanUsd;
  log(`You have ${Number(cash)} uan`);
} else if (currency == 3) {
  cash = usd / aznUsd;
  log(`You have ${Number(cash)} azn`);
} else {
  log("Uncorrect currency code!");
}

// 7th task

let money = prompt("Enter amont of money for purchase: ");

if (money >= 200 && money <= 300) {
}
