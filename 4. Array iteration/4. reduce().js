// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

const arr=[1,2,3,4,5,6];
const sum1=arr.reduce(test_func1); 

function test_func1(total,value)
{
    return total+value;
}
console.log(sum1);


/// callback function take only two parameter test_func(total, value)

/// total is the previous returned value 





