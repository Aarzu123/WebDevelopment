//Q1. Write a program in JavaScript to define function that takes input and 
// returns template string in below expected output format.​

function convert(product) {
    const { name, price } = product;
    return `Name of product is ${name} and the price of product is ${price}`;
}

const input = { name: 'samsung', price: 3000 };
const result = convert(input);
console.log(result);


//Q2. Write a program in JavaScript to define function that takes input 
// and returns template string in below expected output format.​

function convert2(employee) {
    const { username, age } = employee;
    return `Name of user is ${username} and the age is ${age}`;
}

const input2 = { username: 'Aarzu', age: 22 };
const result2 = convert2(input2);
console.log(result2); // Output: Name of user is Mini and the age is 21
