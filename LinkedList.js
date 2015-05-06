// Reference:
// http://book.mixu.net/node/ch7.html
// http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html
var LinkedList = function() {
  this.head = null;
  this.tail = null; // storing a reference to the end of the list
}

LinkedList.prototype.push = function (value) {
  var node = {
    data: value,
    next: null
  }
  if(!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    // var current = this.head;
    // while(current.next) {
    //   current = current.next;
    // }
    // current.next = node;

    // Switch to use tail for good performance
    this.tail.next = node;
    this.tail = this.tail.next;
  }
}

module.exports = LinkedList;

// unit test code in module
if (require.main === module) {
  var sll = new LinkedList();
  sll.push({'a': 5, 'b': 6});
  sll.push(7);
  sll.push(8);
  sll.push({'name': 'John', 'age': 67});

  console.log(sll.head);
  console.log(sll.head.next.next.next);
}
