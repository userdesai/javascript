const name="Aniket"

const repoCount=50

// console.log(name+repoCount);//no use

//`` string interpolation

console.log(`Hello ${name} my repo is ${repoCount}`);

//Access an key value pair as well as length and methods also acess it
const gameName=new String('aniket')
// console.log(gameName.length)
console.log("the length is",gameName.length);
console.log(gameName.indexOf("e"))//0 se start
console.log(gameName.split())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2));//konse position pe kay value preset hai

const newString=gameName.substring(0,4)//not a negative value use
console.log(newString);

const anotherString=gameName.slice(-4,5) //negative value use
console.log(anotherString)

const url="aniket123.com"
console.log(url.replace('123' ,'456'))


console.log(url.includes("aniket123"))

console.log(gameName.split('122',5));//argument (seprator,limit)   and output is an Array format.

const paragraph='The quick brown@ fox jumps over the lazy dog. It barkeD.';

const regeX=/[A-Z]/g //i;
//g is find out captal word and i is find out the small letter
const found=paragraph.match(regeX)
console.log(found);
console.log(found.length);


const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5,'97'));
// Expected output: "20097  "


const a="aniket"
const b=a.replace("an","Tan")
console.log(b);

