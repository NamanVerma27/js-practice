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

// array methods
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

// slice method
const slicedArr = arr3.slice(1,4) // slices from index 1 to 3 (4-1)
console.log("Sliced Array: " , slicedArr);
console.log("Original Array: " , arr3);

console.log('/n');


// splice method
const splicedArr = arr3.splice(2,4) // removes index no: 2,3,4 from original array and returns them
console.log("Spliced Array: " , splicedArr);
console.log("Original Array: " , arr3);