<template>
    <div
    data-v-adf86b90
    class="van-hairline--bottom infzm-header van-nav-bar"
    slot="header"
  >
    <div class="van-nav-bar__left">
      <router-link to="/RouterLogin" data-v-adf86b90 class="infzm-header__btnLeft van-icon van-icon-user"></router-link>
      <i data-v-adf86b90 class="infzm-header__btnVip van-icon van-icon-vip-entry"></i>
    </div>
    <div class="van-ellipsis van-nav-bar__title">
      <i data-v-adf86b90 class="infzm-header__logo van-icon van-icon-logo-infzm"></i>
    </div>
    <router-link to="/recommendSearch" class="van-nav-bar__right">
      <i data-v-adf86b90 class="infzm-header__btnRight van-icon van-icon-menu2"></i>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.van-hairline--bottom{
  position:fixed;
  z-index: 5;
  width:100%;
}
</style>


