function isValidName(param) {

    return !!param && (param + "").length >= 3 && +param !== 0
}

// console.log(isValidName("Frank") === true);
// console.log(isValidName(false) === false);
// console.log(isValidName(null) === false);
// console.log(isValidName(undefined) === false);
// console.log(isValidName("") === false);
// console.log(isValidName("  \t\n") === false);
// console.log(isValidName("X") === false);


function hoursAttended(attended, length) {
    if (Object.is(+attended, NaN) ||
        Object.is(+length, NaN) ||
        (+attended % 1 !== 0 || +length % 1 !== 0) ||
        typeof attended === 'string' && attended.length === 0 ||
        typeof length === 'string' && length.length === 0
        || typeof attended === 'boolean'
        || attended === null || length === null
    ) {
        return false
    }
    else {
        if (+attended >= 0 && +attended <= +length) {
            return true
        } else {
            return falseud
        }
    }

}


console.log(hoursAttended("", 6) === false, 1);
console.log(hoursAttended(6, "") === false, 2);
console.log(hoursAttended("", "") === false, 3);
console.log(hoursAttended("foo", 6) === false, 4);
console.log(hoursAttended(6, "foo") === false, 5);
console.log(hoursAttended("foo", "bar") === false, 6);
console.log(hoursAttended(null, null) === false, 7);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);