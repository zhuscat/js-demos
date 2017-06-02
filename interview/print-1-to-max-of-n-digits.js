function Print1ToMaxOfNDigitsRecursively (numbers, idx) {
  if (numbers.length === idx) {
    console.log(numbers.join(''));
    return;
  }
  for (let i = 0; i < 10; i++) {
    numbers[idx] = i;
    Print1ToMaxOfNDigitsRecursively(numbers, idx + 1);
  }
}

function Print1ToMaxOfNDigits (n) {
  if (n <= 0) {
    return;
  }
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = 0;
  }

  Print1ToMaxOfNDigitsRecursively(arr, 0);
}

Print1ToMaxOfNDigits(3);