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

  static sortByBought(a) {
    if (a.bought == "Не куплено") return -1;
    if (a.bought == "Куплено") return 1;
    return 0;
  }
  static showProduct(a, spanRes) {
    return (spanRes.innerHTML = `${а.nameOfProduct} (x${а.amount}), ${а.bought}`);
  }
}

let shopList = [
  new Products("Банан", 2, "Не куплено"),
  new Products("Апельсин", 5, "Куплено"),
  new Products("Молоко", 1, "Куплено"),
  new Products("Груша", 10, "Не куплено"),
  new Products("Помидор", 4, "Не куплено"),
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
