/*
把只包含素因子2、3和5的数称作丑数（Ugly Number）。
例如6、8都是丑数，但14不是，因为它包含因子7。
习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
*/

var MAX_SAFE_INTEGER = 9007199254740991;

function GetUglyNumber_Solution(index)
{
    // write code here
    var q2 = [];
    var q3 = [];
    var q5 = [];
    q2.push(1);
    var i = 0;
    var val1 = 0;
    var val2 = 0;
    var val3 = 0;
    var min = 0;
    for (; i < index; i++) {
      min = Math.min(q2[0] || MAX_SAFE_INTEGER, q3[0] || MAX_SAFE_INTEGER, q5[0] || MAX_SAFE_INTEGER);
      if (q2[0] === min) {
        q2.push(min * 2);
        q3.push(min * 3);
        q5.push(min * 5);
        q2.shift();
      } else if (q3[0] === min) {
        q3.push(min * 3);
        q5.push(min * 5);
        q3.shift();
      } else {
        q5.push(min * 5);
        q5.shift();
      }
    }
    return min;
}

var ret = GetUglyNumber_Solution(7);
console.log(ret);