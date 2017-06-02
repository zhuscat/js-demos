function PermutationCore(strArr, begin, ret) {
    var temp;
    var i;
    var str;
    if (begin === strArr.length && strArr.length > 0) {
        str = strArr.join('');
        if (ret.indexOf(str) === -1) {
            ret.push(str);
        }
    } else {
        for (i = begin; i < strArr.length; i++) {
            temp = strArr[begin];
            strArr[begin] = strArr[i];
            strArr[i] = temp;
            console.log(strArr, begin, i);
            PermutationCore(strArr, begin + 1, ret);
            temp = strArr[begin];
            strArr[begin] = strArr[i];
            strArr[i] = temp;
        }
    }
}

function Permutation(str)
{
    // write code here
    var ret = [];
    var strArr = str.split('');
    PermutationCore(strArr, 0, ret);
    return ret;
}

var ret = Permutation('abc');
console.log(ret);