const path = require('path');
const finalPath = path.join(__dirname);
console.log(finalPath);  // D:\VSCode_work\Node\node\2011_task\雷浪\雷浪第四课作业


// 不包含当前文件名
// console.log(__dirname);  // D:\VSCode_work\Node\node\2011_task\雷浪\雷浪第四课作业

// 包含当前文件名
// console.log(__filename); // D:\VSCode_work\Node\node\2011_task\雷浪\雷浪第四课作业\1.获取文件目录.js