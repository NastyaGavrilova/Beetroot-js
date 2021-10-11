// 1st task
let age = +prompt("How old are you?");
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
let symbol = +prompt("Enter any number from 0 to 9:");

switch (symbol) {
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
let number = +prompt("Enter a three-digit number: ");
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
  alert(`Number ${number} is not a three-digit number`);
}
// 4th task
let year = +prompt("Enter year:  ");
if (year % 4 == 0 || (year % 400 == 0 && year % 100 != 0)) {
  log(`This ${year} year is a leap year!`);
} else {
  log(`This ${year} year is not a leap year!`);
}

// 5th task

let num = +prompt("Enter a five-digit number: ");
let numb = num;
let num1;
let num2;
let num3;
if (num > 9999 && num < 100000) {
  num1 = Math.floor(num / 10000);
  num = num % 10000;
  num2 = Math.floor(num / 1000);
  num = num % 1000;
  num = num % 100;
  num3 = Math.floor(num / 10);
  num = num % 10;
  if (num1 === num && num2 === num3) {
    log(`Number ${numb} is polindrom`);
  } else {
    log(`Number ${numb} is not polindrom`);
  }
} else {
  alert(`Number ${num} is not a five-digit number`);
}

// 6th task
let usd = +prompt("Enter amount of money: ");
let uerUsd = 0.86;
let uanUsd = 26.33;
let aznUsd = 1.7;
let cash;
let currency = +prompt(
  "Enter currency code, 1 - usd/uer,2 - usd/uan, 3-usd/azn"
);
if (currency == 1) {
  cash = usd * uerUsd;
  log(`You have ${cash} uer`);
} else if (currency == 2) {
  cash = usd * uanUsd;
  log(`You have ${cash} uan`);
} else if (currency == 3) {
  cash = usd * aznUsd;
  log(`You have ${cash} azn`);
} else {
  log("Uncorrect currency code!");
}

// 7th task

let money = +prompt(
  "Enter amont of money for purchase 200-300(3%), 300-500(5%), 500 and more(7%): "
);
let discount1 = 3;
let discount2 = 5;
let discount3 = 7;
let finalMoney;

if (money < 200) {
  log(`This ${money} amount of money is not enough to get a discount`);
} else if (money >= 200 && money <= 300) {
  finalMoney = money - (money * discount1) / 100;
  log(`Amount to pay ${finalMoney} `);
} else if (money > 300 && money <= 500) {
  finalMoney = money - (money * discount2) / 100;
  log(`Amount to pay ${finalMoney} `);
} else {
  finalMoney = money - (money * discount3) / 100;
  log(`Amount to pay ${finalMoney} `);
}

// 8th task

let circumference = +prompt("Enter circumference: ");
let squarePerimetr = +prompt("Enter side of square: ");

circumference / Math.PI <= squarePerimetr / 4
  ? log("A circle to fit into a square!")
  : log("A circle does not fit into the square!");

// 9th task
let count = 0;
let capital = +prompt(
  "What was the name of Harry Potter's owl? 1-Buklya, 2-Griffin, 3-Muklya."
);
if (capital == 1) {
  count += 2;
  alert("Great!");
} else {
  alert("No it's Buklya!");
}
let president = +prompt(
  "Who is the current US President? 1-John F. Kennedy, 2-Barack Obama, 3-Donald Trump."
);
if (president == 3) {
  count += 2;
  alert("Great!");
} else {
  alert("No it's Donald Trump!");
}
let population = +prompt(
  "What is the largest city in the world by population? 1-New Yourk, 2-Tokyo, 3-Moscow"
);
if (population == 2) {
  count += 2;
  alert("Great!");
} else {
  alert("No it's Tokyo!");
}
log(`Your score is ${count}`);

// 10th task
let date = prompt("Enter the date - day.month.year ");
date = date.split(".");
let oldDate = new Date(date[2], date[1] - 1, date[0]);
oldDate.setDate(oldDate.getDate() + 1);
alert(oldDate);
