const router = require('koa-simple-router')

const IndexController = require('./indexController');

const indexController = new IndexController();

 
module.exports = (app) => {
    app.use(router(_ => {
      _.get('/', indexController.index() );
      _.get('/index.html', indexController.index() );
      //主页,获取数据
      _.get('/admin', indexController.actionAdmin())
      //添加页
      _.get('/addpage', indexController.actionAddPage())
      // 添加
      _.post('/add', indexController.actionAdd())
      // 修改页
      _.get('/editpage', indexController.actionEditPage())
      // 修改
      _.post('/edit', indexController.actionEdit())
      
      // 删除
      _.get('/delete', indexController.actionDelete())

    }))
}

