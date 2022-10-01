// alert("hi");

///OOP
/*  
object, property, and method
every object must have property and function(method), in JS there is a big object,
and everything is children of the object, the child inheritates the property(prototype-- properties of the main object)

----------------------------------


*/
/// object => property , and method
// const obj = {};

// console.log(obj);

/*

//class and constructor
class person {
  constructor(firstName, sk) {
    this.firstName = firstName;
    this.sk = sk;
  }

  bio() {
    return `Your name is ${this.firstName}`;
  }
  skills() {
    return `Your skills are as follow: ${this.sk}`;
  }
}

const premBio = new person("Prem", "advanced html , JS, React");
console.log(premBio.bio(), premBio.skills());

const akashBio = new person("Akash", "html, css");
akashBio.age = 25;
console.log(akashBio.bio(), akashBio.skills());

console.log(akashBio.sk);
console.log(akashBio.age);
*/

// abstraction and encapsulation
/*
class person {
  constructor(firstName, sk) {
    this.firstName = firstName;
    this.sk = sk;
  }

  #bio() {
    return `Your name is ${this.firstName}`;
  }
  skills() {
    return `${this.#bio()}. Your skills are as follow: ${this.sk}`;
  }
}

const premBio = new person("Prem", "advanced html , JS, React");
console.log(premBio.skills());

const akashBio = new person("Akash", "html, css");
akashBio.age = 25;
console.log(akashBio.skills()); */

// inheritance and polymorphism
/*
class ageVerification {
  constructor(age) {
    this.age = age;
  }

  verify() {
    return `${this.age} is now verified`;
  }
}

class pet extends ageVerification {
  constructor(name, owner, dob) {
    super(dob);
    this.name = name;
    this.owner = owner;
    this.dib = dob;
  }
}

const cat = new pet("kitty", "Akash", 2022);
console.log(cat.owner);
*/

/// -- functional programming
// side effects and pure function
/*const add = (a, b) => {
  const result = a + b; /// side effect it has to create an extra memory for the result
  return result;
};
console.log(add(4, 5));
*/

//high order function -- it is a function that takes another function argument or returns a function or both;
/* const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multi = (a, b) => a + b;

const calculator = (a, b, func) => {
  return func(a, b);
};

const result = calculator(3, 4, add);
console.log(result);
*/
/*
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multi = (a, b) => a * b;

const obj = {
  a: add,
  s: sub,
  m: multi,
};

const calculator = (x) => obj[x];

const ans = calculator("m");
console.log(ans(3, 4));

*/

// const calculator = (x) => (a,b) => a + b ;

//recursion - it is the function that calls itself

/*
let i = 0;
const callMe = () => {
  console.log("calling " + i);
  i++;
  if (i === 10) {
    return;
  }
  callMe();
};
callMe();

*/
// debugger;
const arg = [23, 4, 5, 35, 456, 2, 4, 5, 4];
let add = 0;
const sum = (arg) => {
  //   let add = 0;
  //   for (let i = 0; i < arg.length; i++) {
  //     add += arg[i];
  //   }
  add += arg.pop();

  if (!arg.length) {
    return add;
  }

  return sum(arg);
};

const total = sum(arg);
console.log(total);
