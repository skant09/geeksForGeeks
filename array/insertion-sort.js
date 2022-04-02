import 'chalk';


function generateRandomNumber(i, v) {
  let randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

function insertionSort(arr) {
  let i = 0;
  while (i < arr.length) {
    console.log("%c%s", "color: #bada55", i);
    for (j = i; j > -1; j--) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else {
        j = 0;
      }
      console.log(arr.toString());
    }
    i++;
  }
}

let arr = Array(10).fill(1).map(generateRandomNumber);
insertionSort(arr);
console.log(chalk.red('Text in red'));
