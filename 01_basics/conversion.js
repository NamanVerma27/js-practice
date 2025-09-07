console.log("Number string to Number: ")

let score = "33"
console.log(typeof score)

let valueOfScore = Number(score)
console.log(typeof valueOfScore)
console.log(valueOfScore)

console.log("Mixed value to Number: ")

let assumeNumber = "33abc"
console.log(typeof assumeNumber)

let valueofAnum = Number(assumeNumber)
console.log(typeof valueofAnum)
console.log(valueofAnum)

/*
Conversions to number:
number string : "33" -> 33
mixed string and number : "33abc" -> NaN
boolean : true -> 1
null -> 0
undefined -> NaN
*/

console.log("Boolean Conversion: ")

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

/* 
Conversions to boolean:
number : 0/1 -> false/true
number greater than 1 : 8 -> true
empty value : "" -> false
string : "rohan" -> true
*/