var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {front: 0, back: 0, length: 0};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage.back] = value;
    storage.back += 1;
    storage.length += 1;
    console.log(JSON.stringify(storage) + ' after enqueue');

  };
  someInstance.dequeue = function() {
    var str = storage[storage.front];
    delete storage[storage.front];
    storage.front += 1;
    storage.length -= 1;
    console.log(JSON.stringify(storage) + ' after dequeue');
    return str;

  };
  someInstance.size = function () {
    return storage.length > 0 ? storage.length : 0;
  };
  return someInstance;
};
var queue = Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.dequeue();
queue.enqueue('c');
console.log(queue.dequeue());


