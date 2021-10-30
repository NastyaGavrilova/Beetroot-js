const mainDiv = document.getElementById("js-main");

const wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute("id", "js-main__wrspper");
wrapperDiv.className = "c-main__wrapper";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "js-table");
tableTag.className = "c-table";

const tableHead = document.createElement("thead");
tableHead.setAttribute("id", "js-thead");
tableHead.className = "c-thead";

const tableBody = document.createElement("tbody");
tableBody.setAttribute("id", "js-tbody");
tableBody.className = "c-tbody";

tableTag.append(tableHead, tableBody);
wrapperDiv.append(tableTag);
mainDiv.append(wrapperDiv);

// класс работников
class Employee {
  constructor(name, position, department, salary) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}
// массив обьектов работников
const arrEmp = [
  new Employee("John Doe", "Manager", "Sales", 3500),
  new Employee("Bill Freeman", "Manager", "Sales", 5000),
  new Employee("Uno Dirck", "Manager", "Sales", 7800),
  new Employee("Erick Rapid", "Team Lead", "Desktop Solutions", 9000),
  new Employee("Chris Rea", ".Net Junior Developer", "Desktop Solutions", 1000),
  new Employee("Tommy Lee", "Manager", "Sales", 6600),
  new Employee("Jeck Ward", "DevOps Engineer", "DevOps", 8900),
];
// класс таблица работников
class EmpTable {
  constructor(arr) {
    this.arr = arr;
  }

  getHtml() {
    const array = this.arr;
    const table = document.getElementById("js-table");
    const tHead = document.getElementById("js-thead");
    const tBody = document.getElementById("js-tbody");
    const tR = document.createElement("tr");
    tR.setAttribute(
      "style",
      "font-size: 18px; color: #2E3233; font-weight: bold;"
    );

    const th1 = document.createElement("th");
    th1.setAttribute("id", "th-name");
    th1.textContent = "Имя";
    const th2 = document.createElement("th");
    th2.setAttribute("id", "th-position");
    th2.textContent = "Позиция";
    const th3 = document.createElement("th");
    th3.setAttribute("id", "th-department");
    th3.textContent = "Отделение";
    const th4 = document.createElement("th");
    th4.setAttribute("id", "th-salary");
    th4.textContent = "Зарплата ($)";
    tR.append(th1);
    tR.append(th2);
    tR.append(th3);
    tR.append(th4);
    tHead.append(tR);
    table.append(tHead);
    for (let i in array) {
      let trow = document.createElement("tr");
      tBody.append(trow);
      table.append(tBody);
      for (let j in array[i]) {
        let td = document.createElement("td");
        td.textContent = array[i][j];
        trow.append(td);
        td.setAttribute(
          "style",
          "padding: 5px 5px; font-size: 18px; color: #2E3233; font-weight: bold;"
        );
      }
    }
    table.setAttribute("border", "2");
    table.setAttribute("bordercolor", "#2BFEDE");
    table.setAttribute("width", "60%");
    table.setAttribute("style", "margin: auto; background-color: #11A18C;");
  }
}

const tableObj = new EmpTable(arrEmp);
tableObj.getHtml();

document.addEventListener("DOMContentLoaded", () => {
  const getSort() = ({taget})
});
