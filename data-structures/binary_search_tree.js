class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (data === current.data) {
        return undefined;
      }

      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      }
    }
  }

  find(data) {
    if (!this.root) {
      return null;
    }

    let current = this.root;

    while (current) {
      if (data === current.data) {
        return current;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  BFS() {
    const visited = [];
    const queue = [];
    let node;

    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      visited.push(node.data);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return visited;
  }

  DFSPreOrder() {
    const visited = [];

    const traverse = node => {
      visited.push(node.data);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);

    return visited;
  }

  DFSPostOrder() {
    const visited = [];

    const traverse = node => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      visited.push(node.data);
    };

    traverse(this.root);

    return visited;
  }

  DFSInOrder() {
    const visited = [];

    const traverse = node => {
      if (node.left) {
        traverse(node.left);
      }

      visited.push(node.data);

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);

    return visited;
  }
}
