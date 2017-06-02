function binarySearch(array, num) {
  if (array.length <= 0) {
    return -1;
  }
  var left = 0;
  var right = array.length;
  var middle = 0;
  while (left <= right) {
    middle = (left + right) >> 1;
    if (array[middle] === num) {
      return middle;
    } else if (array[middle] > num) {
       right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

function FindNumbersWithSum(array, sum)
{
    // write code here
    var i = 0;
    var index = 0;
    var multiplyMin = 9007199254740991;
    var ret = [];
    for (; i < array.length; i++) {
      index = binarySearch(array, sum - array[i]);
      if (index != -1) {
        if (array[i] * (sum - array[i]) < multiplyMin) {
          multiplyMin = array[i] * (sum - array[i]);
          ret = [array[i], sum - array[i]];
        }
      }
    }
    return ret;
}

console.log(FindNumbersWithSum([1,2,4,7,11,15],15))