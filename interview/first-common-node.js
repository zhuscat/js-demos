function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    if (!pHead2 || !pHead2) {
      return null;
    }
    var len1 = 0;
    var len2 = 0;
    var node = pHead1;
    var node2 = null;
    var forward = 0;
    while (node) {
      len1++;
      node = node.next;
    }
    node = pHead2;
    while (node) {
      len2++;
      node = node.next;
    }
    node = pHead1;
    node2 = pHead2;
    if (len1 >= len2) {
      forward = len1 - len2;
      while (forward > 0) {
        node = node.next;
        forward--;
      }
    } else {
      forward = len2 - len1;
      while (forward > 0) {
        node2 = node2.next;
        forward--;
      }
    }
    while (node && node2) {
      if (node === node2) {
        return node;
      }
      node = node.next;
      node2 = node2.next;
    }
    return null;
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
node1.next = node3;
node3.next = node4;
node2.next = node4;

var node = FindFirstCommonNode(node1, node2);
console.log(node);
