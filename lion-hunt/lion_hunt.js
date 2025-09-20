const testCase1 = "Z   Z";

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
   
} else{
    
    
    let spaceCount = 0;
    let minimumSpace ;
    let isCheck = false ;
    let startCharacter;
    
    for( let indexValue = 0 ; indexValue < testCaseLength ; indexValue++){
    
        if(isCheck === false){

            if (testCase1[indexValue] === 'L' || testCase1[indexValue] === 'Z'){
               spaceCount = 0;
               isCheck = true;
               startCharacter = testCase1[indexValue];
               minimumSpace = 1000; 
           }
    
        }
         
        if(isCheck){
    
            if(testCase1[indexValue] === ' '){
                spaceCount = spaceCount + 1;
               
            } else if(testCase1[indexValue] === startCharacter){
                spaceCount = 0;

            }else {

                if(minimumSpace > spaceCount){
                    minimumSpace = spaceCount;
                }

                startCharacter = testCase1[indexValue];
                spaceCount = 0;
            }
        }
        
        
    }
    
    console.log(minimumSpace);
}
