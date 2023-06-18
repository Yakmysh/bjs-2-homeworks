"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d > 0) {
		let x = (-b + Math.sqrt(d)) / (2 * a);
		let y = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x, y);
	} else if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	} else if (d < 0) {
		return arr;
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = percent / 100 / 12;
	let s = amount - contribution;
  let n = countMonths;
	let monthlyInstallment = s * (p + (p / (((1 + p) ** n) - 1)));
	let sum = +(monthlyInstallment * countMonths).toFixed(2);
	return sum;

}