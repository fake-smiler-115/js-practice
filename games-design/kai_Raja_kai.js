let balance = 0;
let lastBetAmount;
let lastOptions;
let userName;

function collectBets() {
  printDesign();
  lastBetAmount = getAmount();
  lastOptions = getOption();
  console.clear();
}

function getAmount() {
  let amount = prompt(userName + ' please enter the amount');
  amount = parseInt(amount);

  if (amount < 10) {
    console.log("❌  MINIMUM AMOUNT SHOULD BE 10");
    return getAmount();
  }

  return amount;
}

function getOption() {
  let option = prompt(userName + ' please enter the option');
  option = parseInt(option);

  if (option < 1 || option > 6) {
    console.log("❌  Entered Invalid  range ");
    return getOption();
  }

  return option;
}

function validateBets(diceNumber) {
  if (diceNumber === lastOptions) {
    balance += lastBetAmount;
  }

  balance -= lastBetAmount;
}

function printDesign() {
  console.log("                        🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("                        🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("                        🃏🃏🃏  🎲            🃏🃏🃏");
  console.log("                        🃏🃏🃏            🎲  🃏🃏🃏");
  console.log("                        🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("                        🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
}

function placeBet(diceNumber) {
  collectBets();
  validateBets(diceNumber);
  printResult(diceNumber);
  tryAgain();
}

function printResult(diceNumber) {
  console.log('dice value', diceNumber);

  if (diceNumber !== lastOptions) {
    console.log('\t\t\t\t\t\try again ! better luck next time ');
  }
  console.log('\t\t\t\t🏆 you won ', lastBetAmount * 2);
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

function tryAgain() {
  const isPlayAgain = confirm('do you want play again');

  if (isPlayAgain) {
    play();
  }
}

function addAmount() {
  if (balance > 10) {
    return play();
  }

  console.log('------------Please Recharge your account------------');
  console.log('UPI ID : 123');
  const amount = prompt('Added amount = ');
  balance = parseInt(amount);
  console.log('Payment succesfull :', balance);
  play();
}

function createUser() {
  console.log('----------Please create an account -----------');

  userName = prompt('Enter Username :');
  const password = prompt('Create a password : ');
  addAmount();
}

createUser();
