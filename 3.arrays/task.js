function compareArrays(arr1, arr2) {
	let a = arr1.filter(element => element.arr1 === element.arr2);
  let b = arr1.every((value, index) => value === arr2[index]);
  if (arr1.length === arr2.length && b === true) {
		return true;
	} else if (arr1.length !== arr2.length && b !== true) {
    return false;
  }
  else if (a !== b){
		return false;
	} else {
		return false;
	}
}
compareArrays([3, 2, 1], [3, 2, 1]);

function getUsersNamesInAgeRange(users, gender) {
	let client = users.filter(user => user.gender === gender);
  let clientAge = client.map(user => user.age);
  if (!users.length || client == 0){
    return 0;
  }
  else {
    let sumAge = clientAge.reduce((acc, age) => acc + age) / clientAge.length;
    return sumAge;
  }
}