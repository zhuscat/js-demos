function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    if (numbers.length < 2) {
      return false;
    }
    var temp = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] !== i && numbers[numbers[i]] !== numbers[i]) {
        temp = numbers[i];
        numbers[i] = numbers[temp];
        numbers[temp] = temp;
      } else if (numbers[i] === numbers[numbers[i]] && i !== numbers[i]) {
        duplication[0] = numbers[i];
        return true;
      }
    }
    return false;
}

console.log(duplicate([], []));
console.log(duplicate([1, 2, 3, 4, 5, 6], []));
console.log(duplicate([2, 6, 3, 5, 2, 1, 0], []));
console.log(duplicate([2, 1, 3, 1, 4], []));