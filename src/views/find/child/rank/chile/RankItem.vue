<template>
  <div class="ranking">
    <div class="left-rank">
      <div class="charactery">
        <div class="nav">云音乐特色榜</div>
           <div v-for="(chart,index) in Ranks.charts" class="item-left"
           :class="{active:index === currentIndex}"
           @click="charClick(index)">
             <div class="item">
               <img :src="chart.img" alt="">
               <span>{{chart.title}}</span>
               <p>{{chart.conter}}</p>
             </div>
           </div>
      </div>
      <div class="global">
        <div class="nav">全球媒体榜</div>
        <div v-for="(globals,index) in Ranks.global" class="item-left"
         @click="globalClick(index)">
             <div class="item">
               <img :src="globals.img" alt="">
               <span>{{globals.title}}</span>
               <p>{{globals.conter}}</p>
             </div>
           </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RankItem',
  props: {
    Ranks: {
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    charClick(index){
      this.currentIndex = index;
      this.$emit("tabClick",index)
     
    },
    globalClick(index){
      this.currentIndex = index;
       this.$emit("gbClick",index)
    }
  },
}
</script>
<style scoped>
a {
  text-decoration: none;
}

.ranking {
  position: relative;
  left: 100px;
  width: 230px;
  height: 2000px;
  background: #f5f5f5;
  border: 1px solid #dddddd;
  border-bottom: none;
}

.ranking img {
  width: 40px;
}

.item {
  position: relative;
  top: 10px;
  left: 20px;
}

.left-rank .nav {
  position: relative;
  top: 5px;
  left: 15px;
  margin-top: 25px;
  font-size: 14px;
}

.left-rank span {
  position: relative;
  top: -30px;
  left: 10px;
  font-size: 12px;
  color: black;
}

.left-rank p {
  position: relative;
  top: -35px;
  left: 50px;
  font-size: 12px;
  color: #a09e9e;
}

.item-left {
  position: relative;
  height: 60px;
  cursor: pointer;
}

.ranking:first-child .item-left {
  position: relative;
  top: 10px;
}

.item-left:hover {
  background: rgb(236, 236, 236);
}

.active {
  background: rgb(223, 223, 223);
}
  
</style>