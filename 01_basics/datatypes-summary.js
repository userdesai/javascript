//2 Types of data types
//Primitive data types and non premitive data types
//kise adhar par decide kiya jata hai-->kis tarah data memory me rakha(store) jata hai or access kiya jata hai uske aadharpar decide hota hai primitive or  non primitive. 


//1:-Primitive  -->(call by value) changes in copy
//7 category--> string,number,boolean,null(empty),undefined(value not deside),symbol(unique),BigInt

//Non primitive(Referance) memory refrance direct allow 
// Array,Objects,Functions

//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.28


//symbols are unique

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)// false



//Primitive datatypes:
// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

// Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object