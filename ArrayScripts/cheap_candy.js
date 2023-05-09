let products = [
  { product: 'Gummy Worms', price: 5.79 },
  { product: 'Plain M&Ms', price: 2.89 },
  { product: 'Peanut M&Ms', price: 2.89 },
  { product: 'Gum M&Ms', price: 2.89 },
  { product: 'Swedish Fish', price: 3.79 },
  { product: 'Fruit Snacks', price: 0.49 },
  { product: 'Snickers', price: 2.75 },
  { product: 'Milky Way', price: 3.25 },
  { product: 'Bubbaloo', price: 1.5 },
  { product: 'Kit Kat', price: 4.95 },
  { product: 'Twix', price: 2.0 }
];

// What costs less than $4
console.log('Candies less than $4');
for (let i = 0; i < products.length; i++) {
  if (products[i].price < 4) {
    console.log(products[i].product, products[i].price.toFixed(2));
  }
}

// What costs less than $4
console.log('Candies with M&Ms in their name');
for (let i = 0; i < products.length; i++) {
  if (products[i].product.includes('M&Ms')) {
    console.log(products[i].product);
  }
}

// Do we carry swedish fish?
console.log('Do we carry swedish fish');

let haveSwedishFish = false;
for (let i = 0; i < products.length; i++) {
  if (products[i].product == 'Swedish Fish') {
    haveSwedishFish = true;
  }
}

if (haveSwedishFish) {
  console.log('Yes');
} else {
  console.log('No');
}
