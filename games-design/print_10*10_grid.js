function printGrid(gridArray) {
  const demoArray = [];

  for (let index = 0; index < gridArray.length; index++) {
    demoArray.push('|' + gridArray[index].join('| ') + '|');
    demoArray.push('____'.repeat(10));
  }

  demoArray.unshift('_____'.repeat(10));
  console.log(demoArray.join('\n'));
}

function makeColumns(start) {
  const rowArray = [];

  for (let index = start + 1; index <= start + 10; index++) {
    rowArray.push(index);
  }

  return rowArray;
}

function includes(array, target) {
  let isFound = '❌';

  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === 'object') {
      isFound = includes(array[index], target);
    }

    if (array[index] === target) {
      return '✅';
    }
  }

  return isFound;
}

function enterShipLocation(gridArray) {
  let coordinate = prompt('Enter the location (12) :');
  coordinate = parseInt(coordinate);
  coordinate--;
  const index = coordinate % 10;
  const arrayNumber = (coordinate - index) / 10;
  const symbol = includes(gridArray, coordinate + 1);
  gridArray[arrayNumber][index] = symbol;
  printGrid(gridArray);
}

function makeGrid() {
  const gridArray = [];

  for (let index = 0; index < 10; index++) {
    gridArray.push(makeColumns(index * 10));
  }

  printGrid(gridArray);
  enterShipLocation(gridArray);
}

makeGrid();
