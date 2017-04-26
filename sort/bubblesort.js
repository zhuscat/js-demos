function bubblesort(arr) {
  var length = arr.length;
  var i = 0, j = 0, temp = 0;
  for (i = 0; i < length - 1; i++) {
    for (j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

var arr = [8, 5, 2, 6, 9, 7];

bubblesort(arr);

console.log(arr);