const trafficLights = document.querySelector("div.traffic__light");

const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("green");
const btn = document.getElementById("btn");

// переключатель по цвету
btn.addEventListener("click", function () {
  if (redlight.classList.contains("traffic__red")) {
    redlight.classList.remove("traffic__red");
    yellowlight.classList.add("traffic__yellow");
  } else if (yellowlight.classList.contains("traffic__yellow")) {
    yellowlight.classList.remove("traffic__yellow");
    greenlight.classList.add("traffic__green");
  } else if (greenlight.classList.contains("traffic__green")) {
    greenlight.classList.remove("traffic__green");
    redlight.classList.add("traffic__red");
  }
});
