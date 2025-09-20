const checkNumber = 898;

console.log("Given input =" , checkNumber);


let duplicateInput = checkNumber ;
let reverseOfNumber = 0;


while(duplicateInput){

   let lastDigit = duplicateInput % 10;

    duplicateInput = duplicateInput - lastDigit ; 
    duplicateInput = duplicateInput / 10 ;
    reverseOfNumber = (reverseOfNumber * 10) + lastDigit ;

}


console.log("Reverse of the input =" , reverseOfNumber);
 
let palindromeOrNot ;

palindromeOrNot = (checkNumber === reverseOfNumber) ? "is a palindrome number "  : "is not a palindrome number" ;

console.log( checkNumber , palindromeOrNot);




 
