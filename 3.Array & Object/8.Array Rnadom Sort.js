// simple method( non accurate method) cause dependable on range of random value (Not a generalize solution )
const array=[02,40,100,60,35,5,10];
console.log(array.sort(function(a,b)
{
 return 0.2-Math.random()  //Random 0<range<=1 
}));


/// Accurate solution (Fisher Yates method )
function random_sort()
{   
    const numbers=[9,5,6,4,2,10];
    for(let i=numbers.length-1;i>0;i--)
    {
        let j=Math.floor(Math.random()*i); //random range is (0----1)
        //swaping 
        k=numbers[i];
        numbers[i]=numbers[j];
        numbers[j]=k;
    }
    console.log(numbers);
}
random_sort();

   



