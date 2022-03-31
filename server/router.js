const Router = require('koa-router')
var koaBody = require ('koa-body');  // post    body内容识别
var tokenUtil = require ('./token-util.js');
const {query} = require("./db/query"); //引入异步查询方法
const {SHOW_ALL_DB,INSERT_DATAS } = require("./db/sql-function"); //部分引入sql库

let router = new Router ({
    prefix:'/api/v1'
});
router.post('/login', koaBody(),  async ctx =>{
   var msg =  ctx.request.body;
   if(msg){
       let selectUser = query(`select * from user where name="${msg.user}" and password = "${msg.password}"`);
       if(selectUser){
           let cd =tokenUtil.setToken(msg.user ,msg.password);
           if(cd) {
                ctx.body = {msg:'success',token:cd};
           }else {
               ctx.status = 401;
                ctx.body =  {msg:'fail'};
           }
       }
   }

});
router.post('/createUser', koaBody(),  async ctx =>{
   var msg =  ctx.request.body;
   if(msg){
       if(msg.user && msg.password ){
            let query_res =query(INSERT_DATAS('user', `"${msg.user}","${msg.password}"`));
            // let query_res = await query(SHOW_ALL_DB);//异步方法调用
             ctx.body = query_res;
       }else {
           ctx.body='message drop! '
       }
   }

});
router.post('/logout', koaBody(),  async ctx =>{
   var msg =  ctx.request.body;
   // var token = ctx.headers.authorization.replace('Bearer ','');
   var token = ctx.headers.authorization;
   if(msg){
       if(msg.user === 'admin'){
           let cd =tokenUtil.getToken(msg.user ,token);
           if(cd.name === msg.user) {
                ctx.body = {msg:'logout success',};
           }else {
               ctx.status = 401;
                ctx.body =  {msg:'fail'};
           }
       }
   }

});
module.exports = router;
