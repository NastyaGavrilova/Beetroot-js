// task 1

let shopList = [
  {
    name: "Apple",
    amount: 5,
    bought: "Yes",
  },
  {
    name: "Potatos",
    amount: 7,
    bought: "No",
  },
  {
    name: "Tomatos",
    amount: 8,
    bought: "Yes",
  },
  {
    name: "Milk",
    amount: 2,
    bought: "No",
  },
  {
    name: "Bananas",
    amount: 3,
    bought: "No",
  },
];

function sortBought(a, b, c) {
  return (c.innerHTML =
    (a.bought - b.bought) * 10 + a.name.localeCompare(b.name));
}

let btn1 = document.getElementById("js-task1-btn1");
btn1.addEventListener("click", (e) => {
  let listSortShow = document.getElementById();
});
