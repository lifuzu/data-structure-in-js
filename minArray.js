// implemnt to find minimum in an array with recursion
function min(a, l) {
  if (l > 2) {
    var mini = min(a, l-1);
    if (mini > a[l-1]) {
      return a[l-1];
    } else {
      return mini;
    }
  } else {
    if (a[0] > a[1]) {
      return a[1];
    } else {
      return a[0];
    }
  }
}

a = [23, 45, 12, 58, 76, 8];
var amin = min(a, a.length);
console.log(amin);

function minA(a, f, l) {
  if (f == l) return result = a[f];
  else {
    var  m = Math.floor(f + (l -f )/2);
    var minH1 = minA(a, f, m);
    var minH2 = minA(a, m+1, l);
    return (minH1 < minH2)? minH1: minH2;
  }
}

a = [23, 45, 12, 58, 4, 76, 8];
var bmin = minA(a, 0, a.length-1);
console.log(bmin);