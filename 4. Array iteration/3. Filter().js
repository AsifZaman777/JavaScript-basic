// similer to map()

// but it works for only the values that can pass the condition//


var arr=[44,34,66,4,12,6,8];

var test=arr.filter(test_func);

function test_func(values)
{
    return values>15;
}
console.log("The numbers greater than 15 : ",test);


/// we can easily split an array in parts and copy the values in a different array/// ---->


var comp= arr.filter(index_test);

function index_test(values, index, array)
{
    return index>3;
}
console.log("Values after 3rd index : ",comp)
