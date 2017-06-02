function TreeDepth(pRoot)
{
    // write code here
    if (!pRoot) {
      return 0;
    }
    var queue = [];
    var level = 0;
    var node = null;
    var i = 0;
    var len = 0;
    queue.push(pRoot);
    while (queue.length > 0) {
      level++;
      len = queue.length;
      for (i = 0; i < len; i++) {
        node = queue.shift();
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    return level;
}