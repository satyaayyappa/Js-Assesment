//task-1
let num = 10;

while (num > 0) {
  console.log(num);
  num -= 0.5;
}

//task-2
let number = 1;

while (number <= 100) {
  console.log(number);
  number += 2;
}

//task-3
function printNumbersInBrackets(n) {
    let i = 1;
  
    while (i <= n) {
      console.log(`[${i}]`);
      i++;
    }
  }
  
  printNumbersInBrackets(6);
  

  //task-4
  function computeSumOfPositiveIntegers(n) {
    let sum = 0;
    let i = 1;
  
    while (i <= n) {
      sum += i;
      i++;
    }
  
    return sum;
  }
  
  console.log(computeSumOfPositiveIntegers(5));
  console.log(computeSumOfPositiveIntegers(19));
