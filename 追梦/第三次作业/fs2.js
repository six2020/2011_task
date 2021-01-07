const fs = require('f3');
const { fstat } = require('fs/promises');
const path = require('path');

fs.writeFile(path.join(__dirname,'02.txt'),'呵呵呵',(err) => {
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
})