//date is datatypes is object


let myDate=new Date()
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

//javascript ke andhar month 0 se start hote hai
// let myCreatedDate=new Date(2024,0,24)
let myCreatedDate=new Date(2024,0,24,5,3)

console.log(myCreatedDate.toLocaleString());


//yy-mm-dd in this specific type month start with 01

let specificDate=new Date("2024-03-28")
//mm-dd-yy indian style

console.log(specificDate.toLocaleString());



//TimeStamp

let myTimeStamp=Date.now()
console.log(myTimeStamp);
//output in milisecond
console.log(myCreatedDate.getTime());


//time is convert to milisecond to second
console.log(Math.floor(Date.now()/1000));


//find out month,date,day
let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())


const a= newDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
    




})
console.log(a);