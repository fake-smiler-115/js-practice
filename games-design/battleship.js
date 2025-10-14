let countOfShipsFound = 0;
const shipLocations = [];

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

function isPresentInLocations(target) {

  for (let index = 0; index < shipLocations.length; index++) {
    if (shipLocations[index].includes(target)) {
      countOfShipsFound++;
      return '✅';
    }
  }

  return '❌';
}

function enterShipLocation(gridArray) {
  printGrid(gridArray);
  let coordinate = prompt('Enter the location :');
  coordinate = parseInt(coordinate);

  if (coordinate > 100 || coordinate < 1 || isNaN(coordinate)) {
    console.log('Input should be between (1 - 100)');
    return findShipLocation(gridArray)
  }

  return --coordinate;
}

function findShipLocation(gridArray) {
  const coordinate = enterShipLocation(gridArray);
  const index = coordinate % 10;
  const arrayNumber = (coordinate - index) / 10;

  if (typeof gridArray[arrayNumber][index] !== 'number') {
    console.log('You already Entered the location');
    return findShipLocation(gridArray, shipLocations)
  }

  const symbol = isPresentInLocations(coordinate + 1);
  gridArray[arrayNumber][index] = symbol;
  winOrNot(gridArray);
}

function winOrNot(gridArray) {
  if (countOfShipsFound === 17) {
    console.log('Hurry You won');
    return;
  }

  console.clear();
  findShipLocation(gridArray);
}

function makeGrid() {
  const gridArray = [];

  for (let index = 0; index < 10; index++) {
    gridArray.push(makeRows(index * 10));
  }

  findShipLocation(gridArray);
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

function isValidPattern(locationsOfShip, randomPattern) {
  if (randomPattern === 1 || randomPattern === -1) {
    return isValidVertical(locationsOfShip);
  }

  return isValidHorizontal(locationsOfShip);
}

function isValidHorizontal(locationsOfShip) {
  const lastValue = locationsOfShip[locationsOfShip.length - 1];

  if (lastValue <= 0 || lastValue > 100) {
    return true;
  }

  return false;
}

function isValidVertical(locationsOfShip) {
  const remainder = locationsOfShip[0] % 10;
  const firstBoundary = locationsOfShip[0] - remainder;
  const lastBoundary = locationsOfShip[0] + (10 - remainder);
  const lastValue = locationsOfShip[locationsOfShip.length - 1];

  if (lastValue <= firstBoundary || lastValue > lastBoundary) {
    return true;
  }
}

function generatePattern(size, point, randomPattern) {
  const locationsOFShip = [];

  for (let index = 0; index < size; index++) {
    if (isPresentInLocations(point) === '✅') {
      return getLocationPoints(size);
    }

    locationsOFShip.push(point);
    point += randomPattern;
  }

  return locationsOFShip;
}

function getLocationPoints(size) {
  let point = getRandomPoint();
  const randomPattern = getRandomPattern();
  const locationsOFShip = (generatePattern(size, point, randomPattern));

  if (isValidPattern(locationsOFShip, randomPattern)) {
    return getLocationPoints(size);
  }

  return locationsOFShip;
}

function main() {
  shipLocations.push(getLocationPoints(2));
  shipLocations.push(getLocationPoints(3));
  shipLocations.push(getLocationPoints(3));
  shipLocations.push(getLocationPoints(4));
  shipLocations.push(getLocationPoints(5));

  makeGrid();
}

main();
