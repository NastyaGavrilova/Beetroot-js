let age = promt("How old are you?");
const log = console.log;

if (age <= 2) {
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
