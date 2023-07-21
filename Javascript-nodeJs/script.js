//var name=prompt("Enter ur Name:")
/*var age=prompt("Enter ur Age:")
var adr=prompt("Enter ur Address:")
alert("Name: "+ name + " Age: "+ age + " Address: "+ adr)

*/
/*class operations{
    
    add(num1,num2)
    {
        return num1+num2;
    }
    divide(num1,num2)
    {
        return num1/num2;
    }
}
let res=new operations()
r1=res.add(23,67)
r2=res.divide(56,7)
console.log('the result of addition is '+ r1)
console.log('the result of division is '+ r2)
*/

let student=[{'name':'Vishal','branch':'comp','marks':84},
{'name':'Mohit','branch':'E & TC ','marks':63},
{'name':'Tina','branch':'IT','marks':78},
{'name':'Gopal','branch':'IT','marks':89}]

const res = student.filter(elm => elm.branch =='IT')
console.log(student)
//console.log(res.name)
//console.log(res.marks)

res.forEach(elm => console.log(elm.name,elm.marks))