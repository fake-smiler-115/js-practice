const color = text => '\x1B[46m' + text + '\x1B[0m' ; 

const getPattern = (number, index) => {
  if (index === number) {
    return  (number + "").padStart(2);
  }
  if (number >= index) {
    return color("   ");
  }
  return "   ";
};

export const getVisual = (numbers) => {
  const visual = [];

  for (let index = Math.max(...numbers); index >= 0; index--) {
    const currVisual = [];
    for (let j = 0; j < numbers.length; j++) {
      currVisual.push(getPattern(numbers[j], index, numbers));
    }
    visual.push(currVisual.join("\t"));
  }

  return visual;
};

export const printPattern = (pattern) => {
  console.clear();
  for (let index = 0; index < pattern.length; index++) {
    console.log(pattern[index]);
  }

};

printPattern(getVisual([1,8,14,6]));