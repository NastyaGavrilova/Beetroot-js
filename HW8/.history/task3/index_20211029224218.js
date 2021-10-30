const resDiv = document.getElementById("c-content__block");
const resizer = document.querySelector("div.c-content__block--resizer");

const initResize = (e) => {
  e.preventDefault;
  window.addEventListener("mousemove", startResize);
  window.addEventListener("mouseup", stopResize);
};

const startResize = (e) => {
  resDiv.style.width = e.clientX - resDiv.offsetLeft + "px";
};
const stopResize = (e) => {
  window.removeEventListener("mousemove", startResize);
  window.removeEventListener("mouseup", stopResize);
};

resizer.addEventListener("mousedown", initResize);
