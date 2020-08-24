<template>
  <div class="ranks">
    <div class="item-ranks">
      <rank-item :Ranks="Ranks" @tabClick="tabClick" @gbClick="gbClick"></rank-item>
    </div>
    <div class="conter-ranks">
      <conter-list :conters="conters[currentType].list"></conter-list>
    </div>
  </div>
</template>
<script>
import RankItem from "./chile/RankItem";

import ConterList from "components/content/rank/ConterList";

export default {
  name: "Rank",
  components: {
    RankItem,
    ConterList,
  },
  data() {
    return {
      currentType: "soar",
      Ranks: {
        charts: [
          {
            id: 1,
            img: require("@/assets/image/recomm/rankList/1.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 2,
            img: require("@/assets/image/recomm/rankList/2.jpg"),
            title: "云音乐新歌榜",
            conter: "每天更新",
          },
          {
            id: 3,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐原创歌曲榜",
            conter: "每天更新",
          },
          {
            id: 4,
            img: require("@/assets/image/recomm/rankList/4.jpg"),
            title: "云音乐热歌榜",
            conter: "每天更新",
          },
        ],
        global: [
          {
            id: 1000,
            img: require("@/assets/image/recomm/rankList/1.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1001,
            img: require("@/assets/image/recomm/rankList/2.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1002,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1003,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1004,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1005,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1006,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1007,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1008,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1009,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1010,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1011,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1012,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1013,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1014,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1015,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1016,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1017,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1018,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 10019,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
          {
            id: 1020,
            img: require("@/assets/image/recomm/rankList/3.jpg"),
            title: "云音乐飙升榜",
            conter: "每天更新",
          },
        ],
      },
      conters: {
        soar: {
          list: [
            {
              img: require("@/assets/image/recomm/rankList/1.jpg"),
              title: "云音乐飙升榜",
              time: "最近更新：08月22日",
              times: "(每日更新)",
              bofan: [
                "播放",
                "加入(3289629)",
                "分享(8937)",
                "下载",
                "评论(190233)",
              ],
              navs: ["歌曲列表", "100首歌", "播放：3460471808"],
              musics: [
                {
                  id: 1,
                  type: "new",
                  img: require("@/assets/image/recomm/rankList/1.jpg"),
                  name: "守候(2020重唱版)",
                  musictime: "04:52",
                  author: "薛之谦",
                },
                {
                  id: 2,
                  type: "new",
                  img: require("@/assets/image/recomm/rankList/1.jpg"),
                  name: "守候(2020重唱版)",
                  musictime: "04:52",
                  author: "薛之谦",
                },
                {
                  id: 3,
                  type: "new",
                  img: require("@/assets/image/recomm/rankList/1.jpg"),
                  name: "守候(2020重唱版)",
                  musictime: "04:52",
                  author: "薛之谦",
                },
                {
                  id: 4,
                  type: "new",
                  img: require("@/assets/image/recomm/rankList/1.jpg"),
                  name: "守候(2020重唱版)",
                  musictime: "04:52",
                  author: "薛之谦",
                },
                {
                  id: 5,
                  type: "new",
                  img: require("@/assets/image/recomm/rankList/1.jpg"),
                  name: "守候(2020重唱版)",
                  musictime: "04:52",
                  author: "薛之谦",
                },
                {
                  id: 6,
                  type: "new",
                  img: require("@/assets/image/recomm/rankList/1.jpg"),
                  name: "守候(2020重唱版)",
                  musictime: "04:52",
                  author: "薛之谦",
                },
              ],
            },
          ],
        },
        news: {
          list: [
            {
              img: require("@/assets/image/recomm/rankList/2.jpg"),
              title: "云音乐新歌榜",
              time: "最近更新：08月22日",
              times: "(每日更新)",
              bofan: [
                "播放",
                "加入(2349629)",
                "分享(8337)",
                "下载",
                "评论(145233)",
              ],
              navs: ["歌曲列表", "100首歌", "播放：196047180800"],
              musics: [
                {
                  id: 1,
                  type: "new",
                  img: require("@/assets/image/recomm/rankList/2.jpg"),
                  name: "守候(2020重唱版)",
                  musictime: "04:52",
                  author: "薛之谦",
                },
              ],
            },
          ],
        },
        originals: { 
          list: [
           {
              img: require("@/assets/image/recomm/rankList/3.jpg"),
              title: "云音乐原创歌曲榜",
              time: "最近更新：08月22日",
              times: "(每日更新)",
              bofan: [
                "播放",
                "加入(2349629)",
                "分享(8337)",
                "下载",
                "评论(145233)",
              ],
              navs: ["歌曲列表", "100首歌", "播放：196047180800"],
              musics: [
                {
                  id: 1,
                  type: "new",
                  img: require("@/assets/image/recomm/rankList/2.jpg"),
                  name: "守候(2020重唱版)",
                  musictime: "04:52",
                  author: "薛之谦",
                },
              ],
            },
        ] },
        hots: { 
          list: [
           {
              img: require("@/assets/image/recomm/rankList/4.1.jpg"),
              title: "云音乐热歌榜",
              time: "最近更新：08月22日",
              times: "(每日更新)",
              bofan: [
                "播放",
                "加入(2349629)",
                "分享(8337)",
                "下载",
                "评论(145233)",
              ],
              navs: ["歌曲列表", "100首歌", "播放：196047180800"],
              musics: [
                {
                  id: 1,
                  type: "new",
                  img: require("@/assets/image/recomm/rankList/2.jpg"),
                  name: "守候(2020重唱版)",
                  musictime: "04:52",
                  author: "薛之谦",
                },
              ],
            },
        ] },
      },
    };
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "soar";
          break;
        case 1:
          this.currentType = "news";
          break;
        case 2:
          this.currentType = "originals";
          break;
        case 3:
          this.currentType = "hots";
          break;

        default:
          break;
      }
    },
    gbClick(index) {},
  },
};
</script>
<style scoped>
.ranks {
  display: flex;
  background: #f0f0f0;
}
</style>