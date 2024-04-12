class User{
    constructor(username){
        this.username=username
    }
    //methiod
    logMe(){
        console.log(`Username ${this,this.username}`);
    }
    //method
   static createId(){
        return `#$123`
    }
}


class Teacher extends USer{
    constructor(username,email){
        super(username)

        this.email=email
    }
}

const iphone= new Teacher("iphone","i@gmail.com")
iphone.logMe()

const hitesh=new User("hitesh")
// const a=hitesh.createId()
console.log(a);