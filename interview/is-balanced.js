function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

var isBalanced = true;

function isBalancedCore(pRoot) {
  if (!pRoot) {
    return 0;
  }
  var leftCount = 0;
  var rightCount = 0;
  if (pRoot.left) {
    leftCount = isBalancedCore(pRoot.left);
  }
  if (pRoot.right) {
    rightCount = isBalancedCore(pRoot.right);
  }
  if (Math.abs(leftCount - rightCount) > 1) {
    isBalanced = false;
  }
  return leftCount > rightCount ? leftCount + 1 : rightCount + 1;
}

function IsBalanced_Solution(pRoot)
{
    // write code here
    if (!pRoot) {
      return false;
    }
    isBalancedCore(pRoot);
    var ret = isBalanced;
    isBalanced = true;
    return ret;
}

var node = new TreeNode(1);
console.log(IsBalanced_Solution(node));