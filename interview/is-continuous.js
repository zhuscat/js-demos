function IsContinuous(numbers)
{
    // write code here
    if (numbers.length !== 5) {
        return false;
    }
    numbers.sort(function(a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    var zeros = 0;
    var holes = 0;
    var i = 0;
    for (; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            zeros++;
        } else {
            break;
        }
    }
    for (i = zeros + 1; i < numbers.length; i++) {
        if (numbers[i] === numbers[i - 1]) {
            return false;
        } else {
            holes = holes + numbers[i] - numbers[i - 1] - 1;
        }
    }
    if (holes <= zeros) {
        return true;
    }
    return false;
}

console.log(IsContinuous([1, 3, 0, 0, 5]));