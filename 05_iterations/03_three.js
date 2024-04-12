//Array specific loop
//for of loop
//iterator-->object ,string,array


const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings="hello world"

for (const gret of greetings) {
    //console.log(gret);
}


//Maps
//objet holds key value pair,and remembers the original insertion order of the keys.
//unique value milti hai(collections)

const map=new Map()
map.set('IN',"India")
map.set('USA','United state of America')
map.set('fr','Franse')
map.set('IN',"India")//duplicate value nahi lati hai

//console.log(map);


for (const [key,value] of map) {
    console.log(key,value);
}


//object ke upper for loop
//objects ke andher for of itrable kam nahi kari hai

const myObject={
    "game1":"Nfs",
    "game2":"Spiderman"
}

// for (const key of myObject) {
//     console.log();
// }
