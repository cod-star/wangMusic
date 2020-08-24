<template>
  <div class="profile-icon">
    <div class="icon">
      <div class="icon-tab"></div>
    </div>
    <div class="conter-profile">
      <div class="conter-all">
        <div class="img">
          <img src="~assets/image/profile/beij.jpg" alt />
        </div>
        <div class="texts">
          <p>登录网易云音乐</p>
          <p class="conter">查看并管理你收藏的私房音乐，方便随时随地收听</p>
          <img src="~assets/image/profile/logo.jpg" alt />
          <p class="login">立即登录</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
};
</script>
<style scoped>
.profile-icon {
  background: #f1f1f1;
}

.icon {
  position: relative;
  height: 6px;
  background: rgb(201, 42, 42);
}

.icon-tab {
  position: absolute;
  top: -8px;
  left: 337px;
  z-index: 999;
  width: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid rgb(201, 42, 42);
}

.conter-profile {
  width: 1000px;
  height: 700px;
  margin: 0 auto;
  background: white;
  border: 1px solid #cccccc;
  border-bottom: none;
}

.conter-all {
  display: flex;
  position: relative;
  top: 100px;
  justify-content: space-evenly;
}

.img img {
  width: 380px;
  height: 280px;
}

.texts img {
  position: relative;
  top: -30px;
  width: 180px;
}

.texts p:first-child {
  font-size: 35px;
}

.conter {
  position: relative;
  top: -20px;
  width: 230px;
  font-size: 17px;
}

.login {
  width: 180px;
  height: 45px;
  line-height: 45px;
  background: rgb(15, 124, 214);
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  color: white;
  cursor: pointer;
}

.login:hover {
  background: rgb(29, 145, 223);
}
</style>