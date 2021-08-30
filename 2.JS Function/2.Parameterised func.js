//one function to another function..
//we can pass a function as a parameter ...

function nested(func,num)
{
    func(num);
}
function push(input_number)
{
    console.log(`You have entered  : `+input_number) //return 10;
}
nested(push,10);  //passing a funtion as a parameter...



// self executing function//

(function()
{
    console.log(`This function is self invoked`);
})();

