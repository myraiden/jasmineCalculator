window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
    let newAmount=(document.getElementById("loan-amount").value);
    let newYears=(document.getElementById("loan-years").value);
    let newRate=(document.getElementById("loan-rate").value);
    let currentValues=[newAmount,newYears,newRate]
  return{currentValues}
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount=document.getElementById("loan-amount");
    loanAmount.value=10000;
  const loanYears=document.getElementById("loan-years");
    loanYears.value=10;
  const loanRate=document.getElementById("loan-rate");
    loanRate.value=4.5;
    initialValues=[loanAmount.value,loanYears.value,loanRate.value]
  calculateMonthlyPayment(initialValues);

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  //let newValues=getCurrentUIValues();
  //console.log(newValues.values);
  calculateMonthlyPayment(getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log(values);
  let monthlyPayments=0;
  let months=values[1]*12;
  let totalLoanValue=parseInt(values[0]);

  //we assume compounding interest for this payment
  for(i=1; i<=document.getElementById("loan-years").value;i++){
    totalLoanValue+=totalLoanValue*(values[2]/100);
    totalLoanValue=parseFloat(totalLoanValue.toFixed(2));
    //console.log(`Year ${i} current value is ${totalLoanValue}`);
  }
  monthlyPayments=parseFloat((totalLoanValue/months).toFixed(2));
  console.log(monthlyPayments);
  return{
    monthlyPayments
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
