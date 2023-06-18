"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;
  if(d < 0){
    return arr;
  }
  else if(d === 0){
    let x = -b/(2*a);
    arr.push(x);
  }
  else if(d > 0){
    let x = (-b + Math.sqrt(d) )/(2*a);
    let y = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x, y);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percent = (((1 + percent / 100) * 1/12 - 1) * 0.1);
  let credit = amount - contribution;  
  let monthlyInstallment = credit * (percent + (percent / (((1 + percent)** countMonths)-1)));
  let sum = + (monthlyInstallment * countMonths).toFixed(2);
  return sum; 

}