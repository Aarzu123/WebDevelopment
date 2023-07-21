// Q.1 Write a program in JavaScript to define a function that accepts customer argument 
// and display its details.​

// Define the displayDetails function
function displayDetails(customer) {
  console.log(customer.username + " : " + customer.age);
}

var customer = {
  username: "Aarzu",
  age: 22
};

// Call the function and store the result
var res = displayDetails(customer);
console.log(res);


// Q2. ​Write a program in JavaScript to define a function that accepts customer array argument 
// and display its details in​ comma separated value.​

// Define the displayCustomers function
function displayCustomers1(customers) {
  let output = "";
  for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    output += customer.username + ":" + customer.age;
    if (i < customers.length - 1) {
      output += ",";
    }
  }
  console.log(output);
}

let customers = [
  { username: "Aarzu", age: 22 },
  { username: "Pooja", age: 22 }
];

// Call the function and store the result
let res2 = displayCustomers1(customers);

console.log(res2);

