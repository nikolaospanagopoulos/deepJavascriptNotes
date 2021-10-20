//BEETER CALL IT AS INVALID NUMBER
//value that indicates invalid number

//we dont use 0 when we want to show that we dont have something
// px my cats age when i dont have cats
var myCatsAge = Number("n/a")

console.log(myCatsAge)

//we use n/a

var myAge = Number(0o46)
myAge - "my SONS AGE" //----> - operator requires numbers. it turns "my sons age" into number which is NaN


//nan is not equal to itself. it doesn't have identity property
myCatsAge === myCatsAge // ----------------> FALSE


//WE USE isNaN() to check

console.log(isNaN(myCatsAge))
//is NaN always turns the argument to number before checking

isNaN("my sons age") //-----------------> true

//in es6 we have Number.isNaN -> it definatly tells us the truth 

Number.isNaN(myCatsAge)

// type of NaN is number