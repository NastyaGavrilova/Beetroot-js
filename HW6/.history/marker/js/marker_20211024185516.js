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

  printText(line) {
    let paragraph = document.getElementById("app");
    paragraph.innerHTML = " ";
    for (let i = 0; i < line.length; i++) {
      if (this.percents != 0) {
        if (line[i] == " ") {
          this.percents += 0.5;
        }
        paragraph.innerHTML += line[i];
        paragraph.style.color = this.color;
        this.percents -= 0.5;
        console.log(this.percents);
        console.log(line[i]);
      } else {
        // paragraph.innerHTML += line[i];
        // paragraph.style.color = this.color;
        document.write("Marker is over");
        break;
      }
    }
    // console.log(line);
    // return (paragraph.innerHTML = line);
  }
}

class FilledMarker extends Marker {
  fill(percents) {
    if (percents > 100) {
      percents = 100;
    } else {
      this.percents += percents;
    }
  }
}

let marker = new FilledMarker("#838", 2);

let btn = document.getElementById("js-task2-btn1");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let percent = document.getElementById("js-task2-input1");
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab molestiae et maiores quaerat, facilis repellat provident aliquid officia ea. Corporis eligendi quia, quo aliquid consequuntur a at modi amet.`;
  marker.fill(+percent.value);
  console.log(+percent.value);
  marker.printText(text);
  document.body.setAttribute(
    "style",
    "font-size: 18px; font-weight: bold; text-align: center;"
  );
});
// marker.fill(25);

// const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab molestiae et maiores quaerat, facilis repellat provident aliquid officia ea. Corporis eligendi quia, quo aliquid consequuntur a at modi amet.`;
// console.log(text);

// marker.printText(text);
// document.body.setAttribute(
//   "style",
//   "font-size: 18px; font-weight: bold; text-align: center;"
// );
