// searchUnsorted.js
// run as: node searchUnsorted.js

function searchUnsorted(a, b) {
  var r = [];
  var index = 0;

  while(index < a.length) {
    if ( b === a[index]) {
      r.push(index);
    }
    index++;
  }
  return r;
}

var a = [ 1, 2, 3, 4, 3, 4, 5];
// Find out the locations of 3
console.log(searchUnsorted(a, 3));
// [ 2, 4 ]

// Find out the locations of 4
console.log(searchUnsorted(a, 4));
// [ 3, 5 ]

// Find out the locations of 5
console.log(searchUnsorted(a, 5));
// [ 6 ]

// Find out the locations of 8
console.log(searchUnsorted(a, 8));
// []