var Queue = function () {
  this.storage = {
    front: 0,
    back: 0,
    length: 0
  };
};


Queue.prototype.enqueue = function (value) {
  this.storage[this.storage.back] = value;
  this.storage.back += 1;
  this.storage.length += 1;
};

Queue.prototype.dequeue = function () {
  var str = this.storage[this.storage.front];
  delete this.storage[this.storage.front];
  this.storage.front += 1;
  this.storage.length -= 1;
  console.log(JSON.stringify(this.storage) + ' after dequeue');
  return str;
};

Queue.prototype.size = function () {
  return this.storage.length > 0 ? this.storage.length : 0;
};
