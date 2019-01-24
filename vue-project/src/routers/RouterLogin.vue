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
      <button @click="add">登录</button>
      <router-link to="/RouterEnter" class="zhuce">免费注册？</router-link>
    </div>
  </div>
</template>

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