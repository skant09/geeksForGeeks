var arr1 = [10, 20, 30, 40, 50]
var arr2 = [5, 15, 25, 35, 45]

function mergeSortedArray(arr1, arr2){
	let arr1index = 0;
	let arr2index = 0;
	let mergedArr = [];
	while (arr1index<arr1.length &&  arr2index<arr2.length){
		if(arr1[arr1index]<arr2[arr2index]){
			mergedArr.push(arr1[arr1index]);
			arr1index++;
		} else {
			mergedArr.push(arr2[arr2index])
			arr2index++;
		}

	}
	return mergedArr;
}

let mergedArr = mergeSortedArray(arr1, arr2)
console.log(mergedArr)


