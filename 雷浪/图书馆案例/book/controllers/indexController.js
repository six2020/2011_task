let SafeRequest = require('../models');
let safeRequest = new SafeRequest();

class IndexController {
    constructor() { }

    // 首页
    index() {
        let data = '图书馆首页！！！'
        return async function (ctx) {
            await ctx.render('index.html', {data});
        }
    }

    // admin页面，获取图书所有信息
    actionAdmin(){
        return async function (ctx) {
            let msg = await safeRequest.getData();
            ctx.render('admin.html', {data: msg});
        }
    }

    // 添加图书页
    actionAddPage(){
        return async function (ctx) {
            ctx.render('addpage.html', {});
        }
    }

    // 确认添加图书
    actionAdd(){
        return async function(ctx){
            // console.log(ctx.request.body);
            try{
                await safeRequest.addData(ctx.request.body);
                ctx.redirect('/admin')
            }catch(err){
                console.log(err);
            }
        }
    }

    // 修改图书页
    actionEditPage(){
        return async function (ctx) {
            // console.log(ctx.request.query);
            try{
                let msg = await safeRequest.getEditData(ctx.request.query.editid)
                // console.log(msg);
                ctx.render('editpage.html', {data: msg.data});
            }catch(err){
                console.log(err);
            }
        }
    }

    // 确认修改
    actionEdit(){
        return async function (ctx) {
            // console.log(ctx.request.body);
            try{
                await safeRequest.editData(ctx.request.body)
                ctx.redirect('/admin')
            }catch(err){
                console.log(err);
            }    
        }
    }

    // 删除图书
    actionDelete(){
        return async function (ctx) {
            // console.log(ctx.request.query.deleteid);
            try{
                await safeRequest.deleteData(ctx.request.query.deleteid);
                ctx.redirect('/admin')
            }catch(err){
                console.log(err);
            }    
        }
    }
}

module.exports = IndexController