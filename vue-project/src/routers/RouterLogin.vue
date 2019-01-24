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
        <input type="text" ref="mima" placeholder="密码">
      </span>
      <span>
        <input type="checkbox" value> 记住密码
      </span>
      <button>登录</button>
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
      let mima = this.$refs.mima.value;
      if (user == "") {
        this.$alert("手机号码不能为空");
      } else if (mima == "") {
        this.$alert("密码不能为空");
      } else {
            this.$axios({
                method: "post",
                url: "http://localhost:3000/RouterLogin",
                data: this.$qs.stringify({
                    name: "user"
                    
                })
                }).then(res => {
                console.log(res);
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