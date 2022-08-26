// calculator
const calculator = (tipVal) => {
  let bill = parseFloat(billInput.value);
  let person = parseFloat(personInput.value);

  if (person <= 0) {
    document.getElementById("warning").innerHTML = "can't be zero";
  } else {
    document.getElementById("warning").innerHTML = "";
  }

  // tip per person
  let tipPerPerson = parseFloat(
    (bill * (tipVal / 100)).toFixed(2) / person
  ).toFixed(2);

  // total per person
  let totalPerPerson = parseFloat((bill / person).toFixed(2) + tipPerPerson);

  //Show Tip per person
  let showTipPerPerson = (document.getElementById(
    "tipPerPerson"
  ).innerText = `$${tipPerPerson}`);
  showTipPerPerson;

  //Show Total per person
  let showTotalPerPerson = (document.getElementById(
    "totalPerPerson"
  ).innerText = `$${(totalPerPerson + parseInt(tipPerPerson)).toFixed(2)}`);
  showTotalPerPerson;
  console.log(showTotalPerPerson);
  if (document.getElementById("totalPerPerson").innerText != "$0.00") {
    // Enabling a button
    document.querySelector("#reSet").disabled = false;
  }
  // Reset
  const reset = document.getElementById("reSet");

  reset.addEventListener("click", () => {
    document.getElementById("totalPerPerson").innerText = `$${"0.00"}`;
    document.getElementById("tipPerPerson").innerText = `$${"0.00"}`;
    document.getElementById("bill").value = "";
    document.getElementById("person").value = "";
  });
};
// Bill Input
let billInput = document.getElementById("bill");
billInput.addEventListener("change", calculator);
// Number of person
let personInput = document.getElementById("person");
personInput.addEventListener("change", calculator);

let btnOff = document.getElementById("totalPerPerson").innerText;
if (btnOff == "$0.00") {
  // Disabling a button
  document.querySelector("#reSet").disabled = true;
}
