var trendRate = -0

var new0 = String(trendRate)
//------------------> if we make it a string it becomes 0
console.log('original-------> ', trendRate, 'string---> ', new0)

console.log(trendRate > 0) //------> false
console.log(trendRate < 0) //------> false

console.log(trendRate === 0) // -------------> TRUE oops!!!

// we can unserstand for certain only with this
console.log(Object.is(trendRate, -0))


// Math.sign() returns -1 if the number has - and 1 if it doesn't


console.log(Math.sign(-5)) //-------------> -1
console.log(Math.sign(-0)) //-------------> -0 WTF???

//WE CAN FIX THAT METHOD

function sign(v) {
    return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1
}

console.log(sign(-0)) //-----------------> returns -1

console.log('----------------------------------------')

