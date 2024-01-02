console.log("Hello TypeScript");

//! First the type, then the value.
let age: number = 20;

if (age < 50) age += 10;
console.log(age);

//! If we try to set it a different type of value it warns us.
// age = "a"
