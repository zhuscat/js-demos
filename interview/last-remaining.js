function LastRemaining_Solution(n, m)
{
    if (m < 1) {
      return 0;
    }
    // write code here
    var list = [];
    var i = 0;
    for (; i < n; i++) {
        list[i] = 1;
    }
    var remains = n;
    var currentIndex = -1;
    var callNumber = 0;
    while (remains > 1) {
        for (callNumber = 0; callNumber < m; callNumber++) {
            currentIndex++;
            if (currentIndex >= n) {
                currentIndex = 0;
            }
            while (list[currentIndex] === 0) {
              currentIndex++;
              if (currentIndex >= n) {
                currentIndex = 0;
              }
            }
        }
        if (currentIndex >= n) {
            currentIndex = 0;
        }
        list[currentIndex] = 0;
        console.log(list);
        remains--;
    }
    for (i = 0; i < n; i++) {
        if (list[i] === 1) {
            return i;
        }
    }
    return n;
}

console.log(LastRemaining_Solution(5, 3));