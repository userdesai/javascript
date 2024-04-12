//reduce

const myNums=[1,2,3]
const myTotal=myNums.reduce((acc,currval)=>{
    console.log(`acc:${acc} and curval: ${currval}`);
    return acc+ currval
},0)

console.log(myTotal);


const myTotal1=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal1);


const shopingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"react",
        price:400
    },
    {
        itemName:"data science",
        price:10000
    }
]

const cartTotal=shopingCart.reduce((acc,item)=>acc+item.price,0)
console.log(cartTotal);