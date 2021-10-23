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
  // сортировка сначала дорогие продуты
  static sortExpensive(a, b) {
    if (a.amount * a.price < b.amount * b.price) {
      return 1;
    }
    if (a.amount * a.price > b.amount * b.price) {
      return -1;
    }
    return 0;
  }
}
let shopCheck = [
  {
    nameOfProduct: "Зубная паста",
    price: 30,
  },
  {
    nameOfProduct: "Бананы",
    price: 10,
    amount: 20,
  },
  {
    nameOfProduct: "Губки (упаковка)",
    price: 30,
    amount: 4,
  },
  {
    nameOfProduct: "Капуста",
    price: 90,
    amount: 2,
  },
  {
    nameOfProduct: "Кастрюля",
    price: 150,
    amount: 1,
  },
].map((prodDef) => new ShopCheck(prodDef));

// переобразование метода toString()
ShopCheck.prototype.toString = function checkToString() {
  return `${this.nameOfProduct} (x${this.amount}), цена ${this.price}грн за 1 ед.`;
};
// функция вывода массива обьектов
let showCheckList = (spanEl) => {
  let str = " ";
  for (let i = 0; i < shopCheck.length; i++) {
    if (shopCheck[i] !== undefined)
      str += i + " - " + shopCheck[i].toString() + "<br>";
  }
  return (spanEl.innerHTML = str);
};
// функция подсчета общей суммы покупок
let sumCheck = (arr) => {
  let result = 0;
  const initialValue = 0;
  result = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.price * currentValue.amount;
  }, initialValue);
  return result;
};

// функция подсчета средней стоимости товара в чеке
let mediumPriceInChek = (arr) => {
  let result = 0;
  result = sumCheck(arr) / arr.length;
  return result;
};

let btn2 = document.getElementById("js-task2-btn1");
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  let outputShopCheck = document.getElementById("js-task2-span1");
  showCheckList(outputShopCheck);
});

let btn2_1 = document.getElementById("js-task2-btn2");
btn2_1.addEventListener("click", (e) => {
  e.preventDefault();
  let outputSumCheck = document.getElementById("js-task2-span2");
  outputSumCheck.innerHTML = sumCheck(shopCheck) + " грн";
});

let btn2_3 = document.getElementById("js-task2-btn3");
btn2_3.addEventListener("click", (e) => {
  e.preventDefault();
  let outputExpensiveProd = document.getElementById("js-task2-span3");
  shopCheck.sort(ShopCheck.sortExpensive);
  outputExpensiveProd.innerHTML = shopCheck[0].toString();
});

let btn2_4 = document.getElementById("js-task2-btn4");
btn2_4.addEventListener("click", (e) => {
  e.preventDefault();
  let outputAvgPrice = document.getElementById("js-task2-span4");
  outputAvgPrice.innerHTML = mediumPriceInChek(shopCheck) + " грн";
});

// task3

let styles = [
  {
    color: "palevioletred",
    "font-weight": "bold",
    padding: "10px",
    border: "4px double #E800FD",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorem. Nam, dignissimos alias laborum, minima doloremque repudiandae nostrum est ea ipsa atque similique voluptate voluptates blanditiis vero! Molestiae, similique iusto.",
  },
  {
    color: "blue",
    "font-weight": "bold",
    padding: "10px",
    border: "4px solid #1E2A9F",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolorem. Nam, dignissimos alias laborum, minima doloremque repudiandae nostrum est ea ipsa atque similique voluptate voluptates blanditiis vero! Molestiae, similique iusto.",
  },
];

function newContentStyles() {
  styles.forEach((item) => {
    document.write(
      `<p style = "color: ${item.color}; font-weight: ${item["font-weight"]}; padding: ${item["padding"]}; border: ${item.border}">${item.text}</p> `
    );
  });
}
let btn3 = document.getElementById("js-task3-btn");
btn3.addEventListener("click", (e) => {
  e.preventDefault();
  newContentStyles();
});

// task 4

class Audiences {
  constructor(params = {}) {
    Object.assign(
      this,
      {
        name: null,
        seats: 1,
        amount: 1,
      },
      { ...params }
    );
  }
}
