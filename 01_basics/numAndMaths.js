const score = 400

const balance = new Number(100)

console.log(score);
console.log(balance);

// some built-in functions come under proto class
console.log(balance.toString()); // convert number to string
console.log(balance.toFixed(2)); //add two decimal places

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) // returns required digits

const hundreds = 100000
console.log(hundreds.toLocaleString()) // puts comma according to us standard by default (en-IN) for indian comma system

// ****************************** Maths *****************************************

console.log(Math); // math is an object which have many functions

console.log(Math.abs(-4)); // chsnge sign from pos to neg
console.log(Math.round(4.6)); //round-off
console.log(Math.ceil(4.2)); // takes the ceil value
console.log(Math.min(4 , 3 , 6 ,8)); // returns min value

console.log(Math.floor((Math.random()*10) + 1)); // Math.random() gives values 0 to 1 always

// to get value between a fixed range formula:
//     Math.floor(Math.random() x (max-min+1) + min)