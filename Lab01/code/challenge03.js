const avgScore = (score1, score2, score3) => {
    return ((score1 + score2 + score3)/3).toFixed(2);
};

function compareAvg(dolAvgScore, koaAvgScore) {
    if (dolAvgScore > koaAvgScore && dolAvgScore >= 100){
        console.log(`Dolphins (${dolAvgScore}) win Koalas (${koaAvgScore})`);
    } else if(dolAvgScore < koaAvgScore && koaAvgScore >= 100) {
        console.log(`Koalas (${koaAvgScore}) win Dolphins (${dolAvgScore})`)
    } else if(dolAvgScore == koaAvgScore && dolAvgScore >= 100 && koaAvgScore >= 100) {
        console.log(`Draw with (${dolAvgScore})!`);
    } else {
        console.log('No team wins!');
    }
}

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
const dolphin = avgScore(96, 108, 89);
const koalas = avgScore(88, 91, 110);
console.log("Test data: " );
compareAvg(dolphin, koalas);

// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
const dolphin1 = avgScore(97, 112, 101);
const koalas1 = avgScore(109, 95, 123);
console.log("Test data bonus 1: ");
compareAvg(dolphin1, koalas1)

// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const dolphin2 = avgScore(97, 112, 101);
const koalas2 = avgScore(109, 95, 106);
console.log("Test data bonus 2: ");
compareAvg(dolphin2, koalas2)

