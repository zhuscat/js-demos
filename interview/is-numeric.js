/*
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 
但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
*/

function isNumeric(s)
{
    // write code here
    if (s.length <= 0) {
      return false;
    }
    var pCurr = 0;
    var flag = false;
    // 找正负号
    if (s[pCurr] === '-' || s[pCurr] === '+') {
      pCurr++;
    }
    if (pCurr === s.length) {
      return false;
    }
    // 找整数部分
    while (parseInt(s[pCurr]) >= 0 && parseInt(s[pCurr]) <= 9) {
      flag = true;
      pCurr++;
    }
    if (flag && pCurr === s.length) {
      return true;
    }
    // 整数部分找完了
    if (s[pCurr] === '.') {
      // 找小数部分
      pCurr++;
      if (pCurr === s.length) {
        return false;
      }
      while (parseInt(s[pCurr]) >= 0 && parseInt(s[pCurr]) <= 9 && pCurr < s.length) {
        flag = true;
        pCurr++;
      }
      if (pCurr === s.length && flag) {
        return true;
      }
    }
    if (flag === false) {
      return flag;
    } else {
      // 找指数部分
      if (s[pCurr] === 'e' || s[pCurr] === 'E') {
        pCurr++;
        if (pCurr === s.length) {
          return false;
        }
        // 看有没有正负号
        if (s[pCurr] === '+' || s[pCurr] === '-') {
          pCurr++;
        }
        if (pCurr === s.length) {
          return false;
        }
        while (parseInt(s[pCurr]) >= 0 && parseInt(s[pCurr]) <= 9 && pCurr < s.length) {
          pCurr++;
        }
      }
    }
    if (pCurr === s.length) {
      return true;
    }
    return false;
}

console.log(isNumeric('+100'));
console.log(isNumeric('5e2'));
console.log(isNumeric('-123'));
console.log(isNumeric('3.1416'));
console.log(isNumeric('-1E-16'));
console.log(isNumeric('12e'));
console.log(isNumeric('1a3.14'));
console.log(isNumeric('1.2.3'));
console.log(isNumeric('+-5'));
console.log(isNumeric('12e+4.3'));