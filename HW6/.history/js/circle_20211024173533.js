class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get showRadius() {
    return `Радиус = ${this.radius}`;
  }

  set showRadius(newValue) {
    this.radius = newValue;
  }

  get showDiametr() {
    return this.radius * 2;
  }

  areaCircle(spanEl) {
    let square = Math.PI * Math.pow(this.radius, 2);
    return (spanEl.innerHTML = `Площадь круга = ${square}`);
  }
  lengthCircle(spanEl) {
    let lenCircle = 2 * Math.PI * this.radius;
    return (spanEl.innerHTML = `Длина окружности = ${lenCircle}`);
  }
}
let circle = new Circle(5);
// console.log(circle.showRadius);
// console.log(circle.showDiametr);
// console.log(circle.areaCircle().toFixed(2));
// console.log(circle.circumference().toFixed(2));

let getRadius = document.getElementById("js-task1-btn1");
getRadius.addEventListener("click", (e) => {
  e.preventDefault();
  let result = document.getElementById("js-task1-span1");
  return (result.innerHTML = circle.showRadius);
});

let setRadius = document.getElementById("js-task1-btn2");
setRadius.addEventListener("click", (e) => {
  e.preventDefault();
  let result = document.getElementById("js-task1-span2");
  let setR = document.getElementById("js-task1-input1");
  circle.showRadius = +setR.value;
  return (result.innerHTML = circle.showRadius);
});

let getDiametr = document.getElementById("js-task1-btn3");
getDiametr.addEventListener("click", () => {
  let result = document.getElementById("js-task1-span3");
  let setR = document.getElementById("js-task1-input1");
  console.log(circle.getDiametr);
  circle.showRadius = +setR.value;
  return (result.innerHTML = circle.getDiametr);
});
