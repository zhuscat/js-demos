function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
 
function MaxHeap(arr, compare) {
    this.heap = arr;
    this.compare = compare;
    this.n = arr.length;
}
 
MaxHeap.prototype.size = function () {
    return this.n;
}
 
MaxHeap.prototype.isLeaf = function (pos) {
    return (pos >= Math.floor(this.n / 2)) && (pos < this.n);
}
 
MaxHeap.prototype.leftChild = function (pos) {
    return 2 * pos + 1;
}
 
MaxHeap.prototype.rightChild = function (pos) {
    return 2 * pos + 2;
}
 
MaxHeap.prototype.parent = function (pos) {
    return Math.floor((pos - 1) / 2);
}
 
MaxHeap.prototype.insert = function (value) {
    var curr = this.n++;
    this.heap[curr] = value;
    while ((curr !== 0) && this.compare(this.heap[curr], this.heap[this.parent(curr)]) > 0) {
        swap(this.heap, curr, this.parent(curr));
        curr = this.parent(curr);
    }
    return true;
}
 
MaxHeap.prototype.removeMax = function () {
    if (this.n === 0) {
        return undefined;
    }
    swap(this.heap, 0, --this.n);
    if (this.n !== 0) {
        this.siftdown(0);
    }
    return this.heap.pop();
}
 
MaxHeap.prototype.top = function () {
    return this.heap[0];
}
 
MaxHeap.prototype.buildHeap = function () {
    for (var i = Math.floor(this.n / 2 - 1); i >= 0; i--) {
        this.siftdown(i);
    }
}
 
MaxHeap.prototype.siftdown = function (pos) {
    var j = 0;
    var rc = 0;
    while (!this.isLeaf(pos)) {
        j = this.leftChild(pos);
        rc = this.rightChild(pos);
        if ((rc < this.n) && this.compare(this.heap[j], this.heap[rc]) < 0) {
            j = rc;
        }
        if (this.compare(this.heap[pos], this.heap[j]) >= 0) {
            return;
        }
        swap(this.heap, pos, j);
        pos = j;
    }
}
 
var maxheap = new MaxHeap([], function(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});
 
var minheap = new MaxHeap([], function (a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
});
 
var toMaxHeap = true;
function Insert(num)
{
    // write code here
    // 如果是偶数的话，把一个数字插入最大堆，然后从最大堆中插入最小堆
    if ((minheap.size() + maxheap.size()) % 2 === 0) {
      maxheap.insert(num);
      minheap.insert(maxheap.removeMax());
    } else {
      // 如果是奇数的话，要分几种情况
      // 1. 先插入最大堆，然后查看最大堆的最大数，如果最大数比最小堆最小数小，插入结束
      // 2. 如果最大数比最小堆大，则交换最大堆跟最小堆的最大最小值
      maxheap.insert(num);
      if (maxheap.top() > minheap.top()) {
        var maxHeapTop = maxheap.removeMax();
        var minHeapTop = minheap.removeMax();
        maxheap.insert(minHeapTop);
        minheap.insert(maxHeapTop);
      }
    }
}
function GetMedian(){
    // write code here
    if ((maxheap.size() + minheap.size()) % 2 === 1) {
        return minheap.top();
    } else {
        return (maxheap.top() + minheap.top()) / 2;
    }
}

var arr = [5,2,3,4,1,6,7,0,8];
for (var i = 0; i < arr.length; i++) {
  Insert(arr[i]);
  console.log(GetMedian());
  console.log(maxheap.heap);
  console.log(minheap.heap);
  console.log('\n');
}