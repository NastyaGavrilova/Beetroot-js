// task 1
let car = {
  producer: "Volkswagen",
  model: "Tiguan",
  year: 2007,
  avgSpeed: 120,
};

let btn1 = document.getElementById("js-task1-btn");
btn1.addEventListener("click", (e) => {
  let information = document.getElementById("js-tak1-span");
  return (information.innerHTML =
    "Producer: " +
    car.producer +
    ",\nModel: " +
    car.model +
    ",\nAge of issue: " +
    car.year +
    ",\nAverage speed: " +
    car.avgSpeed +
    " km/h");
});

let btn1_1 = document.getElementById("js-task1-btn1");
btn1_1.addEventListener("click", (event) => {
  event.preventDefault();
  const distance = document.getElementById("js-task1-input1");
  const averageSpeed = document.getElementById("js-task1-input2");
  let time = document.getElementById("js-task1-span1");
  let timeInWay = Math.round(distance.value / averageSpeed.value);
  let timeInRest =
    timeInWay % 4 == 0 ? ((timeInWay / 4) | 0) - 1 : (timeInWay / 4) | 0;
  let timeTotal = timeInWay + timeInRest;
  return (time.innerHTML = timeTotal);
});

// task 2
let firstNumerator = document.getElementById("js-task2-input1");
let firstDenominator = document.getElementById("js-task2-input2");
let secondNumerator = document.getElementById("js-task2-input3");
let secondDenominator = document.getElementById("js-task2-input4");

function Fraction(upNumber, downNumber) {
  return { upNumber: upNumber, downNumber: downNumber };
}
let firstFraction = Fraction(firstNumerator, firstDenominator);
let secondFraction = Fraction(secondNumerator, secondDenominator);

function fracAddition(obj1, obj2) {
  let addition = document.getElementById("js-task2-span1");
  let resultUpNumber =
    obj1.upNumber.value * obj2.downNumber.value +
    obj2.upNumber.value * obj1.downNumber.value;
  let resultDownNumber = obj1.downNumber.value * obj2.downNumber.value;
  if (obj1.upNumber.value != 0 || obj2.upNumber.value != 0) {
    if (obj1.downNumber.value != 0 && obj2.downNumber.value != 0) {
      return (addition.innerHTML = `${resultUpNumber}/${resultDownNumber}`);
    } else {
      return (addition.innerHTML = "Деление на 0 невозможно!");
    }
  } else {
    return (addition.innerHTML = 0);
  }
}
function fracSubtraction(obj1, obj2) {
  let subtraction = document.getElementById("js-task2-span2");
  let resultUpNumber =
    obj1.upNumber.value * obj2.downNumber.value -
    obj2.upNumber.value * obj1.downNumber.value;
  let resultDownNumber = obj1.downNumber.value * obj2.downNumber.value;
  if (obj1.upNumber.value != 0 || obj2.upNumber.value != 0) {
    if (obj1.downNumber.value != 0 && obj2.downNumber.value != 0) {
      return (subtraction.innerHTML = `${resultUpNumber}/${resultDownNumber}`);
    } else {
      return (subtraction.innerHTML = "Деление на 0 невозможно!");
    }
  } else {
    return (subtraction.innerHTML = 0);
  }
}
function fracMiltiplicatin(obj1, obj2) {
  let multiplication = document.getElementById("js-task2-span3");
  let resultUpNumber = obj1.upNumber.value * obj2.upNumber.value;
  let resultDownNumber = obj1.downNumber.value * obj2.downNumber.value;
  if (obj1.upNumber.value != 0 && obj2.upNumber.value != 0) {
    if (obj1.downNumber.value != 0 && obj2.downNumber.value != 0) {
      return (multiplication.innerHTML = `${resultUpNumber}/${resultDownNumber}`);
    } else {
      return (multiplication.innerHTML = "Деление на 0 невозможно!");
    }
  } else {
    return (multiplication.innerHTML = 0);
  }
}
function fracDevision(obj1, obj2) {
  let devision = document.getElementById("js-task2-span4");
  let resultUpNumber = obj1.upNumber.value * obj2.downNumber.value;
  let resultDownNumber = obj1.downNumber.value * obj2.upNumber.value;
  if (obj1.downNumber.value != 0 && obj2.upNumber.value != 0) {
    if (obj1.upNumber.value != 0 && obj2.downNumber.value != 0) {
      return (devision.innerHTML = `${resultUpNumber}/${resultDownNumber}`);
    } else {
      return (devision.innerHTML = 0);
    }
  } else {
    return (devision.innerHTML = "Деление на 0 невозможно!");
  }
}

function fracReductionFirst(obj1) {
  let reduction = document.getElementById("js-task2-span5");
  let n;
  let d;

  for (var i = 2; i <= obj1.upNumber.value; i++) {
    if (obj1.upNumber.value % i === 0 && obj1.downNumber.value % i === 0) {
      (n = obj1.upNumber.value / i), (d = obj1.downNumber.value / i);
    }
  }

  if (obj1.upNumber.value != 0) {
    if (obj1.downNumber.value != 0) {
      return (reduction.innerHTML = n + "/" + d);
    } else {
      return (reduction.innerHTML = "Деление на 0 невозможно!");
    }
  } else {
    return (reduction.innerHTML = "Невозможно сократить дробь");
  }
}
function fracReductionSeocnd(obj2) {
  let reduction1 = document.getElementById("js-task2-span6");
  let n1;
  let d1;
  for (var j = 2; j <= obj2.upNumber.value; j++) {
    if (obj2.upNumber.value % j === 0 && obj2.downNumber.value % j === 0) {
      (n1 = obj2.upNumber.value / j), (d1 = obj2.downNumber.value / j);
    }
  }
  if (obj2.upNumber.value != 0) {
    if (obj2.downNumber.value != 0) {
      return (reduction1.innerHTML = n1 + "/" + d1);
    } else {
      return (reduction1.innerHTML = "Деление на 0 невозможно!");
    }
  } else {
    return (reduction1.innerHTML = "Невозможно сократить дробь");
  }
}
let btn2 = document.getElementById("js-task2-btn");
btn2.addEventListener("click", (et) => {
  et.preventDefault();
  fracAddition(firstFraction, secondFraction);
  fracSubtraction(firstFraction, secondFraction);
  fracMiltiplicatin(firstFraction, secondFraction);
  fracDevision(firstFraction, secondFraction);
  fracReductionFirst(firstFraction);
  fracReductionSeocnd(secondFraction);
});

// task 3
// let time = {
//   hours: 12,
//   minutes: 45,
//   seconds: 17,
//   showTime: function () {
//     alert(`${this.hours}:${this.minutes}:${this.seconds}`);
//   },
//   addSeconds: function (seconds) {
//     if (seconds <= 0) {
//       alert("You entered incorrect time!");
//     } else if (seconds + this.seconds >= 60) {
//       let differenceMin = Math.floor((this.seconds + seconds) / 60);
//       this.seconds = (this.seconds + seconds) % 60;
//       this.addMinutes(differenceMin);
//     } else {
//       this.seconds += seconds;
//     }
//   },
//   addMinutes: function (minutes) {
//     if (minutes <= 0) {
//       alert("You entered incorrect time!!!");
//     } else if (this.minutes + minutes >= 60) {
//       let differenceHours = Math.floor((this.minutes + minutes) / 60);
//       this.minutes = (this.minutes + minutes) % 60;
//       this.addHours(differenceHours);
//     } else {
//       this.minutes += minutes;
//     }
//   },
//   addHours: function (hours) {
//     if (hours <= 0) {
//       alert("You entered incorrect time!");
//     } else if (hours + this.hours >= 24) {
//       this.hours = (this.hours + hours) % 24;
//     } else {
//       this.hours += hours;
//     }
//   },
// };

// time.showTime();
// time.addHours(25);
// time.showTime();
// time.addMinutes(120);
// time.showTime();
// time.addSeconds(360);
// time.showTime();

let btn3 = document.getElementById("js-task3-btn1");
let btn31 = document.getElementById("js-task3-btn2");
let btn32 = document.getElementById("js-task3-btn3");
let btn33 = document.getElementById("js-task3-btn4");

let objTime = {
  hours: 12,
  minutes: 45,
  seconds: 17,
  showTime: function (spanEl) {
    return (spanEl.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`);
  },
  addSeconds: function (seconds) {
    if (seconds <= 0) {
      alert("You entered incorrect time!");
    } else if (seconds + this.seconds >= 60) {
      let differenceMin = Math.floor((this.seconds + seconds) / 60);
      this.seconds = (this.seconds + seconds) % 60;
      this.addMinutes(differenceMin);
    } else {
      this.seconds += seconds;
    }
  },
  addMinutes: function (minutes) {
    if (minutes <= 0) {
      alert("You entered incorrect time!!!");
    } else if (this.minutes + minutes >= 60) {
      let differenceHours = Math.floor((this.minutes + minutes) / 60);
      this.minutes = (this.minutes + minutes) % 60;
      this.addHours(differenceHours);
    } else {
      this.minutes += minutes;
    }
  },
  addHours: function (hours) {
    if (hours <= 0) {
      alert("You entered incorrect time!");
    } else if (hours + this.hours >= 24) {
      this.hours = (this.hours + hours) % 24;
      console.log(hours);
    } else {
      this.hours += hours;
    }
  },
};

btn3.addEventListener("click", (e) => {
  e.preventDefault();
  let showInfoTime = document.getElementById("js-task3-span1");
  objTime.showTime(showInfoTime);
});

btn31.addEventListener("click", (event) => {
  event.preventDefault();
  let hoursTime = document.getElementById("js-task3-input3");
  // let minTime = document.getElementById("js-task3-input2");
  // let secTime = document.getElementById("js-task3-input3");
  // let showSecChange = document.getElementById("js-task3-span2");
  // let showMinChange = document.getElementById("js-task3-span3");
  let showHourChange = document.getElementById("js-task3-span4");
  objTime.addHours(+hoursTime.value);
  objTime.showTime(showHourChange);
  // objTime.addMinutes(minTime.value);
  // objTime.showTime(showMinChange);
  // objTime.addSeconds(secTime.value);
  // objTime.showTime(showSecChange);
});
