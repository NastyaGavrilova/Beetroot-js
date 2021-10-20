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
btn1_1.addEventListener("click", (e) => {
  let distance = form.elements.distance;
  let averageSpeed = form.elements.avr_speed;
  let time = document.getElementById("js-tak1-span1");
  let timeInWay = distance / averageSpeed;
  let timeInRest =
    timeInWay % 4 == 0 ? ((timeInWay / 4) | 0) - 1 : (timeInWay / 4) | 0;
});
