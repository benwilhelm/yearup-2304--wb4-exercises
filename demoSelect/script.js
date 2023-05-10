const stateNames = ['Colorado', 'Maine', 'Texas', 'Washington'];
const stateAbbrevs = ['CO', 'ME', 'TX', 'WA'];

const selectEl = document.getElementById('statesList');

for (let i in stateNames) {
  const stateName = stateNames[i];
  const stateAbbrev = stateAbbrevs[i];

  const optionEl = document.createElement('option');
  optionEl.textContent = stateName;
  optionEl.value = stateAbbrev;

  selectEl.appendChild(optionEl);
}

const form = document.querySelector('form');
form.onsubmit = logSelectedState;
selectEl.onchange = logSelectedState;

function logSelectedState() {
  const selectedIndex = selectEl.selectedIndex;
  const options = selectEl.options;

  const selectedOption = options[selectedIndex];
  console.log(selectedOption.textContent);

  // return false to prevent page reload on submit
  return false;
}
