var min = 0;
var max = 100;

// середина диапазона
var middle = Math.floor((min + max) / 2);

// количество попыток
var stage = 1;

// обрабатываем нажатие на стартовую кнопку
function start() {
  // скрываем приветственную надпись и кнопку
  document.getElementById("startText").classList.add("notOnScreen");
  document.getElementById("startButton").classList.add("notOnScreen");

  // показываем текст с первой попыткой
  document.getElementById("question").classList.remove("notOnScreen");
  document.getElementById("question").innerHTML =
    "Попытка " + stage + ": " + middle;

  // и три игровые кнопки
  document.getElementById("small").classList.remove("notOnScreen");
  document.getElementById("bingo").classList.remove("notOnScreen");
  document.getElementById("big").classList.remove("notOnScreen");
}

// если загадано число, которое меньше, чем на экране
function smallClick() {
  // уменьшаем диапазон
  max = middle;

  // находим новую середину диапазона
  middle = Math.floor((min + max) / 2);

  // если при округлении середина совпала с текущей верхней границей — уменьшаем её на единицу
  if (max == middle) {
    middle -= 1;
  }

  // проверяем результат
  checkGame();
}

// если загадано число, которое больше, чем на экране
function bigClick() {
  // уменьшаем диапазон
  min = middle;

  // находим новую середину диапазона
  middle = Math.floor((min + max) / 2);

  // если при округлении середина совпала с текущей нижней границей — увеличиваем её на единицу
  if (min == middle) {
    middle += 1;
  }

  // проверяем результат
  checkGame();
}

// если мы угадали
function bingoClick() {
  // уменьшаем диапазон до одного числа
  max = middle;
  min = middle;

  // проверяем результат
  checkGame();
}

// проверяем, угадали или нет
function checkGame() {
  // если в диапазоне осталось только одно число — называем его
  if (min == max) {
    document.getElementById("question").innerHTML = "Вы загадали число " + min;
    // убираем кнопки
    document.getElementById("small").classList.add("notOnScreen");
    document.getElementById("bingo").classList.add("notOnScreen");
    document.getElementById("big").classList.add("notOnScreen");

    // игра закончена
    return;
  }

  // увеличиваем счётчик попыток
  stage += 1;
  if (stage == 8) {
    // выводим сообщение об ошибке
    document.getElementById("question").innerHTML = "Жульничать — нехорошо!";
  }

  // выводим новое предположение на экран
  document.getElementById("question").innerHTML =
    "Попытка " + stage + ": " + middle;
}
