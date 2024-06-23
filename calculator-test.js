let values1={amount: +"10000",
  years: +"10" ,
  rate: +"50" ,}

let values2={amount: +"456789",
  years: +"30" ,
  rate: +"80" ,}

it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment(values1).monthlyPayments).toBeCloseTo(359,0);
  expect(calculateMonthlyPayment(values2).monthlyPayments).toBeCloseTo(8602,0);

});


it('should return a result with 2 decimal places', function() {

  expect(updateMonthlyValue(100).monthlyText).toBeCloseTo('100.00',2);
  expect(updateMonthlyValue(12345.12345).monthlyText).toBeCloseTo('12345.12',2);
  expect(updateMonthlyValue(456.669).monthlyText).toBeCloseTo('456.67',2);
  expect(updateMonthlyValue(456.669).monthlyText).not.toBeCloseTo('456.66',2);
});

// etc
