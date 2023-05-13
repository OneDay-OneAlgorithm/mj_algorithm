export class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  insert(data, parentData) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this._insertNode(this.root, newNode, parentData);
  }

  _insertNode(node, newNode, parentData) {
    if (node.data === parentData) {
      node.children.push(newNode);
      return;
    }

    for (let i = 0; i < node.children.length; i++) {
      this._insertNode(node.children[i], newNode, parentData);
    }
  }

  search(data) {
    return this._searchNode(this.root, data);
  }

  _searchNode(node, data) {
    if (node === null) {
      return null;
    }

    if (node.data === data) {
      return node;
    }

    for (let i = 0; i < node.children.length; i++) {
      const foundNode = this._searchNode(node.children[i], data);

      if (foundNode !== null) {
        return foundNode;
      }
    }

    return null;
  }

  findParentNode(data) {
    if (this.root === null) {
      return null;
    }

    if (this.root.data === data) {
      return null;
    }

    return this._findParentNode(this.root, data);
  }

  _findParentNode(node, data) {
    for (let i = 0; i < node.children.length; i++) {
      if (node.children[i].data === data) {
        return node;
      }

      const foundNode = this._findParentNode(node.children[i], data);

      if (foundNode !== null) {
        return foundNode;
      }
    }

    return null;
  }

  findChildNodes(data) {
    const node = this.search(data);

    if (node === null || node.children.length === 0) {
      return [];
    }

    return node.children;
  }

  findSiblingNodes(data) {
    const parentNode = this.findParentNode(data);

    if (parentNode === null) {
      return [];
    }

    return parentNode.children.filter((node) => node.data !== data);
  }

  countNodes() {
    return this._countNodes(this.root);
  }

  _countNodes(node) {
    let count = 1;

    for (let i = 0; i < node.children.length; i++) {
      count += this._countNodes(node.children[i]);
    }

    return count;
  }

  preorder() {
    const result = [];
    function traverse(node) {
      if (node === null) {
        return;
      }
      result.push(node.data);
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  inorder() {
    const result = [];
    function traverse(node) {
      if (node === null) {
        return;
      }
      traverse(node.left);
      result.push(node.data);
      traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  postorder() {
    const result = [];
    function traverse(node) {
      if (node === null) {
        return;
      }
      traverse(node.left);
      traverse(node.right);
      result.push(node.data);
    }
    traverse(this.root);
    return result;
  }
}

const tree = new Tree();
