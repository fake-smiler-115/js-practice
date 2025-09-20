const testCase1 = "L     Z";

let spaceCount = 0;

const testCaseLength = testCase1.length;

for( let indexValue = 0 ; indexValue < testCaseLength ; indexValue++){

    if(testCase1[indexValue] === ' '){
        spaceCount = spaceCount + 1;
       
    } 
}

console.log(spaceCount);
