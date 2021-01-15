let a = 1;

let fn = function(){
    console.log(666);
}

let obj = {
    name: '张三',
    fn: function(){
        console.log(888);
    }
}


exports.a = a;
exports.fn = fn;
exports.obj = obj;