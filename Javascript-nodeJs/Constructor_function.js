/*Create an object constructor function called Person in JavaScript with firstName, lastName, and id as its 
property.​Now create multiple objects of the same type using the new keyword.​
[Hint: Objects of the same type are created by calling the constructor function with the new keyword ]​

For the above question, add a property named gender to a constructor called person1 with the value female.​
Now, add a function to display the fullName for the person1 object only.​
Next, add a function to display fullName along with id in Person.​
Create a string object called fruitName with the value Strawberry and display it in JavaScript.​
*/


  // constructor function
function Person (person_firstname, person_lastname, person_id) {

  // assigning  parameter values to the calling object
   this.fname = person_firstname,
   this.lname = person_lastname,
   this.id = person_id,

   //Now, add a function to display the fullName for the person1 object only.​

   this.fullName = function () {
       return ('Full name: ' + this.fname + ' ' + this.lname );

   }
   //Next, add a function to display fullName along with id in Person.​
   this.fullNameWithID = function () {
    return ('Full name With ID: ' + this.fname + ' ' + this.lname +' '+this.id);
}
}


// creating objects
const person1 = new Person('Aarzu','Mulla',22);

//For the above question, add a property named gender to a constructor called person1 with the value female.​
Person.prototype.gender = "female";
console.log(person1.gender); // "female"

console.log(person1.fullName());

console.log(person1.fullNameWithID());

// accessing properties
//console.log(person1.fname); // "Aarzu"


//Create a string object called fruitName with the value Strawberry and display it in JavaScript.​
let fruitName=new String('Strawberry') 
console.log(fruitName); 