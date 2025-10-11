const playerName = [];
const totalAmount = [];
const lastBetAmount = [];
const lastOptions = [];

function collectBets() {
  for (let index = 0; index < playerName.length; index++) {
    printDesign();
    lastBetAmount[index] = getAmount(index);
    lastOptions[index] = getOption(index);
    console.clear();
  }
}

function getAmount(index) {
  let amount = prompt(playerName[index] + ' please enter the amount');
  amount = parseInt(amount);

  if (amount < 10) {
    console.log("❌  MINIMUM AMOUNT SHOULD BE 10");
    return getAmount(index);
  }

  return amount;
}

function getOption(index) {
  let option = prompt(playerName[index] + ' please enter the option');
  option = parseInt(option);

  if (option < 1 || option > 6) {
    console.log("❌  Entered Invalid  range ");
    return getOption(index);
  }

  return option;
}

function printDesign() {
  console.log("                        🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("                        🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("                        🃏🃏🃏  🎲            🃏🃏🃏");
  console.log("                        🃏🃏🃏            🎲  🃏🃏🃏");
  console.log("                        🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("                        🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
}

function amountWon(diceNumber, index) {
  if (diceNumber === lastOptions[index]) {
    return lastBetAmount[index] * 2;
  }

  return 0;
}

function validateBets(diceNumber) {
  for (let index = 0; index < playerName.length; index++) {
    totalAmount[index] = amountWon(diceNumber, index);
  }
}

function printResult(diceNumber) {
  console.log('dice value', diceNumber);

  for (let index = 0; index < playerName.length; index++) {
    console.log('name', playerName[index]);
    console.log('option', lastOptions[index]);
    console.log('amount placed', lastBetAmount[index]);
    console.log('amount won', totalAmount[index]);
    console.log('___________________________________\n');
  }
}

function rollDice() {
  const min = 1;
  const max = 6;
  return Math.round(Math.random() * (max - min) + min);
}

function tryAgain() {
  const isPlayAgain = confirm('do you want play again');

  if (isPlayAgain) {
    play();
  }
}

function play() {
  const diceNumber = rollDice();
  collectBets();
  validateBets(diceNumber);
  printResult(diceNumber);
  tryAgain();
}

function getPlayers() {
  let noOfPlayers = prompt('Enter numbers of players');
  noOfPlayers = parseInt(noOfPlayers);

  for (let term = 1; term <= noOfPlayers; term++) {
    const name = prompt('Enter Player' + term + 'Name : ');
    playerName.push(name);
  }
}

function warningMessage() {
  console.log('betting is dangenrous to health');
  confirm('Accept terms & conditions');
  getPlayers();
  play();
}

warningMessage();
