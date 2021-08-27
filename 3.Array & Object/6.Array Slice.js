// Slice() method can devide an array in different dimention..

const friends=['Asif','Tamim','Prottoy','Sajid','Jubair','Asif Iqbal','Jubair'];
console.log(friends);

//Slicing an array and put the elements in a different array//

const newArray=friends.slice(3);  // execute from index 3 to last 
console.log("Slice 1 : ",newArray);

// Slice(n,n-1) have two parameters
// n is the beginning//
// n-1 is the last limit..

const newArray2=friends.slice(2,5);
console.log("Slice 2 : ",newArray2);

