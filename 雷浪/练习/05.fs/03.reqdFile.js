const fs = require('fs');
const path = require('path')

// 异步读文件   fs.readFile()

/* console.log(1);
fs.readFile(path.join(__dirname, '01.txt'), 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(2);
    console.log(data);
})
console.log(3); */




// 同步读文件   fs.readFileSync()

console.log(1);
let data = fs.readFileSync(path.join(__dirname, '01.txt'), 'utf8');
console.log(data);
console.log(2);