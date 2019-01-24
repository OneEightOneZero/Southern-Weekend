<template>
  <div id="box">
    <div id="min-box">
      <span>
        <i>账号</i>
        <br>
        <input type="text" ref="user" placeholder="手机号">
      </span>
      <span>
        <i>密码</i>
        <br>
        <input type="text" ref="psw" placeholder="密码">
      </span>
      <span>
        <input type="checkbox" value> 记住密码
      </span>
      <button  @click="add">登录</button>
      <router-link to="/RouterEnter" class="zhuce">免费注册？</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    add() {
      let user = this.$refs.user.value;
      let psw = this.$refs.psw.value;
      if (user == "") {
        this.$alert("手机号码不能为空");
      } else if (psw == "") {
        this.$alert("密码不能为空");
      } else {
        this.$axios({
          method: "post",
          url: "http://localhost:3000/setting/RouterLogin",
          data: { name: user, password: psw },
          transformRequest: function(obj) {
            var str = [];
            for (var p in obj) {
              str.push(
                encodeURIComponent(p) + "=" + encodeURIComponent(obj[p])
              );
            }
            return str.join("&");
          }
        }).then(data => {
          let ResName = data.data.name;
          let ResPsw = data.data.password;
          if (ResName == user && ResPsw == psw) {
            this.$router.push({ name: "recommend" });
          } else {
            this.$alert("用户名或密码错误");
          }
        });
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