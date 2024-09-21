// console.log("hello Lot");
//-------
//demo2 global variable
// globalThis.foo = 5;
// console.log(global.foo);
//-----
//demo3 Common Js Module
// const name = "Lotlot";
// const age = 40;
// const color = "red";
// module.exports = { name, age, color };

//demo4 converting into ESM, in package.json put before "script" this   "type": "module",
// const color = "red";
// const age = 40;
// const name = "Lotlot";
// export { color, age, name };

//demo 5 working with files ex, convert thi into esm const fs = require("fs/promises")
//FS =file system
// fs.readFile(filename, [options]) - read file
// fs.writeFile(filename, data, [options]) - write file
// fs.appendFile(filename, data, [options])- append to file
// fs.rename(oldPath, newPath) - rename file
// fs.unlink(path, callback) - delete file

import fs from "fs/promises";
//how to read file
fs.readFile("readme.txt")
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err.message));

// //how to write file
// fs.writeFile("readme.txt", "Hello, I'm editing this txt via writeFile()");
//append file
fs.appendFile("readme.txt", "\nThis is appended text");
