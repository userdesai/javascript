//Numbers

const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//decimal ke baad value

const otherNumber=123.896

console.log(otherNumber.toPrecision(3));

console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(2));


const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));


//Maths

console.log(Math); //object


console.log(Math.abs(-4)); //abs mens negative valuse convert to positive

console.log(Math.round(4.6));//roundfiger value taken

console.log(Math.ceil(4.6)); //Top level means bigger value lenga
console.log(Math.floor(4.6)); //Lower level means small value lenga



console.log(Math.min(1,2,4,7));
console.log(Math.max(1,2,4,7));

console.log(Math.random());//o or 1 ke bich me value deta hai 
console.log(Math.random()*10+1); //+1 because 0 number avoide
console.log(Math.floor(Math.random()*10)+1);


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);




