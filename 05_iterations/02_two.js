//while do-while loop

let index=0
while (index<=10) {
     console.log(`value of index ${index}`);
     index=index+2
    
}


let myArray=['flash','batman','superman']
let arr=0
while (arr<myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr=arr+1
}

let newarr=['flash','batman','superman','one']

for (let index = 0; index < newarr.length; index++) {
    const element = newarr[index];
    console.log(element);
    
}

//do-while loop
let score=1
do {
    console.log(`score is ${score}`);
    score++
} while (score<=10);


let score1=11
do {
    console.log(`score is ${score1}`);
    score1++
} while (score1<=10);//score is 11