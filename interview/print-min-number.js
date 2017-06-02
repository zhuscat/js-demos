/*
输入一个正整数数组
把数组里所有数字拼接起来排成一个数
打印能拼接出的所有数字中最小的一个
例如输入数组{3，32，321}
则打印出这三个数字能排成的最小数字为321323
*/

function compare(a, b) {
  if (a + b < b + a) {
    return -1;
  } else if (a + b > b + a) {
    return 1;
  } else {
    return 0;
  }
}

function PrintMinNumber(numbers)
{
    // write code here
    if (numbers.length === 0) {
      return '';
    }
    var strnumbers = numbers.map(function (v) {
      return v.toString();
    });
    strnumbers.sort(compare);
    return Number.parseInt(strnumbers.join(''));
}

var ret = PrintMinNumber([3, 5, 1, 4, 2]);
console.log(ret);