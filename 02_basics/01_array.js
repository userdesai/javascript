//array-->aaray data types are object

//JavaScript arrays are resizable and can contain a mix of different data types.

//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes.

//zero index s start hota hai

//JavaScript array-copy operations create shallow copies or Deep copies.

//A shallow copy of an object is a copy whose properties share the same references  like an Heap main result change hota hai.

//A deep copy of an object is a copy whose properties do not share the same references like ans stack  create an onother copy

let array=[1,2,3,"Aniket","Hitesh"]
console.log(array[0]);
console.log(array.length);


//Array methods

let myArray=[1,2,3,"superman","shaktiman"]
let array2=[4,5,6]

//1:-push()-->add element at position last.
myArray.push(...array2)//spread operator all values takes

//2:-pop()-->remove one element position last
console.log(myArray.pop());

//3:-unshift-->Add the element first position.

myArray.unshift(90)
//4:-shift()--->remove eliment first
myArray.shift()



//includes()-->true or false me ans element present or not
//include ahe ki nahi he sangte.
console.log(myArray.includes(9));

//join()-->answer the type of data is string and bind the data.

const newArray=myArray.join()
console.log(newArray);

let b=[1,2,88,892]
let c=b.join()
console.log(c);




//slice or splice


console.log("A",myArray);
const myn1=myArray.slice(1,3)
console.log(myn1);
const myn2=myArray.splice(1,3)
console.log("B",myArray); //splice hai o original array ko manipulate karta hai.
console.log(myn2);
console.log(myArray);










