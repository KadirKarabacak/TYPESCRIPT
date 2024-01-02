# TYPESCRIPT INTRODUCTION

## WHAT IS TYPESCRIPT ❔

- Typescript is build on top of the Javascript, it means everything Javascript and some more features on it.
- Browsers doesn't understand TS code, so we need to compile it to JS.
- On compile, our let or const variables turns to var keyword. Because TypeScript compiler using an older Javascript version ES5 as a default.
- We can change the version of Javascript to compile modern versions.

## HOW TO CONFIGURE TYPESCRIPT COMPILER 🧰

- First, use this command to create a new tsconfig.json file. 👉 **tsc --init**
- And into tsconfig.json we can spesify the target for newest ES versions which changes about your project.
- **rootDir** config targets our source file which includes TS files. We can name it **src**.
- **outDir** config also targets our compiled files which is JS file. We can name it **dist**.
- **removeComments** removing our comments after compiled.
- **noEmitOnError** when there is an error in our TS file, then stop compiling.
- After this configs we don't need to write tsc index.ts or anything. Just **tsc**.
- The **sourceMap** property shows how our Typscript code maps to each Javascript code. It creates **index.js.map** file.
- Debbugging: Add a **breakpoint** then go **Run and Debug**, create a **launch.json** file and select **Node.js**. In that file, between **program** and **outFiles** add a new task 👉 **"preLaunchTask": "tsc: build - tsconfig.json"**

## SETUP 🛠

- To download TypeScript 👉 **npm install -g typescript**
- To compile TypeScript 👉 **tsc index.ts**. It creates an index.js file.
