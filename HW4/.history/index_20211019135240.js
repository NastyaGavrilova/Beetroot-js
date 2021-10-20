// task 1
let car = {
  producer: "Volkswagen",
  model: "Tiguan",
  year: 2007,
  avgSpeed: 120,
};

let btn1 = document.getElementById("js-task1-btn");
btn1.addEventListener("click", (e) => {
  let information = document.getElementById("js-tak1-span");
  return (information.innerHTML =
    "Producer: " +
    car.producer +
    ",\nModel: " +
    car.model +
    ",\nAge of issue: " +
    car.year +
    ",\nAverage speed: " +
    car.avgSpeed +
    " km/h");
});

let btn1_1 = document.getElementById("js-task1-btn1");
btn1_1.addEventListener("click", (event) => {
  event.preventDefault();
  const distance = document.getElementById("js-task1-input1");
  const averageSpeed = document.getElementById("js-task1-input2");
  let time = document.getElementById("js-task1-span1");
  let timeInWay = Math.round(distance.value / averageSpeed.value);
  let timeInRest =
    timeInWay % 4 == 0 ? ((timeInWay / 4) | 0) - 1 : (timeInWay / 4) | 0;
  let timeTotal = timeInWay + timeInRest;
  return (time.innerHTML = timeTotal);
});

// task 2
let firstNumerator = document.getElementById("js-task2-input1");
let firstDenominator = document.getElementById("js-task2-input2");
let secondNumerator = document.getElementById("js-task2-input3");
let secondDenominator = document.getElementById("js-task2-input4");
function Fraction(upNumber, downNumber) {
  return { numerator: upNumber, denominator: downNumber };
}

let firstNumber = Fraction(firstNumerator.value, firstDenominator.value);
let secondNumber = Fraction(secondNumerator.value, secondDenominator.value);

function addition(obj1, obj2) {
  let additions = document.getElementById("js-task2-span1");
  if (obj1.denominator != 0 && obj2.denominator != 0) {
    resUp =
      obj1.numerator * obj2.denominator + obj2.numerator * obj1.denominator;
    resDown = obj1.denominator * obj2.denominator;
    console.log(`${resUp}/${resDown}`);
    return (additions.innerHTML = `${resUp}/${resDown}`);
  }
}

let btn2 = document.getElementById("js-task2-btn");
btn2.addEventListener("click", (et) => {
  et.preventDefault();
  addition(firstNumber, secondNumber);
  // subtraction();
  // multiplication();
  // devision();

  // let multiplication = document.getElementById("js-task2-span3");
  // let division = document.getElementById("js-task2-span4");
  // let reduction = document.getElementById("js-task2-span4");
});
