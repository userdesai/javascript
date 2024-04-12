let myName="Hitesh     "
// console.log(myName.trim().length);


let myHero=['thor','spiderman']
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`);
}

Array.prototype.heyHitesh=function(){
    console.log(`Hitesh says hello`);
}
heroPower.hitesh()
myHero.heyHitesh()
// heroPower.heyHitesh()



//inheritance

const user={
    name:"user",
    email:'chai@google.com'
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"JS assignment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName="Chai aur code"
String.prototype.trueLength=function(){
   console.log(`$this`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUserName.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()


