const arr = [];
const test = n => {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      arr = arr[i][j];
    }
  }
};
test(4);
console.log(arr);
