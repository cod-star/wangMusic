<template>
  <div class="recomm">
    <recomm-swpper class="swpper" :dian="dian"></recomm-swpper>
     <div class="beij"></div>
    <div class="conter">
      <recomm-nav :navTitle="navTitle"></recomm-nav>
      <hot-recomm :hotRecomm="hotRecomm"></hot-recomm>
      <new-nav></new-nav>
      <new-sale :newSales="newSales"></new-sale>
      <rank-list :rankLists="rankLists"></rank-list>
    </div>
    <div class="recomm-leftlist">
      <recoomm-left></recoomm-left>
    </div>
    <Footer :footerList="footerList" class="footers"></Footer>
  </div>
</template>
<script>
import RecommSwpper from "../recommend/childs/RecommSwpper";

import RecommNav from "components/content/recommNav/RecommNav";
import NewNav from "components/content/recommNav/NewNav";

import HotRecomm from "./childs/HotRecomm";
import NewSale from "./childs/NewSale";
import RankList from "./childs/RankList";
import Footer from "./childs/Footer";
import RecoommLeft from './childs/RecoommLeft'

export default {
  name: "Recomm",
  components: {
    RecommSwpper,
    RecommNav,
    NewNav,
    HotRecomm,
    NewSale,
    RankList,
    Footer,
    RecoommLeft
  },
  data() {
    return {
      dian: [
        {
          img: require("@/assets/image/recomm/swpper/1.jpg"),
        },
        {
          img: require("@/assets/image/recomm/swpper/2.jpg"),
        },
        {
          img: require("@/assets/image/recomm/swpper/3.jpg"),
        },
        {
          img: require("@/assets/image/recomm/swpper/4.jpg"),
        },
        {
          img: require("@/assets/image/recomm/swpper/5.jpg"),
        },
        {
          img: require("@/assets/image/recomm/swpper/6.jpg"),
        },
        {
          img: require("@/assets/image/recomm/swpper/7.jpg"),
        },
        {
          img: require("@/assets/image/recomm/swpper/8.jpg"),
        },
        {
          img: require("@/assets/image/recomm/swpper/9.jpg"),
        },
      ],
      navTitle: ["华语", "流行", "摇滚", "民谣", "电子"],
      hotRecomm: [
        {
          img: require("@/assets/image/recomm/hotRecomm/1.jpg"),
          hotTitle: "[华语速爆新歌] 最新华语音乐推荐",
          number: 88965 + "万",
        },
        {
          img: require("@/assets/image/recomm/hotRecomm/2.jpg"),
          hotTitle: "「声陷耳瘾」似无林之岸骤冷的烟霭",
          number: 30 + "万",
        },
        {
          img: require("@/assets/image/recomm/hotRecomm/3.jpg"),
          hotTitle: "低重音音效绝佳效果",
          number: 39 + "万",
        },
        {
          img: require("@/assets/image/recomm/hotRecomm/4.jpg"),
          hotTitle: " 讲真的，没那么多人需要“删除好友提醒”",
          number: 8453,
        },
        {
          img: require("@/assets/image/recomm/hotRecomm/5.jpg"),
          hotTitle: "你说我们怎么就这么潦草的结束了呢.",
          number: 166 + "万",
        },
        {
          img: require("@/assets/image/recomm/hotRecomm/5.jpg"),
          hotTitle: " 同桌的你",
          number: 3018,
        },
        {
          img: require("@/assets/image/recomm/hotRecomm/5.jpg"),
          hotTitle: "好听到单曲循环的歌",
          number: 459 + "万",
        },
        {
          img: require("@/assets/image/recomm/hotRecomm/5.jpg"),
          hotTitle: " 不说（原唱：周公）",
          number: 108 + "万",
        },
      ],
      newSales: [
        {
          img: require("@/assets/image/recomm/newSale/2.1.jpg"),
          title: "以家人之名 影视原声带",
          author: "群星",
        },
        {
          img: require("@/assets/image/recomm/newSale/2.2.jpg"),
          title: "RAPSTAR",
          author: "吴亦凡 / 潘玮柏 / 张靓颖 / GAI周延 / 朴宰范",
        },
        {
          img: require("@/assets/image/recomm/newSale/2.3.jpg"),
          title: "沙发里有沙发",
          author: "鱼丁系",
        },
        {
          img: require("@/assets/image/recomm/newSale/2.4.jpg"),
          title: "世界上不存在的歌 (2020重唱版)",
          author: "陈奕迅",
        },
        {
          img: require("@/assets/image/recomm/newSale/2.5.jpg"),
          title: "STRAY SHEEP",
          author: "米津玄师",
        },
        {
          img: require("@/assets/image/recomm/newSale/2.5.jpg"),
          title: "以家人之名 影视原声带",
          author: "群星",
        },
        {
          img: require("@/assets/image/recomm/newSale/2.4.jpg"),
          title: "以家人之名 影视原声带",
          author: "群星",
        },
        {
          img: require("@/assets/image/recomm/newSale/2.3.jpg"),
          title: "以家人之名 影视原声带",
          author: "群星",
        },
        {
          img: require("@/assets/image/recomm/newSale/2.3.jpg"),
          title: "以家人之名 影视原声带",
          author: "群星",
        },
        {
          img: require("@/assets/image/recomm/newSale/2.1.jpg"),
          title: "以家人之名 影视原声带",
          author: "群星",
        },
      ],
      rankLists: [
        {
          img: require("@/assets/image/recomm/rankList/1.jpg"),
          title: "云音乐飙升榜",
          conter: [
            "天外来物",
            "认输",
            "绝世舞姬",
            "致我们终将逝去的青春",
            "所念皆星河",
            "南风北巷",
            "平行又交替",
            "睡不着",
            "见笑",
            "是想你的声音啊",
          ],
        },
        {
          img: require("@/assets/image/recomm/rankList/2.jpg"),
          title: "云音乐新歌榜",
          conter: [
            "天外来物",
            "认输",
            "绝世舞姬",
            "致我们终将逝去的青春",
            "所念皆星河",
            "南风北巷",
            "平行又交替",
            "睡不着",
            "见笑",
            "是想你的声音啊",
          ],
        },
        {
          img: require("@/assets/image/recomm/rankList/3.jpg"),
          title: "网易原创歌曲榜",
          conter: [
            "天外来物",
            "认输",
            "绝世舞姬",
            "致我们终将逝去的青春",
            "所念皆星河",
            "南风北巷",
            "平行又交替",
            "睡不着",
            "见笑",
            "是想你的声音啊",
          ],
        },
      ],
      footerList: [
        {
          nav: [
            "服务条款",
            "隐私政策",
            "儿童隐私政策",
            "版权投诉指引",
            "意见反馈",
          ],
        },
        {
          name: [
            "网易版权所有@19997-2020  杭州乐读科技有限公司运营：浙网文[2018]3506-263号",
          ],
        },
        {
          phone: [
            "违法和不良信息举报电话：0571-89853516  举报邮箱：ncm5990@163.com",
          ],
        },
        {
          wang: [
            "粤B2-20090191-18",
            "工业和信息化部备案管理系统网站",
            "浙公网安备 3001902002564号",
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
.recomm {
  width: 100%;
  background: #f0f0f0;
}

.conter {
  height: 1500px;
  width: 730px;
  margin-left: 100px;
  border: 1px solid #cccccc;
  border-top: none;
  border-bottom: none;
  clear: both;
  background: white;
}

.swpper {
  height: 284px;
  width: 730px;
  overflow: hidden;
  margin-left: 100px;
}

.beij {
  position: absolute;
  top: 40px;
  width: 100%;
  height: 284px;
  background: rgb(124, 228, 219);
}

.recomm-leftlist {
  position: relative;
  top: 0;
}
</style>