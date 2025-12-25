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

const getVisual = (numbers) => {
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

const printPattern = (pattern) => {
  for (let index = 0; index < pattern.length; index++) {
    console.log('\t\t' + pattern[index]);
  }
};

export const printStatics = (attempts, timeTaken) => {
  console.clear();

  console.log('NUMBER OF ATTEMPTS FOR EACH QUESTION :\n');
  printPattern(getVisual(attempts));
  const totalAttempts = attempts.reduce((sum ,value) => sum + value ,0)
  console.log('\n TOTAL ATTEMPTS = ', totalAttempts);

  console.log('\n\n\n TIME TAKEN FOR EACH QUESTION (SECONDS) : \n');
  printPattern(getVisual(timeTaken));
  const totalTime = timeTaken.reduce((sum ,value) => sum + value ,0)
  console.log('\n TOTAL TIME = ', totalTime);
}