const name = "rohan"
const repoCount = 50

//old way to concatenate strings
console.log(name + repoCount + "value")

//new way to concatenate strings
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)


//js provide inbuilt string functions under proto object/class
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf('h'));

const newString = name.substring(0,2) // starting to n-1
console.log(newString)

const anotherString = name.slice(-3) // can slice from reverse index i.e -3 last three positions
console.log(anotherString);

// removing unwanted space
const newStringOne = "   rohan     "
console.log(newStringOne);
console.log(newStringOne.trim()) // trimStart() and trimEnd() for more specific task

// replace function
const url = "http://yahoo.com"
console.log(url.replace('yahoo' , 'google'));

console.log(url.includes('yahoo')); // check whether given value is present in the string or not

// convert string to array
const gameName = "rohan-play-subwayrun"
console.log(gameName.split('-'));
