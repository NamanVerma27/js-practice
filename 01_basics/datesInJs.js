const now = new Date()
console.log(now)

console.log(typeof now);

// convert to string
console.log(now.toString());

// Convert to LocaleString
console.log(now.toLocaleString());

let mydate = new Date(2025 , 2 , 23) // 0->jan , 11->dec
console.log(mydate.toDateString());

let myFormatDate = new Date("2023-01-14") // mm-dd-yy
console.log(myFormatDate.toLocaleString());

let FormatDate = new Date("01-14-2023")
console.log(FormatDate.toLocaleString()); // dd-mm-yy

let myTimeStamp = Date.now() // get miliseconds
console.log(myTimeStamp);

console.log(now.getTime()); // get miliseconds only from a specified date

console.log(Math.floor(Date.now()/1000)); //convert miliseconds in seconds

// more functions include : getDay() , getMonth() + 1 etc

// toLocaleString gives many functions for customization ('internationalization' , customization)