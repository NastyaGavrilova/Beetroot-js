const mainDiv = document.getElementById("task3");

const wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute("id", "js-task3-div");
wrapperDiv.className = "task3__wrapper";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "js-task3-table");
tableTag.className = "task3__table";

wrapperDiv.append(tableTag);
mainDiv.append(wrapperDiv);

class Employee {
  constructor(name, position, department, salary) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}
const arrEmp = [
  new Employee("John Doe", "Manager", "Sales", 3500),
  new Employee("Bill Freeman", "Manager", "Sales", 5000),
  new Employee("Uno Dirck", "Manager", "Sales", 7800),
  new Employee("Erick Rapid", "Team Lead", "Desktop Solutions", 9000),
  new Employee("Chris Rea", ".Net Junior Developer", "Desktop Solutions", 1000),
  new Employee("Tommy Lee", "Manager", "Sales", 6600),
  new Employee("Jeck Ward", "DevOps Engineer", "DevOps", 8900),
];
class EmpTable {
  constructor(arr) {
    this.arr = arr;
  }
  // метод
  getHtml() {
    const table = document.getElementById("js-task3-table");
    const array = this.arr;
    const head = document.createElement("tr");
    head.setAttribute(
      "style",
      "font-size: 18px; color: #2E3233; font-weight: bold"
    );
    const th1 = document.createElement("th");
    th1.textContent = "Имя";
    const th2 = document.createElement("th");
    th2.textContent = "Позиция";
    const th3 = document.createElement("th");
    th3.textContent = "Отделение";
    const th4 = document.createElement("th");
    th4.textContent = "Зарплата ($)";
    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);
    table.append(head);
    for (let i in array) {
      let tr = document.createElement("tr");
      table.append(tr);
      for (let j in array[i]) {
        let td = document.createElement("td");
        td.textContent = array[i][j];
        tr.append(td);
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
