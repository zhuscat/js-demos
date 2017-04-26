function mergesort(arr, temp, left, right) {
  if (left >= right) {
    return;
  }
  var mid = Math.floor((left + right) / 2);
  var i;
  mergesort(arr, temp, left, mid);
  mergesort(arr, temp, mid + 1, right);
  for (i = left; i <= right; i++) {
    temp[i] = arr[i];
  }
  var i1 = left, i2 = mid + 1;
  var curr;
  for (curr = left; curr <= right; curr += 1) {
    if (i1 === mid + 1) {
      arr[curr] = temp[i2++];
    } else if (i2 > right) {
      arr[curr] = temp[i1++];
    } else if (temp[i1] < temp[i2]) {
      arr[curr] = temp[i1++];
    } else {
      arr[curr] = temp[i2++];
    }
  }
}

var arr = [8, 5, 2, 6, 9, 7];
var temp = [0, 0, 0, 0, 0, 0];

mergesort(arr, temp, 0, 5);

console.log(arr);