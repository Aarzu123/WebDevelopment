/*
Practice Exercise-1
Write a program in JavaScript to define a function that accepts employee and 
department argument and returns clone so​ the cloned object has dept property.​

​Call the function later and store result in result variable and print it.​

function employeeClone(employee, department)​
Example input​
  employee={ username: “chetan”, age: 22}​
  department={deptId: “d1”, name: “Development”}​
Expected Output: ​
  {​
  username: “chetan”, age: 22 , ​
  dept : {deptId: “d1”, name: “Development”}​
  }​
  
*/
function employeeClone(employee,department){
    
    //cloning
    let copyemp ={...employee,department}; //sparse method 
    //let copyemp= Object.assign({}, employee,department);
    //let copyemp=JSON.parse(JSON.stringify(employee,department));
    return copyemp;

 };
  
let employee={ username: 'chetan', age: 22};
let department={deptId: 'd1', name: 'Development'};
let result=employeeClone(employee,department);
console.log(result);

/*Practice Exercise-2
Write a program in JavaScript to define a function that accepts customer and 
items argument and returns clone so the ​cloned object has dept property.​

​Call the function later and store result in result variable and print it.​

function customerClone(customer, items)​
Example input

  customer={ username: “chetan”, age: 22}​
  items=[ { name:”samsung”, price:20000} ,  { name:”motorolla”, price:25000} ]​
​Expected Output: ​
  { ​
  username: “chetan”, age: 22,​
  items: [ { name:”samsung”, price:20000} ,  { name:”motorolla”, price:25000} ]​
  }​
  */

  function customerClone(customer,items){
    
    //cloning
    let copyCustomer={...customer,items};
    return copyCustomer;

 };
  
let customer={username:'chetan', age: 22};
let items=[{ name:'samsung', price:20000} ,  { name:'motorolla', price:25000}];
let result1=customerClone(customer,items);
console.log(result1);