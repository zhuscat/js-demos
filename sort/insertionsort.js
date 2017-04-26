function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function insertionsort(arr) {
  var length = arr.length;
  var i = 0, j = 0;
  for (i = 1; i < length; i++) {
    for (j = i; (j > 0) && (arr[j] < arr[j - 1]); j--) {
      swap(arr, j, j - 1);
    }
  }
}

var arr = [8, 5, 2, 6, 9, 7];

insertionsort(arr);

console.log(arr);