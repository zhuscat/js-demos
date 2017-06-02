/*
在一个排序的链表中，存在重复的结点
请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 
例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
*/

function ListNode(x){
    this.val = x;
    this.next = null;
}

function deleteDuplication(pHead)
{
    // write code here
    if (!pHead) {
      return null;
    }
    var node = pHead;
    var pre = null;
    var temp = null;
    var temp2 = null;
    while (node) {
      if ((node.next && node.next.val !== node.val) || node.next === null) {
        pre = node;
        node = node.next;
      } else { // node.next 肯定存在，且 node.next.val === node.val
        temp = node.next;
        while (temp && temp.val === node.val) {
          node.next = temp.next;
          temp2 = temp.next;
          temp.next = null;
          temp = temp2;
          temp2 = null;
        }
        // 删除 node 自身
        if (pre) {
          pre.next = node.next;
          node.next = null;
          node = pre.next;
        } else {
          pHead = node.next;
          node.next = null;
          node = pHead;
        }
      }
    }
    return pHead;
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node7 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(4);
var node6 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node7;
node7.next = node4;
node4.next = node5;
node5.next = node6;

var pHead = deleteDuplication(node1);
var node = pHead;
while (node) {
  console.log(node.val);
  node = node.next;
}