// Question -2
/*Practice Exercise-2
Write a program in JavaScript to define a function that validates the form given below:​

Validations Requirements:​

Length of name should be between 2 and 15, should contain only English alphabets.​
Price can’t be negative.​
*/

function validateForm() {
    
    let character = /^[a-zA-Z]+$/;

    if (!character.test(document.forms["myForm"]["pname"].value) || (document.forms["myForm"]["pname"].length < 2 || document.forms["myForm"]["pname"].length > 15)) {

        alert('enter only characters in first name and length should be 2 to 15');

    }
    else if (document.forms["myForm"]["price"].value < 0) {

        // console.log(age.value);

        alert('prise should be positive');

    }

    else {

        console.log(document.forms["myForm"]["pname"].value)

        console.log(document.forms["myForm"]["price"].value)

        alert("successful");
    }

}