function ReverseSentence(str)
{
    // write code here
    if (!str || str.length <= 0) {
        return '';
    }
    var strarr = str.split(' ');
    var i = 0;
    for (i = 0; i < strarr.length; i++) {
        // 反转每一个单词
        if (strarr[i].length > 1) {
            strarr[i] = strarr[i].split('').reverse().join('');
        }
    }
    return strarr.join(' ').split('').reverse().join('');
}

console.log(ReverseSentence('student. a am I'));