<template>
    <div class="login">
        <el-container class="login-window">
            <el-form>
                <el-form-item label="用户名">
                    <el-input v-model="name">{{name}}</el-input>
                </el-form-item>
                <el-form-item label="密&nbsp&nbsp&nbsp码">
                    <el-input v-model="password">{{password}}</el-input>
                </el-form-item>
                <el-form-item>
                <el-button class="create-user" @click="createUser(name,password)">注册</el-button>
                <el-button class="login-submit" @click="login(name,password)">登录</el-button>
                <el-button class="logout-submit" type="danger" @click="logout(name)">退出</el-button>
                </el-form-item>
            </el-form>
        </el-container>
    </div>
</template>

<script>
     import {login,logout,createUser} from '../axios/api.js'
    export default {
        name: "login",
        data (){
             return {
                name: 'admin',
                password: 'admin@123'
              }
         },
        methods:{
            createUser(name,pwd){
                let _this = this;
                createUser(name,pwd).then(res =>{
                    console.log(res);
                     _this.$store.commit("login/setToken", res?.data)
                }).catch(e =>{
                    console.log(e);
                })
            },
            login(name,pwd){
                let _this = this;
                login(name,pwd).then(res =>{
                    console.log(res);
                     _this.$store.commit("login/setToken", res?.data)
                }).catch(e =>{
                    console.log(e);
                })
            },
            logout(name,pwd){
                let _this = this;
                logout(name,pwd).then(res =>{
                    console.log(res);
                     _this.$store.commit("login/setToken", res?.data || '');
                     this.$alert(res?.data?.msg);
                }).catch(e =>{
                    console.log(e);
                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .login {
        width:100%;
        height:100%;
        background: linear-gradient(to right bottom,#5ea,#28e) no-repeat;
        .login-window {
            position relative;
            width 500px;
            height: 400px;
            top: calc(50% - 250px);
            left: calc(50% - 200px);
        }
        .login-submit {

        }
    }
</style>
