<template>
  <div class="left-item">
    <div v-for="(item,index) in leftconter">
      <a href="">
        <img :src="item.img" alt="">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LeftItem',
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