var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list.temp = {};
    list.temp.value = value;
    if (list.head === null) {
      list.head = list.temp;
    } else {
      for (key in list) {
        if (list[key] === null) {
          
        }
      }
    }
    
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
