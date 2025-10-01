const mysym = Symbol('key1');  // creating a symbol

// Object Literals

const jsUser = {
    name: "Unknown",
    "PetName": "Bruno",   // property name with special character ; can't be accessed with dot notation
    age: 0,
    location: "random",
    email: "dummy@gmail.com",
    [mysym]: "mykey1",   // symbol as property key
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]     // array inside object
}

//  print the object
console.log(jsUser);

// print particular property of object
console.log(jsUser.name);
console.log(jsUser["age"]); // another way to access property
console.log(jsUser["PetName"]); // accessing property with special character using bracket notation
console.log(jsUser[mysym]); // accessing property with symbol as key

// changing the property value
jsUser.email = "dummy_01@gmail.com"

// adding new property
jsUser.phone = 1234567890
console.log(jsUser);

// delete property
delete jsUser.age
console.log(jsUser);    

// function for object
jsUser.greeting = function() {
    console.log("Hello User");
    console.log(`Your email is ${this.name}`); // 'this' refers to the current object
}
jsUser.greeting()

// freezing the object - can't change or add any property
Object.freeze(jsUser)
jsUser.email = "anything@gmail.com" // won't work
console.log(jsUser.email); // email won't change