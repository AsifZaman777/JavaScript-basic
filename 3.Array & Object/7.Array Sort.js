// in js we can use sort() to sort an array

// sort() ----> can sort only the strings " -- " not the numerical value

//string sorting-->
var array=[`Asif`,`Eram`,`Mikkel`,`Jonas`,`Martha`,`Henna`];
console.log(array);
console.log(array.sort()); //sorted data 

//But we can not use the sort() for numerical data 

// This works well for strings ("Asif" comes before "Eram").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// We can use compare function for sorting the numerical values 

// So numerical value can be sorted in this way-------->
var digits=[100,20,70,45,82,5,10];
console.log(digits);
console.log(digits.sort(function(a,b)  //ascendeing sort 
{
    return a-b;
}));

console.log(digits.sort(function(a,b) // descending sort 
{
    return b-a;
}));


// Compare function--------------> 

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values 
//according to the returned (negative, zero, positive) value.

// If the result is negative a is sorted before b.

// If the result is positive b is sorted before a.

// If the result is 0 no changes are done with the sort order of the two values.

// Example:----------------> 

// The compare function compares all the values in the array, two values at a time (a, b).

// When comparing 40 and 100, the sort() method calls the compare function(40, 100).

// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
