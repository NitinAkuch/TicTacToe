console.log("Hello..");
let audioTurn = new Audio("ting.mp3");
let music = new Audio("music.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

//GameLogic
let Boxes = document.getElementsByClassName("box");
Array.from(Boxes).forEach((element) => {
  let boxText = element.querySelector(".textBox");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      audioTurn.play();
      turn = changeTurn();
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

//Function to change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
//Reset Button

reset.addEventListener("click", () => {
  let textbox = document.querySelectorAll(".textBox");
  Array.from(textbox).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width =
    "0px";
});
//Function to check for win

const checkWin = () => {
  let boxText = document.getElementsByClassName("textBox");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText == boxText[e[1]].innerText &&
      boxText[e[1]].innerText == boxText[e[2]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxText[e[0]].innerText + " Won.";
      isGameOver = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};
