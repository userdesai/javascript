class User{
    constructor (username){
        this.username=username
    }
    logMe(){
        console.log(`User name is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCource(){
        console.log(`A,new cource added by ${this.username}`);
    }
}

const chai= new Teacher('chai',"chai@gmail.com",'123')
chai.addCource()




const masalChai=new User("masalaChai")
masalChai.logMe()

console.log(chai===masalChai);
console.log(chai instanceof User);
