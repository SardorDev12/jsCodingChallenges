function everageScore(score1, score2, score3){
    let sum = score1 + score2 + score3;
    let everage = sum/3;
    return everage;
};

let dolphins = Math.round(everageScore(96, 108, 89));
let koalas = Math.round(everageScore(99, 83, 110));

function whoWins(dolphinsScore, koalasScore){
    if(dolphinsScore > koalasScore && dolphinsScore >= 100){
        console.log(`Dolphins win with the score ${dolphinsScore}`);
    }else if(dolphinsScore == koalasScore && dolphinsScore >= 100 && koalasScore >= 100){
        console.log(`Dolphins and Koalas have equal scores, so it is draw with the score ${dolphinsScore} and ${koalasScore} respectively`);
    }else if(koalasScore > dolphinsScore && koalasScore >= 100){
        console.log(`Koalas win with the score ${koalasScore}`);
    }else{
        console.log("Teams cannot score the required goal!");
    }
}

whoWins(dolphins, koalas);