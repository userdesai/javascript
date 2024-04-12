//control flow

//1:- If

if(true){

}

//comparison operator
//<,>,<=,>=,==,!=(3!=2),===(type check),!==


const score=200

if(score>100){
    // var power="fly"-->Acessible global
    let power="fly"
    console.log(`User power ${power}`)

}
// console.log(`User power ${power}`) use nahi kar sakte.

const balance=1000

//implcit if
// if (balance>500) console.log("test1"),
// console.log("test two");


//Newsted if

if (balance<500) {
console.log("less than 500");
    
}else if(balance<750){
    console.log("less than 750");
}else if(balance<9000){
    console.log("balance is less than 9000");

}



//real example

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if (userLoggedIn&&debitCard &&2==2) {//sari ki sari value true honi chaiye && (and) me.
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {//1 bhi value true ho gai to excute hota hai ||(OR) me.
    console.log("user log in ");
    
}


