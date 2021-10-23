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
}
