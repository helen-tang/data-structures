var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    var toBeDeleted = storage[0];
    delete storage[0];
    var storageArray = Object.keys(storage);
    for (var i = 0; i < storageArray.length; i++) {
      storage[i] = storage[i + 1];
    }
    index--;
    return toBeDeleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
