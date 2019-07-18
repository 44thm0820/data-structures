class Queue {
  constructor() {
    this.storage = {
      front: 0,
      back: 0,
      length: 0
    };
  }
  enqueue (value) {
    this.storage[this.storage.back] = value;
    this.storage.back += 1;
    this.storage.length += 1;
  }

  dequeue () {
    var str = this.storage[this.storage.front];
    delete this.storage[this.storage.front];
    this.storage.front += 1;
    this.storage.length -= 1;
    console.log(JSON.stringify(this.storage) + ' after dequeue');
    return str;
  }

  size () {
    return this.storage.length > 0 ? this.storage.length : 0;
  }
}
