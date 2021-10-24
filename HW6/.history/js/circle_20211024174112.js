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
Circle.prototype = {};
let circle = new Circle();

let setRadius = document.getElementById("js-task1-btn1");
setRadius.addEventListener("click", (e) => {
  e.preventDefault();
  let result = document.getElementById("js-task1-span1");
  let setR = document.getElementById("js-task1-input1");
  circle.showRadius = +setR.value;
  return (result.innerHTML = circle.showRadius);
});

let getDiametr = document.getElementById("js-task1-btn2");
getDiametr.addEventListener("click", () => {
  let result = document.getElementById("js-task1-span2");
  let setR = document.getElementById("js-task1-input1");
  console.log(circle.getDiametr);
  circle.showRadius = +setR.value;
  return (result.innerHTML = circle.getDiametr);
});
