var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  // extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[Object.keys(this.storage).length] = value;
};

stackMethods.pop = function () {
  var str = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
  return str;
};

stackMethods.size = function () {
  return Object.keys(this.storage).length <= 0 ? 0 : Object.keys(this.storage).length;
};
