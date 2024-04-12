const marval_hero=["thor","Ironman","spiderman"]
const dc=['superman','flash','batman']

// marval_hero.push(dc)

// console.log(marval_hero);

//output [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marval_hero[3][1]);

const newArray=marval_hero.concat(dc)//only on array add.
console.log(newArray);

const allnewArray=[...marval_hero,...dc]
console.log(allnewArray);


const anotherArray=[1,2,3,4,[5,6,7],8,[9,5,7],[888]]
let deptwise=anotherArray.flat(1)
console.log(deptwise);
let real_anothe_array=anotherArray.flat(Infinity)
console.log(real_anothe_array);



console.log(Array.isArray("aniket"));
console.log(Array.from("Aniket"));//convert an array

//isArray example
let isarray=[1,"hitesh"]
console.log(Array.isArray(isarray));


console.log(Array.from({name:"Aniket"}));
console.log(Object.values({name:"Aniket"}));
console.log(Object.entries({name: "Aniket"}));

let name1=Object.entries({data:"desai"})
console.log(name1);
let Oname=name1.flat(Infinity)
console.log(Oname);


let score1=100
let score2=200
let score3=300
let score4="Aniket"

console.log(Array.of(score1,score2,score3,score4));



