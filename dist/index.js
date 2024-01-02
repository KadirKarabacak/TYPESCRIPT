"use strict";
console.log("Hello TypeScript");
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
let books = 123456789;
let type = "Action";
let is_read = false;
let numbersCorrect = [1, 2, 3];
let numbers = [];
numbers[0] = 5;
numbers[1] = 1;
numbers.forEach((num) => num.toFixed());
let user = [5, "Kadir"];
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: "",
    retire: (date) => console.log(date),
};
employee.name = "Kadir";
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");
//# sourceMappingURL=index.js.map