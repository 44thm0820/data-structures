var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.includes(item)){
    this._storage.push(item);
  }  
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);

};

setPrototype.remove = function(item) {
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage = (this._storage.filter( ele => ele !== item));

    }
  }
  console.log(this._storage);
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
