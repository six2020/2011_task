const path = require('path');


// 获取当前文件所在的目录
console.log('__dirname-->',__dirname);// E:\UserDLL\Desktop\study\nodejs\task\第五课作业\2011_task\廖菁蓉\第五课作业

// 获取当前文件的文件名
path.basename(__filename);
console.log('basename-->',path.basename(__dirname,__filename));// 第五课作业

// 获取当前文件的扩展名
path.extname(__filename);
console.log('extname-->',path.extname(__filename));// .js