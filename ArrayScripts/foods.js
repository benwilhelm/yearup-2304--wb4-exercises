let lunch = [
  { item: 'Steak Fajitas', price: 9.95 },
  { item: 'Chips and Guacamole', price: 5.25 },
  { item: 'Sweet Tea', price: 2.79 }
];

let subTotal = 0;
for (let i = 0; i < lunch.length; i++) {
  subTotal += lunch[i].price;
}

const tax = subTotal * 0.08;
const tip = subTotal * 0.18;
const totalDue = subTotal + tip + tax;

console.log('subtotal:', subTotal.toFixed(2));
console.log('tax:', tax.toFixed(2));
console.log('tip:', tip.toFixed(2));
console.log('totalDue:', totalDue.toFixed(2));
