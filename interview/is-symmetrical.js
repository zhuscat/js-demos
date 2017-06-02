function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function inorderPrint(pNode, path) {
    if (pNode === null) {
        path.push(null);
        return;
    }
    if (pNode) {
        inorderPrint(pNode.left, path);
        path.push(pNode.val);
        inorderPrint(pNode.right, path);
    }
}

function inorderMirrorPrint(pNode, path) {
    if (pNode === null) {
        path.push(null);
        return;
    }
    if (pNode) {
        inorderMirrorPrint(pNode.right, path);
        path.push(pNode.val);
        inorderMirrorPrint(pNode.left, path);
    }
}

function preorderPrint(pNode, path) {
    if (pNode === null) {
        path.push(null);
        return;
    }
    if (pNode) {
        path.push(pNode.val);
        preorderPrint(pNode.left, path);
        preorderPrint(pNode.right, path);
    }
}

function preorderMirrorPrint(pNode, path) {
    if (pNode === null) {
        path.push(null);
        return;
    }
    if (pNode) {
        path.push(pNode.val);
        preorderMirrorPrint(pNode.right, path);
        preorderMirrorPrint(pNode.left, path);
    }
}


function isSymmetrical(pRoot)
{
    // write code here
    if (!pRoot) {
        return true;
    }
    var print = [];
    var mirrorPrint = [];
    var print2 = [];
    var mirrorPrint2 = [];
    // inorderPrint(pRoot, print);
    // inorderMirrorPrint(pRoot, mirrorPrint);
    preorderPrint(pRoot, print2);
    preorderMirrorPrint(pRoot, mirrorPrint2);
    // for (var i = 0; i < print.length; i++) {
    //     if (print[i] !== mirrorPrint[i]) {
    //         return false;
    //     }
    // }
    for (i = 0; i < print2.length; i++) {
        if (print2[i] !== mirrorPrint2[i]) {
            return false;
        }
    }
    return true;
}

var path = [];
var path2 = [];
var node1 = new TreeNode(8);
var node2 = new TreeNode(6);
var node3 = new TreeNode(6);
var node4 = new TreeNode(5);
var node5 = new TreeNode(7);
var node6 = new TreeNode(7);
var node7 = new TreeNode(5);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
console.log(isSymmetrical(node1));

// var node1 = new TreeNode(5);
// var node2 = new TreeNode(5);
// var node3 = new TreeNode(5);
// var node4 = new TreeNode(5);
// var node5 = new TreeNode(5);
// var node6 = new TreeNode(5);
// var node7 = new TreeNode(5);
// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node3.right = node5;
// node4.left = node6;
// node5.left = node7;
// console.log(isSymmetrical(node1));