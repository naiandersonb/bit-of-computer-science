class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);
    return this.buildTreeRecursive(sortedArray, 0, sortedArray.length - 1);
  }

  buildTreeRecursive(array, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = this.buildTreeRecursive(array, start, mid - 1);
    node.right = this.buildTreeRecursive(array, mid + 1, end);

    return node;
  }

  inOrderTraversal(node = this.root, result = []) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.data);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }
}
