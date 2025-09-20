const testCase1 = "L   Z";

let spaceCount = 0;

if( testCase1[0] === 'L'){

    if(testCase1[1] === ' '){
        spaceCount = spaceCount + 1;
       
    }
    
    if(testCase1[2] === ' '){

        spaceCount = spaceCount + 1;
         
    }
    
    if(testCase1[3] === ' '){
        spaceCount = spaceCount + 1;

 
    }    

    if(testCase1[4] === ' '){
        spaceCount = spaceCount + 1;
    
    }
   
    
}
console.log(spaceCount);
