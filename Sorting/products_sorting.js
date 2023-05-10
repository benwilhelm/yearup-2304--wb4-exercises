let products = [
  { product: 'Gummy Worms', price: 5.79 },
  { product: 'Plain M&Ms', price: 2.89 },
  { product: 'Peanut M&Ms', price: 2.89 },
  { product: 'Gum M&Ms', price: 2.89 },
  { product: 'swedish fish', price: 3.79 },
  { product: 'Fruit Snacks', price: 0.49 },
  { product: 'Snickers', price: 2.75 },
  { product: 'Milky Way', price: 3.25 },
  { product: 'bubbaloo', price: 1.5 },
  { product: 'Kit Kat', price: 4.95 },
  { product: 'Twix', price: 2.0 }
];

// function compareProductsByName(a, b) {
//   const productNameA = a.product.toUpperCase();
//   const productNameB = b.product.toUpperCase();
//   if (productNameA < productNameB) {
//     return -1;
//   }

//   if (productNameB < productNameA) {
//     return 1;
//   }

//   return 0;
// }

// products.sort(compareProductsByName);

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].product);
// }

function compareProductsByPriceDescending(a, b) {
  if (a.price > b.price) {
    return -1;
  }

  if (a.price < b.price) {
    return 1;
  }

  return 0;
}

products.sort(compareProductsByPriceDescending);

for (let i = 0; i < products.length; i++) {
  console.log(products[i].price.toFixed(2), products[i].product);
}
