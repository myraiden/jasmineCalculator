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
  return{
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  };
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
    loanRate.value=12;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()).monthlyPayments);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyPayments=0;

  //using the equation given of (principle*i)/(1-(1+i)^-n)
  //  where i = rate / 12
  //  where n = years * 12
  let iVal=values.rate/12;
  let nVal=values.years*-12;
  finalLoanAmount=(values.amount*iVal)/(1-((1+iVal)^nVal));
  monthlyPayments=parseFloat(finalLoanAmount.toFixed(2));
  return{
    monthlyPayments
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText=`${monthly.toFixed(2)}`;
}
