//single line comment

/* multi
line comment */

// console.log("hello");

// decalaring a variable
// var. let, and const
//var can only be alphanumeric where the numbers can only start after the alphabets
// best naming convention is camelCase
// variable should be used according to the usecase

// var myName = "String"; // declaring a variable called name and assigning value string

// let address = "somewhere under the sky";

// const dob = "20-20-20";

// console.log(myName);
// myName = "Aakash"; // we are overiding the variable , but we can not redeclare the value again

// console.log(address);
// address = "Sydney, NSW";

// dob = " 202020";

// console.log(myName);
// console.log(address);
// console.log(dob);

//operators
// const a = 4;
// const b = 3;

// const result = a + b; // + addition
// const result = a - b; // - substraction
// const result = a * b; // * mulitiplication
// const result = a / b; // / divide
// const result = a ** b; // * exponential
// const result = a % b; // % modulus
//  a++ ; ++ increment
// a-- ; decrement
// console.log(a);

// comparisions

// const v1 = 10;
// const v2 = 10;

// == -> just comparing the data
// === -> comparing the data type too
// > , >=
// < , <==

// const result = v1 == v2;
// const result = v1 === v2;

// const result = v1 >= v2;
// const result = v1 <= v2;

// data types
//primitives
// const dt = "fhadkj 37" // string  // "Aakash"
//  cont dt = 123 // number  //123
// const dt = true // boolean // true or false
// const dt = undefined; // undefined // not defined in the system memory
//const dt = null; // defined in the system memory but no value assigned

// console.log(result);
// console.log(typeof v2 === undefined);

// let val = "prem";
// console.log("val");
// const person = val;

// val = "sam";
// console.log(val, person);

// reference type
// object // {key: "value"}

// const person = {
//   name: "akash",
//   add: "sydney",
// };

// console.log(person);
// const p2 = person;

// person.phone = "00000"; //mutating the data
// console.log(person, p2);

// math object
// const val = Math.PI;
// const val = Math.round(4.5);
// const val = Math.pow(8, 2);
// const val = Math.sqrt(64);
// const val = Math.ceil(4.4);
// const val = Math.floor(4.4);
// const val = Math.min(0, 150, 49, 39, -100);
// const val = Math.max(0, 150, 49, 39, -100);
// const val = Math.random() * 100;
// const newVal = Math.ceil(val);

// console.log(newVal);

//&&
//||
// !
// Ternary

// truthy values -- "string" , 88, obj , array , function, true
// falsy values  -- '', 0 , null , undefined, false

// conditional statements

//if
// const age = 18;
// const g = "f";

// if (age > 18 && g === "f") {
// if (age !== "18") {
//   //code
//   console.log("lets go to the party");
// } else {
//   console.log("sorry go home");
// }

// ternary => condition ? truecode : falsecode
// age >= 18 ? console.log("welcome") : console.log("sorry");
//if else
//else if

// const pet = "cat";

// if (pet === "dog") {
//   //code
//   console.log("woof");
// } else if (pet === "cat") {
//   console.log("meow");
// } else if (pet === "cow") {
//   console.log("mooo");
// } else {
//   console.log("its alien");
// }

//switch
//debugger
// const pet = "cat";
// switch (pet) {
//   case "dog":
//     //code
//     console.log("woff");
//     break;

//   case "cat":
//     console.log("meow");
//     break;

//   case "cow":
//     console.log("mooo");
//     break;

//   default:
//     console.log("its alien");
// }

// error handling -- its not completed check the code in google drive

// const val = "a" + 5;
// try {
//   throw new Error("user already exist!");
//   console.log("running code in try block", val);
// } catch (error) {
//   console.log("running code in catch block", val);
// } finally {
//   console.log("running code in finally block", val);
// }

//js- scheduling
//setTimeout
//clearTimeout

// setTimeout(() => {
//   console.log("subscribe to get 10% off");
// }, 3000);

// let i = 0;
// setInterval(() => {
//   i++;
//   console.log("the system is running ", i);
// }, 1000);

// let i = 0;
// const timer = setInterval(() => {
//   i++;
//   console.log("the system is running ", i);
//   if (i === 10) {
//     clearInterval(timer);
//   }
// }, 1000);

// let i = 5;
// const timer = setInterval(() => {
//   i--;
//   console.log("countdown ", i);

//   if (i === 0) {
//     clearInterval(timer);
//     console.log("start the game");
//   }
// }, 1000);
// console.log("");

// 1 3 4 2

//let, const
//template literals

// const name = "Prem";
// const address = "Sydney";
// // const str = " Hi my name is " + name + ", and I live in " + address;
// const str = `Hi my name is ${name},
// and I live in ${address}`; //template literals

// console.log(str);

//arrow function

// function add(a, b) {
//   return a + b;
// }
// console.log(add(1, 3));

// console.log("1..");

// function msg() {
//   console.log("2...");
// }
// console.log(msg());
// console.log("3....");

// const add = (a, b) => {
//   // this is called arrow function
//   return a + b;
// };

// (a, b) => {
//   // this is called anonymous function
//   return a + b;
// };

// const add = (a, b) => a + b; // if we are returining just one value
// console.log(add(1, 2));

//destructring
// const letsSay = (name, statement) => {
//   return `${name} says ${statement}`;
// };

// const str = letsSay();
// console.log(str);

//default  + rest + spread

// loops

// for (let i = 50; i < 80; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//while loop
// let i = 0;
// while (i < 100) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// do while
// let i = 100;
// do {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
//   // code
// } while (i < 100);

//continue and break
// let i = 0;
// while (i < 100) {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   }

//   if (i === 31) {
//     break;
//   }
//   console.log(i);
// }
// JS - data manipulation
// number
// => safe number = -2^53-1 to 2^53-1
//NaN => Not a number, isNaN()

// const number = 222_343_434_343_355_632_970_893;

// const a = "5s";
// // const num = +a;
// // const num = Number(a);
// // const num = Number(a);
// const num = parseInt(a);
// // const num = parseFloat(a);

// console.log(num, typeof num);

//string
// const str = "Hi there, My name is Akash, and I live in Sydney";
// const val = str.length;
// const val = str.toUpperCase();
// const val = str.toLowerCase();
// const val = str.indexOf("t");
// const val = str.lastIndexOf("t");
// const val = str.replace("t", "d");
// const val = str.replaceAll("Aakash", "Name");
// const val = str.substring(3, 5);
// const val = str.slice(3, 5);
// const val = str.slice(-3);

// const test = "Akash";
// const val = str.includes(test);
// const val = str.charAt(1);
// const val = str.charCodeAt(10);

// const val = str.split(" ").reverse().toString().replaceAll(",", " ");
// escape character
// const str = 'Hi there, My name is "Akash", and I live in Sydney';

// const val = str.search("name");
// console.log(val);

// array
// const fruits = ["apple", "banana", "orange", "pineapple", "tomato"];
// const veggie = ["potato", "mushroom"];
// console.log(fruits.length);
// console.log(fruits[1]);
// const removeItem = fruits.pop();
// fruits.push("Watermelon");
// const removeItemFromTheFront = fruits.shift();
// fruits.unshift("tomato");

// console.log(fruits);
// console.log(removeItem);

// fruits.splice(2, 3);

// fruits.splice(2, 3, "kiwi");

// console.log(fruits.indexOf("kiwi"));
// console.log(fruits);

// const val = fruits.toString(); // to change in string
// const reverseToarray = val.split(","); // to reverse back to array

// console.log(val);
// console.log(reverseToarray.sort());
// console.log(subfruits);
// sort method uses ascii value to sort the values in ascending order
// fruits.sort((a, b) => b - a); // complex algorithm to sort the items we can do descending by doing a-b

// console.log(fruits);

// const newBucket = [...fruits, ...veggie];
// console.log(newBucket);
// console.log(newBucket.join(" "));

//array loops
// console.log(newBucket);
// for (let i = 0; i < newBucket.length; i++) {
//   console.log(newBucket[i]);
// }

// let i = 0;
// while (i < newBucket.length[i]) {
//   console.log(newBucket[i]);
//   i++;
// }
// do {
//   console.log(newBucket[i]);
//   i++;
// } while (i < newBucket.length);

// newBucket.forEach((item, i) => {
//   console.log(item, i);
// });

// const newArray = newBucket.map((item, i) => {
//   console.log(item, i);
//   //   return item.toUpperCase();
//   return "added-" + item;
// });
// const newArray = newBucket.filter((item, i) => {
//   console.log(item, i);
//   return item.includes("a");
// });
// filter helps to filter out the items

//find, some, every.

// const newArray = newBucket.find((item, i) => {
//   //   return item.includes("p");
//   return item === "mango";
// });
// find only returns the first item

// const newArray = newBucket.some((item, i) => {
//   return item.includes("p"); // some just check if we that item in the array and just returns true or false
// });

// const newArray = newBucket.every((item, i) => {
//   return item.includes("p");
// }); // every chcekc if every item in the array has the value, and returns true or false.

// const bank = [1, 1, 1, 1, 1, 1];

// // reduce - loop through enitre array and return one value
// const totalMoney = bank.reduce((subTtl, value) => {
//   console.log(subTtl);
//   return subTtl + value;
// }, 0);
// console.log(bank);
// console.log(totalMoney);

// challange 1:
// 1. create an array of 50 random numbers that range between 1 to 100 programmatically.
//2. sort the array in descending order
//3. get the total value of the array
//4. create new array for odd and even number sets out of the original array
//5. remove the duplicate values from the array

// const args = Math.floor(Math.random() * 100);

// console.log(args);

// const newBucket = [];

// function addItems() {
//   for (let i = 0; i === 50; i++) {
//     return newBucket.push(args);
//   }
// }

// console.log(addItems());

// const args = [];
// for (i = 0; i < 50; i++) {
//   const randomNum = Math.floor(Math.random();
//   //   if (args.indexOf(randomNum) === -1) args.push(randomNum);
//   args.push[randomNum];
// }
// console.log(args);

// objects{}

// const person = {
//   fName: "Akash",
//   lastName: "Vaidya",
//   phone: 0334533,
//   add: "Sydney",

//   training: {
//     name: "JRP",
//     duration: "6 months",
//     topics: ["html", "css", "js"], // we can nest object inside the object
//   },

//   speak: () => {
//     return "Hi my name is " + person.fName;
//   },
// };

// person.add = "Canberra"; // overiding the value
// person.country = " Australia"; // to add new property
// delete person.phone; // to delete the property
// person.skills = ["html", "css", "js"]; // we can add anytype of data in object

// const val = person.add;
// console.log(person);
// console.log(person.training.name);
// // const val = Object.keys(person);
// // const val = Object.values(person);
// const val = person.speak();

// console.log(val);

// const a = {
//   name: " sam",
// };
// console.log(a);
// // const b = a;
// const b = { ...a };

// a.name = " harry ";
// console.log(a, b);

// const person = {
//   fName: "Akash",
//   lastName: "Vaidya",
//   phone: 0334533,
//   add: "Sydney",

//   // training: {
//   //   name: "JRP",
//   //   duration: "6 months",
//   //   topics: ["html", "css", "js"], // we can nest object inside the object
//   // },

//   speak: () => {
//     return "Hi my name is " + person.fName;
//   },
// };
// person.skills = ["html", "css", "js"];
// console.log(person.speak());

// const bio = (obj) => {
//   console.log(obj);
//   const { fName, lastName, phone, add, training } = obj; // destructuring
//   const { name, duration } = training;
//   //   return `
//   //     ${obj.fName} ${obj.lastName} lives in ${obj.add} and teh phone number is ${obj.phone}`;
//   return `
//     ${fName} ${lastName} lives in ${add} and the phone number is ${phone}`;
// };
// const str = bio(person);
// console.log(str);

//// default is assigning the value in destructuing if a value is undefined.

// const p2 = Object.assign({}, person); // creating a new object like cloning the the person
// delete p2.training; // old style of doing it

// const { training, ...p2 } = person; /// new way of doing the previous, it doesnt mutate the data. the process is to destructure and pass the data that is not needed first and then rest to the new object.
// const p2 = { ...person }; // this is called spread operator, creating a new object and putting all the values of person to p2
// console.log(person, p2, person == p2);

// const training = {
//   name: "JRP",
//   duration: "6 months",
//   topics: ["html", "css", "js"], // we can nest object inside the object
// };
// const combo = { ...p2, ...training }; /// to combine two objects, when we do this the values are sorted out alphabetically.
// console.log(combo);

// console.log("1. printing");
// setTimeout(() => {
//   console.log("2. printing");
// }, 1000);

// console.log("3. printing");
// const sayHey = () => {
//   console.log("4. printing");
// };
// setTimeout(() => {
//   console.log("5. printing");
// }, 0);
// sayHey();

// console.log("6. printing");
// console.log("7. printing")
// console.log("8. printing")

//1 3 5  4 6 2 -- prediction
/// 1 3 4 6 5 2 -- right answer

///date object
// const today = Date();
// const today = Date.now();  /// this is called timestamp
// const today = new Date("2020-02-20");
// const date = new Date("2020-02-20");
// const val = date.toDateString();
// const val = date.toISOString();
// const val = date.toLocaleDateString();
// const val = date.toLocaleTimeString();
// const val = date.toTimeString();
// const val = date.getMonth();
// const val = date.getFullYear();
// const val = date.getDay();
// console.log(today);
// console.log(val);

//destructuring

// const student = {
//   fn: "sam",
//   ln: "smith",
//   skills: ["singing", "dancing"],
//   age: 22,
// };
///copying ---- modifying any obj causes another one to get modifed too
// const s2 = student;
// console.log(s2 == student);

//cloning---- modifying any obj doesnt change another obj
// const s2 = { ...student };
// console.log(s2 == student);

//deleting --- student obj is cloned to s2 but without skills property
// const { skills, ...s2 } = student;
// console.log(s2 == student);

//combining objects -- to combine thw objects we need to create a new objects and assign the combined value of the other objects.
// const combined = { ...student, ...s2 };
// console.log(student, combined);
