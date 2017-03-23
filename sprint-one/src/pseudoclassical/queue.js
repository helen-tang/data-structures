var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.head] = value;
  this.head++;
};

Queue.prototype.dequeue = function() {
  var toBeDequeued = this.storage[this.tail];
  this.tail++;

  if (this.tail > this.head) {
    this.tail = this.head;
  }
  return toBeDequeued;
};

Queue.prototype.size = function() {
  return this.head - this.tail;
};

  