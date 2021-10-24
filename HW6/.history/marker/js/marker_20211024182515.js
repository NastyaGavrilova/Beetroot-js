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
    for (let i = 0; i < line.length; i++) {
      if (this.percents != 0) {
        if (line[i] == " ") {
          this.percents += 0.5;
        }
        paragraph.innerHTML += line[i];
        paragraph.style.color = this.color;
        this.percents -= 0.5;
      } else {
        document.write("Marker is over");
        break;
      }
    }
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

marker.fill(45);

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab molestiae et maiores quaerat, facilis repellat provident aliquid officia ea. Corporis eligendi quia, quo aliquid consequuntur a at modi amet.`;

marker.printText(text);
document.div.setAttribute(
  "style",
  "font-size: 18px; font-weight: bold; text-align: center;"
);
