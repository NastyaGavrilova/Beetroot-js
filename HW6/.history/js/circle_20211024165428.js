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
  lengthCircle(spanEl){
    let lenCircle = 2*
  }
}
