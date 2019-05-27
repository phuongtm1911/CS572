
Array.prototype.removeNum = function (num) {
  setTimeout(function() {
    this.filter(filterNum(num));
  }, 1000);

  function filterNum(n)
    return value != n;
}

function run() {
  console.log('Start');
  console.log([1, 3, 4, 2, 1, 5].removeNum(1));
  console.log('Finish');
}
