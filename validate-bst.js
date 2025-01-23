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
  }
  
  console.log(binarySearchTreeValidate([2,1,3]));