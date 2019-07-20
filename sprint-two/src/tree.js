var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods); 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var aNode = Tree(value);
  this.children.push(aNode);

};

treeMethods.contains = function(target) {
  //base case: if node has no children, then return whether target is the same as the value
  //recursion: if node has any children, then 1) return if value is equal to target and 2) (recurse) check whether any of the children contain target
  console.log(this.children);
  var found = false;
  if (this.children.length === 0){
    found = found || target === this.value;
  } else {
    found = found || this.value === target;
    for (var child of this.children) {
      found = child.contains(target) || found;
    }    
  }
  return found;
};

var oak = Tree("leaves");
oak.addChild("acorn");
console.log(oak);

