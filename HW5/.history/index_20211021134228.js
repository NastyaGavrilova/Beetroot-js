// task 1
class Products {
  constructor(params = {}) {
    Object.assign(
      this,
      {
        nameOfProduct: null,
        amount: 1,
        bought: false,
      },
      { ...params }
    );
  }

  static sortByBought(a, b) {
    return (
      (a.bought - b.bought) * 10 +
      a.nameOfProduct.localeCompare(b.nameOfProduct)
    );
  }
}
Products.prototype.toString = function () {
  return `${this.nameOfProduct} (x${this.amount}), ${
    this.bought ? "Куплено" : "Не куплено"
  }`;
};
let shopList = [
  new Products("Банан", 2),
  new Products("Апельсин", 5, true),
  new Products("Молоко", 1, true),
  new Products("Груша", 10),
  new Products("Помидор", 4),
];
const printShopList = (spanRes) => {
  return shopList.forEach((prod, i) => {
    console.log(`${i + 1}. ${prod}`);
    return (spanRes.innerHTML = `${i + 1}. ${prod}`);
  });
};

let btn1 = document.getElementById("js-task1-btn1");
btn1.addEventListener("click", (e) => {
  // e.preventDefault();
  let showByBought = document.getElementById("js-task1-span1");
  shopList.sort(Products.sortByBought);
  printShopList(showByBought);
});
