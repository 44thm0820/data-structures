var Queue = function() {
  var someInstance = Object.create(queueMethods);
  // var someInstance = {};
  someInstance.storage = {
    front: 0,
    back: 0,
    length: 0
  };
  // extend(someInstance, queueMethods);
  return someInstance;
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
