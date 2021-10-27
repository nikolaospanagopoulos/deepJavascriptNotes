//double equals check the type and the value
//triple equals the same but if the type doesn't match they immediately show false



//for double equals null == undefined -----------> true

//we can check if something is empty

var workshop1 = { topic: null }
var workshop2 = {}

if (workshop1.topic == null && workshop2.topic == null) {
    console.log('true')

}


// == prefers numeric comparison!  string == number the result of the comparison will be number---> boolean will become a number too


//we can avoid unecessary code

var myNum = 15
var myStringNumber = '15'

//if we use === we have to make them both numbers

// but with ==  we dont have to

console.log(myNum == myStringNumber)


//avoid == when one of them is 0 or "" or "   "
//avoid with non-primitives


//shouldnt be used with unknown types

//optionaly when coersion is helpful

//=== when we dont know the types