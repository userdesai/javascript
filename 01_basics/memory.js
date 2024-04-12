//stack(primitive  copy liya jata hai) and Heap(Non primitive refrance liya jata hai) two types of memory

let myName="Aniket"

let newName=myName

newName="Taniket"

console.log(newName)


//Non premitive

let userOne={
    email:"Aniket@gmail.com",
    no:9370924020
}

let userTwo=userOne
userTwo.email="Taniket@gmail.com"

console.log(userTwo)