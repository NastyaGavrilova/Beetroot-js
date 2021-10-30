const divTextArea = document.getElementById("js-content__textarea");

document.body.addEventListener("keydown", (event) => {
  const divTextArea = document.createElement("div");

  if ((event.code === "KeyE" || event.code === "Digit5") && event.ctrlKey) {
    event.returnValue = false;
    let elem = document.getElementById("js-content__paragraph");
  }
});
