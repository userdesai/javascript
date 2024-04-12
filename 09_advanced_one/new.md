# Mobile Product Data Fetching

This script fetches mobile product data from an API and logs various information about the products.

## JavaScript Code

```javascript
const mobileProduct = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);

        // Logging product details
        setTimeout(() => {
            console.log(
                `Product 1 - ID: ${data.products[0].id}, Title: ${data.products[0].title}, Brand: ${data.products[0].brand}`
            );
            console.log("All brands:");
            for (const product of data.products) {
                console.log(product.brand);
            }
        }, 3000);

        // Finding product with ID 2
        setTimeout(() => {
            console.log("the data is...");
            for (const product of data.products) {
                if (product.id === 2) {
                    console.log(
                        `The title of the product with ID 2 is ${product.title}`
                    );
                    break;
                }
            }
        }, 5000);

        // Finding product with ID 10 using for...in loop
        setTimeout(() => {
            console.log("the data is...");
            for (const index in data.products) {
                if (data.products[index].id === 10) {
                    console.log(
                        `The title of the product with ID 10 is ${data.products[index].title}`
                    );
                    break;
                }
            }
        }, 7000);

        // Total products available
        setTimeout(() => {
            console.log(`Total products available: ${data.total}`);
        }, 9000);

        // Displaying products with rating 4.59
        setTimeout(() => {
            console.log("Products with rating 4.59:");
            data.products.forEach(product => {
                if (product.rating === 4.59) {
                    console.log(`Product Name: ${product.title}, ID: ${product.id}`);
                }
            });
        }, 11000);

        // Finding product with ID 10 using forEach loop
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
            console.log(`Total products available: ${data.total}`);
        }, 9000);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};

mobileProduct();
