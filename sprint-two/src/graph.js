// Instantiate a new graph
var Graph = function() {
  // this._container = [];
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

Graph.prototype.contains = function(node) {
  return !!this.nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (aNode in this.nodes) {
    if (this.nodes[aNode][node]) {
      delete this.nodes[aNode][node]; // deleting edge if the name of node exists in any other node.
    }
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return !!(this.nodes[fromNode][toNode] && this.nodes[fromNode][toNode]
  || this.nodes[toNode] && this.nodes[toNode][fromNode]); 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode][toNode]) {
    delete this.nodes[fromNode][toNode];
  }
  if (this.nodes[toNode][fromNode]) {
    delete this.nodes[toNode][fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


var chart = new Graph();
chart.addNode("val");
chart.addNode("two");
chart.addNode("pen");
console.log(chart);
chart.addEdge("val", "two");
console.log(chart);
console.log("val and two have an edge? " + chart.hasEdge("val", "two"));
chart.removeNode("two");
console.log("val and two have an edge? " + chart.hasEdge("val", "two"));
console.log(chart);
chart.forEachNode(console.log("hi"));
