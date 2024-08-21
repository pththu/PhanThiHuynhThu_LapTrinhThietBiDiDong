// create function
const calcTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

// test function
console.log('Test function: ', calcTip(100));

// test data
const bills = [125, 555, 44];
const tips = [];

// create array tips
bills.forEach(bill => {
    tips.push(calcTip(bill))
});

// create array totals
const totals = [];
for (let i = 0; i < bills.length; i++) {
    totals[i] = bills[i] + tips[i];
}

console.log('Bills: ', bills);
console.log('Tips: ', tips);
console.log('Totals: ', totals);
