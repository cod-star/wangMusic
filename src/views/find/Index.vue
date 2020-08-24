<template>
  <div class="find-music">
    <div class="icon-tab"></div>
    <div class="find-navs">
      <find-nav class="finds"></find-nav>
    </div>
     <router-view></router-view>
  </div>
</template>

<script>
// import {getIndexdata} from '../network/index';

import FindNav from "../find/child/FindNav";

import Recomm from '../find/child/recommend/Recomm'

export default {
  name: "Index",
  components: {
    //  New,
    FindNav,
     Recomm,
  },
  data() {
    return {
      news: {},
       
    };
  },

  created() {
    // this.getIndexdata('新歌榜',"json");
    // this.getIndexdata('热歌榜',"json");
    // this.getIndexdata('飙升榜',"json");
    // this.getIndexdata('抖音榜',"json");
    // this.getIndexdata('电音榜',"json");
  },
  methods: {
    // getIndexdata(sort,format){
    //   getIndexdata(sort,format).then(res => {
    //     // console.log(res);
    //     this.news = res.data;
    //     console.log(this.news);
    //   })
    // }
  },
};
</script>
<style scoped>
.find-music {
  position: relative;
}

.find-navs {
  position: relative;
  height: 40px;
  line-height: 40px;
  background: rgb(201, 42, 42);
}

.icon-tab {
  position: absolute;
  top: -8px;
  left: 237px;
  z-index: 999;
  width: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid rgb(201, 42, 42);
}

.finds {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  font-size: 12px;
  cursor: pointer;
  color: white;
  margin-left: 200px;
}

.beij {
  position: absolute;
  top: 40px;
  width: 100%;
  height: 284px;
  background: rgb(124, 228, 219);
}
</style>