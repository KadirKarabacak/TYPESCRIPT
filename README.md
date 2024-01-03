# **TYPESCRIPT INTRODUCTION**

## **WHAT IS TYPESCRIPT ❔**

- Typescript is build on top of the Javascript, it means everything Javascript and some more features on it.
- Browsers doesn't understand TS code, so we need to compile it to JS.
- On compile, our let or const variables turns to var keyword. Because TypeScript compiler using an older Javascript version ES5 as a default.
- We can change the version of Javascript to compile modern versions.

## **HOW TO CONFIGURE TYPESCRIPT COMPILER 🧰**

- First, use this command to create a new tsconfig.json file. 👉 **tsc --init**
- And into tsconfig.json we can spesify the **target for modern ES versions** which changes about your project.
- **rootDir** config targets our source file which includes TS files. We can name it **src**. Simply input.
- **outDir** config also targets our compiled files which is JS file. We can name it **dist**. Simply output.
- **removeComments** removing our comments after compiled.
- **noEmitOnError** when there is an error in our TS file, then stop compiling.
- After this configs we don't need to write tsc index.ts or anything. Just **tsc**.
- The **sourceMap** property shows how our Typscript code maps to each Javascript code. It creates **index.js.map** file.
- **Debbugging:** Add a **breakpoint** then go **Run and Debug**, create a **launch.json** file and select **Node.js**. In that file, between **program** and **outFiles** add a new task 👉 **"preLaunchTask": "tsc: build - tsconfig.json"**
- **"noUnusedParameters": true** warns us about unused parameters.
- **"noImplicitReturns": true** warn us about implicit return values.
- **"noUnusedLocals": true** warn us about unused local variables.

## **SETUP 🛠**

- To download TypeScript 👉 **npm install -g typescript**
## **BUILT-IN-TYPES**

- **any, unkown, never, enum, tuple**
- If we don't set any value to a variable, typescript sees its **type as any**. This gonna break TypeScript analogy. Always try to avoid using **any** type of variable.
- Also if we don't spesify any type, **Typescript can understand** which type is it.

### **ARRAYS IN TYPESCRIPT [ ]**

- Not allowed to pass different types of values 👉 **let array = [ 1, 2, "3" ]** ❌
- An array which could contain numbers 👉 **let numbers: number[ ] = [ ];**
- An array which could contain strings 👉 **let numbers: string[ ] = [ ];**

### **TUPLES IN TYPESCRIPT**

- Tuples has fixed length and useful to store **"key, value"** couples. Try to avoid passing more than two value.
- 👉 **let user: [ number, string ] = [ 5, "Kadir" ];**

### **ENUMS IN TYPESCRIPT**

- When we define enums with "const", compiler create more optimized code.
- If we want to set the default value any of them, all enum properties need a default value. Or only set the last one.
- 👉 const enum Size { Small = 1, Medium = 2, Large = 3 }

### **FUNCTIONS IN TYPESCRIPT**

- When creating functions, we must specify **what this function returns** after the parameter. Then if we try to return something different than spesified type, it warns.
- And also if there is another condition which returns undefined, we must handle it, otherwise it warns us again.
- For some reason if we want to use only one param, we must set a default value to other param into function.

### **TYPE ALIAS**

- It makes our object **reusable, flexible and complies with the dry** principle.
- 👉 **type Employee = { readonly id: number; name: string; retire: (date: Date) => void; };**

### **OBJECTS IN TYPESCRIPT**

- To make objects immutable make properties **read-only**.
- 👉 **let employee: Employee = { id: 1, name: "", retire: (date: Date) => console.log(date), };**

### **UNION TYPES**

- When the parameter could be number or string, to work with both we need "Narrowing".
- Forexample we take a weight param like 👉 **weight: number | string**. We have to check **typeof weight** to return something. And for the string one **parseInt(weight)**.

### **INTERSECTION TYPES** [ Combining Two or more different types ]

- 👉 **type Draggable = { drag: () => void; };** &nbsp; //// &nbsp; **type Resizable = { resize: () => void; };**
- 👉 **type UIWidget = Draggable & Resizable;**
- 👉 **let textBox: UIWidget = { drag: () => {}, resize: () => {}, };**
- Like this example we can **combine different types** into same place.
