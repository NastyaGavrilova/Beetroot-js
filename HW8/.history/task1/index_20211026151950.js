// const divTextArea = document.getElementById("js-content__textarea");

// document.body.addEventListener("keydown", (event) => {
//   const divTextArea = document.createElement("div");

//   if ((event.code === "KeyE" || event.code === "Equal") && event.ctrlKey) {
//     event.returnValue = false;
//     let elem = document.querySelector(".c-content__paragraph");
//     if (event.code === "KeyE" && elem.nodeName === "DIV") {
//       let newEl = document.createElement("textarea");
//       newEl.setAttribute("cols", 30);
//       newEl.setAttribute("rows", 20);
//       newEl.className = "content__textarea";
//       newEl.textContent = elem.textContent;
//       elem.replaceWith(newEl);
//     } else if (event.code === "Equal" && elem.nodeName === "TEXTAREA") {
//       let newEl = document.createElement("div");
//       newEl.className = "content__paragraph";
//       newEl.textContent = elem.value;
//       divTextArea.className = "c-content__textarea";
//       newEl.append(divTextArea);
//       elem.replaceWith(newEl);
//     }
//   }
// });

const paragraph = document.querySelector("div.c-content__paragraph");

document.body.addEventListener("keydown", (event) => {
  const paragraph = document.createElement("div");
  if ((event.code === "KeyE" || event.code === "Digit5") && event.ctrlKey) {
    event.returnValue = false;
    let elem = document.querySelector(".c-content__textarea");
    if (event.code === "KeyE" && elem.nodeName === "DIV") {
      let newEl = document.createElement("textarea");
      // newEl.setAttribute("cols", 50);
      // newEl.setAttribute("rows", 20);
      newEl.className = "c-content__textarea";
      newEl.textContent = elem.textContent;
      elem.replaceWith(newEl);
    } else if (event.code === "Digit5" && elem.nodeName === "TEXTAREA") {
      let newEl = document.createElement("div");
      newEl.className = "c-content__textarea";
      newEl.textContent = elem.value;
      paragraph.className = "c-content__paragraph";
      newEl.append(paragraph);
      elem.replaceWith(newEl);
    }
  }
});
