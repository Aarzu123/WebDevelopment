// Q1. Write a program in JavaScript to print fibonacci series of n terms where n is the input by user.​

// Get input from user
let input = parseInt(prompt("Enter n till when you want to find Fibonacci series:"));

let a = 0, b = 1, sum;

// Print the first two terms
console.log(a);
console.log(b);

for (let i = 3; i <= input; i++) {
    sum = a + b;
    document.write("<br>")
    document.write(sum);
    a = b;
    b = sum;
}

// Q2. Write a JavaScript program that checks whether the input number is Armstrong number or not.​​

// Get input from user
let input2 = parseInt(prompt("Enter a number to check if it's an Armstrong number:"));

// Convert the input number to a string to get its length
let inputStr = input2.toString();
let inputLength = inputStr.length;

// Initialize variables
let sum2 = 0;
let currentDigit = 0;

// Loop through each digit of the input number
for (let i = 0; i < inputLength; i++) {
    // Get the current digit
    currentDigit = parseInt(inputStr.charAt(i));

    // Add the cube of the current digit to the sum
    sum2 += Math.pow(currentDigit, inputLength);
}

// Check if the sum is equal to the input number
if (sum2 === input2) {
    alert(input2 + " True !  It is an Armstrong number.");
} else {
    alert(input2 + " False ! It is not an Armstrong number.");
}
