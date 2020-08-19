<template>
  <div class="friend">
     <div class="icon">
    <div class="icon-tab"></div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Friend"
}
</script>
<style scoped>
.icon {
  position: relative;
  height: 6px;
  background: rgb(201, 42, 42);
}

.icon-tab {
  position: absolute;
  top: -8px;
  left: 447px;
  z-index: 999;
  width: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid rgb(201, 42, 42);
}
  
</style>