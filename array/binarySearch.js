function binarySearch(arr, elem) {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === elem) {
      return mid;
    } else if (arr[mid] > elem) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
const arr = [1, 3, 7, 9, 11, 20];
const index4 = binarySearch(arr, 20);
// const index0 = binarySearch(arr, 4);
// const index1 = binarySearch(arr, 1);
const index20 = binarySearch(arr, 20);
console.log(index4);
