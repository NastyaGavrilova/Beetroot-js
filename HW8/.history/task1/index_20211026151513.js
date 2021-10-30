const divTextArea = document.getElementById("js-content__textarea");

document.body.addEventListener("keydown", (event) => {
  const divTextArea = document.createElement("div");

  if ((event.code === "KeyE" || event.code === "Equal") && event.ctrlKey) {
    event.returnValue = false;
    let elem = document.querySelector(".c-content__paragraph");
    if (event.code === "KeyE" && elem.nodeName === "DIV") {
      let newEl = document.createElement("textarea");
      newEl.setAttribute("cols", 30);
      newEl.setAttribute("rows", 20);
      newEl.className = "content__textarea";
      newEl.textContent = elem.textContent;
      elem.replaceWith(newEl);
    } else if (
      event.code === "Equal" &&
      elem.className === "content__textarea"
    ) {
      let newEl = document.createElement("div");
      newEl.className = "content__paragraph";
      newEl.textContent = elem.value;
      divTextArea.className = "c-content__textarea";
      newEl.append(divTextArea);
      elem.replaceWith(newEl);
    }
  }
});

// const resizer = document.querySelector("div.content__textarea--resizer");

// document.body.addEventListener("keydown", (event) => {
//   const resizer = document.createElement("div");
//   if ((event.code === "KeyE" || event.code === "Digit5") && event.ctrlKey) {
//     event.returnValue = false;
//     let elem = document.querySelector(".content__textarea");
//     if (event.code === "KeyE" && elem.nodeName === "DIV") {
//       let newEl = document.createElement("textarea");
//       newEl.setAttribute("cols", 50);
//       newEl.setAttribute("rows", 20);
//       newEl.className = "content__textarea";
//       newEl.textContent = elem.textContent;
//       elem.replaceWith(newEl);
//     } else if (event.code === "Digit5" && elem.nodeName === "TEXTAREA") {
//       let newEl = document.createElement("div");
//       newEl.className = "content__textarea";
//       newEl.textContent = elem.value;
//       resizer.className = "content__textarea--resizer";
//       newEl.append(resizer);
//       elem.replaceWith(newEl);
//     }
//   }
// });
