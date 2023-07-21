
/*Write a program in JavaScript to define a factory function that creates and returns customer object.​Call function, store returned result in result variable and print it.​

function newCustomer(customerName, customerAge)​*/

function newCustomer(customerName, customerAge) {
    return {
      customerName: customerName,
      customerAge: customerAge,
      getCustomerDetails() {
        return '{ name: ' + customerName + ' , age: ' + customerAge+'} ';
      }, 
    };
  }
  
let person1 = newCustomer('John', 22);
console.log(person1.getCustomerDetails());


/*Program 2
Write a program in JavaScript to define a factory function that creates and returns product object.

Call function, store returned result in result variable and print it.

function newProduct(name, price, models)​

Example input

  “samsung”, 20000, [“galaxy z”, "galaxy f13" ]​
Expected Output:

 {name: “samsung”, price:20000, models: [“galaxy z”, "galaxy f13"] }​   
 
*/

function newProduct(name, price, models) {
    return {
      name: name,
      price: price,
      models:models,
      getProductDetails() {
        return  '{ name:' +name  + ', price : ' + price + ' , models : ['+ models +' ] }' ;
      },
    };
  }
let models_name= ['galaxy z','galaxy f13'];
let product1 = newProduct('samsung', 20000, models_name);
console.log(product1.getProductDetails());
