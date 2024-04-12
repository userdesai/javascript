//object ke upper for in loop

const myObject={
    js:"Javascript",
    cpp:"C++",
    rb:"ruby"
}

for (const key in myObject) {
   //console.log(myObject[key]);
   console.log(`${key} shortcut for ${myObject[key]}`);
}


//array ke upper for in loop

const programmig=["js","rb","py","java"]

for (const key in programmig) {
  console.log(key);//index value deta hai
  console.log(programmig[key]);
}

//map itrable nahi hai to fir for in loop me use nahi karte dusra tarikha use hota hai.