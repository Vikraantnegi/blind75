// Given the root of a Binary Search Tree (BST), identify the lowest common ancestor (LCA) of two specified nodes within the tree.
// The LCA is the lowest node in the tree that has both of the given nodes as descendants. A node can be considered a descendant of itself,
// following the standard definition of LCA. The binary tree is represented by a collection of TreeNodes,
// where each node has optional left and right child nodes, which are also TreeNodes.

const lowestCommonAncestor = (root, a, b) => {
  let result = null;

  const iterateNode = (node) => {
    if (node || result === null) {
      if (a.val <= node.val && b.val <= node.val) {
        // left tree
        if (a.val === node.val || b.val === node.val) {
          result = node;
          return;
        } else iterateNode(node.left);
      } else if (a.val >= node.val && b.val >= node.val) {
        // right tree
        if (a.val === node.val || b.val === node.val) {
          result = node;
          return;
        } else iterateNode(node.right);
      } else {
        result = node;
        return;
      }
    }
  };

  iterateNode(root);

  return result;
};

console.log(lowestCommonAncestor([3, 1, 7, null, 2, 6, 10], 7, 6));

//        3
//       /   \
//      1     7
//       \   /  \
//        2 6    10
