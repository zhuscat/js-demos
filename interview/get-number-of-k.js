function binarySearch(data, k) {
    if (!data || data.length === 0) {
        return -1;
    }
    var middle = 0;
    var left = 0;
    var right = data.length - 1;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (data[middle] === k) {
            return middle;
        } else if (data[middle] > k) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

function GetNumberOfK(data, k)
{
    // write code here
    var index = binarySearch(data, k);
    if (index < 0) {
        return 0;
    }
    var count = 1;
    var leftIndex = index - 1;
    while (data[leftIndex] === k) {
        count++;
        leftIndex--;
    }
    var rightIndex = index + 1;
    while (data[rightIndex] === k) {
        count++;
        rightIndex++;
    }
    return count;
}

var ret = GetNumberOfK([], 11);
console.log(ret);
