let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  let computerChoice = "";
  let randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    computerChoice = "КАМЕНЬ";
  } else if (randomNumber < 2 / 3) {
    computerChoice = "НОЖНИЦЫ";
  } else {
    computerChoice = "БУМАГА";
  }
  return computerChoice;
};

const getHumanChoice = () => {
  humanChoice = prompt();
  return humanChoice.toUpperCase();
};

const playRound = () => {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  let win = `Ты выиграл! Компьютер выбрал ${computerChoice.toLowerCase()}`;
  let lose = `Ты проиграл. Компьютер выбрал ${computerChoice.toLowerCase()}`;
  let draw = `Ничья, компьютер тоже выбрал ${computerChoice.toLowerCase()}`;

  if (humanChoice === computerChoice) {
    console.log(draw);
  } else if (
    (humanChoice === "КАМЕНЬ" && computerChoice === "НОЖНИЦЫ") ||
    (humanChoice === "НОЖНИЦЫ" && computerChoice === "БУМАГА") ||
    (humanChoice === "БУМАГА" && computerChoice === "КАМЕНЬ")
  ) {
    console.log(win);
    humanScore++;
  } else {
    console.log(lose);
    computerScore++;
  }
  console.log(`Счёт ${humanScore}:${computerScore}`);
};

const playGame = () => {
  humanScore = 0;
  computerScore = 0;

  let scoreDraw = `Ничья...`;
  let scoreWin = `Ты победил!`;
  let scoreLose = `Ты с проебал.`;

  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (humanScore === computerScore) {
    console.log(scoreDraw);
  } else if (humanScore > computerScore) {
    console.log(scoreWin);
  } else {
    console.log(scoreLose);
  }
};
