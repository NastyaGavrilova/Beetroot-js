class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get showRadius() {
    return `Радиус = ${this.radius}`;
  }

  set showRadius(newValue) {
    [this.radius] = newValue;
  }

  get showDiametr() {
    return `Диаметр = ${this.radius * 2}`;
  }

  squareCircle(spanEl) {
    let square = Math.PI * Math.pow(this.radius, 2);
    return (spanEl.innerHTML = `Площадь круга = ${square}`);
  }
  lengthCircle(spanEl) {
    let lenCircle = 2 * Math.PI * this.radius;
    return (spanEl.innerHTML = `Длина окружности = ${lenCircle}`);
  }
}

let circle = new Circle(4);
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
  circle.showRadius = 
});
