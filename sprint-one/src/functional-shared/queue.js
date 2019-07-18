var Queue = function() {
  var someInstance = {};
  someInstance.storage = {
    front: 0,
    back: 0,
    length: 0
  };
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.storage.back] = value;
  this.storage.back += 1;
  this.storage.length += 1;
};

queueMethods.dequeue = function () {
  var str = this.storage[this.storage.front];
  delete this.storage[this.storage.front];
  this.storage.front += 1;
  this.storage.length -= 1;
  console.log(JSON.stringify(this.storage) + ' after dequeue');
  return str;
};

queueMethods.size = function () {
  return this.storage.length > 0 ? this.storage.length : 0;
};

// var queue = Queue();
// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// queue.enqueue('c');
// console.log(queue.dequeue());
