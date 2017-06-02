function duplicate(arr) {
  if (Object.prototype.toString.call(arr) != '[object Array]');
  var i = 0;
  var temp;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > arr.length - 1) {
      return {
        ret: false,
        duplicate: null,
      };
    };
  }
  for (i = 0; i < arr.length; i++) {
    while (arr[i] != i) {
      if (arr[i] === arr[arr[i]]) {
        return {
          ret: true,
          duplicate: arr[i],
        };
      }
      temp = arr[i];
      arr[i] = arr[temp];
      arr[temp] = temp;
    }
  }
  return {
    ret: false,
    duplicate: null,
  };
}

var obj = duplicate([2, 3, 1, 0, 2, 5, 3]);
console.log(obj);