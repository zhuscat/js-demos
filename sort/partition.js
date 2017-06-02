function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function partition(arr, length, start, end) {
  var index = Math.floor(Math.random() * (end - start + 1) + start);
  swap(arr, index, end);
  var small = start - 1;
  for (index = start; index < end; ++index) {
    if (arr[index] < arr[end]) {
      ++small;
      if (small !== index) {
        swap(arr, index, small);
      }
    }
  }
  ++small;
  swap(arr, small, end);
  return small;
}

var arr = [5, 7, 2, 3, 1, 8];

console.log(partition(arr, 5, 0, 4));

console.log(arr);