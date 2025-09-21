let decimalNumber = 69;

let binaryDigit ;
let binaryNumber = 0 ;
let multiplingWithBinaryNumber = 1;

while(decimalNumber){

    binaryDigit = decimalNumber % 2;  
    console.log(binaryDigit);
    binaryNumber = binaryNumber  + (binaryDigit * multiplingWithBinaryNumber) ; 
    decimalNumber = decimalNumber - binaryDigit ;
    decimalNumber = decimalNumber / 2;
    multiplingWithBinaryNumber *= 10;

}


console.log(binaryNumber);


