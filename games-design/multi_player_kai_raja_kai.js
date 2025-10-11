const playerName = [];
const totalAmount = [];
const lastBetAmount = [];
const lastOptions = [];

function tryAgain() {
  const isPlayAgain = confirm('Do You Want Play Again');

  if (isPlayAgain) {
    play();
  }
}

function printResult(diceNumber) {
  console.log('\t\t\t\t\t\t🎲 : ', diceNumber);
  console.log('\n\n WINNERS LIST : \n');

  for (let index = 0; index < playerName.length; index++) {
    if (totalAmount[index] !== 0) {
      console.log('Name : ', playerName[index]);
      console.log('Amount Placed : ', lastBetAmount[index]);
      console.log('Amount Won :', totalAmount[index]);
      console.log('___________________________________\n');
    }
  }
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

function getOption(index) {
  let option = prompt('\n' + playerName[index] + 'Please Enter The Dice Number');
  option = parseInt(option);

  if (option < 1 || option > 6) {
    console.log("❌  Entered Invalid  range ");
    return getOption(index);
  }

  return option;
}

function getAmount(index) {
  let amount = prompt('\n' + playerName[index] + ' Please Enter Bet amount');
  amount = parseInt(amount);

  if (amount < 10) {
    console.log("❌  MINIMUM AMOUNT SHOULD BE 10");
    return getAmount(index);
  }

  return amount;
}

function printDesign() {
  console.log("\t\t\t\t\t🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("\t\t\t\t\t🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("\t\t\t\t\t🃏🃏🃏  🎲            🃏🃏🃏");
  console.log("\t\t\t\t\t🃏🃏🃏            🎲  🃏🃏🃏");
  console.log("\t\t\t\t\t🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("\t\t\t\t\t🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
}

function collectBets() {
  console.clear();

  for (let index = 0; index < playerName.length; index++) {
    printDesign();
    lastBetAmount[index] = getAmount(index);
    lastOptions[index] = getOption(index);
    console.clear();
  }
}

function rollDice() {
  const min = 1;
  const max = 6;
  return Math.round(Math.random() * (max - min) + min);
}

function play() {
  const diceNumber = rollDice();
  collectBets();
  validateBets(diceNumber);
  printResult(diceNumber);
  tryAgain();
}

function getPlayers() {
  let noOfPlayers = prompt('Enter number of players');
  noOfPlayers = parseInt(noOfPlayers);

  for (let term = 1; term <= noOfPlayers; term++) {
    const name = prompt('Enter Player' + term + 'Name : ');
    playerName.push(name);
  }
}

function warningMessage() {
  console.log('Betting is dangenrous to health');
  confirm('Accept terms & conditions');
  getPlayers();
  play();
}

warningMessage();
