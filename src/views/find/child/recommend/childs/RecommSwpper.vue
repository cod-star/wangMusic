<template>
  <div class="recomm-img">
    <swpper-item :dian="dian">
      <div v-for="(item,index) in dian" class="recomm-imgs" 
      v-show="index === currentIndex"
      @mouseenter="stop()"
     
      >
        <img :src="item.img" alt />
      </div>
    </swpper-item>
    <div
      class="dians"
      v-for="(item,index) in dian.length"
      @click="activeRed(index)"
      @mouseover="mouse(index)"
      @mouseleave="hoverMouse = -1"
      :class="{dianActive:index === currentIndex , mouseHover:index === hoverMouse}"
    ></div>
  </div>
</template>
<script>
import SwpperItem from "components/common/swapper/SwpperItem";

export default {
  name: "RecommSwpper",
  components: {
    SwpperItem,
  },
  props: {
    dian: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
      hoverMouse: -1,
      timer:''
    };
  },
  mounted() {
    //  this.startTimer();
  },
  methods: {
    // 开启定时器
    // startTimer() {
    //   this.timer = setInterval(() => {
    //     this.currentIndex++;
    //     if(this.currentIndex >= this.dian.length-1){
    //       this.currentIndex = 0;
    //     }
    //   }, 3000);
    // },
    stop(){
      clearInterval(this.timer);

    },
     activeRed(index) {
      this.currentIndex = index;
    },
    mouse(index) {
      this.hoverMouse = index;
    },
  },
};
</script>
<style scoped>

.recomm-imgs img {
  position: absolute;
  z-index: 9;
  width: 730px;
  height: 284px;
  cursor: pointer;
}

.dians {
  float: left;
  position: relative;
  bottom: -260px;
  left: 240px;
  margin: 0 10px;
  z-index: 9999;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}

.mouseHover {
  background: red;
}

.dianActive {
  background: red;
}

</style>