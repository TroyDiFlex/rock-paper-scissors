// Глобальные переменные
const table = document.querySelector(".table");
const popUpStart = document.querySelector(".start");

const humanChoiceBtns = document.querySelector("#human-choice-btns");
const humanChoiceValue = document.querySelector("human-choice");
const computerChoiceValue = document.querySelector("#computer-choice");
const runBtn = document.querySelector("#start");
const resultValue = document.querySelector(".result");
const resultValueDefault = "Выбирай чем будешь биться ты!<br /><p>пасхалка</p>";
const popUpFinalResult = document.createElement("div");

// Локальные переменные
let humanScore = 0;
let computerScore = 0;
let humanChoice = null;
let result = null;

// Всплывающее окно финального результата с кнопкой рестарт
popUpFinalResult.classList.add("pop-up", "result", "hide");
popUpFinalResult.innerHTML = `
<div class="popUpFinalResultBody"></div>
<button id="btn-restart">Погнали</button>`;
const popUpFinalResultBody = popUpFinalResult.querySelector(
  ".popUpFinalResultBody",
);
table.append(popUpFinalResult);
const restartBtn = popUpFinalResult.querySelector("#btn-restart");
console.log(restartBtn);
restartBtn.addEventListener("click", restart);

// Логика игры
runBtn.addEventListener("click", () => popUpStart.classList.toggle("hide"));

humanChoiceBtns.addEventListener("click", (e) => {
  if (e.target === humanChoiceBtns) return;
  humanChoice = e.target.textContent.toLowerCase();
  playRound(humanChoice);
});

const getComputerChoice = () => {
  let computerChoice = "";
  let randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    computerChoice = "камень";
  } else if (randomNumber < 2 / 3) {
    computerChoice = "ножницы";
  } else {
    computerChoice = "бумага";
  }
  return computerChoice;
};

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  let resultValueWin = `Ты выиграл раунд! Компьютер выбрал вариант "${computerChoice}"<br>Счёт ${humanScore}:${computerScore}`;
  let resultValueLose = `Ты проиграл раунд. Компьютер выбрал вариант "${computerChoice}"<br>Счёт ${humanScore}:${computerScore}`;
  let resultValueDraw = `Ничья, компьютер тоже выбрал вариант "${computerChoice}"<br>Счёт ${humanScore}:${computerScore}`;

  if (humanChoice.toLowerCase() === computerChoice) {
    // resultValue.innerHTML = resultValueDraw;
    resultValue.innerHTML = `Ничья, компьютер тоже выбрал вариант "${computerChoice}"<br>Счёт ${humanScore}:${computerScore}`;
  } else if (
    (humanChoice === "камень" && computerChoice === "ножницы") ||
    (humanChoice === "ножницы" && computerChoice === "бумага") ||
    (humanChoice === "бумага" && computerChoice === "камень")
  ) {
    humanScore++;
    // resultValue.innerHTML = resultValueWin;
    resultValue.innerHTML = `Ты проиграл раунд. Компьютер выбрал вариант "${computerChoice}"<br>Счёт ${humanScore}:${computerScore}`;
  } else {
    computerScore++;
    // resultValue.innerHTML = resultValueLose;
    resultValue.innerHTML = `Ты проиграл раунд. Компьютер выбрал вариант "${computerChoice}"<br>Счёт ${humanScore}:${computerScore}`;
  }

  if (humanScore >= 3 || computerScore >= 3) {
    pushFinalResutPopUp();
  }
}

function restart() {
  popUpFinalResult.classList.toggle("hide");
}

function pushFinalResutPopUp() {
  if (humanScore > computerScore) {
    result = "Поздравляю с победой!";
  } else {
    result = "Не повезло, бывает. Ты проиграл...";
  }
  popUpFinalResultBody.innerHTML = `<div class="popUpFinalResultBody">
 <h1>${result}</h1>
 <h3>Счёт ${humanScore}:${computerScore}</h3>
 <h3>Сыграем ещё раз?</h3></div>`;
  popUpFinalResult.classList.toggle("hide");
  humanScore = 0;
  computerScore = 0;
  resultValue.innerHTML = resultValueDefault;
}
