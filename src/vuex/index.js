import { createStore } from 'vuex'
import createPersistedState  from 'vuex-persistedstate'
import login from './login.js'

// 创建一个新的 store 实例
const Vuex = createStore({
  modules: {
   login:login
  }
})
export  default Vuex
