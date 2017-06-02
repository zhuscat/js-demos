function movingCount(threshold, rows, cols)
{
    // write code here
    if (threshold < 0 || rows < 0 || cols < 0) {
        return 0;
    }
    var visited = [];
    var temp = [];
    var i, j;
    for (i = 0; i < rows; i++) {
        temp = [];
        for (j = 0; j < cols; j++) {
            temp.push(false);
        }
        visited.push(temp);
    }
    var movingCountCore = function movingCountCore(threshold, rows, cols, row, col, visited, count) {
        if (row < rows && col < cols && row >= 0 && col >= 0 && visited[row][col] === false) {
            visited[row][col] = true;
            if (check(threshold, row, col)) {
                count = 1 + movingCountCore(threshold, rows, cols, row - 1, col, visited, 0) +
                    movingCountCore(threshold, rows, cols, row + 1, col, visited, 0) +
                    movingCountCore(threshold, rows, cols, row, col - 1, visited, 0) +
                    movingCountCore(threshold, rows, cols, row, col + 1, visited, 0);
            }
        }
        return count;
    }
    var check = function check (threshold, row, col) {
        if (calculate(row) + calculate(col) <= threshold) {
            return true;
        }
        return false;
    }
    var calculate = function calculate (num) {
        var ret = 0;
        while (num >= 10) {
            ret += num % 10;
            num = Math.floor(num / 10);
        }
        ret += num;
        return ret;
    }
    return movingCountCore(threshold, rows, cols, 0, 0, visited, 0);
}

console.log(movingCount(5, 10, 10));