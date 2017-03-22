var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    var toBeDeleted = storage[index - 1];
    delete storage[index - 1];
    index--;
    return toBeDeleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
