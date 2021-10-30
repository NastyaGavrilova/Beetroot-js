const paragraph = document.querySelector("div.c-content__textarea");

document.body.addEventListener("keydown", (event) => {
  const paragraph = document.createElement("div");
  if ((event.code === "KeyE" || event.code === "Digit5") && event.ctrlKey) {
    event.returnValue = false;
    // .c-content__paragraph
    let elem = document.querySelector(".c-content__textarea");
    if (event.code === "KeyE" && elem.nodeName === "DIV") {
      let newEl = document.createElement("textarea");
      newEl.className = "c-content__textarea";
      newEl.textContent = elem.textContent;
      elem.replaceWith(newEl);
    } else if (event.code === "Digit5" && elem.nodeName === "TEXTAREA") {
      let newEl = document.createElement("div");
      // c-content__paragraph
      newEl.className = "c-content__textarea";
      newEl.textContent = elem.value;
      // c-content__textarea
      paragraph.className = "c-content__paragraph";
      newEl.append(paragraph);
      elem.replaceWith(newEl);
    }
  }
});
