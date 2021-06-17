/// JavaScript has dynamic dataTypes

var name="Asif Zaman"; //string 
var age=18; //number
var cgpa=3.92; //float
var student=true // bool

console.log(name+" "+age+" "+cgpa+" "+student);  

//`typeof` operator make us able to know about the datatypes of the variables ///

console.log("Type of name : "+typeof name);  //return string
console.log("Type of age : "+typeof age);   ///return number
console.log("Type of cgpa : "+typeof cgpa); ///return number
console.log("Type of student : "+typeof student); //return boolean

///There is a bug in JavaScript for `Null` 

var person=null;
console.log(person);
console.log(typeof person); ///return object  ```But it should be null````////





