//ES6

// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai=new User("Chai","Chai@gmail.com",'123')
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

//behind scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password


}

User.prototype.encryptPassword=function(){
return `${this.password}555`
}
User.prototype.superman=function(){
    return `${this.username.toUpperCase()}`
}

const tea=new User("tea","tea@123","123")
console.log(tea.encryptPassword());
console.log(tea.superman());


