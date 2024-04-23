/** @format */

import { hangmanGame } from "./data.js";

let button = document.querySelector(".buttn");
let contentResult = document.querySelector(".content-result");
let usedLetr = document.querySelector(".used-letter");
let wins = document.querySelector(".wins");
let losses = document.querySelector(".losses");
let guesses = document.querySelector(".guesses");
let chanse = document.querySelector(".chance");
let mainContent = document.querySelector(".main");
let gameOver = document.querySelector(".over");
function randomIndex() {
  let max = hangmanGame.length;
  let random = parseInt(Math.random() * (max - 0) + 0);
  return random;
}
let chanceControl = true;
function randomWord() {
  let ranInd = randomIndex();
  let choosedRandomName = hangmanGame[ranInd].name;
  let contentChoose = "-".repeat(choosedRandomName.length);
  contentResult.innerHTML = contentChoose;

  console.log(choosedRandomName);
  return choosedRandomName;
}
let chooseWord = randomWord();

window.addEventListener("keyup", (e) => {
  if (chanceControl) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      usedLetr.innerHTML += e.key;
      if (chooseWord.includes(e.key)) {
        let contentAry = contentResult.innerHTML.split("");

        let indxAry = [];
        for (let i = 0; i < chooseWord.length; i++) {
          if (chooseWord[i] == e.key) {
            indxAry.push(i);
          }
        }

        for (let i of indxAry) {
          contentAry[i] = e.key;
        }
        contentResult.innerHTML = contentAry.join("");
        if (contentResult.innerHTML == chooseWord) {
          wins.innerHTML++;
          guesses.innerHTML++;
          usedLetr.innerHTML = "";
          chooseWord = randomWord();
        }
      } else {
        losses.innerHTML++;
        guesses.innerHTML--;
      }
    }
  }
let guessValue = guesses.innerHTML;
console.log(guessValue);
  if (guessValue == 0) {
  guesses.innerHTML=0
  mainContent.classList.remove("main-content");
  mainContent.classList.add("hiden");
  gameOver.classList.remove("hiden");
  gameOver.classList.add("start");
}

});

//-----------Againt start---
button.addEventListener("click", () => {
  let chanceValue = chanse.innerHTML;
  if (chanceValue >= 1 && chanceValue <= 3) {
    randomWord();
    chanceValue -= 1;
    chanse.innerHTML = chanceValue;
    if (chanceValue == 0) {
      button.classList.remove("btn");
      button.classList.add("disable");
      chanceControl = false;
    }
  }

  chooseWord = randomWord();
  usedLetr.innerHTML = "";
});

