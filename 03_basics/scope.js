/*
    Scope in JavaScript determines where variables are accessible in your code.
    There are three main types: global scope, function scope, and block scope.
*/

// Global Scope: Variables declared outside any function or block
let globalVar = "I'm a global variable";

function showGlobalVar() {
    // Can access globalVar here
    console.log(globalVar);
}

showGlobalVar(); // Output: I'm a global variable

// Function Scope: Variables declared inside a function
function functionScopeExample() {
    let functionVar = "I'm only inside this function";
    console.log(functionVar); // Accessible here
}

functionScopeExample();
// console.log(functionVar); // Error: functionVar is not defined outside the function

// Block Scope: Variables declared with let or const inside a block (like if, for)
if (true) {
    let blockVar = "I'm inside this block";
    const anotherBlockVar = "Me too!";
    console.log(blockVar); // Accessible here
    console.log(anotherBlockVar); // Accessible here
}
console.log(blockVar); // Error: blockVar is not defined outside the block
console.log(anotherBlockVar); // Error: anotherBlockVar is not defined outside the block

// Using var (not recommended due to its function-scoped nature)    

// var is function-scoped, not block-scoped
if (true) {
    var notBlockScoped = "I'm not block scoped";
}
console.log(notBlockScoped); // Accessible here because var ignores block scope

/*
    Summary:
    - Global variables are accessible everywhere.
    - Function-scoped variables are only accessible inside their function.
    - Block-scoped variables (let, const) are only accessible inside their block.
*/