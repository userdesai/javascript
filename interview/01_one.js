//Array questions
//original property ko loop kejiye
//array hai uske kuch additional property hai usko ignore karna hai or origanal property ko display karna hai.

Array.prototype.extraProperty="hitesh"

const myNewArray=[1,2,3,4]
for(let v in myNewArray){
if (myNewArray.hasOwnProperty(v)) {
    console.log(v);
}
    // console.log(v);
}

