/*Practice Exercise-1
Write a program in JavaScript to define a function that validates the form given below:​

Validations Requirements:​

Length of firstname and lastname should be of minimum length 2 and maximum 15.​
firstname and lastname can only contain English alphabets.​
firstname and lastname can only contain letters in small case.​
age should be between 18 and 60.​
*/

function validateForm() {
    let character = /^[a-z]+$/;

    if (!character.test(document.forms["myForm"]["fname"].value)) {
        alert('Enter only small case characters in first name');

    }

    else if (!character.test(document.forms["myForm"]["lname"].value)) {

        alert('Enter only characters in Last name');

    }

    else if (!document.forms["myForm"]["cid"].value <= 18 || !document.forms["myForm"]["cid"].value >= 60) {

        console.log(age.value);

        alert('enter age between 18 to 60');

    }

    else {

        console.log(document.forms["myForm"]["fname"].value)

        console.log(forms["myForm"]["lname"].value)

        console.log(document.forms["myForm"]["cid"].value)

        alert("successful");
    }

}