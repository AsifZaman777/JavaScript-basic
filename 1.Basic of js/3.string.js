var string1="Asif Zaman";
var string2="Tamimul Alam";
var string3="Prottoy Rahman";

// string conacatination -------->

//1st tech (+ sign) --->

console.log(string1+" "+string2);

// 2nd tech concat() method -->

console.log(string1.concat(string2));

//string to CharArray ------>

//option 1  Split() --->

// split kewword is mostly used(Robust way) . String also can slitted in required portion as well
console.log(string1.split(''));

var arrray=string2.split('');
console.log(arrray);

//option 2   --->

console.log([...string3]);

//String modification --->

console.log("\n"+string1.toLowerCase());
console.log("\n"+string2.toUpperCase());


///length and character position in string 

var len=string1.length; //length is not a function
console.log(len);

//char position 
var pos1=string1.charAt(0);
var pos2=string2.charAt(2);
var pos3=string3.charAt(3);
console.log(pos1+''+pos2+''+pos3);









