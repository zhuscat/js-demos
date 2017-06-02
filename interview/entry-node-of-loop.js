function ListNode(x){
    this.val = x;
    this.next = null;
}

function EntryNodeOfLoop(pHead)
{
    // write code here
    if (!pHead) {
      return null;
    }
    var pSlow = pHead;
    var pFast = pHead;
    var count = 0;
    while (pFast) {
        if (pFast.next && pFast.next.next) {
            pFast = pFast.next.next;
        } else {
            return null;
        }
        pSlow = pSlow.next;
        count++;
        if (pSlow === pFast) {
            break;
        }
    }
    pFast = pHead;
    pSlow = pHead;
    for (var i = 0; i < count; i++) {
        pFast = pFast.next;
    }
    while (pFast !== pSlow) {
        pFast = pFast.next;
        pSlow = pSlow.next;
    }
    return pFast;
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);
var node6 = new ListNode(6);
var node7 = new ListNode(7);
var node8 = new ListNode(8);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = null;

console.log(EntryNodeOfLoop(node1));