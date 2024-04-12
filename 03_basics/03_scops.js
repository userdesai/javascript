//scops--->let,var,const

// let a=10
// const b=20
// var c=30

var c=100
let a=300
const b=400

if (true) {//block scope
    
let a=10
const b=20

console.log("Inner ",a);
console.log("Inner ",b);

    
}

//function,if-else---->{} scope

console.log(a);
console.log(b);
console.log(c);


//node or windows ke andhar global scope alag hota hai.



//nested scope

function one(){
    const userName="Aniket"

    function two(){
        const website="youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}

one()

//in nested function child function parent function ko access kar sakta hai.




//hoisting

addone(5)
 // Idher use kar sakte hai quki variable me store nahi kiya hai.

function addone(num){
    return num+1
}

// addtwo(5)

 //hoisting problem because variable me store kiya or uske pahile hi call kare rahe ho.
 // Cannot access 'addtwo' before initialization
const addtwo=function(num){
    return num+1
}
addtwo(5)


