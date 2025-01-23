// Given the root node of a binary tree, flip the tree by swapping each node's left and right children, then return the root of the flipped tree.

// The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes.

const binaryTreeFlip = (root) => {
  if (!root) return null;

  const leftNode = binaryTreeFlip(root.left);
  const rightNode = binaryTreeFlip(root.right);

  root.right = leftNode;
  root.left = rightNode;

  return root;
};

console.log(binaryTreeFlip([1, 2, 3, 4, 5, 6, 7])); 
