const myInfo = {
  name: 'Ben Wilhelm',
  address: '5940 N. Sheridan Rd.',
  city: 'Chicago',
  state: 'IL',
  zip: '60660',
};

const yourInfo = {
  name: 'Kelly Cruz',
  address: "123 Kelly's St.",
  city: 'Atlanta',
  state: 'GA',
  zip: '30000',
};

function printContact(info) {
  console.log(info.name);
  console.log(info.address);
  console.log(info.city, info.state, info.zip);
}

printContact(myInfo);
console.log('');
printContact(yourInfo);
