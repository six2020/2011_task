const path = require('path');
const fs = require('fs');

// 获取当前文件所在的目录
console.log(__dirname)
console.log(path.dirname(__filename))

// 获取当前文件的文件名
console.log(path.basename(__filename))  // task.js

// 获取当前文件的扩展名
console.log(path.extname(__filename))  // .js