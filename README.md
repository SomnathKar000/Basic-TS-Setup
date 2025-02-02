# Basic-TS-Setup 🚀

A minimal TypeScript setup using **nodemon** and **ts-node** for seamless development.

## Features

- 🔄 **Live reloading** with `nodemon`
- 📌 **No manual compilation** using `ts-node`
- 📂 Watches `.ts` files inside the `src/` directory

## Installation & Usage

### 1️⃣ Install dependencies

```sh
npm install

2️⃣ Start development mode

npm run dev

3️⃣ Project Structure

📁 explore-ts
 ┣ 📁 src
 ┃ ┗ 📜 index.ts  # Entry point
 ┣ 📜 package.json
 ┣ 📜 nodemon.json
 ┗ 📜 README.md

Configuration

package.json

{
  "name": "explore-ts",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon"
  },
  "devDependencies": {
    "nodemon": "^3.1.9",
    "ts-node": "^10.9.2"
  }
}

nodemon.json

{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node ./src/index.ts"
}
```

In the nodemon.json file, these fields are configuring how Nodemon watches and restarts your TypeScript application. Here’s what each field means:

1. watch: [“src”]

   - This tells Nodemon to watch the "src" directory for any changes.
   - If any file inside "src" changes, Nodemon will restart the application.

2. "ext": "ts,js"

   - Specifies the file extensions that Nodemon should watch.
   - In this case, it only watches .ts (TypeScript) files.
   - If you also wanted to watch JavaScript files, you could use:

   ```sh
   "ext": "ts,js"
   ```

3. exec: “ts-node ./src/index.ts”
   - This is the command Nodemon executes when restarting.
   - It runs ts-node ./src/index.ts, which compiles and runs the TypeScript file index.ts using ts-node.

How It Works
- If any .ts file in src/ changes, Nodemon automatically restarts ts-node ./src/index.ts.

Notes

- Ensure you have Node.js installed.
- The entry file should be src/index.ts.
- Modify nodemon.json to watch additional files if needed.
