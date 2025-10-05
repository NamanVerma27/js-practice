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
