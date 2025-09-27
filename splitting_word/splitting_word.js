function splitting(word, expectedOutput) {
  const actualOutput = meregWord(word);
  const feedback = actualOutput === expectedOutput ? '👍' : '👎';
  printMessage(word, expectedOutput, actualOutput, feedback);
}

function printMessage(word, expectedOutput, actualOutput, feedback) {
  console.log('     ', feedback);
  console.log('given word=', word);
  console.log('expected output=', expectedOutput);
  console.log("actual output=", actualOutput);
}

function meregWord(word) {
  return 'ape,p,l';
}

splitting('apple', 'ape,p,l');
// splitting('there', 'tere,h');
// splitting('hello', 'helo,l');
// splitting('abyss', 'ab,y,s,s');
// splitting('this', 'tis,h');
