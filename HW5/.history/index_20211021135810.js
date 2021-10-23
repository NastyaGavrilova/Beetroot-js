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
    if (a.bought == "Не куплено") {
      return -1;
    }
    if (a.bought == "Куплено") {
      return 1;
    }
    return 0;
  }
}

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
  return (showByBought.innerHTML = shopList.map(Products.showProduct));
});
