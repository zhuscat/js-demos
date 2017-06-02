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

var arr = [5, 4, 7, 2, 1, 3];
var i = Partition(arr, 0, arr.length - 1);
console.log(arr);
console.log(i);