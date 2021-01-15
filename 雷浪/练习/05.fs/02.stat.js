const fs = require('fs');

// 查看文件状态

fs.stat('./01.txt', (err, stats) => {
    if(err) {
        console.log(err);
    } else {
        // console.log(stats);
        console.log(stats.isFile());
        console.log(stats.isDirectory());
    }
})




