const minAmount = 1000;
const maxPercentage = 100;
const convertToPercentage = 100;
const precision = 2;

let totallAmount;
let totalProfit;
let numberYears;
let percentageOfYear;
let initialAmount = prompt('Input initial amount of money:');
initialAmount = parseFloat(initialAmount);
if (!initialAmount || initialAmount < minAmount) {
    alert('Invalid input data')
} else {
    numberYears = prompt('Input number of years:');
    numberYears = parseInt(numberYears);
    if (!numberYears || numberYears < 1) {
    alert('Invalid input data')
    } else {
        percentageOfYear = prompt('Input percentage of a year:');
        percentageOfYear = parseFloat(percentageOfYear);
        if (!percentageOfYear || percentageOfYear > maxPercentage) {
        alert('Invalid input data')
        }
      }   
}

totallAmount = initialAmount;
totalProfit = 0;
for (let i = 0; i < numberYears; i++) {

    totalProfit = totalProfit + totallAmount / convertToPercentage * percentageOfYear;
    totallAmount = initialAmount + totalProfit
}


alert(`Initial amount: ${initialAmount}
Number of years: ${numberYears}
Percentage of year: ${percentageOfYear}

Total profit: ${totalProfit.toFixed(precision)}
Total amount: ${totallAmount.toFixed(precision)}`);

