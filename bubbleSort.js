// implement bubleSort
function bubbleSort(a) {
  var l = a.length
  for (var i = l -1; i > 0 ; --i) {
    for (var j = 0; j <= i -1; j++) {
      if (a[j] > a[j+1]) {
        var t = a[j];
        a[j] = a[j+1];
        a[j+1] = t;
      }
    }
  }
  return a;
}

var a = [1,3,4,5,3,8,2];
console.log(a);
var o = bubbleSort(a);
console.log(o);
