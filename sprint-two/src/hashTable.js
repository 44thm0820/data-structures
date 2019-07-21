var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //initializing an array if not yet initialized in storage
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  }
  //replacing only the value if key is already there.
  for (let i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i][1] = v;
      return;
    }
  }
  this._storage.get(index).push([k,v]);
}

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (let i = 0; i < this._storage.get(index).length; i++) {
      if (k === this._storage.get(index)[i][0]) {
        return this._storage.get(index)[i][1];
      }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, undefined);
  }
  else {
    let idxOf = this._storage.get(index).indexOf(k);
    this._storage.get(index).splice(idxOf, 1);
  }
};

// var hashTable = new HashTable();
// console.log(hashTable);

/*
 * Complexity: What is the time complexity of the above functions?
 */


