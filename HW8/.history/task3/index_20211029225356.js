const resDiv = document.getElementById("js-content__block");
const resizer = document.querySelector("div.c-content__block--resizer");

let startResizer = (e) => {
  resDiv.style.width = e.clientX - resDiv.offsetLeft + "px";
  resDiv.style.height = e.clientY - resDiv.offsetTop + "px";
};

let stopResizer = (e) => {
  window.removeEventListener("mousemove", startResizer);
  window.removeEventListener("mouseup", stopResizer);
};

let initialResize = (e) => {
  e.preventDefault();
  window.addEventListener("mousemove", startResizer);
  window.addEventListener("mouseup", stopResizer);
};

resizer.addEventListener("mosedown", initialResize);
