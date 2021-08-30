// every() works for all the values of the array. 
// if the all the values passes then it will return true
 

var array=[12,23,45,67,89,21,1,3,45];
var test=array.every(test_func);

function test_func(value,index,array)
{
    return value>18;
}
console.log(test);  //return true

// true condition ///

var test2=array.every(test_func1);

function test_func1(values)
{
    return values<100;
}
console.log(test2); ///return true



