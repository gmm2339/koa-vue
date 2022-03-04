
const koaJwt = require('koa-jwt');
const jsonwebtoken = require('jsonwebtoken');
const SECRET= 'jwtSecret';
const tokenExpiresTime = 1000 * 60 * 60 * 24 * 7
module.exports.setToken= function (name,pwd)
{
    if(name === 'admin' && pwd === 'admin@123'){
         let payload = {
            exp:Date.now() + tokenExpiresTime,
            name:name
        }
        return  jsonwebtoken.sign(payload, SECRET);
    }
    return null;
}
module.exports.getToken= function(name,token)
{
    if(name &&token){
         return jsonwebtoken.decode(token.split(' ')[1], SECRET);
    }
    return null;
}
module.exports.setKoaJwt = function()
{
    return koaJwt({secret:SECRET}).unless({
    path:[/^\/login/]
});
}




