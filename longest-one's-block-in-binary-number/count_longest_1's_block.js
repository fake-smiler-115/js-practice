let binaryNumber = 10111;

binaryNumber = binaryNumber + " ";

let countOfLongestBlock = 0  ;

(binaryNumber[0] === '1') ? countOfLongestBlock++ : countOfLongestBlock = 0   ;


(binaryNumber[1] === '1') ? countOfLongestBlock++ : countOfLongestBlock = 0 ;


(binaryNumber[2] === '1') ? countOfLongestBlock++ : countOfLongestBlock = 0  ;


(binaryNumber[3] === '1') ? countOfLongestBlock++ : countOfLongestBlock = 0  ;


(binaryNumber[4] === '1') ? countOfLongestBlock++ : countOfLongestBlock = 0 ;

console.log(countOfLongestBlock);

