const testCase1 = "L     Z L  Z";

let spaceCount = 0;
let minimumSpace = 0 ;
const testCaseLength = testCase1.length;

for( let indexValue = 0 ; indexValue < testCaseLength ; indexValue++){

    if (testCase1[indexValue] === 'L'){
        spaceCount = 0;
    }

    if(testCase1[indexValue] === ' '){
        spaceCount = spaceCount + 1;
       
    } 

    if (testCase1[indexValue] === 'Z'){

        if(minimumSpace === 0){
            minimumSpace = spaceCount;
        }
        if(minimumSpace > spaceCount){
            minimumSpace = spaceCount
        }
    }
}

console.log(minimumSpace);
