// First task
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

// Second task
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

// Third task
let number = prompt("Enter a three-digit number: ");
let number1 = parseInt(number / 100);
let number2 = parseInt(number / 10) % 10;
let number3 = number % 10;
if (number1 === number2 || number2 === number3 || number1 === number3)
  alert("Match numbers found");
else alert("No matches found");

// Fourth task

let year = prompt("Enter year:  ");
let leapYear = Number(year) / 400;
let lepYear2 = Number(year) / 4;
