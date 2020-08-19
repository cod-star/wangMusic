<template>
  <div class="phone">
    <div class="icon">
    <div class="icon-tab"></div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Phone"
}
</script>
<style scoped>
.icon {
  position: relative;
  top: -30px;
  height: 6px;
  background: rgb(201, 42, 42);
}

.icon-tab {
  position: absolute;
  top: -8px;
  left: 747px;
  z-index: 999;
  width: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid rgb(201, 42, 42);
}
  
</style>