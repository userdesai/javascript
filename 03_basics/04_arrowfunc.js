const user={
    username:"Aniket",
    price:120,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        //here this current function ke bare me batata hai
    }
}
//this --->current context ko refer karta hai.
//arrow function me (this) use nahi hota hai.

user.welcomeMessage()

const newuser={
    name:"Aniket",
    age:22,
    grettingMessage:function(){
        console.log(`The name is ${this.name} age is ${this.age} and data is ${this.data}`);
     
    },
    data:"youtube"
}

newuser.grettingMessage()
console.log(newuser);


console.log(this)
//browser ke globel object hai window object hai.

//node me this ki value {} empty object aati hai o ho inspect karnese window aati hai.



function chai() {
    let username="aniket"
    // console.log(this.username) output:-undefined because object ke andhar this kam karti hai direct function ke andher nahi.
    
}
chai()

//Arrow function

const chai1=(num1,num2)=>{
    return num1+num2

}

console.log(chai1(3,4));

//implcet return

// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(5,5));
const addTwo=(num1,num2)=>({data:"Aniket"})//object use.

console.log(addTwo(3,4));






