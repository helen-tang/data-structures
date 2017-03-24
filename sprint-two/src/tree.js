var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  newTree.index = 0;

  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(instance, methods) {
    for (var key in methods) {
        instance[key] = methods[key];
    }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (this.value !== undefined) {
    this.value = value;
  } 
  this.children[this.index] = Tree(value);
  this.index++;
   
};

treeMethods.contains = function(target) {
  var result = false;

  var traverseTree = function(node) {

    if (node.value === target) {
      result = true;
      return true;
    } 

    if (node.children[0] !== null) {
      for (var i = 0; i < node.children.length; i++) {
        traverseTree(node.children[i]);  
      }
    }
  };
  console.log(this);
  traverseTree(this);

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 treeMethods.addchild is O(1) --> constant time
 treeMethods.contains is O(n) --> linear time 
    --> you might have to look through every node. Recursion affects time 
    complexity similarly to how for loops do - they're methods to traverse. 
    They, in themselves, don't directly affect time complexity.
    --> DO NOT: associate loops/recursion with a particular Big-O
        --> sometimes, it's a shortcut, but it doesn't guarantee anything
 */
