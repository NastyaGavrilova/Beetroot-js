// task 1
class Products {
  constructor(nameOfProduct, amount, bought) {
    this.nameOfProduct = nameOfProduct;
    this.amount = amount;
    this.bought = bought;
  }

  static sortByBought(a, b) {
    // чтобы сначала шли некупленные продукты, а потом – купленные
    if (a.bought == "Не куплен") {
      return -1;
    }
    if (a.bought == "Куплен") {
      return 1;
    }
    return 0;
  }

  // static showProduct(a) {
  //   return `${a.nameOfProduct} (x${a.amount}) ${a.bought}`;
  // }
}
Products.prototype.toString = function () {
  return `${this.pName} (x${this.amount}), ${this.bought}`;
};
let shopList = [
  new Products("Банан", 2, "Не куплен"),
  new Products("Апельсин", 5, "Куплен"),
  new Products("Молоко", 1, " Куплен"),
  new Products("Груша", 10, "Не куплен"),
  new Products("Помидор", 4, "Не куплен"),
].map((prodDef) => new Products(prodDef));

const addToShopList = (prodDef) => {
  // при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую
  const prod = shopList.find(
    (prod) => prod.nameOfProduct === prodDef.nameOfProduct
  );
  if (!prod) return shopList.push(new Products(prodDef));
  prod.amount += prodDef.amount;
};
const printShopList = (spanEl) =>
  shopList.forEach((prod, i) => {
    return (spanEl.innerHTML = `${i + 1}. ${prod}`);
  });

let btn1 = document.getElementById("js-task1-btn1");
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  let showByBought = document.getElementById("js-task1-span1");
  shopList.sort(Products.sortByBought);
  return (showByBought.innerHTML = shopList.map(Products.showProduct));
});

let btn2 = document.getElementById("js-task1-btn2");
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  let showListSpan = document.getElementById("js-task1-span2");
  addToShopList({ nameOfProduct: "Банан", amount: 3, bought: "Не куплен" });
  addToShopList({ pName: "Шоколад", amount: 2, bought: "Не куплен" });
  return (showListSpan.innerHTML = shopList.map(Products.showProduct));
});
