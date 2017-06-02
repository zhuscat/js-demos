function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function FindPathCore(root, expectNumber, sum, path, ret) {
    sum += root.val;
    path.push(root.val);
    var i;
    var isLeaf = (root.left == null) && (root.right == null);
    var newPath = [];
    if (sum === expectNumber && isLeaf) {
        for (i = 0; i < path.length; i++) {
            newPath.push(path[i]);
        }
        ret.push(newPath);
    }
    if (root.left) {
        FindPathCore(root.left, expectNumber, sum, path, ret);
    }
    if (root.right) {
        FindPathCore(root.right, expectNumber, sum, path, ret);
    }
    path.pop();
}

function FindPath(root, expectNumber)
{
    var ret = [];
    var path = [];
    if (!root) {
        return ret;
    }
    // write code here
    var currValue = 0;
    FindPathCore(root, expectNumber, currValue, path, ret);
    return ret;
}

var root = new TreeNode(10);
var node1 = new TreeNode(5);
var node2 = new TreeNode(4);
var node3 = new TreeNode(7);
var node4 = new TreeNode(12);
node1.left = node2;
node1.right = node3;
root.left = node1;
root.right = node4;

var ret = FindPath(root, 22);
console.log(ret);