// task 1
class Products {
  constructor(nameOfProduct, amount, bought) {
    this.nameOfProduct = nameOfProduct;
    this.amount = amount;
    this.bought = bought;
  }

  static sortByBought(a) {
    if (a.status == "No") return -1;
    if (a.status == "Yes") return 1;
  }

  static showProduct(a) {
    return a.nameOfProduct;
  }
  let shopList = [
    new Product('Банан', 2, 'Не куплен'),
    new Product('Апельсин', 5,'Куплен'),
    new Product('Молоко', 1, 'Куплен'),
    new Product('Груша', 10, 'Не куплен'),
  ];
}
