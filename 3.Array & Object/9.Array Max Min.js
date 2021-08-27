const array=[55,6,39,90,65,100,199,200];
// er can sot asc or dsc to find the max or min value//

// Sorting method(Ineffecient method)----------------->

//min value--->
console.log("Miimum value : ",array.sort(function(a,b){ return a-b})[0]); ///pointing minimum 
//
console.log("Maximum value :  ",array.sort(function(a,b){return a-b})[array.length-1]); // pointing maximum



// using Math library -------------->

/// `Spread syntax : Element of an array as an argument of a function`///


console.log("Max number ES6 : ",Math.max(...array)); ///using spread syntax (ES6) 
console.log("Max number : ",Math.max.apply(null,array)); /// Conventional way

// Math.min(...array) or Math.min.apply(null,array) for finding min val from array.//

///fastest method

function find_max(array)
{
    let len=array.length;
    let max=-Infinity; /// zero initialization is not suitable

    for(let i=0;i<len;++i)
    {
        if(array[i]>max)
        {
            max=array[i];
        }
    }
    return max
}
console.log("Maximum number fastest mehtod : ",find_max(array));


// minimum finding 

function minimum(array)
{
   let len1=array.length;
   let  min=Infinity;   // zero initialization is not suitable/// 

    for(let i=0;i<len1;++i)
    {
        if(array[i]<min)
        {
            min=array[i];
        }
    }
    return min
}
console.log("Minimum number fastest mehtod  : ",minimum(array));