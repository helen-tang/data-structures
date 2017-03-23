var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(instance, methods) {
    for (var key in methods) {
        instance[key] = methods[key];
    }
};

var stackMethods = {};

stackMethods.push = function() {

};

stackMethods.pop = function() {

};

stackMethods.size = function() {
    console.log( this);
    return Object.keys(this).length;
};

