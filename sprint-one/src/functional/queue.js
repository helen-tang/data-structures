var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  var pointer = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    var toBeDeleted = storage[pointer];
    pointer ++;
    //Conditional put in place to avoid dequeueing more than you've enqueued
    if (pointer > index) {
      pointer === index;
    }
    return toBeDeleted;
  };

  someInstance.size = function() {
    if (index - pointer < 0) {
      return 0;
    }
    return index - pointer;
  };

  return someInstance;
};
