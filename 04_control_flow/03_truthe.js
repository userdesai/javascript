//truthe or false -->Andaja laga sakte hai.


// const userEmail="Aniket@gmail.com" -->true
// const userEmail=""-->  flase
const userEmail=[] 
  
if (userEmail) {
    console.log("Got user email");
    
}else{
 console.log("dont have user email");
}


//falsy values
// false,0,-0,BigInt(0n),"",null,undefined ,NaN

//Truthy values
// "0","false"," (space)",[],{},function(){}



//how to array check

if (userEmail.length===0) {
    console.log("Array is empty");
    
}

//how to empty object check

const emptyObj={}

if (Object.keys(emptyObj).length===0) {
console.log("The object is empty");
    
}

//General knowledge
//false==0-->true
// false==""-->true
// 0==""-->true


//++++ Nullish Coalescing Operator (??) :null,undefined


//database se value aati hai tab use hota hai
let val1;
// val1=5 ?? 10--->assign 5
val1=null?? 10 //assign 10
// val1=undefined??15-->assigned 15
// val1=null??10??15--->assigned 10

console.log(val1);



// Terniary operator
//condition ?true :false

const iceTeaPrice=100
iceTeaPrice<=80?console.log("less then 80") :console.log("more than 80");



