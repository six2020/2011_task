const { dirname } = require('path');
const path = require('path');

// console.log(path.join(__filename)); // D:\VSCode_work\Node\node\2011_task\雷浪\练习\04.path\02.path.js
// console.log(path.join(__dirname)); // D:\VSCode_work\Node\node\2011_task\雷浪\练习\04.path

// 目录名
// console.log(path.dirname(__filename)); // D:\VSCode_work\Node\node\2011_task\雷浪\练习\04.path
// console.log(path.dirname(__dirname)); // D:\VSCode_work\Node\node\2011_task\雷浪\练习

// 文件名
// console.log(path.basename(__filename)); // 02.path.js
// console.log(path.basename(__dirname)); // 04.path

// 拓展名
console.log(path.extname(__filename)); // .js
console.log(path.extname(__dirname)); // .path