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

Notes
	•	Ensure you have Node.js installed.
	•	The entry file should be src/index.ts.
	•	Modify nodemon.json to watch additional files if needed.

Happy Coding! 🚀

Would you like any modifications or additional sections? 😊
```
