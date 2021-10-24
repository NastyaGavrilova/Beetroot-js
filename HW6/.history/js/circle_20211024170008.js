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
    return (spanEl.innerHtml = `Площадь круга = ${square}`);
  }
  lengthCircle(spanEl) {
    let lenCircle = 2 * Math.PI * this.radius;
    return (spanEl.innerHtml = `Длина окружности = ${lenCircle}`);
  }
}

let getRadius = document.getElementById("js-task1-btn1");
getRadius.addEventListener("click", (e) => {
  e.preventDefault();
  let result = document.getElementById("js-task1-span1");
  let circle = new Circle(4);
  circle.showRadius();
});
