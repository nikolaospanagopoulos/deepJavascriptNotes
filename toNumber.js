
console.log(Number(""))//----------------> 0
console.log(Number("-0")) //--------------->-0
console.log(Number("00009")) //--------------->9
console.log(Number("0.")) //--------------->0
console.log(Number(".")) //--------------->NaN
console.log(Number(0xaf))//--------------->175
console.log(Number(false))//--------------->0
console.log(Number(true))//--------------->1
console.log(Number(null))//--------------->0
console.log(Number(undefined))//--------------->NaN



console.log('---------------------------------------------------------------')


console.log(Number([''])) //----------------->0
console.log(Number({})) //----------------->NaN
console.log(Number(["0"])) //----------------->0
console.log(Number(["-0"])) //----------------->-0
console.log(Number([null]))//----------------->0
console.log(Number([undefined]))//----------------->0
console.log(Number([1,2,3]))//----------------->NaN
console.log(Number([[[[]]]]))//----------------->0