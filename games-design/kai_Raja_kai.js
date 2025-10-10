const playerName = ['gopi', 'vinay', 'chiru', 'giddi', 'bhathu', 'praveen'];
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

function placeBet(diceNumber) {
  collectBets();
  validateBets(diceNumber);
  printResult(diceNumber);
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

function play() {
  const diceNumber = rollDice();
  placeBet(diceNumber);
}

play();
