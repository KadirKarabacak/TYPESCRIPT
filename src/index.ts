console.log("Hello TypeScript");

//! First the type, then the value.
let age: number = 20;

if (age < 50) age += 10;
console.log(age);

//! If we try to set it a different type of value it warns us.
// age = "a"

//! If we don't specify the type, Typescript will understand it
let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level; // any

// Same as last example.
let books = 123_456_789;
let type = "Action";
let is_read = false;

// TypeScript warns us about documents type of "Any". We should avoid doin this.
// Use default values
// function render(document = "Any") {
//   console.log(document);
// }

//////////////////////////////////////////////
//* ARRAYS IN TYPESCRIPT
//! Must spesify which type data includes this array, so TS can warn us
// let numbers: number[] = [1, 2, "3"]; // Not allowed

let numbersCorrect = [1, 2, 3];

// If we want to use an empty array then we need to specify type.
let numbers: number[] = [];
// So we can only add numbers
numbers[0] = 5;
numbers[1] = 1;

// numbers[2] = "1"; // Error.

//* Another beatiful thing about TS, it recommends number functions if we manipulating a number's array
numbers.forEach((num) => num.toFixed());

/////////////////////////////////////////////////
//* TUPLES IN TYPESCRIPT [Fixed length] Useful to store "key,value" couples. Don't use more than 2 length
// Forexample we have a user with a number and a name so ->
let user: [number, string] = [5, "Kadir"];

////////////////////////////////////////////////
//* ENUMS IN TYPESCRIPT

// Not useful anymore
const small = 1;
const medium = 2;
const large = 3;

//! Instead -> PascalCase, Typescript sets their value like an array 0-1-2, if we want another value set in as default
// If we define enum as a constant, compiler create more optimized code.
const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let mySize: Size = Size.Medium;
console.log(mySize); // 2

//! And if we spesify a string value for any, we must spesify for all or only the last one.

// enum SizeWrong {
//   Small = "s",
//   Medium,
//   Large,
// }

////////////////////////////////////////////////
//* FUNCTIONS IN TYPESCRIPT

// When creating functions, we must specify what this function returns. After the parameter ->
function calculateTax(income: number, taxYear = 2022): number {
  // Then if we try to return something different than number, it warns
  // return "0";
  if (taxYear < 2022) return income * 1.2;
  // If income > 50_000 then it returns undefined, we must config compiler to warn us.
  return income * 1.3;
}

//? For some reason we want to use only income ? We must set a default value to taxYear into function and also set ? to taxYear
calculateTax(10_000);

////////////////////////////////////////////////
//* TYPE ALIAS ( Takma ad yazma ) to make our object reusable, flexible and complies with the dry principle.
// Simply to create instances of Employee
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

//* OBJECTS IN TYPESCRIPT

const employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => console.log(date),
};
// Doesn't work in TypeScript if there is no name in object
employee.name = "Kadir";

//! To make it not allowed use readonly
// employee.id = 0;

////////////////////////////////////////////////
//* UNION TYPES [ Different types handled on same place ]

// Now in this example the parameter could be number or string. To work with both we need "Narrowing"
function kgToLbs(weight: number | string): number {
  // Narrowing (Daraltma)
  if (typeof weight === "number") return weight * 2.2;
  // We can't create another if instead of else, compiler warn us about that.
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10");

//* INTERSECTION TYPES [ Combining Two or more different types ]

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
