<template>
   <div class="left-item">
   <left>
     <div slot="leftNav" class="left-nav">热门主播
       <div class="fenge"></div>
     </div>
     <div slot="conter">
       <div v-for="(item,index) in leftfooters" class="conter">
         <a href="">
           <img :src="item.img" alt="">
           <span>{{item.name}}</span>
         </a>
          <p>{{item.conter}}</p>
       </div>
     </div>
   </left>
   </div>
</template>
<script>
import Left from 'components/common/leftrecomm/Left'

export default {
  name: 'LeftFooter',
  components: {
    Left
  },
  props: {
    leftfooters: {
      type: Array,
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
 top: 30px;
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
  top: 50px;
  left: 18px;
  width: 215px;
  height: 50px;
}

.conter img {
  width: 40px;
  height: 40px;
}

.conter span {
  position: relative;
  top: -30px;
  left: 10px;
  font-size: 12px;
  color: black;
}
.conter span:hover {
  text-decoration: underline;
}

.conter p {
  position: relative;
  top: -40px;
  left: 50px;
  width: 100px;
  font-size: 11px;
  color: rgb(112, 112, 112);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


  
</style>