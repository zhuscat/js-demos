function FindContinuousSequence(sum)
{
    // write code here
    var ret = [];
    var arr = [];
    var i = 1;
    var MAX = Math.floor(sum / 2);
    var j = 0;
    var num = 0;
    for (; i <= MAX; i++) {
        j = (Math.sqrt(1 + 4 * ((sum * 2) + i * i - i)) - 1) / 2;
        if (parseInt(j) === j) {
            arr = [];
            for (var k = i; k <= j; k++) {
                arr.push(k);
            }
            ret.push(arr);
        }
    }
    return ret;
}

console.log(FindContinuousSequence(100));
