// In real life objects are visible things like : car, house , person , bus etc
//object has some properties //

//Objects are variables as well but they can contain lots of data(properties)

//Note : We define (and create) a JavaScript object with an object literal
// (Don't use `new` keyword to create a object that may increase the execution time)

// -------------------------------------------------------------------------------------
//The (((  name:values  ))) pairs in JavaScript objects are called properties:--->
//The method() is a function stored as a property 
// -------------------------------------------------------------------------------------


var person1={  //person1 is object
    name:"Asif Zaman", 
    Institution:"Physics-World",  //property   
    Status:"Lead Teacher",
    fullname:function()
    {
      return this.name+"   "+this.Status;
    }
};
var person2={ //person 2 is object
    name:"Sadman Mithun",
    Institution:"Physics-World",//property
    Status:"Math Teacher",
    fullname:function()
    {
      return this.name+"   "+this.Status;
    }
};
var person3={ //person 3 is a object 
    name:"Sajidul Islam",
    Institution:"Physics-World", //property
    Status:"ICT Teacher",
    fullname:function()
    {
      return this.name+"   "+this.Status;
    } 
};

//invoke property//

console.log(person1.name); //asif name//
console.log(person2.Status); //mithun status
console.log(person3.Status)// sajid status//

//invoke method()//

console.log(person1.fullname());
console.log(person3.fullname());

//invoke method as a property//

// If we access a method without the () parentheses, it will return the function definition

console.log(person1.fullname);

// -------------------------------
// // Note : In JS `new` keyword create an object so that will increase the memory and execution time (Java Heap memory concept [new Instance creation])

// var x = new String();     
// var y = new Number();        
// var z = new Boolean(); 
// -------------------------------


