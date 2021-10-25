class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // геттер возвращает радиус
  get showRadius() {
    return `Радиус = ${this.radius}`;
  }

  // сеттер принимает радиус
  set showRadius(newValue) {
    this.radius = newValue;
  }

  // геттер возвращает диаметр
  get showDiametr() {
    return this.radius * 2;
  }

  // метод площади круга
  areaCircle(spanEl) {
    let square = Math.PI * Math.pow(this.radius, 2);
    return (spanEl.innerHTML = `Площадь круга = ${square.toFixed(2)}`);
  }
  // метод длині круга
  lengthCircle(spanEl) {
    let lenCircle = 2 * Math.PI * this.radius;
    return (spanEl.innerHTML = `Длина окружности = ${lenCircle.toFixed(2)}`);
  }
}
let circle = new Circle(5);

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
  console.log(circle.showDiametr);
  circle.showRadius = +setR.value;
  return (result.innerHTML = circle.showDiametr);
});

let methods = document.getElementById("js-task1-btn4");
methods.addEventListener("click", () => {
  let result = document.getElementById("js-task1-span4");
  let result1 = document.getElementById("js-task1-span5");
  circle.areaCircle(result);
  circle.lengthCircle(result1);
});
