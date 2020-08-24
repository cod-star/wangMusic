<template>
<div class="all">
  <div class="toplist">
    <div class="img">
    <img :src="conteritem.img" alt="">
    </div>
    <div class="text">
      <p class="title">{{conteritem.title}}</p>
      <p class="time">{{conteritem.time}}
        <span>{{conteritem.times}}</span>
      </p>
      <div class="bofang">
        <div class="bofang-item"  v-for="items in conteritem.bofan">
        <p>{{items}}</p>
        </div>
      </div>
    </div>
    </div>
    <div class="musics">
      <div class="music-item" v-for="nav in conteritem.navs">
      {{nav}}
      </div>
    </div>
    <div class="music-list">
      <table>
       <tr>
         <th></th>
         <th>标题</th>
         <th>时长</th>
         <th>歌手</th>
       </tr>
       <tr  v-for="music in conteritem.musics" class="music-list-item">
         <td class="id">
           <span>{{music.id}}</span>
           <span>{{music.type}}</span>
         </td>
         <td class="music-name">
           <img :src="music.img" alt="">
           <span>{{music.name}}</span>
         </td>
         <td class="music-time">{{music.musictime}}</td>
         <td class="author">{{music.author}}</td>
       </tr>
      </table>
    </div>
    </div>
</template>
<script>
export default {
  name: 'ConterItem',
  props: {
    conteritem: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style scoped>

.all {
  position: relative;
  left: 40px;
  top: 45px;

}

.toplist {
  display: flex;
}

.toplist img {
  width: 150px;
  height: 150px;
  border: 1px solid #cccccc;
  padding: 5px;
}

.bofang {
  display: flex;
  flex-wrap: nowrap;
}

.text {
  position: relative;
  left: 30px;
  line-height: 13px;
}

.text .title {
  font-size: 20px;
}

.text .time {
  font-size: 12px;
  color: #757575;
}

.time span {
  color: #afafaf;
}

.bofang {
  position: relative;
  top: 24px;
}

.bofang-item {
  background: #e9e9e9;
  height: 30px;
  line-height: 8px;
  padding: 0 6px;
  margin: 0 5px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #cccccc;
  cursor: pointer;
}

.bofang-item:hover {
  background: #f1f1f1;
}

.bofang-item:first-child{
  width: 70px;
  background: rgb(6, 107, 240);
  color: white;
  font-size: 13px;
  text-align: center;
}

.bofang-item:first-child:hover {
  background: rgb(74, 112, 236);
}

.musics {
  display: flex;
  position: relative;
  top: 45px;
}

.music-item:nth-child(1) {
  font-size: 20px;
}

.music-item:nth-child(2) {
  position: relative;
  left: 30px;
  top: 8px;
  font-size: 12px;
  color: #818181;
}

.music-item:last-child {
  position: relative;
  left: 480px;
  color: #757575;
  font-size: 12px;
}

.music-list {
  position: relative;
  top: 50px;
}

.music-list table,th{
  border: 1px solid #cccccc;
  border-collapse: collapse;
  border-top: 2px solid rgb(192, 5, 5);
}

.music-list table {
   width: 740px;
}

.music-list th {
  height: 30px;
  font-weight: normal;
  font-size: 13px;
  background: #f5f5f5;
  text-align: left;
}

.music-list th:first-child {
  width: 80px;
}

.music-list th:nth-child(2) {
  width: 300px;
}

.music-list td {
  height: 70px;
}

.music-list td img {
  position: relative;
  left: 5px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.music-list-item:nth-child(2n) {
  background: #f8f8f8;
}

.id {
  position: relative;
  font-size: 13px;
  color: #adadad;
}

.id span {
  position: relative;
  left: 20px;
}

.id span:last-child {
  font-size: 10px;
  color: green;
  margin: 0 10px;
}

.music-name,.music-time,.author {
  position: relative;
  font-size: 12px;
}

.music-name span {
  position: relative;
  top: -13px;
  left: 50px;
}

</style>