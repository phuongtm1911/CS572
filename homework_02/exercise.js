Array.prototype.pluck = function(bool) {
    const newArr = this;
    setTimeout(() => {  
        if (newArr.length > 0) {
            var max = newArr[0];
            var min = newArr[0];
            for (var i = 0; i < newArr.length; i++) {
                if (newArr[i] > max) {
                    max = newArr[i];
                }
                if (newArr[i] < min) {
                    min = newArr[i];
                }
            }
            if (bool === true) {
                console.log(max);
            } else if (bool === false) {
                console.log(min);
            } 
        } else {
            console.log('error');
        }; 
    }, 1000);
  };
  
  console.log('start');
  [1, 2, 3, 4, 5, 6, 7, 8].pluck(true);
  [1, 2, 3, 4, 5, 6, 7, 8].pluck(false);
  console.log('end');