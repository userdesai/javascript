//object songleton

const tinderUser=new Object()
;//singleton object. 

tinderUser.id="123abc"
tinderUser.name="aniket"
tinderUser.isLoggedIn=false
console.log(tinderUser)


const tinderUser1={}
console.log(tinderUser1);//non singleton object.


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"aniket",
            lastname:"desai"
        }
    }
}
// console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname,regularUser.fullname.userfullname.lastname);



//object ko combine

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}output { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//target {},source

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

const obj4={...obj1,...obj2}
console.log(obj4);


const users=[
    {
        id:1,
        email:"aniket@gmail.com"
    },
    {
        id:2,
        email:"hitesh@gmail.com"
    },
    {
        id:3,
        email:"new@gmail.com"
    }
]
//array represent karte hai to fir 0 se index start hota hai.
console.log(users[1].email,users[1].id);




//Important
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
//key deta hai output array me ata hai  ,array ata hai to fir hum loop laga sakte hai.
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //check karta hai property present hai kay nahi out put true or false me deta hai.

