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
    // чтобы сначала шли некупленные продукты, а потом – купленные
    return (
      (a.bought - b.bought) * 10 +
      a.nameOfProduct.localeCompare(b.nameOfProduct)
    );
  }
}
Products.prototype.toString = function () {
  return `${this.pName} (x${this.amount}), ${
    this.bought ? "куплено" : "Не куплено"
  }`;
};

const printShopList = () =>
  shopList.forEach((prod, i, spanRes) => {
    return (spanRes.innerHTML = `${i + 1}. ${prod}`);
  });

let shopList = [
  new Products("Банан", 2, "Не куплено"),
  new Products("Апельсин", 5, "Куплено"),
  new Products("Молоко", 1, " Куплено"),
  new Products("Груша", 10, "Не куплено"),
  new Products("Помидор", 4, "Не куплено"),
];

let btn1 = document.getElementById("js-task1-btn1");
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  let showByBought = document.getElementById("js-task1-span1");
  shopList.sort(Product.sortByBought);
  printShopList(showByBought);
});
