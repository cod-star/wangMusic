<template>
  <div class="nav-tab"
 @click="findClick">
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
  name: "FindNavItem",
   props: {
    path: String
  },
   data() {
    return {
      Radius: "15px",
      activeBac: "rgba(0,0,0,0.3)",
      hover:false
    }
  },
  computed: {
     isActive(){
      return this.$route.path.indexOf(this.path) !==-1

    },
    activeStyle(){
     // 是否激活，动态绑定颜色
      return this.isActive ? { borderRadius:this.Radius,backgroundColor:this.activeBac} : {}
      
    },
  },
  methods: {
   findClick(){
      // console.log("hhh");
      this.$router.push(this.path)
    },
  },
}
</script>
<style scoped>
.active{
  background: rgba(0,0,0,0.3);
  color: white;
  border-radius: 15px;
}
 
</style>
