
//--------Splice()-----------///

//splice is the advance technique of append elements or deleting without holes in the array ..

//--------------------
//Syntax : 
// array.splice(Where elements are inserted ,how many elements will be deleted, rest parameters)
//--------------------

const friends=['Asif','Tamim','Prottoy','Ovy','Munem','Sajid'];
console.log("Before splicing : ",friends);
 friends.splice(friends.length,0,'Asif Iqbal','Jubair'); //from 4 no index elements will inserted
console.log("After spliceing : ",friends);



///deletion with splicing 

friends.splice(0,4);   /// rest parameters are ommited ... no elements are added//
console.log("After deletion : ",friends);  //first four elements are deleted// [(0,1,2,3),4,5,,6,7] (0->3)---> deleted


const names=[`Tamim`,`Prottoy`,`Ovy`,`Munem`,`Jubair`];
let removed=names.splice(2,2,`Unknown 1`,`Unknown 2`);  //[0,1,(2,3),4] ----> 2,3 deleted

console.log("\n\nNames : ",names);
console.log("Removed items : ",removed);