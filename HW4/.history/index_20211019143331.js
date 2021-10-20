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
  return { upNumber: upNumber, downNumber: downNumber };
}
let firstFraction = Fraction(firstNumerator, firstDenominator);
let secondFraction = Fraction(secondNumerator, secondDenominator);

function fracAddition(obj1, obj2) {
  let addition = document.getElementById("js-task2-span1");
  let resultUpNumber =
    obj1.upNumber.value * obj2.downNumber.value +
    obj2.upNumber.value * obj1.downNumber.value;
  let resultDownNumber = obj1.downNumber.value * obj2.downNumber.value;
  return (addition.innerHTML = `${resultUpNumber}/${resultDownNumber}`);
}
function fracSubtraction(obj1, obj2) {
  let subtraction = document.getElementById("js-task2-span2");
  let resultUpNumber =
    obj1.upNumber.value * obj2.downNumber.value -
    obj2.upNumber.value * obj1.downNumber.value;
  let resultDownNumber = obj1.downNumber.value * obj2.downNumber.value;
  return (subtraction.innerHTML = `${resultUpNumber}/${resultDownNumber}`);
}
function fracMiltiplicatin(obj1, obj2) {
  let multiplication = document.getElementById("js-task2-span3");
  let resultUpNumber = obj1.upNumber.value * obj2.upNumber.value;
  let resultDownNumber = obj1.downNumber.value * obj2.downNumber.value;
  return (multiplication.innerHTML = `${resultUpNumber}/${resultDownNumber}`);
}
function fracDevision(obj1, obj2) {
  let devision = document.getElementById("js-task2-span4");
  let resultUpNumber = obj1.upNumber.value * obj2.downNumber.value;
  let resultDownNumber = obj1.downNumber.value * obj2.upNumber.value;
  return (devision.innerHTML = `${resultUpNumber}/${resultDownNumber}`);
}

function fracReduction(obj1) {
  let reduction = document.getElementById("js-task2-span5");
  let 
  for (var i = 2; i <= obj1.upNumber.value; i++) {
    if (obj1.upNumber.value % i === 0 && obj1.downNumber.value % i === 0)
      (M = m / i), (N = n / i);
  }
}
let btn2 = document.getElementById("js-task2-btn");
btn2.addEventListener("click", (et) => {
  et.preventDefault();
  fracAddition(firstFraction, secondFraction);
  fracSubtraction(firstFraction, secondFraction);
  fracMiltiplicatin(firstFraction, secondFraction);
  fracDevision(firstFraction, secondFraction);
  // let reduction = document.getElementById("js-task2-span4");
});
