//Given the root nodes of two binary trees, a and b, determine whether the two trees are equal.
// Two binary trees are considered equal if they have the same structure and the corresponding nodes in both trees have the same values.
//The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes.

export default function binaryTreeEqual(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.val !== b.val) return false;

  return binaryTreeEqual(a.left, b.left) && binaryTreeEqual(a.right, b.right);
}
