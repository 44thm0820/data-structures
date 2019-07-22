var BinarySearchTree = function(value) {
  var bst = Object.create(bstPrototype); //Prototypal style
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

var bstPrototype = {};

bstPrototype.insert = function(value) {
  if (value === this.value) {
    return;
  } else if (value < this.value && !!this.left) {
    this.left.insert(value);
  } else if (value > this.value && !!this.right) {
    this.right.insert(value);
  } else if (value < this.value && !this.left) {
    this.left = BinarySearchTree(value);
  } else if (value > this.value && !this.right) {
    this.right = BinarySearchTree(value);
  }
};

bstPrototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value && !!this.left) {
    return this.left.contains(value);
  } else if (value > this.value && !!this.right) {
    return this.right.contains(value);
  } else if (value < this.value && !this.left) {
    return false;  
  } else if (value > this.value && !this.right) {
    return false;
  }
};

bstPrototype.depthFirstLog = function(value) {
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

