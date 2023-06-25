function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let sum = arr.reduce((min, max) => min + max);
	let avg = +(sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	return sum.reduce(...arr);
}

function differenceMaxMinWorker(...arr) {
	return Math.max(... arr) - Math.min(... arr);
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let sum = sumEvenElement - sumOddElement;
	for (let i = 0; i < arr.length; i++) {
		if (i = 2) {
			sumEvenElement + 1;
		} else {
			sumOddElement + 1;
		}
	}
	return sum;
}
 

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
	  if (i == 2) {
	   sumEvenElement += [i];
	   countEvenElement += 1;
	  }
	  return (sumEvenElement / countEvenElement);
	}
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++){
		let result = func(arrOfArr[i]);
      if (result > maxWorkerResult){
		maxWorkerResult = result;
	  }
  }
  return axWorkerResult;  
}
