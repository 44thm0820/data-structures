var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);

// 1. head and tail point to null (no nodes yet aka empty list)
    if (list.head === null && list.tail ===  null) {
      list.head = newNode;
      list.tail = newNode;
// 2. there is one node only in list (head and tail point to the same node)
    } else  {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    let temp = list.head.value;
    if (list.head !== null) { 
      if (list.head === list.tail) {
        list.head = null;
        list.head = null;  
      } else if (list.head !== list.tail) {
        list.head = list.head.next;
      }
      return temp;
    }
  };

  list.contains = function(target) {
    for (let nd in list) {
      if (list[nd].value === target) {
        return true;
      }
    }
    return false;
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
