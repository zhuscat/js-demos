/*
给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
*/

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    // write code here
    if (!pNode) {
      return null;
    }
    var node = pNode;
    if (node.right) {
      node = node.right;
      if (node.left) {
        node = node.left;
      }
      return node;
    } else { // 没有右边的节点
      while (node) {
        if (node.next && node.next.left === node) {
          return node.next;
        } else {
          node = node.next;
        }
      }
    }
    return  null;
}