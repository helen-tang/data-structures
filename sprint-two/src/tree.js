var Tree = function(value) {
  var newTree = {};
  console.log(value);

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
   
    this.children[0] = Tree(value);
   
};

treeMethods.contains = function(target) {
  // var traverseTree = function(node) {
    
  // };
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
