const Koa = require('koa');
const serve = require('koa-static');

const config = require('./config')
const log4js = require("log4js");
const app = new Koa();


const koaBody = require('koa-body');
app.use(koaBody());



log4js.configure({
    appenders: { cheese: { type: "file", filename: "logs/cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
  });
   
  const logger = log4js.getLogger("cheese");



require('./middlewares').error(app, logger)

app.use(serve(config.staticDir))

require('./controllers')(app);

const render = require('koa-art-template');

render(app, {
    root: config.templateDir,
    extname: '.html',
})



app.listen(config.port, ()=>{
    console.log("running on port");
})