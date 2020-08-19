<template>
  <div id="app">
    <main-nav/>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>
<script>

import MainNav from 'components/content/mainnav/MainNav'


export default {
  name:'App',
  components: {
      MainNav
  },
  
}
</script>

<style scoped>
#id {
  margin: 0;
  padding: 0;
}


</style>
