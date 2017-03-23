var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.index = 0;

  return someInstance;
};

stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  var popped = this.storage[this.index - 1];
  this.index--;
  return popped;
};

stackMethods.size = function() {
  if (this.index < 0) {
    return 0;
  }
  return this.index; 
};