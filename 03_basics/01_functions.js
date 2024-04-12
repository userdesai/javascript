//functions-->package of code

function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("E");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1,number2){//parameters
//    console.log( number1+number2);

// }
function addTwoNumbers(number1,number2){

    return number1+number2
//    let result =number1+number2
//    return result
   //iske aage koi code run nahi hoga
   console.log("aniket");

}
addTwoNumbers(3,4)//arguments
const result=addTwoNumbers(3,4)
console.log("Result",result);//Result is:- undefined



function loginUserMessage(username="sam"){
    if(!undefined){
        console.log("Please enter the name");
       

    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Aniket"))//value pass hui hai
console.log(loginUserMessage())//value pass nahi hogi to undefined aata hai.
//undefined just logged in.
