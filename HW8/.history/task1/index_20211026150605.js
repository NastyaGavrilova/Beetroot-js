const divTextArea = document.getElementById("js-content__textarea");

document.body.addEventListener("keydown", (event) => {
  const divTextArea = document.createElement("div");

  if ((event.code === "KeyE" || event.code === "Equal") && event.ctrlKey) {
    event.returnValue = false;
    let elem = document.querySelector(".c-content__paragraph");
    if (event.code === "KeyE" && elem.nodeName === "DIV") {
      let newEl = document.createElement("textarea");
      newEl.setAttribute("max-width", "700px");
      // newEl.setAttribute("rows", 20);
      newEl.className = "content__textarea";
      newEl.textContent = elem.textContent;
      elem.replaceWith(newEl);
    } else if (event.code === "Equal" && elem.nodeName == "textarea") {
      let newEl = document.createElement("div");
      newEl.className = "content__paragraph";
      newEl.textContent = elem.value;
      divTextArea.className = "c-content__textarea";
    }
  }
});
