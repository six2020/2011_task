let SafeRequest = require('../models');

let safeRequest = new SafeRequest();


class IndexController {
    constructor(){}

    index(){
        // return (ctx, next) => {
        //     ctx.body = 'hello'
        //   }'
        let data = '图书馆首页321312' 
        return async function(ctx){
            await ctx.render('index', { 
                data
            });
        }
    }

    //主页,获取数据
    actionAdmin(){
        return async function(ctx){
            let msg = await safeRequest.getData();
            ctx.render('admin', { 
                data: msg
            });
        }
    }

    // 添加页
    actionAddPage(){
        return async function(ctx){
            ctx.render('addpage', { });
        }
    }
    // 添加
    actionAdd(){
        return async function(ctx){
            // console.log('ctx.request.body ====>>>>', ctx.request.body);
            // safeRequest.addData(ctx.request.body)


            try{
                let msg = await safeRequest.addData(ctx.request.body);
                
                ctx.redirect('/admin')
            }catch(err){
                console.log(err)
            }
        }
    }

    // 修改页
    actionEditPage(){
        return async function(ctx){
            // console.log('ctx.request.body ====>>>>', ctx.request.body);
            // safeRequest.addData(ctx.request.body)

            let id = ctx.request.query.editid;

            try{
                let msg = await safeRequest.getEditData(id);
                
                ctx.render('editpage', {
                    data: msg.data
                });
            }catch(err){
                console.log(err)
            }
        }
    }


    // 修改
    actionEdit(){
        return async function(ctx){
            // console.log('ctx.request.body ====>>>>', ctx.request.body);
            // safeRequest.addData(ctx.request.body)


            try{
                let msg = await safeRequest.editData(ctx.request.body);
                
                ctx.redirect('/admin')
            }catch(err){
                console.log(err)
            }
        }
    }

    // 删除
    actionDelete(){
        return async function(ctx){
            // console.log('ctx.request.body ====>>>>', ctx.request.body);
            // safeRequest.addData(ctx.request.body)

            let id = ctx.request.query.deleteid;
            try{
                let msg = await safeRequest.deleteData(id);
                
                ctx.redirect('/admin')
            }catch(err){
                console.log(err)
            }
        }
    }




}


module.exports = IndexController;