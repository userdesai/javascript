// Object litral

const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,
    getUsetDetails:function(){
       // console.log('got user databse');
       console.log(`username:${this.username}`);
    }
}
console.log(`${user.username}`);
console.log(user.getUsetDetails());



//constructor function

//const PromiseOne=new Promise()
//const date=new Date()
//new--->1 he object se multiple instance bana sake,new context create


function User(username,loginCount,isLoggedIn){
    this.username=username
    //variable =pass value
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
      // 'return this;' is not necessary in constructor functions

}

const userOne= new User("aniket",8,true)
console.log(userOne);
console.log(userOne.constructor);//[Function: User]-->In JavaScript, the constructor property is used to return a reference to the constructor function that created an instance. Let's check the constructor property of userOne:


const userTwo= new User("hitesh",8,false)
console.log(userOne);

console.log(userTwo instanceof User);
console.log(userTwo instanceof Object);


//new -->empty {}object create
//constructor function call 




