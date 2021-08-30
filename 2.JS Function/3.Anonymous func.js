// Anonymous Function is a function that does not have any name associated with it. 
//Like python Lambda function >> link : 
         

/// void function...
var name=function(){
    console.log(`My name is Asif Zaman`);
};
name();

//passing arguments//
var arg=function(age){
    console.log(`My age is : `+age);
};
arg(20);

//Anonymous function in a function ///
//setTimeOut() function .......
setTimeout(function()
{
    console.log("This is excuted after 5000 mili second");
},5000);  ///timer always in milisecond 

// self executing function//

(function()
{
    console.log(`This function is self invoked`);
})();  //this function is self invoked

