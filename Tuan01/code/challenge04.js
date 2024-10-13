function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
}

// console.log(`Data test 1: The bill was 275, the tip was ${calcTip(275)}, and the total value ${275 + calcTip(275)}`);
// console.log(`Data test 2: The bill was 40, the tip was ${calcTip(40)}, and the total value ${40 + calcTip(40)}`);
// console.log(`Data test 3: The bill was 430, the tip was ${calcTip(430)}, and the total value ${430 + calcTip(430)}`);

export default calcTip;