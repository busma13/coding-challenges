// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let sum = 0;
function sumOfLeftLeaves(root: TreeNode | null): number {
  sum = 0;
  if (root) {
    addLeftLeaves(root, false);
  }
  return sum;
}

function addLeftLeaves(node: TreeNode, isLeftLeaf: boolean) {
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
