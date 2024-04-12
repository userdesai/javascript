//map and filter
const myNums=[1,2,3,4,5,6]
const newNums=myNums.map((num)=>{
    return num+10
})

console.log(newNums);


//chaining

const newNums1=myNums.map((num)=>{
    return num*10
}).map((num)=>{
    return num+2
}).filter((num)=>num>30)

console.log(newNums1);