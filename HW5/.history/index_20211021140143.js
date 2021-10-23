// task 1
class Products {
  constructor(nameOfProduct, amount, bought) {
    this.nameOfProduct = nameOfProduct;
    this.amount = amount;
    this.bought = bought;
  }

  static sortByBought(a, b) {
    // чтобы сначала шли некупленные продукты, а потом – купленные
    if (a.bought == "Не куплено") {
      return -1;
    }
    if (a.bought == "Куплено") {
      return 1;
    }
    return 0;
  }

  static showProduct(a) {
    return `${a.nameOfProduct} (x${a.amount}) ${a.bought}`;
  }
}

let shopList = [
  new Products("Банан", 2, "Не куплен"),
  new Products("Апельсин", 5, "Куплен"),
  new Products("Молоко", 1, " Куплен"),
  new Products("Груша", 10, "Не куплен"),
  new Products("Помидор", 4, "Не куплен"),
];

let btn1 = document.getElementById("js-task1-btn1");
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  let showByBought = document.getElementById("js-task1-span1");
  shopList.sort(Products.sortByBought);
  return (showByBought.innerHTML = shopList.map(Products.showProduct));
});
