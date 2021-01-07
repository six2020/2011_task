const fs = require('fs');
const path = require('path');

// 获取当前文件所在的目录
console.log("文件所在的详细目录: " + __dirname );


console.log("文件所在的当前目录: " + path.basename(__dirname));
// 获取当前文件的文件名
// console.log("当前文件的文件名: " + __filename);
// console.log(path.dirname( __filename ));
console.log("当前文件的文件名(带后缀): "+path.basename(__filename));
console.log("当前文件的文件名(不带后缀): "+path.basename(__filename, ".js"));

// 获取当前文件的扩展名
console.log("文件的后缀名： "+path.extname(__filename));

