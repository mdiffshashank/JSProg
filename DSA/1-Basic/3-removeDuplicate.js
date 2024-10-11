function removeDuplicate(arr) {
	return arr.filter((element, index, array) => array.indexOf(element) === index);
}

const rArr = removeDuplicate([8,6,5,6,7,3,5,2,4,8,7,6,1])
console.log(rArr);