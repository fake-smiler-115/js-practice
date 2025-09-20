const input = 345;
let lastDigit ; 

lastDigit = input % 10;
 
console.log(lastDigit);

let duplicateInput = input ;

duplicateInput = duplicateInput - lastDigit ;  // else getting floating values in dupicateInput

duplicateInput = duplicateInput / 10 ;

const reverseOfNumber = lastDigit ;

console.log(duplicateInput);
