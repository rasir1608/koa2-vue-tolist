// node.js 入口
const Koa = require('koa');
const MainRouter = require('./server/routers/main-routers');

const app = new Koa();

app.use(MainRouter.routes());

app.listen(8889);
console.log('koa-vue-todolist run in 8889');
