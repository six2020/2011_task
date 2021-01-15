const path = require('path');

// 1.获取当前文件的目录
console.log(__dirname);
console.log(path.dirname(__filename));
// D:\VSCode_work\Node\node\2011_task\雷浪\练习\04.path


// 2.获取当前文件的文件名
console.log(path.basename(__filename));
console.log(path.basename(path.join(__dirname, "练习.js")));
// 练习.js


// 3.获取当前文件的拓展名
console.log(path.extname(__filename));
console.log(path.extname(path.join(__dirname, "练习.js")));
// .js