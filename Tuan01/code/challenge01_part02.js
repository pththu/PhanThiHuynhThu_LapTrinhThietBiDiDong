const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3).toFixed(2);

function checkWinner (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas*2){
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (avgKoalas >= avgDolphins*2) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return 'No teams win';
    }
}

// Data 1
const avgDolphinScore = calcAverage(44, 23, 71);
const avgKoalasScore = calcAverage(65, 54, 49);
console.log('Test data 1: ', checkWinner(avgDolphinScore, avgKoalasScore));


// Data 2
const avgDolphinScore1 = calcAverage(85, 54, 41);
const avgKoalasScore1 = calcAverage(23, 34, 27);
console.log('Test data 2: ',checkWinner(avgDolphinScore1, avgKoalasScore1));



