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


// while(holdNumber){
//     remainder = holdNumber % 10;
//     holdNumber = holdNumber - remainder ;
//     holdNumber = holdNumber / 10 ;
//     powerToUse = powerToUse + 1;
// }






//console.log(powerToUse);

// if(isArmstrong){
//     console.log( checkNumber , "is a armstrong number");
// } else {
//     console.log(checkNumber , "is not a armstrong number ");
// }

