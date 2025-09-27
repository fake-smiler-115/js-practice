function splitting(word, expectedOutput) {
  const vowels = vowelsInWord(word);
  const consonants = consonantsInWord(word);
  console.log(vowels);
  console.log(consonants);
  
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

function checkLength(string) {
  return string.length;
}

function vowelsInWord(word) {
  let vowels = '';
  
  for (let index = 0; index < checkLength(word); index++) {

    if (isVowel(word, index) ) {
      vowels = vowels + word[index];
    }
  }

  return vowels;
}

function consonantsInWord(word) {
  let consonants = '';
  
  for (let index = 0; index < checkLength(word); index++) {

    if (!isVowel(word, index) ) {
      consonants = consonants + word[index];
    }
  }

  return consonants;
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
// splitting('hello', 'helo,l');
// splitting('abyss', 'ab,y,s,s');
// splitting('this', 'tis,h');
