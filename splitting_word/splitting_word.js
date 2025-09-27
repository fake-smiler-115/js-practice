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
  let mergedWord = '';
  let nextCheck = isVowel(word, 0);
  let remaining = '';

  for (let index = 0; index < checkLength(word); index++) {

    if (nextCheck) {

      if (isVowel(word, index) ) {
        mergedWord += word[index];
        nextCheck = false;
      } else {
        remaining += ',' + word[index];
      }

    } else {

      if(isVowel(word, index)  === false) {
        mergedWord += word[index];
        nextCheck = true;
      } else {
        remaining = ',' + word[index];
      } 
    }

  }

  mergedWord += remaining;
  return mergedWord;
}

function checkLength(string) {
  return string.length;
}

function isVowel(word, index) {

  if(word[index] === 'a' || word[index] === 'e' || word[index] === 'i') {
    return true;
  }

  if(word[index] === 'o' || word[index] === 'u') {
    return true;
  }

  return false;
}

splitting('apple', 'ape,p,l');
splitting('there', 'tere,h');
splitting('hello', 'helo,l');
splitting('abyss', 'ab,y,s,s');
splitting('this', 'tis,h');
