const input = 345;
let lastDigit ; 

let duplicateInput = input ;

lastDigit = duplicateInput % 10;
console.log(lastDigit);

duplicateInput = duplicateInput - lastDigit ; 
duplicateInput = duplicateInput / 10 ;
let reverseOfNumber = 0;
reverseOfNumber = (reverseOfNumber * 10) + lastDigit ;


lastDigit = duplicateInput % 10;
console.log(lastDigit);

duplicateInput = duplicateInput - lastDigit ; 
duplicateInput = duplicateInput / 10 ;
reverseOfNumber = (reverseOfNumber * 10) + lastDigit ;



lastDigit = duplicateInput % 10;
console.log(lastDigit);

duplicateInput = duplicateInput - lastDigit ; 
duplicateInput = duplicateInput / 10 ;
reverseOfNumber = (reverseOfNumber * 10) + lastDigit ;


console.log(reverseOfNumber);


 
