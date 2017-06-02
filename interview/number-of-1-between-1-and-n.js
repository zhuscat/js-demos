function NumberOf1(numarr, index) {
    if (index >= numarr.length || index < 0) {
        return 0;
    }
    var first = numarr[index];
    var len = numarr.length - index;
    var numOf1First = 0;
    var numOf1Other = 0;
    var numOf1Recursive = 0;
    if (first === '0' && len === 1) {
        return 0;
    }
    if (first > '0' && len === 1) {
        return 1;
    }
    if (first > '1') {
        numOf1First = Math.pow(10, len - 1);
    } else if (first === '1') {
        numOf1First = Number.parseInt(numarr.slice(index + 1).join('')) + 1;
    }
    numOf1Other = Number.parseInt(first) * (len - 1) * Math.pow(10, len - 2);
    numOf1Recursive = NumberOf1(numarr, index + 1);
    return numOf1First + numOf1Other + numOf1Recursive;
}

function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    var numarr = n.toString().split('');
    return NumberOf1(numarr, 0);
}