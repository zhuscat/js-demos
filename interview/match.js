/*
请实现一个函数用来匹配包括'.'和'*'的正则表达式。
模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 
在本题中，匹配是指字符串的所有字符匹配整个模式。
例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
*/

function matchCore(s, sCurr, pattern, pCurr) {
  if (sCurr === s.length && pattern.length === pCurr) {
    return true;
  }
  if (pCurr === pattern.length) {
    return false;
  }
  if (pCurr + 1 < pattern.length && pattern[pCurr + 1] === '*') {
    if ((sCurr != s.length && pattern[pCurr] === s[sCurr]) || (sCurr != s.length && pattern[pCurr] === '.')) {
      return matchCore(s, sCurr, pattern, pCurr + 2) ||
        matchCore(s, sCurr + 1, pattern, pCurr + 2) ||
        matchCore(s, sCurr + 1, pattern, pCurr);
    } else {
      return matchCore(s, sCurr, pattern, pCurr + 2);
    }
  } else {
    if ((sCurr != s.length && pattern[pCurr] === s[sCurr]) || (sCurr != s.length && pattern[pCurr] === '.')) {
      return matchCore(s, sCurr + 1, pattern, pCurr + 1);
    }
  }
  return false;
}

function match(s, pattern)
{
    // write code here
    return matchCore(s, 0, pattern, 0);
}

console.log(match('aaa', 'a.a'));
console.log(match('aaa', 'ab*ac*a'));
console.log(match('aaa', 'aa.a'));
console.log(match('aaa', 'ab*a'));
console.log(match('', '.*'));
console.log(match('bcbbabab', '.*a*a'));