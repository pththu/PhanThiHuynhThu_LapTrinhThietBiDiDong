import calcTip from './challenge04.js';

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log('bills: ', bills, 'tips: ', tips, 'totals: ', totals);

function calcAverage(arr) {
    var sum = 0;
    arr.forEach(item => {
        sum += item;
    });

    return sum/arr.length;
}

console.log('average of total: ', calcAverage(totals))


