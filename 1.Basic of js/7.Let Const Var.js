//In ES6 `let` `Const` have deployed//

// var has a problem of re-declaration
 
var greet="Hello Outsider";
var count=4;

if(count>3)
{
    var greet="Hello Asif";
}
console.log(greet);

//this is the problem of var when the variable is redeclared we might be consfused about the output we get//

//`Let` doesn't support re-declaration  ///
//`Let` is blcoked scope {}
//`let` can be updated but can not be re-declared

// //Error Code : --->>>

let greet="Hello Outsider";
let count=4;
if(count>3)
{
    let greet="Hello Asif"; ///It will give an error (greet is re-declared)
    console.log(greet);
}
console.log(greet);


let greet="Hello Outsider";
let count=4;
if(count>3)
{
    let hello="Hello Asif"; 
    console.log(hello); //this will print
}
console.log(greet); // this will print as well//


//Let can be updated//

let greet="Hello Asif";
greet="Hello Sajid";


//Variables declared with the `const` maintain the const values.
//`Const` can not be updated and re-declared

const greet="Hello Asif";
const greet="Hello Ovy";  //redeclareation error//

const greet="Hello Asif";
greet="Hello Tamim"; //Error of updating