// Q1. Write a JavaScript program to find the second shortest number in the array.​

let arr = [4, 1, 2, 3];

// Sort the array in ascending order
arr.sort((a, b) => a - b);

// Find the second shortest number
let secondShortest = arr[1];

// Print the result
console.log("Shortest number = " + arr[0]);
console.log("Second shortest number = " + secondShortest);

//Q2. Check whether Two Array are equal or not.

let array1 = [1, 5, 3, 4];
let array2 = [1, 2, 3, 4];

// Check if the arrays are equal
let areEqual = true;
//If length is not equal, then it obvious that array is not equal
if (array1.length !== array2.length) {
    areEqual = false;
}
else {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            areEqual = false;
            break;
        }
    }
}

// Print the result
if (areEqual) {
    console.log("The arrays are equal.");
} else {
    console.log("The arrays are not equal.");
}
