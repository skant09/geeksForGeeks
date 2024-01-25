// var arr1 = [10, 20, 30, 40, 50]
// var arr2 = [5, 15, 25, 35, 45]

function mergeSortedArray(arr1, arr2){
	let arr1index = 0;
	let arr2index = 0;
	let mergedArr = [];
	while (arr1index<=arr1.length &&  arr2index<=arr2.length){
		if(arr1[arr1index]<arr2[arr2index]){
				if(arr1[arr1index])  mergedArr.push(arr1[arr1index]);
				arr1index++;
		} else {
				if(arr2[arr2index]) mergedArr.push(arr2[arr2index])
				arr2index++;
		}

	}
	return mergedArr;
}

// let mergedArr = mergeSortedArray(arr1, arr2)
// console.log(mergedArr)


function mergeSort(arr){
	// split array
	if(arr.length ===1){

		return arr;
	}
	if(arr.length === 2){
		if(arr[0]>arr[1]){
			return [arr[1], arr[0]]
		}
		return arr;
	}
	const mid = Math.floor(arr.length/2);
	// sort 
	const leftArray = arr.slice(0, mid);
	const rightArray = arr.slice(mid, arr.length);
	const ans =  mergeSortedArray(mergeSort(leftArray), mergeSort(rightArray))
	return ans
	// merge
}
var arr1 = [30, 20, 10, 40, 50]
const ans = mergeSort(arr1)
console.log(ans);


function mergeSortedArray(arr1, arr2){
	let arr1index = 0;
	let arr2index = 0;
	let mergedArr = [];
	while (arr1index<=arr1.length &&  arr2index<=arr2.length){
		if(arr1[arr1index]<arr2[arr2index]){
				if(arr1[arr1index])  mergedArr.push(arr1[arr1index]);
				arr1index++;
		} else {
				if(arr2[arr2index]) mergedArr.push(arr2[arr2index])
				arr2index++;
		}

    }
    return mergedArr;
 }

var mergeKLists = function(lists) {
  return lists.reduce((acc, list) =>{
      return mergeSortedArray(acc, list);
  }, [])
};