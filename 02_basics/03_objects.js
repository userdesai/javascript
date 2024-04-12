//singleton-->cunstroctor--->Object.create
//litrels object
// Object-->Key value pair

const mySym=Symbol("Key1")


const Jsuser={
    name:"Aniket",
    age:22,
    location:"vasai",
    email:"aniket@gmail.com",
    [mySym]:"mykey1",
    isLoggedIN:false,
    lastLoginDays:["Monday","saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"]);
console.log(typeof Jsuser[mySym]);


Jsuser.email="hitesh@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email="hitesh@in.com"
console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello js user");
}

console.log(Jsuser.greeting);
console.log(Jsuser.greeting());//undefined

Jsuser.greeting2=function(){
    console.log(`Hello js user ${this.name}`);// `` called string interpolation
    //this ka upyog object ke refrance ke properties milta hai
}

Jsuser.a3=function(){
    console.log(`Hello js user ${this.email}`);
}

console.log(Jsuser.greeting2());

console.log(Jsuser.a3);//output is function anonymous
console.log(Jsuser.a3())
