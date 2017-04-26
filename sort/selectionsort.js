function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function selectionsort(arr) {
  var length = arr.length;
  var i = 0, j = 0;
  var lowidx = 0;
  for (i = 0; i < length - 1; i++) {
    lowidx = i;
    for (j = length - 1; j > i; j -= 1) {
      if (arr[j] < arr[lowidx]) {
        lowidx = j;
      }
    }
    swap(arr, lowidx, i);
  }
}

var arr = [8, 5, 2, 6, 9, 7];

selectionsort(arr);

console.log(arr);