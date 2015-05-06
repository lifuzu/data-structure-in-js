var LinkedList = require('./LinkedList.js');
var PriorityQueue = require('priorityqueuejs');

// LinkedList
var sll = new LinkedList();
sll.push({'a': 5, 'b': 6});
sll.push(7);
sll.push(8);
sll.push({'name': 'John', 'age': 67});

console.log(sll.head);
console.log(sll.head.next.next.next);

// PriorityQueue
var queue = new PriorityQueue();
queue.enq(7);
queue.enq(5);
queue.size();
queue._elements = Array(6, 8);
console.log(queue.deq());