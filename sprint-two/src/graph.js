

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.storage.edgesArray = [];
  this.index = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[this.index] = node;
  this.index++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(targetNode) {
  var result = false;
  var searchGraph = function(node) {
    if (node[0] === targetNode) {
      result = true;
      return result;
    } else {
      for (var key in node) { 
        searchGraph(node[key]);
      }
    }
  };
  searchGraph(this.storage);
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
  this.storage[fromNode] = this.edgesArray.push(toNode);
    console.log(this.edgesArray);

  this.edgesArray = [];
  this.storage[toNode] = this.edgesArray.push(fromNode);
  console.log(this.edgesArray);

  this.edgesArray = [];
  console.log(this.edgesArray);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


