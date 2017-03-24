var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    
    if (list.head === null) {
      list.tail = newNode;
      list.head = list.tail;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    } 
  };

  list.removeHead = function() {
    var decapitated = list.head.value;
    list.head = list.head.next;
    return decapitated;
  };

  list.contains = function(target) {
    var result = false;
    var tempNode;

    if (list.head.value === target) {
      return true;
    } else /*list.head.value doesn't equal*/ {
      tempNode = list.head.next;
      console.log(tempNode);
      while (tempNode.value !== target && tempNode.next !== null) {
        tempNode === tempNode.next;
        if (tempNode.value === target) {
          return true;
        }
        result = false;
      }
      // result = true;
    }
    return result;
  };
  return list;
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
