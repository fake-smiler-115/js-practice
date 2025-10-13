const shipLocations = [];

function printGrid(gridArray) {
  gridArray.push('_____'.repeat(10));
  gridArray.unshift('_____'.repeat(10));
  console.log(gridArray.join('\n'));
}

function makeColumns(start) {
  const columnArray = [];

  for (let index = start + 1; index <= start + 10; index++) {
    columnArray.push('| ');
    columnArray.push(index);
  }

  columnArray.push('|');
  columnArray.push('\n' + '____'.repeat(10));
  return columnArray.join('');
}

function makeGrid() {
  const gridArray = [];

  for (let index = 0; index < 10; index++) {
    gridArray.push(makeColumns(index * 10));
  }

  printGrid(gridArray);
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
  
  return array;
}

function shipsLocation() {
  shipLocations.push(getLocationPoints(2));
  shipLocations.push(getLocationPoints(3));
shipLocations.push(getLocationPoints(4));
shipLocations.push(getLocationPoints(5));
  
  makeGrid();
}

shipsLocation();
