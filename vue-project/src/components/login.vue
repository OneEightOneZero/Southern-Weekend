<template>
   <div id="box">
       <div id="min-box">
           <span>
               <i>账号</i><br />
               <input type="text">
            </span>
           <span>
               <i>密码</i><br />
               <input type="text">
           </span>
           <span>
              <input type="checkbox" value="" /> 记住密码 
           </span>
           <button>登录</button>
           <router-link to="/RouterEnter" class="zhuce">免费注册？</router-link>
       </div>
   </div>
</template>
<style scoped>
    #box{
        height: 568px;
        background: #7e7777;
        opacity:0.5;
    }
    #min-box{
        width: 200px;
        height: 200px;
        background: #ccc;
        position: fixed;
        top: 100px;
        left: 57px;
    }
    span{
        display: block;
        height: 50px;
        padding-left: 20px;
    }
    button{
        margin-left: 40px; 
    }
    .zhuce{
        font-size: 12px;
        color: red;
        margin-left: 14px;
    }
</style>

 
