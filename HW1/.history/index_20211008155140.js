// 1st task
// let age = prompt("How old are you?");
const log = console.log;

// if (age < 0) {
//   log("You are a fetus!");
// } else if (age >= 0 && age <= 2) {
//   log("You are baby!");
// } else if (age > 2 && age <= 12) {
//   log("You are child!");
// } else if (age > 12 && age <= 18) {
//   log("You are teen!");
// } else if (age > 18 && age <= 60) {
//   log("You are adult!");
// } else {
//   log("You are pensioner!");
// }

// 2nd task
// let symbol = prompt("Enter any number from 0 to 9:");

// switch (Number(symbol)) {
//   case 0:
//     log(")");
//   case 1:
//     log("!");
//     break;
//   case 2:
//     log("@");
//     break;
//   case 3:
//     log("#");
//     break;
//   case 4:
//     log("$");
//     break;
//   case 5:
//     log("%");
//     break;
//   case 6:
//     log("^");
//     break;
//   case 7:
//     log("&");
//     break;
//   case 8:
//     log("*");
//     break;
//   case 9:
//     log("(");
//     break;
// }

// 3rd task
// let number = prompt("Enter a three-digit number: ");
// let number1 = parseInt(number / 100);
// let number2 = parseInt(number / 10) % 10;
// let number3 = number % 10;
// if (number1 === number2 || number2 === number3 || number1 === number3)
//   alert("Match numbers found");
// else alert("No matches found");

// 4th task
// let year = prompt("Enter year:  ");
// if (
//   Number(year) % 4 == 0 ||
//   Number(year) % 400 == 0 ||
//   Number(year) % 100 != 0
// ) {
//   alert(`This ${Number(year)} year is a leap year!`);
// } else {
//   alert(`This ${Number(year)} year is not a leap year!`);
// }

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
    alert(`Number ${Number(num)} is polindrom`);
  } else {
    alert(`Number ${Number(num)} is not polindrom`);
  }
} else {
  alert(`Number ${Number(num)} is not a five-digit number`);
}
