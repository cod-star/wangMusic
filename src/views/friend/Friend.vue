<template>
  <div class="friend">
     <div class="icon">
    <div class="icon-tab"></div>
    </div>
    <div class="conter-friends">
      <div class="conter">
      <div class="img">
        <img src="~assets/image/friend/1.jpg" alt="">
      </div>
      <div class="text-friend">
        <p>关注名星 发现精彩</p>
        <p>你可以关注明星和好友品味他们的私房歌单
           通过他们的动态发现更多精彩音乐</p>
        <div class="btn">
          <button>立即登录</button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Friend"
}
</script>
<style scoped>
.icon {
  position: relative;
  height: 6px;
  background: rgb(201, 42, 42);
}

.icon-tab {
  position: absolute;
  top: -8px;
  left: 447px;
  z-index: 999;
  width: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid rgb(201, 42, 42);
}

.friend {
  background: #eeeeee;
}

.conter-friends {
  width: 1000px;
  height: 700px;
  margin: 0 auto;
  background: white;
  border: 1px solid #cccccc;
  border-bottom: none;
}

.conter-friends img {
  width: 500px;
}

.conter {
  display: flex;
  position: relative;
  top: 100px;
  justify-content: space-around;
}

.text-friend {
  width: 280px;
  position: relative;
  top: 50px;
}

.text-friend p:first-child {
  font-size: 30px;
  font-weight: 600;

}

.text-friend p:nth-child(2) {
  font-size: 14px;
  line-height: 25px;
  color: #808080;
}

.btn button {
  position: relative;
  top: 20px;
  width: 180px;
  height: 45px;
  line-height: 45px;
  background: rgb(15, 124, 214);
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  color: white;
  cursor: pointer;
  border: none;
}

.btn button:hover {
   background: rgb(29, 145, 223);
}
  
</style>