<template>
  <div class="left-item">
   <left>
     <div slot="leftNav" class="left-nav">入住歌手
       <div class="fenge"></div>
     </div>
     <div slot="leftConter" class="left-right">查看全部></div>
     <div slot="conter">
       <div v-for="(item,index) in leftconter" class="conter">
         <a href="">
           <img :src="item.img" alt="">
           <span>{{item.name}}</span>
           <p>{{item.conter}}</p>
         </a>
       </div>
     </div>
   </left>
   <div class="but">
     <a href="">
         <p>申请成为网易音乐人</p>
     </a>
   </div>
  </div>
</template>
<script>
import Left from 'components/common/leftrecomm/Left'

export default {
  name: 'LeftItem',
  components: {
    Left
  },
  props: {
    leftconter: {
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
a{
  text-decoration: none;
}

.left-item {
 position: relative;
 border-top: none;
 border-bottom: none;
}

.left-nav {
  position: relative;
  top: 18px;
  left: 18px;
  font-size: 12px;
  font-weight: 600;
}

.fenge {
  position: relative;
  left: -50px;
  top: 10px;
  width: 190px;
  height: 1.3px;
}

.left-right {
  position: relative;
  left: 160px;
  font-size: 12px;
}

.conter {
  position: relative;
  top: 10px;
  left: 18px;
  width: 215px;
  height: 60px;
  margin: 20px 0;
  background: rgb(243, 243, 243);
  border: 1px solid #cccccc;
}

.conter:hover {
  background: #ececec;
}

.conter span {
  position: relative;
  top: -40px;
  left: 10px;
  font-size: 13px;
  font-weight: 600;
  color: black;
}

.conter p {
  position: relative;
  top: -50px;
  left: 74px;
  width: 100px;
  font-size: 12px;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.but {
   position: relative;
   top: 10px;
   left: 18px;
   width: 215px;
   height: 30px;
   line-height: 5px;
   text-align: center;
   background: #f0eeee;
   border-radius: 5px;
   border: 1px solid #cccccc;
}

.but p {
   color: black;
   font-size: 12px;
   font-weight: 600;
}

.but:hover {
  background: #f8f8f8;
}

  
</style>