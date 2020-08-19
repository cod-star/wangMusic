<template>
  <nav-item class="nav-items">
    <div slot="left" class="nav-left">网易云音乐</div>
      <div slot="content" class="nav-list" >
        <main-tab class="main-tab"></main-tab>
        <div class="nav-hot">Hot</div>
      </div>
    <div slot="right" class="nav-right">
      <div class="input">
        <input type="text" name="seacher" placeholder="音乐/视频/电台/用户">
      </div>
      <div class="create">创造者中心</div>
      <div class="login">登录</div>
    </div>
  </nav-item>
  
</template>

<script>

import NavItem from 'components/common/nav/NavItem'

import MainTab from '../navTab/MainTab'


export default {
  name:"MainNav",
  components: {
    NavItem,
    MainTab
  },
  
}
</script>
<style scoped>
.nav-items {
  background-color: #242424;
  color:rgba(255,255,255,0.7);
}

.nav-left {
  width: 190px;
  font-size: 20px;
  letter-spacing: 2px;
  color: white;
  margin-left: 36px;
  cursor: pointer;
}

.main-tab {
  display: flex;
  font-size: 15px;
  cursor: pointer;
}


.nav-hot {
  float: right;
  position: relative;
  top: -50px;
  left: 5px;
  font-size: 10px;
  width: 22px;
  height: 15px;
  line-height: 15px;
  background: rgb(197, 32, 32);
  border-radius: 6px;
}


.nav-right {
  position: relative;
  left: 60px;
  display: flex;
}

input {
  width: 160px;
  height: 30px;
  border: none;
  border-radius: 20px;
  /* 聚焦时，边框没有 */
  outline: none;
}

.create {
  width: 90px;
  height: 25px;
  line-height: 25px;
  position: relative;
  top: 22px;
  margin-left: 20px;
  font-size: 13px;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 30px;
  cursor: pointer;
}

.create:hover {
   border: 1px solid rgba(255,255,255,1);
}

.login {
  height: 30px;
  margin-left: 28px;
  font-size: 12px;
  cursor: pointer;
}

.login:hover {
  color: rgba(255,255,255,0.4);
  text-decoration: underline;
}


  
</style>