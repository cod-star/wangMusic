<template>
  <div class="song-list">
   <song-item :songs="songs"></song-item>
  </div>
</template>
<script>
import SongItem from './child/SongItem'

export default {
  name:"Song",
  components: {
    SongItem
  },data() {
    return {
      songs: [
        {
           img: require("@/assets/image/song/1.jpg"),
           title: '一起听| 你说秋天适合思念，我说更适合见面',
           name: 'by',
           author: "柚锶一念",
           number: 27 + '万'
        },
        {
           img: require("@/assets/image/song/2.jpg"),
           title: '『韩』桃花灼情乐瑟鸣，花似佳人愿与倾',
           name: 'by',
           author: "日月星伊",
           number: 255282 
        },
        {
           img: require("@/assets/image/song/3..jpg"),
           title: '对抗沦丧 Real Talk强心剂',
           name: 'by',
           author: "七香",
           number: 4683
        },
        {
           img: require("@/assets/image/song/4.jpg"),
           title: '不被打扰真好，慵懒午后独处民谣小调',
           name: 'by',
           author: "道格小迷弟",
           number: 22 + '万'
        },
        {
           img: require("@/assets/image/song/5.jpg"),
           title: '「 夏日舞步 」跳到夏天结束',
           name: 'by',
           author: "齊宣王啃牛角",
           number: 7833
        },
         {
           img: require("@/assets/image/song/2.1.jpg"),
           title: '甜甜的纯音乐♡♡♡请保持一颗少女心u',
           name: 'by',
           author: "我是公主婧",
           number: 735 + '万'
        },
        {
           img: require("@/assets/image/song/2.2.jpg"),
           title: '写作业必备歌单 纯音乐',
           name: 'by',
           author: "晚川_xrBI",
           number: 45 + '万'
        },
        {
           img: require("@/assets/image/song/2.3.jpg"),
           title: '[欧美私人订制] 最懂你的欧美推荐 每日更新35首',
           name: 'by',
           author: "网易云音乐",
           number: 20794 + '万'
        },
        {
           img: require("@/assets/image/song/2.4.jpg"),
           title: '打野BGM［游戏专用］',
           name: 'by',
           author: "和你漫入银河",
           number: 207 + '万'
        },
        {
           img: require("@/assets/image/song/2.5.jpg"),
           title: '学习歌单～（超赞纯音乐！）',
           name: 'by',
           author: "咬一口公主栗子",
           number: 293 + '万'
        },
        {
           img: require("@/assets/image/song/2.1.jpg"),
           title: '甜甜的纯音乐♡♡♡请保持一颗少女心u',
           name: 'by',
           author: "我是公主婧",
           number: 735 + '万'
        },
        {
           img: require("@/assets/image/song/2.2.jpg"),
           title: '写作业必备歌单 纯音乐',
           name: 'by',
           author: "晚川_xrBI",
           number: 45 + '万'
        },
        {
           img: require("@/assets/image/song/2.3.jpg"),
           title: '[欧美私人订制] 最懂你的欧美推荐 每日更新35首',
           name: 'by',
           author: "网易云音乐",
           number: 20794 + '万'
        },
        {
           img: require("@/assets/image/song/2.4.jpg"),
           title: '打野BGM［游戏专用］',
           name: 'by',
           author: "和你漫入银河",
           number: 207 + '万'
        },
        {
           img: require("@/assets/image/song/2.5.jpg"),
           title: '学习歌单～（超赞纯音乐！）',
           name: 'by',
           author: "咬一口公主栗子",
           number: 293 + '万'
        },
        {
           img: require("@/assets/image/song/2.1.jpg"),
           title: '甜甜的纯音乐♡♡♡请保持一颗少女心u',
           name: 'by',
           author: "我是公主婧",
           number: 735 + '万'
        },
        {
           img: require("@/assets/image/song/2.2.jpg"),
           title: '写作业必备歌单 纯音乐',
           name: 'by',
           author: "晚川_xrBI",
           number: 45 + '万'
        },
        {
           img: require("@/assets/image/song/2.3.jpg"),
           title: '[欧美私人订制] 最懂你的欧美推荐 每日更新35首',
           name: 'by',
           author: "网易云音乐",
           number: 20794 + '万'
        },
        {
           img: require("@/assets/image/song/2.4.jpg"),
           title: '打野BGM［游戏专用］',
           name: 'by',
           author: "和你漫入银河",
           number: 207 + '万'
        },
        {
           img: require("@/assets/image/song/2.5.jpg"),
           title: '学习歌单～（超赞纯音乐！）',
           name: 'by',
           author: "咬一口公主栗子",
           number: 293 + '万'
        },
        
      ]
    }
  },
}
</script>