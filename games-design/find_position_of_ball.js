function getPosition() {
  let guess = prompt('Enter the position');
  guess = parseInt(guess);
  return guess;
}

function validate(guess, position) {
  if (position === guess) {
    console.log('you won');
    return playAgain();
  }

  console.log('you lost');
  playAgain();
}

function placeBet(position) {
  const guess = getPosition();

   if (guess > 3 || guess < 1) {
    console.log('Invalid option');
    return playAgain();
   }

  validate(guess, position);
}

function playAgain() {
  if (confirm('do you want to play ?')) {
    play();
  }
}

function rollDice() {
  const min = 1;
  const max = 3;
  return Math.round(Math.random() * (max - min) + min);
}

function play() {
  const position = rollDice();
  placeBet(position);
}

play();
