<template>
<div class="main-nav">
   <div class="left"><slot name="left"></slot></div>
   <div class="content"><slot name="content"></slot></div>
   <div class="right"><slot name="right"></slot></div>
</div>
</template>
<script>
export default {
  name:"NavItem"
}
</script>
<style  scoped>
.main-nav {
    display: flex;
    height: 70px;
    line-height: 70px;
    text-align: center;
}
.right {
  width: 350px;
}
.left {
  width: 200px;
}

.content {
  width: 600px;
}



</style>