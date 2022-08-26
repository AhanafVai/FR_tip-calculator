// calculator
const calculator = (tipVal) => {
  let bill = parseFloat(billInput.value);
  let person = parseFloat(personInput.value);
  if (!bill && !person) return;
  const tipPerPerson = parseFloat(
    (bill * (tipVal / 100)).toFixed(2) / person
  ).toFixed(2);

  //Show Tip per person
  document.getElementById("tipPerPerson").innerText = `$${tipPerPerson}`;
};

// Bill Input
const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculator);
// Number of person
const personInput = document.getElementById("person");
personInput.addEventListener("change", calculator);
