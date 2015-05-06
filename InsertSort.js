function InsertSort(a) {
  var l = a.length;
  for (var i=0; i<=l-1; i++) {
    for (var j=i; j>0; j--) {
      if (a[j-1] > a[j]) {
        var t = a[j-1]; a[j-1] = a[j]; a[j] = t;
      }
    }
  }
}

function Uniq(a) {
	var l = a.length;
	for (var i=0; i<=l-1; i++) {
		for (var j=1; j<l-1-i; j++) {
			if (a[i] === a[i+1]) {a.splice(i+1, 1);}
			else break;
		}
	}
}

var a = [9, 1, 8, 3, 2, 4, 2, 3, 2];
console.log(a);
InsertSort(a);
console.log(a);
Uniq(a);
console.log(a);