class Stack {
  constructor() {
    this.storage = {};
  }
  push (value) {
    this.storage[Object.keys(this.storage).length] = value;
  }

  pop () {
    var str = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
    return str;
  }

  size () {
    return Object.keys(this.storage).length <= 0 ? 0 : Object.keys(this.storage).length;
    // if (Object.keys(this.storage).length <= 0) {
    //   return 0;
    // } else {
    //   return Object.keys(this.storage).length;
    // }
  }
}