const Koa = require('koa');
const app = new Koa();
var cors = require('koa2-cors');
var router = require ('./router');
var koaStatic = require ('koa-static');
var tokenUtil = require ('./token-util.js');
/*const Router = require('koa-router')
const router = new Router ({
    prefix:'/api/v1'
});
router.get('/login',async ctx =>{
    ctx.body='success'
});*/
// 解决访问koa-router post接口404问题
app.use(async (ctx, next)=>{
    try{
      // 执行后代的代码
        ctx.body = "success"
        await next();
    }catch(e){
        // 如果后面的代码报错 返回500
        console.log(e);
        ctx.body = "500"
    }
})
app.use(cors());
app.use(router.routes());
app.use(koaStatic('./'));
app.use(tokenUtil.setKoaJwt());

app.listen(3001);
