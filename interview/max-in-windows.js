function maxInWindows(num, size)
{
    // write code here
    var ret = [];
    if (num.length >= size && size >= 1) {
      var indexes = [];
      var i = 0;
      for (; i < size; i++) {
        while (indexes.length > 0 && num[i] >= num[indexes[indexes.length - 1]]) {
          indexes.pop();
        }
        indexes.push(i);
      }
      for (i = size; i < num.length; i++) {
        ret.push(num[indexes[0]]);

        while (indexes.length > 0 && num[i] >= num[indexes[indexes.length - 1]]) {
          indexes.pop();
        }
        if (indexes.length > 0 && indexes[0] <= i - size) {
          indexes.shift();
        }
        indexes.push(i);
      }
      ret.push(num[indexes[0]]);
    }
    return ret;
}

var arr = [2, 3, 4, 2, 6, 2, 5, 1];

console.log(maxInWindows(arr, 3));