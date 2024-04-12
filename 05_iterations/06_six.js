// const coding=["js",'java',"python","cpp"]
//ForEach ke andher return use nahi kaar sakte hai


// const values=coding.forEach((items)=>{
//   return items
// })

// console.log(values);

//filter
const mynums=[1,2,3,4,5,6,7,8,9,10]

const newnum=mynums.filter((num)=>{
      return num>5
})
console.log(newnum);

// const newnum=mynums.filter((num)=>num>5)
// console.log(newnum); //Implicit 


const newvalue=[]

mynums.forEach((num)=>{
    if (num>4) {
        newvalue.push(num)
    }
})


console.log(newvalue);




//filter example