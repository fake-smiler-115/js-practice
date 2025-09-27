function splitting(word, expectedOutput) {
  const actualOutput = convertWord(word);
  const emoji = actualOutput === expectedOutput ? '👍' : '👎';
  printMessage(word, expectedOutput, actualOutput, emoji);
}

function printMessage(word, expectedOutput, actualOutput, emoji) {
  console.log('     ', emoji);
  console.log('given word=', word);
  console.log('expected output=', expectedOutput);
  console.log("actual output=", actualOutput);
}

function convertWord(word) {
  let mergedWord = '';
  let remaining = '';
  let mainWord = word;
  let nextCheck = isVowel(mainWord, 0);
  let actualOutput = '';

  while (mainWord !== '') {

    for (let index = 0; index < mainWord.length; index++) {

      if (nextCheck) {
        mergedWord += isVowel(mainWord, index) ? mainWord[index] : '';
        nextCheck = !isVowel(mainWord, index);
        remaining += isVowel(mainWord, index) ? '' : mainWord[index];
      } else {
        mergedWord += isVowel(mainWord, index) ? '' : mainWord[index];
        nextCheck = !isVowel(mainWord, index);
        remaining += isVowel(mainWord, index) ? mainWord[index] : '';
      }

    }

    mainWord = remaining;
    actualOutput += mainWord.length >= 1 ? mergedWord + ',' : mergedWord;
    // actualOutput += mergedWord + ',';
    nextCheck = isVowel(mainWord, 0);
    mergedWord = remaining = '';
  }


  return actualOutput;
}

function isVowel(word, index) {

  if (word[index] === 'a' || word[index] === 'e' || word[index] === 'i') {
    return true;
  }

  if (word[index] === 'o' || word[index] === 'u') {
    return true;
  }

  return false;
}

splitting('a', 'a');
splitting('apple', 'ape,p,l');
splitting('there', 'tere,h');
splitting('hello', 'helo,l');
splitting('abyss', 'ab,y,s,s');
splitting('this', 'tis,h');
splitting('thoughtworks', 'togor,huh,t,w,k,s')
