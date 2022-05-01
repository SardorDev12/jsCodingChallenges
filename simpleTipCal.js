function simpleTipCal(bill){
    let tip;
    let value = (tip >= 50 && tip <= 300 ? `The bill was ${bill}, the tip was ${tip = bill*0.15}, and the total value
    ${bill + tip}`: `The bill was ${bill}, the tip was ${tip = bill*0.2}, and the total value ${bill + tip}`);
    console.log(value);
};
simpleTipCal(430);