import {request} from './index';
export function login(user,pwd){
    return request( {
        url:'/login',
        method: 'post',
        data:{user: user,password: pwd}
    })
}
export function logout(user,pwd){
    return request( {
        url:'/logout',
        method: 'post',
        data:{user: user,password: pwd}
    })
}
export function createUser(user,pwd){
    return request( {
        url:'/createUser',
        method: 'post',
        data:{user: user,password: pwd}
    })
}
