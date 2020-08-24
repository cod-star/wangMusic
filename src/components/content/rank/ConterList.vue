<template>
<div class="conter-lists">
  <conter-item v-for="item in conters" :conteritem="item"/>
  </div>
</template>
<script>
import ConterItem from './ConterItem'

export default {
  name: 'ConterList',
  components: {
    ConterItem
  },
  props: {
    conters: {
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.conter-lists {
  position: relative;
  left: 100px;
  width: 820px;
  height: 2001px;
  background: white;
  border-right: 1px solid #dddddd;
}
  
</style>