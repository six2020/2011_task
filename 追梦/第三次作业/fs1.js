const fs = require('fs');

const path = require('path');

//拼接读取  编码格式写到第二个参数
fs.readFile(path.join(__dirname, '01.txt'),'utf8',(err, data) => {
    // if(err){
    //     console.log('err --->',err);
    //     console.log("读取文件出错");
    //     return;
    // }

    if(err){return;}

    console.log('data --->',data);
    console.log('data --->',data.toString);
});

let data = fs.readFile(path)