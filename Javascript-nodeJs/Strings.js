// Q1. Write a program in JavaScript to define a function to find all the vowels in string 
//and convert into ‘b’ in all the vowels.​

function convert(input) {
    let vowels = ['a', 'e', 'i', 'o', 'u']; // make array of vowels
    let input_lowercase=input.toLowerCase();
    // Convert the vowels to 'b'
    let output = ''; // Take output string & append resultant character
    for (let i = 0; i < input_lowercase.length; i++) {
        if (vowels.includes(input_lowercase[i])) {
            output += 'b';
        } else {
            output += input_lowercase[i];
        }
    }

    return output;
}

let input = 'Aarzu';
let result = convert(input);
console.log("Before converted string is: "+ input )
console.log("After converted string is: "+ result); // Output is: 'bbrzb'



// Q2. Write a program in JavaScript to define function to check if input is panagram.​

function isPanagram(input2) {
    // Convert input2 to lowercase
    input2 = input2.toLowerCase();

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
   
    // Check if input2 contains all letters of the alphabet
    for (let i = 0; i < alphabet.length; i++) {
        if (!input2.includes(alphabet[i])) {
            return false;
        }
    }

    // Return true if all letters are present
    return true;
}

// Test the function with input2 'aaaabbbcdefghijklmnopqrstuvwxyzzzz'
let input2 = 'aaaabbbcdefghijklmnopqrstuvwxyzzzz';
//let input2 = 'aaaabbbcdefghijklmnopqrstu';
let result2 = isPanagram(input2);
console.log("input text is: "+ input2)
console.log("ans is: " + result2); // Output: true, It is panagram


// Q3. Write a program in JavaScript to define a function countUniqueConsonants(inputs)
//     which returns count of unique letters which are not vowels occurring in input.​

function countUniqueConsonants(input3) {
    // Convert input3 to lowercase
    input3 = input3.toLowerCase();

    // Define the vowels
    let vowels = 'aeiou';

    // Define an empty object to store unique consonants
    let consonants = {};

    // Iterate over each character in the input3 string
    for (let i = 0; i < input3.length; i++) {
        let char = input3[i];
        
        // Check if character is a consonant and not a vowel
        if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
            // Add consonant to object if it hasn't been added before
            if (!consonants[char]) {
                consonants[char] = true;
            }
        }
    }

    // Return the number of unique consonants
    return Object.keys(consonants).length;
}

// Test the function with input3 'Hinjewadi'
let input3 = 'Hinjewadi';
let result3 = countUniqueConsonants(input3);
console.log("Total no. of unique alphabet except vowels in word : " + input3)
console.log("is: "+ result3); // Output: 5