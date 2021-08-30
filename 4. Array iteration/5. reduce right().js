// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

// The reduceRight() method works from left-to-right in the array.

const arr=[1,2,3,4,5,6];
const test=arr.reduceRight(test_func);

function test_func(total, values)
{
  return total+values;
}
console.log(test);


