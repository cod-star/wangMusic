<template>
  <div class="songs-item">
    <div class="song">
      <div class="nav">
      <div class="all">全部</div>
      <div class="cale">选择分类^</div>
      <div class="hot">热门</div>
    </div>
    <div class="fenge"></div>
    <div class="conter">
    <div v-for="item in songs" class="songs">
      <div class="img">
        <a href="javascript:">
      <img :src="item.img" alt="">
      </a>
      <div class="number">
      <p>{{item.number}}</p>
      </div>
      </div>
      <div class="text">
      <div class="title">
        <p>{{item.title}}</p>
      </div>
      <div class="name">
        <p>{{item.name}}</p>
        <p>{{item.author}}</p>
      </div>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SongItem',
  props: {
    songs: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.songs-item {
  background: #f8f8f8;
}

.nav {
  display: flex;
  position: relative;
  left: 40px;
  top: 50px;
}

.fenge {
  position: relative;
  left: 40px;
  top: 45px;
  width: 920px;
  height: 2px;
  background: rgb(201, 3, 3);
}

.nav .all {
  font-size: 25px;
}

.hot {
  position: relative;
  left: 720px;
  font-size: 13px;
  color: white;
  width: 50px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background: rgb(201, 4, 4);
  border-radius: 4px;
  cursor: pointer;
}

.hot:hover {
  text-decoration: underline;
}

.cale {
  position: relative;
  left: 20px;
  font-size: 12px;
  width: 100px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background: #f7f7f7;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  color: rgb(47, 47, 211);
  cursor: pointer;
}

.cale:hover {
  background: #ffffff;
}

.song {
  width: 1000px;
  height: 1300px;
  margin: 0 auto;
  background: white;
  border: 1px solid #dadada;
  border-top: none;
  border-bottom: none;

}

.conter{
  display: flex;
  width: 100%;
  position: relative;
  top: 70px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
}

.songs {
  position: relative;
  height: 230px;
  padding: 0 15px;
}

.img::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-right: 140px solid transparent;
  border-top: 140px solid rgba(255,255,255,0.2);

}

.img::before{
  cursor: pointer;
}

.number{
  position: relative;
  top: -45px;
  width: 140px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: rgb(238, 238, 238);
  background: rgba(0,0,0,0.3);
}

.number p {
  position: relative;
  left: 20px;
}

.title p {
  font-size: 14px;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.text {
  position: relative;
  top: -50px;
}

.title p:hover {
  text-decoration: underline;
}

.name{
  position: relative;
  top: -15px;
  display: flex;
  font-size: 11px;
  color: #555555;
}

.name p:last-child {
  padding: 0 5px;
  cursor: pointer;
}

.name p:last-child:hover {
  text-decoration: underline;
}

.name p:first-child {
  color: #a3a3a3;
}


</style>