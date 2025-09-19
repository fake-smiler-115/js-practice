const checkNumber = 371 ;

let holdingNumber ;

let convertedNumber = 0 ;
holdingNumber = checkNumber;
while(holdingNumber){
    let lastDigit = holdingNumber % 10; 
    convertedNumber = convertedNumber + lastDigit * lastDigit * lastDigit ;
    holdingNumber = holdingNumber - lastDigit ;
    holdingNumber = holdingNumber / 10 ;
}

let isArmstrong  ;
isArmstrong = (convertedNumber === checkNumber) ? true : false ;


let finalValue ;
finalValue = isArmstrong ? "is a armstrong number" : "is not a armstrong number";
console.log( checkNumber , finalValue);




