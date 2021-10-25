// let i = -1;
// let trafficLight = () => {
//   i++;
//   let arr = ["red", "orange", "green"];
//   round = document.querySelectorAll("c-task__round");
//   if (round[i - 1]) {
//     round[i - 1].style.backgroundColor = "";
//   }
//   if (i == arr.length) i = 0;
//   // round[i].style.backgroundColor = arr[i];
//   // let arr = ["red", "orange", "green"];
//   // let round = document.querySelectorAll("c-task__round");
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (round[i - 1]) round[i - 1].style.backgroundColor = "";
//   //   if (i == arr.length) i = 0;
//   //   // round[i].style.backgroundColor = arr[i];
//   // }
// };

// let btn = document.getElementById("js-btn");
// btn.addEventListener("click", () => {
//   trafficLight();
// });

// const trafficLights = document.querySelector("div.c-task__traffic");
// const redlight = document.getElementById("js-red");
// const yellowlight = document.getElementById("js-yellow");
// const greenlight = document.getElementById("js-green");
// const btn = document.getElementById("js-btn");

// btn.addEventListener("click", () => {
//   if (redlight.classList.contains("traffic__red")) {
//     redlight.classList.remove("traffic__red");
//     yellowlight.classList.add("traffic__yellow");
//   } else if (yellowlight.classList.contains("traffic__yellow")) {
//     yellowlight.classList.remove("traffic__yellow");
//     greenlight.classList.add("traffic__green");
//   } else if (greenlight.classList.contains("traffic__green")) {
//     greenlight.classList.remove("traffic__green");
//     redlight.classList.add("traffic__red");
//   }
// });

const trafficLights = document.querySelector("div.c-task__traffic");

const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("green");
const butn = document.getElementById("btn");

butn.addEventListener("click", function () {
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
