// iteration works for every array element

// test_func is a callback function. 

// forEach() call a function test_func() --->  (callback function)

// test_func(value, index, array)

//Dont return array


var arr=[3,55,6,7,88,9];

arr.forEach(test_func);

function test_func(values)
{
  console.log(values/2);    /// Condition is true for every single element of the array
}

// using three parameters//

function test_par(value, index, array)
{
  console.log(index*2);  /// works for every index number ///

}
console.log("Using parameters : ");  
arr.forEach(test_par);