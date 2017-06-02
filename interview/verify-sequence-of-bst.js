function VerifySquenceOfBST(sequence)
{
    if (!sequence || sequence.length <= 0) {
        return false;
    }
    // write code here
    // 根节点是最后一个
    var root = sequence[sequence.length - 1];
    // 找到一个序列，比 root 小，找到一个序列，比 root 大
    var index = 0;
    var i;
    for (i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] < root) {
            index++;
        } else {
            break;
        }
    }
    for (i = index; i < sequence.length - 1; i++) {
        if (sequence[i] < root) {
            return false;
        }
    }
    // 小于 index 的序列中的数字可以符合 root 的左子树，再看右边的序列能不能当右子树
    var left = true;
    var right = true;
    if (index > 0) {
        left = VerifySquenceOfBST(sequence.slice(0, index));
    }
    if (index < sequence.length - 1) {
        right = VerifySquenceOfBST(sequence.slice(index, sequence.length - 1));
    }
    return left && right;
}

var ret = VerifySquenceOfBST([4, 8, 6, 12, 16, 14, 10]);
console.log(ret);