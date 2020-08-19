<template>
<div class="nav-tab">
  <nav-tab path="/index">
    <div slot="nav-tab" class="tab" >发现音乐</div>
    <div slot="dis" class="tab" >发现音乐</div>
  </nav-tab>
  <nav-tab path="/profile">
    <div slot="nav-tab" class="tab">我的音乐</div>
    <div slot="dis" class="tab">我的音乐</div>
  </nav-tab>
   <nav-tab path="/friend">
    <div slot="nav-tab" class="tab">朋友</div>
    <div slot="dis" class="tab">朋友</div>
  </nav-tab>
   <nav-tab path="/shopping">
    <div slot="nav-tab" class="tab">商城</div>
    <div slot="dis" class="tab">商城</div>
  </nav-tab>
   <nav-tab path="/music">
    <div slot="nav-tab" class="tab">音乐人</div>
    <div slot="dis" class="tab">音乐人</div>
  </nav-tab>
  <nav-tab path="/phone">
    <div slot="nav-tab" class="tab">下客户端</div>
    <div slot="dis" class="tab">下客户端</div>
  </nav-tab>
  </div>
</template>

<script>
import NavTab from '../navTab/NavTab'

export default {
  name:"MainTab",
  components: {
    NavTab
  },
 
  methods: {
    
  },
}
</script>
<style scoped>
.tab {
  width: 60px;
  height: 70px;
  padding: 0 20px;
  text-align: center;
}
  
</style>