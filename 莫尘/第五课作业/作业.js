/**
 * 
 * 完成以下练习，用你所能想到的方法；
 * 
 * 写完之后提交到 github （作业仓库）
 * 
*/

const fileInfo=require('path');

// 获取当前文件所在的目录
console.log(fileInfo.dirname( __filename ));


// 获取当前文件的文件名
console.log(fileInfo.basename( __filename ));


// 获取当前文件的扩展名
console.log(fileInfo.extname( __filename ));