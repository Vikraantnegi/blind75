// Given the root of a binary tree, determine whether it is a valid binary search tree (BST).
// For a tree to qualify as a valid BST, it must satisfy the following conditions:
// The left subtree of a node only contains nodes with values less than the node's value
// The right subtree of a node only contains nodes with values greater than the node's value
// Both the left and right subtrees are also valid BSTs
// The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes.

const binarySearchTreeValidate = (root) => {
  const iterateNode = (node, min, max) => {
    if (!node) return true;
    const parentVal = node.val;

    if (parentVal < min || parentVal > max) return false;
    else
      return (
        iterateNode(node.left, min, node.val) &&
        iterateNode(node.right, node.val, max)
      );
  };

  return iterateNode(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

console.log(binarySearchTreeValidate([2, 1, 3]));
