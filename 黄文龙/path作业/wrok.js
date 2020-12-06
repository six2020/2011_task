const path = require('path');
/**
 * 
 * 完成以下练习，用你所能想到的方法；
 * 
 * 写完之后提交到 github （作业仓库）
 * 
*/


// 获取当前文件所在的目录
var catalog = __dirname;
var catalog1 = path.dirname(__filename)
var catalog2 = path.resolve(__filename,'..')
var catalog3 = path.normalize(__filename+'/..')
var catalog8 = path.parse(__filename).dir

console.log(catalog)
console.log(catalog1)
console.log(catalog2)
console.log(catalog3)
console.log(catalog8)



// 获取当前文件的文件名

var name = path.parse(__filename).base
var name1 = path.basename(__filename)
var name2 =path.parse(__filename).name + path.extname( __filename)
var name3 = path.join(path.parse(__filename).name + path.parse(__filename).ext)

if(path.sep === "\\"){
    var name4 = path.basename(__filename);
    console.log(name4)
}

console.log(name)
console.log(name1)
console.log(name2)
console.log(name3)

// 获取当前文件的扩展名


var type = path.parse(__filename).ext
var type1 = path.extname(__filename)
console.log(type)
console.log(type1)
console.log('.'+__filename.split('.')[__filename.split('.').length-1])

