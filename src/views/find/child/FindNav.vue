<template>
  <div class="find-nav">
    <find-nav-item path="recomm">
      <div slot="nav-tab" class="find">推荐</div>
      <div slot="dis" class="find">推荐</div>
    </find-nav-item>
    <find-nav-item path="rank">
      <div slot="nav-tab" class="find">排行榜</div>
      <div slot="dis" class="find">排行榜</div>
    </find-nav-item>
    <find-nav-item path="song">
      <div slot="nav-tab" class="find">歌单</div>
      <div slot="dis" class="find">歌单</div>
    </find-nav-item>
    <find-nav-item path="radio">
      <div slot="nav-tab" class="find">主播电台</div>
      <div slot="dis" class="find">主播电台</div>
    </find-nav-item>
    <find-nav-item path="pelope">
      <div slot="nav-tab" class="find">歌手</div>
      <div slot="dis" class="find">歌手</div>
    </find-nav-item>
    <find-nav-item path="newmusic">
      <div slot="nav-tab" class="find">新碟上架</div>
      <div slot="dis" class="find">新碟上架</div>
    </find-nav-item>
  </div>
</template>
<script>
import FindNavItem from 'components/content/navTab/FindNavItem'

export default {
  name: "FindNav",
  components: {
    FindNavItem
  }
}
</script>
<style scoped>

.find-nav {
  width: 600px;
}

.find {
  padding: 0 5px;
  text-align: center;
  
}
  
</style>