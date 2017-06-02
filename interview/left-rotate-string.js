function LeftRotateString(str, n)
{
    // write code here
    if (!str || str.length === 0) {
        return '';
    }
    var strarr = str.split('');
    var realN = n % strarr.length;
    var i = 0;
    var temp = '';
    // 逆序前 n 位
    for (i = 0; i < (n >> 1); i++) {
        temp = strarr[i];
        strarr[i] = strarr[n - i - 1];
        strarr[n - i - 1] = temp;
    }
    // 逆序 n 后面的几位
    for (i = n; i < ((n + strarr.length) >> 1); i++) {
        temp = strarr[i];
        strarr[i] = strarr[n + strarr.length - i - 1];
        strarr[n + strarr.length - i - 1] = temp;
    }
    // 全部逆序一遍
    for (i = 0; i < (strarr.length >> 1); i++) {
        temp = strarr[i];
        strarr[i] = strarr[strarr.length - i - 1];
        strarr[strarr.length - i - 1] = temp;
    }
    return strarr.join('');
}

console.log(LeftRotateString('abcXYZdef', 3));