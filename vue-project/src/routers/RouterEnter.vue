<template>
  <div id="box">
    <div id="min-box">
      <span>账号
        <br>
        <input type="text" ref="user">
      </span>
      <span>密码
        <br>
        <input type="text" ref="psw">
      </span>
      <span>
        <input type="checkbox" value> 记住密码
      </span>
      <button @click="register">注册</button>
      <router-link to="/RouterLogin" class="zhuce">如有账号请登录</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    register() {
      let user = this.$refs.user.value;
      let psw = this.$refs.psw.value;
      if(user===''){
        this.$alert('手机号码不能为空')          
      }else if(psw===''){
          this.$alert('密码不能为空')  
      }else if(user.length !=11){
          this.$alert('手机号码为11位')  
          return
      }else {
         let myreg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
         if(!myreg.test(user)){
            this.$alert('手机号码格式不正确');
            return;
         }else{
            if (psw === "") {
                this.$alert("密码不能为空")
                return
                } else {
                    this.$axios({
                    method: "post",
                    url: "http://localhost:3000/setting/RouterEnter",
                    data: { 'name': user, 'password': psw },
                    })
                } 

         }
      }  
    }
  }
};
</script>

<style scoped>
#box {
  height: 100%;
  opacity: 0.5;
}
#min-box {
  width: 250px;
  height: 250px;
  background: #ccc;
  margin: 100px auto;
}
span {
  display: block;
  height: 50px;
  padding: 20px;
  font-size: 18px;
  margin: 10px;
}
#min-box span:nth-child(3) {
  font-size: 14px;
}
button {
  margin-left: 40px;
  font-size: 18px;
}
.zhuce {
  font-size: 16px;
  color: red;
  margin-left: 14px;
}
</style>

 
