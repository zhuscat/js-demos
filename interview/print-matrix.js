// 看了下 C++ 程序的定义，是一个二维数组
function printMatrix(matrix)
{
    if (!matrix || matrix.length == 0 || !matrix[0]) {
        return null;
    }
    // write code here
    var ROWS = matrix.length;
    var COLUMNS = matrix[0].length;
    var ret = [];
    var count = Math.ceil((Math.min(ROWS, COLUMNS)) / 2);
    var i = 0;
    var j = 0;
    for (i = 0; i < count; i++) {
        var horiLeft = i;
        var horiRight = COLUMNS - i - 1;
        var vertiTop = i;
        var vertiBottom = ROWS - i - 1;
        // 从左往右打印
        // 不管怎样，从左往右都是可以打印的
        for (j = horiLeft; j <= horiRight; j++) {
            ret.push(matrix[vertiTop][j]);
        }
        // 从上往下打印
        // 当只有一行剩下的时候，就不用从上往下打印了
        if (vertiBottom > vertiTop) {
            for (j = vertiTop + 1; j <= vertiBottom; j++) {
                ret.push(matrix[j][horiRight]);
            }
        }
        // 从右往左打印
        // 当超过两行 超过两列的时候可以从右往左打印
        if (vertiBottom > vertiTop && horiRight > horiLeft) {
            for (j = horiRight - 1; j >= horiLeft; j--) {
                ret.push(matrix[vertiBottom][j]);
            }
        }
        // 从下往上打印
        // 当超过三行并且超过两列的时候可以打印
        if (vertiBottom > vertiTop + 1 && horiRight > horiLeft) {
            for (j = vertiBottom - 1; j >= vertiTop + 1; j--) {
                ret.push(matrix[j][horiLeft]);
            }   
        }
    }
    return ret;
}
