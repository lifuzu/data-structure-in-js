// searchSorted.js
// run as: node searchSorted.js

function searchSorted(a, first, last, b) {
  var r = [];
  var index = 0;

  var mid = Math.floor(first + (last - first) / 2);
  if (first > last) {
    return r;
  } else if ( b === a[mid]) {
    r.push(mid);
    var left = mid - 1;
    while (left > 0) {
      if (b === a[left]) {
        r.push(left);
      } else {
        break;
      }
      left--;
    }

    var right = mid + 1;
    while (right < a.length) {
      if (b === a[right]) {
        r.push(right);
      } else {
        break;
      }
      right++;
    }
  } else if ( b - a[mid] < 0) {
    r = searchSorted(a, first, mid-1, b);
  } else {
    r = searchSorted(a, mid+1, last, b);
  }
  return r;
}

var a = [ 1, 2, 2, 2, 3, 4, 5, 6, 6, 6];
// Find out the locations of 6
console.log(searchSorted(a, 0, 9, 6));
// [ 7, 8, 9 ]

// Find out the locations of 2
console.log(searchSorted(a, 0, 9, 2));
// [ 1, 2, 3 ]

// Find out the location of 4
console.log(searchSorted(a, 0, 9, 4));
// [ 5 ]

// Find out the location of 8
console.log(searchSorted(a, 0, 9, 8));
// []
