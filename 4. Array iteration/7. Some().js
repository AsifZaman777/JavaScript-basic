/// Some values of array fulfill the condition --->return true
//else ---> return -------->false

var arr=[9,76,45,3,4,2,5,0];

var test=arr.some(test_func);

function test_func(value, index, arr)
{
  return value>18;
}
console.log("Some of the value>18 is ",test);