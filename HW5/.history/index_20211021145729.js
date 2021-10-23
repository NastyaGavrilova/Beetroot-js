// task 1
// class Products {
//   constructor(params = {}) {
//     Object.assign(
//       this,
//       {
//         nameOfProduct: null,
//         amount: 1,
//         bought: false,
//       },
//       { ...params }
//     );
//   }

//   static sortByBought(a, b) {
//     // чтобы сначала шли некупленные продукты, а потом – купленные
//     if (a.bought == false) {
//       return -1;
//     }
//     if (a.bought == true) {
//       return 1;
//     }
//     return 0;
//   }

//   // static showProduct(a) {
//   //   return `${a.nameOfProduct} (x${a.amount}) ${a.bought}`;
//   // }
// }
// Products.prototype.toString = function () {
//   return `${this.nameOfProduct} (x${this.amount}), ${
//     this.bought ? "куплено" : "не куплено"
//   }`;
// };
// let shopList = [
//   new Products("Банан", 2),
//   new Products("Апельсин", 5, true),
//   new Products("Молоко", 1, true),
//   new Products("Груша", 10),
//   new Products("Помидор", 4),
// ].map((prodDef) => new Products(prodDef));

// const addToShopList = (prodDef) => {
//   // при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую
//   const prod = shopList.find(
//     (prod) => prod.nameOfProduct === prodDef.nameOfProduct
//   );
//   if (!prod) return shopList.push(new Products(prodDef));
//   prod.amount += prodDef.amount;
// };
// const printShopList = (spanEl) =>
//   shopList.forEach((prod, i) => {
//     return (spanEl.innerHTML = `${i + 1}. ${prod}`);
//   });

// let btn1 = document.getElementById("js-task1-btn1");
// btn1.addEventListener("click", (e) => {
//   e.preventDefault();
//   let showByBought = document.getElementById("js-task1-span1");
//   shopList.sort(Products.sortByBought);
//   printShopList(showByBought);
//   // return (showByBought.innerHTML = shopList.map(Products.showProduct));
// });

// let btn2 = document.getElementById("js-task1-btn2");
// btn2.addEventListener("click", (e) => {
//   e.preventDefault();
//   let showListSpan = document.getElementById("js-task1-span2");
//   addToShopList({ nameOfProduct: "Банан", amount: 3, bought: "Не куплен" });
//   addToShopList({ pName: "Шоколад", amount: 2, bought: "Не куплен" });
//   printShopList(showListSpan);
//   // return (showListSpan.innerHTML = shopList.map(Products.showProduct));
// });
class Product {
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

  static sortDefault(a, b) {
    return (
      (a.bought - b.bought) * 10 +
      a.nameOfProduct.localeCompare(b.nameOfProduct)
    );
  }
  static showProduct(a) {
    return ` ${a.nameOfProduct} (x${a.amount}) ${
      a.bought ? "куплено" : "не куплено"
    }`;
  }
}

const shopList = [
  { nameOfProduct: "Банан", amount: 2 },
  { nameOfProduct: "Апельсин", amount: 5, bought: true },
  { nameOfProduct: "Молоко", bought: true },
  { nameOfProduct: "Груша", amount: 10 },
].map((prodDef) => new Product(prodDef));

const addToShopList = (prodDef) => {
  // при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую
  const prod = shopList.find(
    (prod) => prod.nameOfProduct === prodDef.nameOfProduct
  );
  if (!prod) return shopList.push(new Product(prodDef));
  prod.amount += prodDef.amount;
};

let btn1 = document.getElementById("js-task1-btn1");
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  let showSortByBought = document.getElementById("js-task1-span1");
  shopList.sort(Product.sortDefault);
  return (showSortByBought.innerHTML = shopList.map(Product.showProduct));
});

let btn2 = document.getElementById("js-task1-btn2");
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  let showAddProduct = document.getElementById("js-task1-span2");
  addToShopList({ nameOfProduct: "Банан", amount: 3 });
  addToShopList({ nameOfProduct: "Шоколад", amount: 2 });
  shopList.sort(Product.sortDefault);
  return (showAddProduct.innerHTML = shopList.map(Product.showProduct));
});
// shopList.sort(Product.sortDefault);
// printShopList();
// console.log("---");

// addToShopList({ nameOfProduct: "Банан", amount: 3 });
// addToShopList({ nameOfProduct: "Шоколад", amount: 2 });
// shopList.sort(Product.sortDefault);
// printShopList();
