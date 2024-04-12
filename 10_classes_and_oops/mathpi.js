const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// console.log(Math.PI); // 3.141592653589793

const mynewObject = Object.create(null);
console.log(mynewObject);

const chai = {
    name: 'ginger',
    price: 250,
    isAvailable: true,

    orderChai:function(){
        console.log('chai nahi bani');
    }
};

console.log(chai);

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value!=="function") {
        
        console.log(`${key} : ${value}`);
    }
}
