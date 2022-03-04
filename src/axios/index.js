import axios from "axios";
import store from '../vuex/index'
const Axios = axios.create({
  baseURL:  globals.serverUrl,
  timeout: 1000,
   // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default
  // headers: {'Access-Control-Allow-Origin': '*'},
   // 'x-requested-with':  'XMLHttpRequest'    接口为ajax异步请求
  headers: {'Content-Type': 'application/json;charset=utf-8',
                    'x-requested-with':  'XMLHttpRequest'},
});
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  if(config?.url === '/login'){

  }else {
      if(store?.state?.login?.token){
config.headers.Authorization = 'Bearer '+store.state.login.token;
  }
  }
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default {
  install: (Vue) => {
   // 将 axios 挂载为 app 的全局自定义属性（ 如 $http ）
app.$http = Axios

  }
}
export const  request = Axios;
