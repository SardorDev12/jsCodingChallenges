function bmiCal(mass, height){
    return bmi = mass * (height**2);
};
mark = bmiCal(95, 1.88);
john = bmiCal(85, 1.76);

function markHigherBmi(mark, john){
    console.log(`Mark's bmi = ${mark}`);
    console.log(`John's bmi = ${john}`);
    
    if(mark>john){
        console.log("Makr's bmi is higher than John's");
    } else {
        console.log("John's bmi is higher than Mark's");
    }
};
markHigherBmi(mark, john);


