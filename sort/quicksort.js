function findpivot(arr, left, right) {
  var idx = Math.floor((left + right) / 2);
  return idx;
}

function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function partition(arr, left, right, pivot) {
  do {
    while (arr[++left] < pivot);
    while ((right != 0) && (arr[--right] >= pivot));
    swap(arr, left, right);
  } while (left < right);
  swap(arr, left, right);
  return left;
}

function qsort(arr, left, right) {
  if (left >= right) {
    return;
  }

  var pivotindex = findpivot(arr, left, right);

  swap(arr, pivotindex, right);
  var k = partition(arr, left - 1, right, arr[right]);
  swap(arr, k, right);
  qsort(arr, left, k - 1);
  qsort(arr, k + 1, right);
}

var arr = [8, 5, 2, 6, 9, 7];

qsort(arr, 0, 5);

console.log(arr);