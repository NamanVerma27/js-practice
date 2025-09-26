// basic array declaration
const myArr = [1,2,3,4,5] // it can hold multiple data types
console.log(myArr);
console.log(typeof myArr); // object

//  both arr2 and myArr will change as arrays are reference types
const arr2 = myArr
myArr[2] = 99
console.log(arr2); // arr2 also changes as it is reference to myArr
console.log(myArr) // myArr changes according to arr2

// declare array using 'new' keyword
const arr3 = new Array(1,2,3,4,5)
console.log(arr3);

// ******************************** basic array methods *******************************************

console.log(arr3.length); // length of array

// push method
arr3.push(6) // adds element at the end
console.log(arr3);

// pop method
arr3.pop() // removes last element
console.log(arr3);

// unshift method
arr3.unshift(0) // adds element at the start
console.log(arr3);

// shift method
arr3.shift() // removes first element
console.log(arr3);

// indexOf method
console.log(arr3.indexOf(3)); // returns index of the element

// includes method
console.log(arr3.includes(5)); // returns true if element is present else false

// join method
const newArr = arr3.join() // joins all elements with comma separator by default
console.log("join method: " , newArr);


// ************************************* Array. methods: **********************************************

//check if a variable is an array or not
console.log(Array.isArray(arr3)); // returns true if variable is an array else false

// create array through a string
console.log(Array.from("hello")); // creates array from string: ['h', 'e', 'l', 'l', 'o']

// convert array from different variables
let score1 = 100
let score2 =200
let score3 = 300

console.log(Array.of(score1 , score2 , score3)); // creates array from the given arguments


// slice method
const slicedArr = arr3.slice(1,4) // slices from index 1 to 3 (4-1)
console.log("Sliced Array: " , slicedArr);
console.log("Original Array: " , arr3);

console.log('/n');


// splice method
const splicedArr = arr3.splice(2,4) // removes index no: 2,3,4 from original array and returns them
console.log("Spliced Array: " , splicedArr);
console.log("Original Array: " , arr3);

// To join two arrays
const arr4 = [6,7,8,9,10]

const arr5 = arr3.concat(arr4)
console.log("Concatenated Array: " , arr5);

const arr6 = [...arr3, ...arr4] // using spread operator
console.log("Using Spread Operator: " , arr6);

// handling nested arrays
const nestedArr = [1 ,2 , 3, [4, 5, 6] , 7 , [6, 7 , [4 , 5]]]
const flatArr = nestedArr.flat(2) // flattens the array up to the specified depth
console.log("Nested Array: " , nestedArr);
console.log("Flattened Array: " , flatArr);