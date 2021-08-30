// map() can use a call back function uses three parameters
// test_function(value, index, array)

// map() will return an array after filling the conditions 

// map() works for every value of the array after filling the condition 

var arr=[44,34,66,4,12,6,8];

var show=arr.map(test_func);

function test_func(value, index, array)
{
    return value*2;
}
console.log(show);




