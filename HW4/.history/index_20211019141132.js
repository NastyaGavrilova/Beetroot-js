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

let firstFraction = {
  numerator: firstNumerator,
  denominator: firstDenominator,
};
let secondFraction = {
  numerator: secondNumerator,
  denominator: secondDenominator,
};
function fracAddition() {
  let addition = document.getElementById("");
}
function fracMiltiplicatin() {
  let multiplication = document.getElementById("js-task2-span3");
  let resultUpNumber =
    firstFraction.numerator.value * secondFraction.numerator.value;
  let resultDownNumber =
    firstFraction.denominator.value * secondFraction.denominator.value;
  return (multiplication.innerHTML = `${resultUpNumber}/${resultDownNumber}`);
}

let btn2 = document.getElementById("js-task2-btn");
btn2.addEventListener("click", (et) => {
  et.preventDefault();
  fracMiltiplicatin();
  // subtraction();
  // multiplication();
  // devision();

  // let multiplication = document.getElementById("js-task2-span3");
  // let division = document.getElementById("js-task2-span4");
  // let reduction = document.getElementById("js-task2-span4");
});
