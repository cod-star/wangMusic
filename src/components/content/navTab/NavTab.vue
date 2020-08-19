<template>
<div class="nav-tab"
 @click="itemClick">
  <div v-if="isActive" :style="activeStyle">
    <slot name="nav-tab"></slot>
  </div>
  <div v-else  
  @mouseover="hover=true" @mouseleave="hover=false"
  :class="{active:hover}"><slot name="dis"></slot></div>
</div>
</template>
<script>
export default {
  name:"NavTab",
  props: {
    path: String
  },
   data() {
    return {
      activeColor: 'white',
      activeBac: "black",
      hover:false
    }
  },
  computed: {
     isActive(){
      return this.$route.path.indexOf(this.path) !==-1

    },
    activeStyle(){
     // 是否激活，动态绑定颜色
      return this.isActive ? {color:this.activeColor,backgroundColor:this.activeBac} : {}
      
    },
  },
  methods: {
    itemClick(){
      // console.log("hhh");
      this.$router.push(this.path)
    },
  },
}
</script>
<style scoped>
.active{
  background: black;
  color: white;
}
 
</style>