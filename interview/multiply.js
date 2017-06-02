function multiply(array)
{
    if (array.length <= 0) {
      return [];
    }
    if (array.length === 1) {
      return array.slice(0);
    }
    // write code here
    var arr1 = [];
    var arr2 = [];
    arr1[0] = 1;
    var temp = 1;
    var i = 1;
    // 左半部分
    for (; i < array.length; i++) {
        temp *= array[i - 1];
        arr1[i] = temp;
    }
    // 右半部分
    arr2[array.length - 1] = 1;
    temp = 1;
    for (i = array.length - 2; i >= 0; i--) {
      temp *= array[i + 1];
      arr2[i] = temp;
    }
    return arr1.map(function(value, index) {
      return value * arr2[index];
    });
}

console.log(multiply([]));
console.log(multiply([1, 2]));
console.log(multiply([1, 2, 3, 4, 5, 6]));