const array1=['Asif','Sajid','Tamim','Prottoy'];
const array2=['AIUB','BUET','DU','DMC','Jagannath'];
const array3=[18,12,43,54,65];

//conscatination using ` + `///

const newArray=array1+array2;
console.log("Concatination 1 : ",newArray);

//concatination using ` concat()` method///

const newArray2=array1.concat(array2);
console.log("Concatination 2 : ",newArray2);

//multiple array concatination//

const newArray3=array1.concat(array2,array3); //using as parameter
console.log(newArray3);


//value addition//

const values=['Mango','Orange','Apple','Jackfruite'];
const newArray4=values.concat('Last fruit');
console.log(newArray4); //added `Last fruit`