function IsPopOrder(pushV, popV)
{
    // write code here
    var stack = [];
    var val = 0;
    var curr = 0;
    if (pushV.length !== popV.length) {
        return false;
    }
    for (var i = 0; i < popV.length; i++) {
        val = popV[i];
        // 先看栈里面是否有这个值
        if (stack.length > 0 && stack[stack.length - 1] === val) {
            stack.pop();
        } else {
            while (pushV[curr] !== val && curr < pushV.length) {
                stack.push(pushV[curr]);
                curr++;
            }

            if (curr < pushV.length && pushV[curr] === val) {
                curr++;
            } else {
                return false;
            }
        }
    }
    return true;
}