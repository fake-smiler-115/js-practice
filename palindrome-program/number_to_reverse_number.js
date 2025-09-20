const input = 876;
let lastDigit ; 

let duplicateInput = input ;

let reverseOfNumber = 0;

while(duplicateInput){

    lastDigit = duplicateInput % 10;
    duplicateInput = duplicateInput - lastDigit ; 
    duplicateInput = duplicateInput / 10 ;
    reverseOfNumber = (reverseOfNumber * 10) + lastDigit ;

}


console.log(reverseOfNumber);


 
