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

// object literal
const tinderUser = new Object(); // another way to create object

tinderUser.name = "Random";
tinderUser.age = 18;
tinderUser.isLoggedIn = false;
console.log(tinderUser);

// nested object
const regularUser = {
    email: "yo@gmail.com" ,
    fullname: {
        userfullname: {
            firstname: "Random",
            lastname: "Guy"
        }
    }
}

console.log(regularUser.fullname.userfullname); // accessing nested object

// object assign
const obj1 = {1: "one", 
    2: "two"
};

const obj2 = {3: "three",
    4: "four"
};

const obj3 = Object.assign({}, obj1, obj2) // merging two objects
console.log(obj3);

console.log(Object.key(tinderUser));
console.log(Object.values(tinderUser)) // print keys of object
