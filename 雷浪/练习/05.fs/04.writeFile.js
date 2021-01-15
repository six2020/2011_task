const fs = require('fs');
const path = require('path');


// 异步写文件 fs.writeFile()

fs.writeFile(path.join(__dirname, "01.txt"), "呵呵呵", (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('写入成功');
})


// 同步写文件 fs.writeFileSync()

fs.writeFileSync(path.join(__dirname, "01.txt"), "阿西吧")