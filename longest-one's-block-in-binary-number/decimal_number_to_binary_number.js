let decimalNumber = 13;

let binaryDigit ;
let binaryNumber =0 ;

binaryDigit = decimalNumber % 2;  
console.log(binaryDigit);
binaryNumber = binaryNumber  + (binaryDigit * 1) ; 
decimalNumber = decimalNumber - binaryDigit ;
decimalNumber = decimalNumber / 2;



binaryDigit = decimalNumber % 2;  
console.log(binaryDigit);
binaryNumber = binaryNumber  + (binaryDigit * 10) ; 
decimalNumber = decimalNumber - binaryDigit ;
decimalNumber = decimalNumber / 2;



binaryDigit = decimalNumber % 2;  
console.log(binaryDigit);
binaryNumber = binaryNumber  + (binaryDigit * 100) ; 
decimalNumber = decimalNumber - binaryDigit ;
decimalNumber = decimalNumber / 2;


binaryDigit = decimalNumber % 2;  
console.log(binaryDigit);
binaryNumber = binaryNumber  + (binaryDigit * 1000) ; 
decimalNumber = decimalNumber - binaryDigit ;
decimalNumber = decimalNumber / 2;


console.log(binaryNumber);


