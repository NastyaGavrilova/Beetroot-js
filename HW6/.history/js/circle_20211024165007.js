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
}
