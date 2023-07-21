// Q1. Write a program in JavaScript to define a function named displayDetails that accepts employee
//     and display​ its details in comma separated value.​

function displayDetails(employee) {
    // Get employee details as an array
    let details = [employee.username, employee.age, employee.salary];
    
    // Join details with commas
    let csv = details.join(', ');

    // Return the comma separated value string
    return csv;
}


let employee = {
    username: "Aarzu",
    age: 22,
    salary: 50000
};
let result = displayDetails(employee);
console.log(result); // Output: Aarzu, 22, 50000



// Q2. Write a program in JavaScript to define an arrow function that accepts array of employees.​

let employees = [
    { username: "Riya", age: 21, salary: 50000 },
    { username: "Gayatri", age: 22, salary: 60000 }
];

const displayEmployeeDetails = (employees) => {
    // Map each employee object to a string of its details
    let employeeDetails = employees.map(emp => `${emp.username}:${emp.age}:${emp.salary}`);

    // Join the employee details with commas
    let csv = employeeDetails.join(',');

    // Return the comma separated value string
    return csv;
}

let result2 = displayEmployeeDetails(employees);
console.log("our array is: ");
console.log(employees)
console.log(result2); // Output is- mohan:21:50000,pankaj:22:60000


// Q3. Write a program in JavaScript to define a function named displayDetails that accepts employee 
//     and display its details in comma separated value. Comments have been added in the example input.​


function displayDetails(emp) {
    // Get employee details as an array
    let details2 = [emp.username, emp.age, emp.salary];
    
    // Join details with commas
    let csv2 = details2.join(', ');

    // Return the comma separated value string
    return csv2;
}
let emp = {
    username: "Aamir",
    age: 21,
    salary: 50000
};
let result3 = displayDetails(emp);
console.log(result3); // Output: Aamir, 21, 50000