function Add(num1, num2)
{
    // write code here
    var temp = 0;
    while (num2 !== 0) {
      temp = num1 ^ num2;
      num2 = (num1 & num2) << 1;
      num1 = temp;
    }
    return num1;
}

console.log(Add(0, -5));