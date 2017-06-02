function Swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function Partition(arr, left, right) {
    var index = Math.floor(Math.random() * (right - left + 1) + left);
    Swap(arr, index, right);
    var start = left - 1;
    var end = right;
    var pivot = arr[right];
    do {
        while (arr[++start] < pivot);
        while ((end != 0) && arr[--end] >= pivot);
        Swap(arr, start, end);
    } while(start < end);
    Swap(arr, start, end);
    Swap(arr, start, right);
    return start;
}

function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    if (numbers.length === 0) {
        return 0;
    }
    var middle = (numbers.length / 2) >> 0;
    var index;
    var left = 0;
    var right = numbers.length - 1;
    do {
        index = Partition(numbers, left, right);
        if (index < middle) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    } while (index != middle);
    // 拿到了 index
    var potentialNum = numbers[index];
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === potentialNum) {
            count++;
        }
    }
    if (count > middle) {
        return potentialNum;
    }
    return 0;
}

var ret = MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]);
console.log(ret);
