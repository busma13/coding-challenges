// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
var sum = 0;
function sumOfLeftLeaves(root) {
    sum = 0;
    if (root) {
        addLeftLeaves(root, false);
    }
    return sum;
}
function addLeftLeaves(node, isLeftLeaf) {
    if (!node.left && !node.right && isLeftLeaf) {
        sum += node.val;
    }
    if (node.left) {
        addLeftLeaves(node.left, true);
    }
    if (node.right) {
        addLeftLeaves(node.right, false);
    }
}
