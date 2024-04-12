//array ke upper most important forEach lop


const coding=["js","java","cpp"]

coding.forEach(function (item) {
    console.log(item);
})


coding.forEach((val)=>{
    console.log(val);
})

//another method
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
     console.log(item,index,arr);
})


//[{},{},{}]

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"java"
    },
    {
        languageName:"C++",
        languageFileName:"ruby"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})