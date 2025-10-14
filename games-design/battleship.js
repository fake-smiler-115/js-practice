let countOfShipsFound = 0;

function printGrid(gridArray) {
  const demoArray = [];

  for (let index = 0; index < gridArray.length; index++) {
    demoArray.push('|' + gridArray[index].join('| ') + '|');
    demoArray.push('____'.repeat(10));
  }

  demoArray.unshift('_____'.repeat(10));
  console.log(demoArray.join('\n'));
}

function makeRows(start) {
  const rowArray = [];

  for (let index = start + 1; index <= start + 10; index++) {
    rowArray.push(index);
  }

  return rowArray;
}

function isCorrectOrNot(array, target) {
  for (let index = 0; index < 5; index++) {
    if (array[index].includes(target)) {
      countOfShipsFound++;
      return '✅';
    }
  }

  return '❌';
}

function enterShipLocation(gridArray) {
  printGrid(gridArray);
  let coordinate = prompt('Enter the location (12) :');
  coordinate = parseInt(coordinate);
  return --coordinate;
}

function findShipLocation(gridArray, shipLocations) {
  const coordinate = enterShipLocation(gridArray);
  const index = coordinate % 10;
  const arrayNumber = (coordinate - index) / 10;
  const symbol = isCorrectOrNot(shipLocations, coordinate + 1);
  gridArray[arrayNumber][index] = symbol;
  winOrNot(gridArray, shipLocations);
}

function winOrNot(gridArray, shipLocations) {
  if (countOfShipsFound === 17) {
    console.log('Hurry You won');
    return;
  }

  console.clear();
  findShipLocation(gridArray, shipLocations);
}

function makeGrid(shipLocations) {
  const gridArray = [];

  for (let index = 0; index < 10; index++) {
    gridArray.push(makeRows(index * 10));
  }

  findShipLocation(gridArray, shipLocations);
}

function getRandomPoint() {
  const min = 1;
  const max = 100;
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomPattern() {
  const patterns = [1, -1, 10, -10];
  const index = Math.round(Math.random() * (3) + 0);
  return patterns[index];
}

function isValidPattern(array, randomPattern) {
  if (randomPattern === 1 || randomPattern === -1) {
    return isValidVertical(array);
  }

  return isValidHorizontal(array);
}

function isValidHorizontal(array) {
  const lastValue = array[array.length - 1];

  if (lastValue <= 0 || lastValue > 100) {
    return true;
  }

  return false;
}

function isValidVertical(array) {
  const remainder = array[0] % 10;
  const firstBoundary = array[0] - remainder;
  const lastBoundary = array[0] + (10 - remainder);
  const lastValue = array[array.length - 1];

  if (lastValue <= firstBoundary || lastValue > lastBoundary) {
    return true;
  }
}

function getLocationPoints(size) {
  let point = getRandomPoint();
  const array = [];
  const randomPattern = getRandomPattern();

  for (let index = 0; index < size; index++) {
    array.push(point);
    point += randomPattern;
  }

  if (isValidPattern(array, randomPattern)) {
    return getLocationPoints(size);
  }

  console.log(array);
  return array;
}

function shipsLocation() {
  const shipLocations = [];
  shipLocations.push(getLocationPoints(2));
  shipLocations.push(getLocationPoints(3));
  shipLocations.push(getLocationPoints(3));
  shipLocations.push(getLocationPoints(4));
  shipLocations.push(getLocationPoints(5));

  makeGrid(shipLocations);
}

shipsLocation();
