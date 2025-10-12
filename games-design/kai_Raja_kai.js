let balance = 0;
let lastBetAmount;
let lastOptions;
let userName;

function collectBets() {
  console.clear();
  console.log('\t\t\t\t\t\t\t\t\t\t\t\t\t Balance : ', balance);
  printDesign();
  lastBetAmount = getAmount();
  lastOptions = getOption();
}

function getAmount() {
  let amount = prompt(userName + ' Please enter the amount');
  amount = parseInt(amount);

  if (amount < 10 || amount > balance) {
    console.log("❌ Amount is less 10 OR greater than balance");
    return getAmount();
  }

  return amount;
}

function getOption() {
  let option = prompt(userName + ' Please enter the option');
  option = parseInt(option);

  if (option < 1 || option > 6) {
    console.log("❌  Entered Invalid  range ");
    return getOption();
  }

  return option;
}

function validateBets(diceNumber) {
  console.log('\t\t\t\t\t\t🎲 : ', diceNumber);

  if (diceNumber === lastOptions) {
    balance += lastBetAmount;
    console.log('\t\t\t\t🏆 you won ', lastBetAmount * 2);
  } else {
    balance -= lastBetAmount;
    console.log('\t\t\t\tTry again ! Better luck next time ');
  }

}

function printDesign() {
  console.log("\t\t\t\t\t🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("\t\t\t\t\t🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("\t\t\t\t\t🃏🃏🃏  🎲            🃏🃏🃏");
  console.log("\t\t\t\t\t🃏🃏🃏            🎲  🃏🃏🃏");
  console.log("\t\t\t\t\t🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
  console.log("\t\t\t\t\t🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏🃏");
}

function placeBet(diceNumber) {
  collectBets();
  validateBets(diceNumber);
  tryAgain();
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
