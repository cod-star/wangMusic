<template>
<div class="left-wrapper">
  <div class="left-top">
    <div class="left-img">
      <img src="~assets/image/recomm/left/left.png" alt="">
      <a href="">
        <p class="btn-logo">下载客户端</p>
      </a>
      <p class="text">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
    </div>
    <div class="left-top-conter">
      <p class="top-footer">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a href="">
      <p class="top-footer-login">用户登录</p>
      </a>
    </div>
  </div>
  <div class="left-footer">
   <left-item :leftconter="leftconter"></left-item>
   <left-footer :leftfooters="leftfooters"></left-footer>
  </div>
  </div>
</template>
<script>
import LeftItem from 'components/content/recommLeft/LeftItem'
import LeftFooter from 'components/content/recommLeft/LeftFooter'

export default {
  name: 'RecoommLeft',
  components: {
    LeftItem,
    LeftFooter
  },
  data() {
    return {
      leftconter: [
        {
          img: require("@/assets/image/recomm/left/1.jpg"),
          name: "张惠妹aMEI",
          conter: "台湾歌手张惠妹"
        },
        {
          img: require("@/assets/image/recomm/left/2.jpg"),
          name: "Fine乐团",
          conter: "独立音乐人"
        },
        {
          img: require("@/assets/image/recomm/left/3.jpg"),
          name: "万晓利",
          conter: "民谣歌手、中国现代"
        },
        {
          img: require("@/assets/image/recomm/left/5.jpg"),
          name: "音乐人赵雷",
          conter: "民谣歌手"
        },
        {
          img: require("@/assets/image/recomm/left/4.jpg"),
          name: "王三博",
          conter: "音乐人"
        },
      ],
      leftfooters: [
         {
          img: require("@/assets/image/recomm/left/2.1.jpg"),
          name: "陈立",
          conter: "心理学家、美食家陈立教授"
        },
         {
          img: require("@/assets/image/recomm/left/2.2.jpg"),
          name: "DJ艳秋",
          conter: "著名音乐节目主持人"
        },
         {
          img: require("@/assets/image/recomm/left/2.3.jpg"),
          name: "国家大剧院古典音乐频道",
          conter: "国家大剧院古典音乐频道官方"
        },
         {
          img: require("@/assets/image/recomm/left/2.4.jpg"),
          name: "谢谢收听",
          conter: "南京电台主持人王馨"
        },
         {
          img: require("@/assets/image/recomm/left/2.5.jpg"),
          name: "DJ晓苏",
          conter: "独立DJ，CRI环球广播特邀DJ"
        },
      ]
    }
  },
}
</script>
<style scoped>
.left-wrapper {
  position: relative;
  z-index: 9999;
}

.left-top {
  width: 250px;
  box-shadow: 0 2px 4px -2px rgba(0,0,0,0.7);
}

.left-img {
  height: 283px;
  background: rgba(0,0,0,0.7);
}

.left-img img {
  position: relative;
  left: 30px ;
  height: 180px;
}

.text {
  position: relative;
  top: -20px;
  text-align: center;
  font-size: 12px;
  color: rgba(207, 206, 206, 0.6);
}

.btn-logo {
  position: relative;
  top: -40px;
  left: 14px;
  width: 220px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: white;
  background: rgb(56, 101, 224);
  border-radius: 5px;
}

.btn-logo:hover {
  background: rgb(18, 69, 209);
}

a {
  text-decoration: none;
}

.left-top-conter {
  background: #e2e2e2;
  border: 1px solid #cccccc;
  border-left: none;
}

.top-footer {
  line-height: 25px;
  font-size: 12px;
  padding: 0 20px;
  color: #5a5a5a;
  word-spacing: 5px;
}

.top-footer-login {
  width: 110px;
  height: 30px;
  position: relative;
  left: 60px;
  line-height: 30px;
  border-radius: 3px;
  text-align: center;
  background: rgb(189, 4, 4);
  color: white;
}

.top-footer-login:hover {
  background:  rgb(209, 3, 3);
}

.left-footer {
  height: 1393px;
  background: white;
  border: 1px solid #cccccc;
  border-left: none;
  border-bottom: none;
}
  
</style>