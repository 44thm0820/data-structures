var Stack = function () {
  this.storage = {};
};



Stack.prototype.push = function (value) {
  this.storage[Object.keys(this.storage).length] = value;
};

Stack.prototype.pop = function () {
  var str = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
  return str;
};

Stack.prototype.size = function () {
  // return Object.keys(this.storage).length <= 0 ? 0 : Object.keys(this.storage).length;
  if (Object.keys(this.storage).length <= 0) {
    return 0;
  } else {
    return Object.keys(this.storage).length;
  }
};

