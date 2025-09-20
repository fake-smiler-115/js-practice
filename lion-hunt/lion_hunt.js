const testCase1 = "L  Z";

const testCaseLength = testCase1.length ;

let checkLion = true;
let checkZebra = true  ;

for(let indexValue = 0 ; indexValue < testCaseLength ; indexValue++){

    if(testCase1[indexValue] === "L" ){
        checkLion = false;
    }
    
    if(testCase1[indexValue] === "Z" ){
        checkZebra = false;
    }
    
}

if(checkLion || checkZebra){
    console.log(-1);
   
} 
