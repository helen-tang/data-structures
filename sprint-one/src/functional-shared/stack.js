var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};
  someInstance.index = 0;

  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(instance, methods) {
    for (var key in methods) {
        instance[key] = methods[key];
    }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  var toBeDeleted = this.storage[this.index - 1];
  this.index--;
  return toBeDeleted;
};

stackMethods.size = function() {
  if (this.index < 0) {
    return 0;
  } else {
    return this.index;
  }
};

