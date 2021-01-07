/**
 * 
 * 完成以下练习，用你所能想到的方法；
 * 
 * 写完之后提交到 github （作业仓库）
 * 
*/

const path = require('path');

// 获取当前文件所在的目录
console.log('__dirname:', __dirname);


// 获取当前文件的文件名
console.log("basename:", path.basename(__dirname, __filename));


// 获取当前文件的扩展名
console.log("extname:", path.extname(__filename));