if (true) {
    Object.is = function (firstThing, secondThing) {
        if ((Number.isNaN(firstThing) && Number.isNaN(secondThing))) {
            return true
        } else {
            if (1 / firstThing === Infinity && 1 / secondThing === -Infinity) {
                return false
            }
            else if (1 / firstThing === -Infinity && 1 / secondThing === Infinity) {
                return false
            }
            else {
                return firstThing === secondThing
            }
        }
    }

}


console.log(Object.is(42, 42));
console.log(Object.is("foo", "foo"));
console.log(Object.is(false, false));
console.log(Object.is(null, null));
console.log(Object.is(undefined, undefined));
console.log(Object.is(NaN, NaN));
console.log(Object.is(-0, -0));
console.log(Object.is(0, 0));

console.log(Object.is(-0, 0));
console.log(Object.is(0, -0));
console.log(Object.is(0, NaN));
console.log(Object.is(NaN, 0));
console.log(Object.is(42, "42"));
console.log(Object.is("42", 42));
console.log(Object.is("foo", "bar"));
console.log(Object.is(false, true));
console.log(Object.is(null, undefined));
console.log(Object.is(undefined, null));

const nikos = 123
console.log(nikos.toString())
console.log(nikos.valueOf())