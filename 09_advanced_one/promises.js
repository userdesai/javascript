// fetch('https://somethimg.com').then().catch.finally()

const promiseOne = new Promise((resolve, reject) => {
  //Do as async task
  //DB calls,ntetwork
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

//consume promise
promiseOne.then(() => {
  console.log("promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task two");
    resolve();
  }, 1000);
}).then(() => {
  console.log("consuming and connecting");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Aniket", email: "chai@exaple.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally resolved or reject");
  });

// const github = async () => {
//     try {
//         const response = await fetch('https://api.github.com/users/userdesai');
//         if (!response.ok) {
//             throw new Error('Failed to fetch user data');
//         }
//         const data = await response.json();
//         console.log(data);
//         setTimeout(()=>{
//             console.log(`the username is ${data.login} and is is ${data.id} the image is ${data.avatar_url}`);
//         },3000)

//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// }

// github();

const mobileProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);
  
      setTimeout(() => {
        console.log(
          `the id is ${data.products[0].id} and title is ${data.products[0].title} and the brand is ${data.products[0].brand}`
        );
        console.log("All brands:");
        for (const product of data.products) {
          console.log(product.brand);
        }
      }, 3000);
  
      setTimeout(() => {
        console.log("the data is...");
        for (const product of data.products) {
          if (product.id === 2) {
            console.log(
              `The title of the product with the second ID is ${product.title}`
            );
            break; // Exiting loop since we found the desired product
          }
        }
      }, 5000);
  
      //for in loop for product with id 10
      setTimeout(() => {
        console.log("the data is...");
        for (const index in data.products) {
          if (data.products[index].id === 10) {
            console.log(
              `The title of the product with ID 10 is ${data.products[index].title}`
            );
            break; // Exiting loop since we found the desired product
          }
        }
      }, 7000);
  
      // Total products available
      setTimeout(() => {
        console.log(`the total products available are ${data.total}`);
      }, 9000);
  
      // Displaying products with rating 4.59
      setTimeout(() => {
        console.log("Products with rating 4.59:");
        for (let index = 0; index < data.products.length; index++) {
          const rating = data.products[index].rating;
          if (rating === 4.59) {
            console.log(`This product has rating 4.59, its name is ${data.products[index].title} or id id  ${data.products[index].id} `);
          }
        }
      }, 11000);



      //for each loop

           //for each loop for product with id 10
           setTimeout(() => {
            console.log("the data is...");
            data.products.forEach(product => {
                if (product.id === 10) {
                    console.log(
                        `The title of the product with ID 10 is ${product.title}`
                    );
                }
            });
        }, 9000);

        // Total products available
        setTimeout(() => {
            console.log(`the total products available are ${data.total}`);
        }, 9000);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  mobileProduct();
  