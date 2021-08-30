///Function in js is similar to java 
const { info } = require("console");

// return function//
function speed_converter(speed)
{
    var kmh=speed*1.60;
    return kmh;
}

var result=speed_converter(20);
console.log(`Speed of the car : `,result+" KM/H");

// No return value//

function odd_checker(num)
{
    if (num%2==0)
    console.log(num+` is even`);
    else
    console.log(num+` is odd`);
}
odd_checker(6); //even returned//

//variables declared in the functions in JavaScript are the local variable///

//local variable 
function local_par()
{
     name="Asif Zaman";
    console.log(name.length);
}
local_par();




