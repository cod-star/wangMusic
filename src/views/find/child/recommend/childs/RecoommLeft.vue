<template>
<div class="left-wrapper"></div>
  <div class="left-top">
    <div class="left-img">
      <img src="~assets/image/recomm/left/left.png" alt="">
      <a href="">
        <p>下载客户端</p>
      </a>
      <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
    </div>
    <div class="left-top-conter">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a href="">
      <p>用户登录</p>
      </a>
    </div>
  </div>
  <div class="left-footer">
   <left-item :leftconter="leftconter"></left-item>
   <!-- <left-item></left-item> -->
  </div>
  </div>
</template>
<script>
import LeftItem from 'components/content/recommLeft/LeftItem'

export default {
  name: 'RecoommLeft',
  components: {
    LeftItem
  },
  data() {
    return {
      leftconter: [
        {
          img: require("@/assets/image/recomm/left/1.jpg"),
          name: "张惠妹",
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
      ]
    }
  },
}
</script>
<style scoped>
.left-wrapper {
  position: relative;
}
  
</style>