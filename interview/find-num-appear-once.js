function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    var i = 0;
    var axorb = array[0];
    var num = 0;
    var first = false;
    var second = false;
    var a = 0;
    var b = 0;
    for (i = 1; i < array.length; i++) {
      axorb = axorb ^ array[i];
    }
    while (true) {
      if ((axorb >> num) & 1 === 1) {
        break;
      }
      num++;
    }
    for (i = 0; i < array.length; i++) {
      if ((array[i] >> num) & 1 === 1) {
        if (first) {
          a = a ^ array[i];
        } else {
          a = array[i];
          first = true;
        }
      } else {
        if (second) {
          b = b ^ array[i];
        } else {
          b = array[i];
          second = true;
        }
      }
    }
    return [a, b];
}

console.log(FindNumsAppearOnce([2,4,3,6,3,2,5,5]));