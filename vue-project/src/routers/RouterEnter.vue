<template>
   <div id="box">
       <div id="min-box">
           <span>
               账号<br />
               <input type="text">
            </span>
           <span>
               密码<br />
               <input type="text">
           </span>
           <span>
              <input type="checkbox" value="" /> 记住密码 
           </span>
           <button>注册</button>
           <router-link to="/RouterLogin" class="zhuce">如有账号请登录</router-link>
       </div>
   </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    #box{
        height: 100%;
        opacity:0.5;
    }
    #min-box{
        width: 250px;
        height: 250px;
        background: #ccc;
        margin: 100px auto;
    }
    span{
        display: block;
        height: 50px;
        padding: 20px;
        font-size: 18px;
        margin: 10px;
    }
    #min-box span:nth-child(3){
        font-size: 14px;
    }
    button{
        margin-left: 40px; 
        font-size: 18px;
    }
    .zhuce{
        font-size: 16px;
        color: red;
        margin-left: 14px;
    }
</style>

 
