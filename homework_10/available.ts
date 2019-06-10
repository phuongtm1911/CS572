@addAvailability(true)
class Course {}

function addAvailability(val) {
    return function(targetClass) {
        return class {
            available = val;
        }
    }
}

console.log(new Course());
