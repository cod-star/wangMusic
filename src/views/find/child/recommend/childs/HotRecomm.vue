<template>
  <div class="hot-recomms">
    <div v-for="(item,index) in hotRecomm" class="hots">
      <a href="">
      <img :src="item.img" alt="">
      <div class="bottom">
        <span>hhh</span>
        <span>{{item.number}}</span>
      </div>
      <div class="hotTitle">
         <span>{{item.hotTitle}}</span>
      </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:"HotRecomm",
  props: {
    hotRecomm: {
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
}

.hot-recomms {
  display: flex;
  width: 730px;
  height: 460px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.hot-recomms img {
  width: 150px;
  height: 150px;
}  

.hots {
  position: relative;
  width: 150px;
  height: 190px;
}

.hotTitle {
  font-size: 14px;
}

.hotTitle span{
  color: black;
}

.hotTitle:hover {
  text-decoration: underline;
}

.bottom {
  position: absolute;
  bottom: 41px;
  width: 100%;
  height: 28px;
  background: rgba(0,0,0,0.5);
  color: rgb(209, 209, 209);
  font-size: 12px;
}

.bottom span {
  position: relative;
  top: 7px;
  margin-left: 6px;
}
</style>