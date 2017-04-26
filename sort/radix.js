function radix(arr, k/*ws*/, r/*jz*/) {
  var i = 0, j = 0, rtok = 1;
  var cnt = [];
  var temp = [];
  for (i = 0, rtok = 1; i < k; i++, rtok *= r) {
    for (j = 0; j < r; j++) {
      cnt[j] = 0;
    }
    for (j = 0; j < arr.length; j++) {
      console.log(Math.floor(arr[j] / rtok) % r);
      cnt[Math.floor(arr[j] / rtok) % r]++;
    }
    for (j = 1; j < r; j++) {
      cnt[j] = cnt[j] + cnt[j - 1];
    }
    for (j = arr.length - 1; j >= 0; j--) {
      temp[--cnt[Math.floor(arr[j] / rtok) % r]] = arr[j];
    }
    for (j = 0; j < arr.length; j++) {
      arr[j] = temp[j];
    }
  }
}

var arr = [80, 52, 21, 69, 95, 71];

radix(arr, 2, 10);

console.log(arr);