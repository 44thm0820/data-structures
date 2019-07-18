var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
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
/*
Functional instantiation with shared methods: same as step 1, but with shared methods

Do:
  Work within the src / functional - shared / folder
Create an object that holds the methods that will be shared by all instances of the class
Use the keyword this in your methods
Use _.extend to copy the methods onto the instance
Don 't:
Use the keyword new or prototype chains
Example: functional instantiation example

var Stack = function () {
  var someInstance = {}; //
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function (value) {
    // if (Object.keys(storage).length === 0) {
    //   storage[0] = value;
    // } else {
    storage[Object.keys(storage).length] = value;
    // }
  };
  someInstance.pop = function () {
    var str = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage)[Object.keys(storage).length - 1]];
    return str;
  };

  someInstance.size = function () {
    return Object.keys(storage).length <= 0 ? 0 : Object.keys(storage).length;
  };
  return someInstance;
};
*/