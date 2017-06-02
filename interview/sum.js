function Sum_Solution(n)
{
    // write code here
    var sum = n;
    sum && (sum += Sum_Solution(n - 1));
    return sum;
}

console.log(Sum_Solution(5));