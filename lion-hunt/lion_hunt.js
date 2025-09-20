const testCase1 = " Z";

let checkLion ;
checkLion = !(testCase1[0] === 'L'  || testCase1[1]  === 'L' || testCase1[2] === 'L'  || testCase1[3] === 'L'  || testCase1[4] === 'L'  || testCase1[5] === 'L' || testCase1[6]  === 'L' );
console.log(checkLion);

let checkZebra ;
checkZebra = !(testCase1[0] === 'Z'  || testCase1[1]  === 'Z' || testCase1[2] === 'Z'  || testCase1[3] === 'Z'  || testCase1[4] === 'Z'  || testCase1[5] === 'Z' || testCase1[6]  === 'Z' );
console.log(checkZebra);

if(checkLion || checkZebra){
    console.log(-1);
    
}


