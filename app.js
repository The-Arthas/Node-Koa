const Koa = require('koa');
const koaRouter = require('koa-router');

const app = new Koa();
const router = new koaRouter();
/*
*   1. 引入并new一个router对象
*   2. 编写路由函数
*   3. 挂在到app上
* */
router.get('/classic/latest', (ctx, next) => {
    ctx.body = {key: 'classic'}
});
app.use(router.routes());

/*
app.use((ctx, next) => {
    console.log(ctx.path);
    console.log(ctx.method);
    if (ctx.path === "/classic/latest" && ctx.method === "GET") {
        ctx.body = {key: 'classic'}
    }
});
*/

app.listen(3000);