/*Practice Exercise-1
Write a program in JavaScript to define getters and setters, use setters to change the product name and price​,
 Use getters to fetch object details and print details in expected output format.​

Example input​
  { name : “samsung”, price : 20000 }​
​Example output​
  samsung: 20000
*/
  
const Product= {

    // data property
    Name: 'Samsung',
    Price:20000,
    
    // accessor property(getter)
    get getName() {
        return this.Name;

    },
    get getPrice() {
        return this.Price;
        
    },
    set changeName(newName) {
        this.Name = newName;
    },
    set changePrice(newPrice) {
        this.Price = newPrice;
    }
};

// accessing getter methods
console.log(Product.getName + " : " + Product.getPrice); 

Product.changeName = 'Iphone';
Product.changePrice = 130000;

console.log(Product.Name + " : " + Product.Price);

/*
Practice Exercise-2
Write a program in JavaScript to define getters and setters, use setters to change customer name and age​, 
Use getters to fetch customer details and print details in expected output format.​

Example input​
  { name : “aditya”, age: 21 }
Example output​
  aditya:21​
  */

const customer= {

    // data property
    Name: 'Saba',
    Age:23,
    
    // accessor property(getter)
    get getName() {
        return this.Name;

    },
    get getAge() {
        return this.Age;
        
    },
    set changeName(newName) {
        this.Name = newName;
    },
    set changeAge(newAge) {
        this.Age= newAge;
    }
};

// accessing getter methods
console.log(customer.getName + " : " + customer.getAge); 

customer.changeName = 'Aaliya';
customer.changeAge= 25;

console.log(customer.Name + " : " + customer.Age);