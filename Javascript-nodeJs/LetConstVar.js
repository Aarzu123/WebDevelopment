// Q.1 Write a program in JavaScript to define a function that accepts a natural number argument
// and gives the sum of numbers till argument.​ 


function calculateSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(calculateSum(5)); // Output: 15 for num=5.


// Q.2 Write a program in JavaScript to define a function that accepts a natural number argument and
// gives the sum of numbers till argument.


function calculate(n) {
    let s = 0;
    for (let j = 1; j <= n; j++) {
      s += j;
    }
    return s;
  }
  
  console.log(calculate(14)); // output 105


// Q3. Practice Exercise-3 : ​Create global constants G, R, B to store colors.​

// For e.g. G for Green, B for Blue, and R for Red​

// Create function displayValue() accepting an argument:​

// If argument is equal to G return “green garden”​
// If argument is equal to R return “red rose”​
// If argument is equal to B return “blue rose“ ​
// Else return “unsupported color”​

const G = 'Green';
const R = 'Red';
const B = 'Blue';

function displayValue(color) {
  if (color === G) {
    return 'Green garden';
  } else if (color === R) {
    return 'Red rose';
  } else if (color === B) {
    return 'Blue rose';
  } else {
    return 'Unsupported color';
  }
}

console.log(displayValue('Green')); // If input = Green, Output- Green Garden