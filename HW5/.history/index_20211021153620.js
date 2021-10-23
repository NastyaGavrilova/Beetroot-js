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

let shopList = [
  { nameOfProduct: "Банан", amount: 2 },
  { nameOfProduct: "Апельсин", amount: 5, bought: true },
  { nameOfProduct: "Молоко", bought: true },
  { nameOfProduct: "Груша", amount: 10 },
].map((prodDef) => new Product(prodDef));

let addToShopList = (prodDef) => {
  // при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую
  let prod = shopList.find(
    (prod) => prod.nameOfProduct === prodDef.nameOfProduct
  );
  if (!prod) return shopList.push(new Product(prodDef));
  prod.amount += prodDef.amount;

  // prod.bought += false;
};

let boughtProduct = (product) => {
  let prod = shopList.find(
    (prod) => prod.nameOfProduct === product.nameOfProduct
  );
  if (!prod.bought) return (prod.bought += true);
};
let btn1 = document.getElementById("js-task1-btn1");
btn1.addEventListener("click", (e) => {
  e.preventDefault();
  let showSortByBought = document.getElementById("js-task1-span1");
  shopList.sort(Product.sortDefault);
  return (showSortByBought.innerHTML = shopList.map(Product.showProduct));
});

let btn1_2 = document.getElementById("js-task1-btn2");
btn1_2.addEventListener("click", (e) => {
  e.preventDefault();
  let showAddProduct = document.getElementById("js-task1-span2");
  let nameProd = document.getElementById("js-task1-input1");
  let amountProd = document.getElementById("js-task1-input2");
  let statusProd = document.getElementById("js-task1-input3");
  addToShopList({
    _nameOfProduct: nameProd.value,
    get nameOfProduct() {
      return this._nameOfProduct;
    },
    set nameOfProduct(value) {
      this._nameOfProduct = value;
    },
    amount: +amountProd.value,
    bought: statusProd.value,
  });
  shopList.sort(Product.sortDefault);
  return (showAddProduct.innerHTML = shopList.map(Product.showProduct));
});

let btn1_3 = document.getElementById("js-task1-btn3");
btn1_3.addEventListener("click", (e) => {
  let showBoughtPoduct = document.getElementById("js-task1-span3");
  let nameProduct = document.getElementById("js-task1-input4");
  boughtProduct({ nameOfProduct: nameProduct.value });
  shopList.sort(Product.sortDefault);
  return (showBoughtPoduct.innerHTML = shopList.map(Product.showProduct));
});
// shopList.sort(Product.sortDefault);
// printShopList();
// console.log("---");

// addToShopList({ nameOfProduct: "Банан", amount: 3 });
// addToShopList({ nameOfProduct: "Шоколад", amount: 2 });
// shopList.sort(Product.sortDefault);
// printShopList();
