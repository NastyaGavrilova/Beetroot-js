class Marker {
  constructor(color, percents) {
    this.color = color;
    this.percents = percents;
  }
  get markerProps() {
    return [this.color, this.percents];
  }

  set markerProps(newProps) {
    [this.color, this.percents] = [...newProps];
  }

  printText(str) {
    let paragraph = document.getElementById("js-result");
    let parahraph1 = document.getElementById("js-result1");
    let p = " ";
    for (let i = 0; i < str.length; i++) {
      if (this.percents != 0) {
        if (str[i] == " ") {
          this.percents += 0.5;
        }
        p += str[i];
        paragraph.style.color = this.color;
        this.percents -= 0.5;

        console.log(this.percents);
        console.log(str[i]);
        console.log(p);
      } else {
        parahraph1.innerHTML = "Дальше маркер печатать не может";
        break;
      }
    }
    return (paragraph.innerHTML = p);

    // console.log(line);
    // return (paragraph.innerHTML = line);
  }
}

class FilledMarker extends Marker {
  fill(percents) {
    if (percents > 100) {
      return (percents = 100);
    } else {
      return (this.percents += percents);
    }
  }
}

let marker = new FilledMarker("#838", 2);

let btn = document.getElementById("js-task2-btn1");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let percent = document.getElementById("js-task2-input1");
  const text = document.getElementById("js-task2-input2");
  marker.fill(+percent.value);
  console.log(+percent.value);
  console.log(text.value);
  marker.printText(text.value);
});
// marker.fill(25);

// const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab molestiae et maiores quaerat, facilis repellat provident aliquid officia ea. Corporis eligendi quia, quo aliquid consequuntur a at modi amet.`;
// console.log(text);

// marker.printText(text);
// // console.log(marker.printText(text));

// document.body.setAttribute(
//   "style",
//   "font-size: 18px; font-weight: bold; text-align: center;"
// );
