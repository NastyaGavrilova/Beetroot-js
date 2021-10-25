class Songs {
  constructor(params = {}) {
    Object.assign(
      this,
      {
        author: null,
        song: null,
      },
      { ...params }
    );
  }
}
// переопределенній метод toString()
Songs.prototype.toString = function checkToString() {
  return `${this.author} - ${this.song};`;
};

// массив обьктов песен
let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
].map((songs) => new Songs(songs));

// вывод плейлиста в нумерованный список
let showPlayList = (arr) => {
  let listOl = document.createElement("ol");

  for (let i = 0; i < arr.length; i++) {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(arr[i].toString()));
    listOl.appendChild(listItem);
  }
  return listOl;
};

document.getElementById("app").appendChild(showPlayList(playList));
