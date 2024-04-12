//IIFE--->Immediately invoked function expressions.
//function immeditly start or execute.
//global scope polut (variable or declaration global) se bachnekeliye use hota hai iife.

(function chai() {
    //named iife
    console.log(`DB connected`)
    
})();
// (;) semicolan lagana jaruri hai qiki stop or brek ho jaye or dusra function invoked karne ke liye.

//function declartion () executer()  

//arrow function bhi use hota hai

((name)=>{
    console.log(`Db connect two ${name}`);
})("Aniket");