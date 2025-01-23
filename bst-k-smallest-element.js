// Given the root node of a binary search tree (BST) and an integer k,
//write a function to find and return the k-th smallest value in the BST. The smallest value in the tree is 1.
// The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes,
// which are also TreeNodes.

// Approach 1: Iterate through the tree and find the k-th smallest element
// O(H+k)

const kthSmallestElementInABst = (root, k) => {
  let result;

  const iterateRoot = (root) => {
    if (!root || result !== null) return;

    iterateRoot(root.left);

    if (root.val) {
      k--;
      if (k === 0) result = root.val;
    }

    iterateRoot(root.right);
  };

  iterateRoot(root);
  return result;
};
