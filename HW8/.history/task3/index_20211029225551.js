const resDiv = document.getElementById("js-content__block");
const resizer = document.querySelector("div.c-content__block--resizer");

const startResize = (e) => {
  resDiv.style.width = e.clientX - resDiv.offsetLeft + "px";
  resDiv.style.height = e.clientY - resDiv.offsetTop + "px";
};
const stopResize = () => {
  window.removeEventListener("mousemove", startResize);
  window.removeEventListener("mouseup", stopResize);
};
const initResize = (e) => {
  e.preventDefault;
  window.addEventListener("mousemove", startResize);
  window.addEventListener("mouseup", stopResize);
};

resizer.addEventListener("mousedown", initResize);
