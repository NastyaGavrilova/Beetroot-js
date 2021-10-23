// task 1

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
  // словие сортировки для метода sort
  static sortDefault(a, b) {
    return (
      (a.bought - b.bought) * 10 +
      a.nameOfProduct.localeCompare(b.nameOfProduct)
    );
  }
  // метод для вывода списка
  static showProduct(a) {
    return ` ${a.nameOfProduct} (x${a.amount}) ${
      a.bought ? "куплено" : "не куплено"
    }`;
  }
}
// масив обьектов продуктов
let shopList = [
  { nameOfProduct: "Банан", amount: 2 },
  { nameOfProduct: "Апельсин", amount: 5, bought: true },
  { nameOfProduct: "Молоко", bought: true },
  { nameOfProduct: "Груша", amount: 10 },
].map((prodDef) => new Product(prodDef));

// добавление покупки
let addToShopList = (prodDef) => {
  // при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую
  let prod = shopList.find(
    (prod) => prod.nameOfProduct === prodDef.nameOfProduct
  );
  if (!prod) return shopList.push(new Product(prodDef));
  prod.amount += prodDef.amount;
};
// функция куаленного продукта
let boughtProduct = (product) => {
  // при вводе существующего продукта его статус меняеться на "куплено"
  let prod = shopList.find(
    (prod) => prod.nameOfProduct === product.nameOfProduct
  );
  if (!prod.bought) return (prod.bought += true);
};
// кнопка для функции сортировки и вівода
let btn1 = document.getElementById("js-task1-btn1");
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  let showSortByBought = document.getElementById("js-task1-span1");
  shopList.sort(Product.sortDefault);
  return (showSortByBought.innerHTML = shopList.map(Product.showProduct));
});
// кнопка для добавления сортировки и вівода
let btn1_2 = document.getElementById("js-task1-btn2");
btn1_2.addEventListener("click", (e) => {
  e.preventDefault();
  let showAddProduct = document.getElementById("js-task1-span2");
  let nameProd = document.getElementById("js-task1-input1");
  let amountProd = document.getElementById("js-task1-input2");
  addToShopList({
    _nameOfProduct: nameProd.value,
    get nameOfProduct() {
      return this._nameOfProduct;
    },
    set nameOfProduct(value) {
      this._nameOfProduct = value;
    },
    amount: +amountProd.value,
  });
  shopList.sort(Product.sortDefault);
  return (showAddProduct.innerHTML = shopList.map(Product.showProduct));
});
// кнопка для изменения статуса продукта, сортировки и вівода
let btn1_3 = document.getElementById("js-task1-btn3");
btn1_3.addEventListener("click", (e) => {
  let showBoughtPoduct = document.getElementById("js-task1-span3");
  let nameProduct = document.getElementById("js-task1-input4");
  boughtProduct({ nameOfProduct: nameProduct.value });
  shopList.sort(Product.sortDefault);
  return (showBoughtPoduct.innerHTML = shopList.map(Product.showProduct));
});

// task 2

class ShopCheck {
  constructor(params = {}) {
    Object.assign(
      this,
      {
        nameShopProduct: null,
        price: 1,
        amount: 1,
      },
      { ...params }
    );
  }
  // static showProductsCheck(a) {
  //   return `${a.nameShopProduct} (x${a.amount}), цена ${a.price} за 1 ед.`;
  // }
  // словие сортировки для метода sort
  // static sortDefault(a, b) {
  //   return (
  //     (a.bought - b.bought) * 10 +
  //     a.nameOfProduct.localeCompare(b.nameOfProduct)
  //   );
  // }
  // метод для вывода списка
  // static showProduct(a) {
  //   return ` ${a.name} (x${a.amount}) ${a.bought ? "куплено" : "не куплено"}`;
  // }
}
let shopCheck = [
  {
    nameOfProduct: "Зубная паста",
    price: 30,
  },
  {
    nameOfProduct: "Бананы",
    price: 5,
    amount: 4,
  },
  {
    nameOfProduct: "Губки (упаковка)",
    price: 30,
    amount: 4,
  },
  {
    nameOfProduct: "Капуста",
    price: 35,
    amount: 2,
  },
  {
    nameOfProduct: "Кастрюля",
    price: 150,
    amount: 1,
  },
];

ShopCheck.prototype.toString = function checkToString() {
  return `${this.nameOfProduct} (x${this.amount}), ${this.price}`;
};
let showCheckList = (spanEl) => {
  let str = " ";
  for (let i = 1; i < shopCheck.length; i++) {
    if (shopCheck[i] !== undefined)
      str += i + " - " + shopCheck[i].toString() + "<br>";
    console.log(shopCheck[i].toString());
  }
  return (spanEl.innerHTML = str);
};

let btn2 = document.getElementById("js-task2-btn1");
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  let outputShopCheck = document.getElementById("js-task2-span1");
  showCheckList(outputShopCheck);
});
