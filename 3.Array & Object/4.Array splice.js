
//--------Splice()-----------///

//splice is the advance technique of append elements ..

//--------------------
//Syntax : 
// array.splice(Where elements are inserted ,how many elements will be deleted, rest parameters)
//--------------------

friends=['Asif','Tamim','Prottoy','Ovy','Munem','Sajid'];
console.log("Before splicing : ",friends);
 friends.splice(4,0,'Asif Iqbal','Jubair'); //from 4 no index elements will inserted
console.log("After spliceing : ",friends);



///deletion with splicing 

friends.splice(0,4);   /// rest parameters are ommited ... no elements are added//
console.log("After deletion : ",friends); //first four elements are deleted//
