// to string()

const array=["Asif","Sajid","Tamim","Prottoy","Jubair"];
console.log("\nTo String format : " ,array.toString()); // seperates by comma

//  Join()
console.log("\nJoin : ",array.join(" // ")); // manipulate the separator 

///----------------------------- element append and deletion -----------------------///

//Push() Pop() works for the last element //


array.push(true); ///appendeing in last
console.log("\nTrue pushed : ",array);

array.pop();
console.log("\nTrue Poped",array); /// deleting last 

//appending with  length() method//
array[array.length]="Ovy";
console.log("\nOvy inserted :",array);


// Shift() :Similar to the POP()---Shift work on the first element instead of working on the first one

/// Shift Unshift works for the first element ///

console.log("\nShift element : ",array.shift());// which one is shifted ----> Asif shifted\\

console.log("\nShifted Asif :  ",array); /// Asif removed //

array.shift();
console.log("\nShifted Sajid : ",array);

///5. unsshift() ---> add a new element in the beginning and update all the indexes//

array.unshift("Sajid");
console.log("\nUnshift Sajid  : ",array);
array.unshift("Asif");
console.log("\nUnshift Asif :  ",array); //array turns into the previous state 


//---------------------------- Array size-----------------------

//unshift used also for the array size recalling --->

//Unshift()-->
console.log("\nArray size 1 : ",array.unshift()); ///array size will excecute

//length()--->
console.log("\nArray Size 2 :  ",array.length); //length() --> tells the array size


///--------------Changing the Elements----------------------///

// change in any index..
friends=["jubair","Tamim","Sajid",'Ovy','Prottoy','Asif Iqbal'];
friends[0]="Asif";
console.log(friends); //Jubair replaced by asif 

///---------------------Deleting element---------------------///

// js arrays are object so we can use `delete` for deletion//


delete friends[1]
console.log("Deleted Tamim : ",friends); /// Tamim undefined

// `delete` just make the element undefined not work properly as dynamic array or list...
// So its better to use POP() or Shift() instead.















