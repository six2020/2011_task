const fs = require('fs');

fs.stat('./01.txt',(err,stats) => {
    if(err) {

    }else{
        console.log("stats---->",stats)
    }
})