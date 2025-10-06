// function declaration
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// function call
console.log(addTwoNumbers(3, 5));


// function reference
addTwoNumbers;

// default parameters
function addTwoNumbers2(num1, num2 = 5) { // if num2 is not passed, it will take default value 5
    return num1 + num2;
}

//// rest parameter - it takes multiple arguments and puts them in an array
function calculateCartPrice(...num1) { 
    return num1
}
// if parameter : (val1 , val2 , ...num1) - it will take first two values in val1 and val2 and rest in num1 array
calculateCartPrice(200 , 400 , 500)