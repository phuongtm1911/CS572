Array.prototype.removeNum = async function(num) {
  newArr = this;
  var removeNumber = function(num) { 
    return new Promise(function(resolve, reject) {
      if (newArr.includes(num, 0)) {
        resolve(newArr.filter(n => n != num));
      } else {
        reject();
      }
    });
  }
  try {
    newArr = await removeNumber(num);
  } catch (error) {
  } 
  return newArr; 
};

console.log('Start');
console.log([1, 3, 4, 2, 1, 5].removeNum(1));
console.log('Finish');

function promise() {
  const p = fetch("https://randomuser.me/api/");
  p.then(data => data.json())
  .then(data => {console.log(data.results[0].name);
    console.log(data.results[0].location);
  })
  .catch((err) => console.error(err));
}

async function asyncFunc() {
  try {
    await fetch("https://randomuser.me/api/").then(data => data.json())
    .then(data => {console.log(data.results[0].name);
      console.log(data.results[0].location);
    });
  } catch (err) {
    console.error(err);
  } 
}

function reactjs() {
  const { from } = rxjs;
  p = fetch("https://randomuser.me/api/").then(data => data.json());
  from(p).subscribe(data => {console.log(data.results[0].name);
    console.log(data.results[0].location);
  });
}