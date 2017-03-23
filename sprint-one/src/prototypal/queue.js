var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.head] = value;
  this.head ++;
};

queueMethods.dequeue = function () {
  var toBeDequeued = this.storage[this.tail];
  this.tail++;
  if (this.tail > this.head) {
    this.tail = this.head;
  }
  return toBeDequeued;
};

queueMethods.size = function () {
  return this.head - this.tail;
};
