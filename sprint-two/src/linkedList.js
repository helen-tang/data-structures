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
    var tempNode = list.head;

    var searchList = function(node) {
      if (node.value === target) {
        result = true;
        return result;
      }
      if (node.next !== null) {
        node = node.next;
        searchList(node);
      } 
    };

    searchList(tempNode);
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
    list.addToTail is O(1) --> Constant time
    list.removeHead is also O(1) --> Constant time
    list.contains is O(n) --> Linear time

    This is why linked lists are good for adding and removing things from 
    the beginning or the end and not so much anything from the middle.
 */
