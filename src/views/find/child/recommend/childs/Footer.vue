<template>
  <div class="footer-list">
    <div class="coonter">
      <div v-for="(item,index) in footerList">
        <span v-for="(nav,index) in item.nav" class="navs">
          {{nav}}
          <span class="fenge"></span>
        </span>
        <div v-for="(two,index) in item.name" class="two">
          <span>{{two}}</span>
        </div>
        <div v-for="(phones,index) in item.phone" class="phone">
          <p>{{phones}}</p>
        </div>
        <div v-for="(wangs,index) in item.wang" class="wanglist">
          <p>{{wangs}}</p>
        </div>
      </div>
      <div class="imgs">
          <img src="~assets/image/recomm/footer/1.jpg" alt="">
          <img src="~assets/image/recomm/footer/2.jpg" alt="">
          <img src="~assets/image/recomm/footer/3.jpg" alt="">
          <img src="~assets/image/recomm/footer/4.jpg" alt="">
          <img src="~assets/image/recomm/footer/5.jpg" alt="">
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {
    footerList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scopeed>
.coonter {
  margin-left: 100px;
}

.footer-list {
  width: 100%;
  height: 200px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid black;
  background: #f0f0f0;
  box-shadow: 0 5px 5px -4px rgba(0,0,0,.2);
}

.footer-list .navs {
  position: relative;
  top: 18px;
  font-size: 12px;
  color: #969595;
  margin: 0 10px;
  cursor: pointer;
}

.footer-list .navs:first-child {
  margin-left: 0;
}

.footer-list .navs:hover {
  text-decoration: underline;
}

.fenge {
  display: inline-block;
  position: relative;
  top: 3px;
  left: 9px;
  width: 1.5px;
  height: 12px;
  background: #e4e4e4;
}

.two {
  position: relative;
  top: 26px;
  font-size: 13px;
  color: #474646;
}

.phone {
  position: relative;
  top: 24px;
  font-size: 12px;
  color: #646464;
}

.wanglist {
  float: left;
  position: relative;
  top: 10px;
  color: #474646;
  font-size: 12px;
}

.imgs{
  display: flex;
  width: 80px;
  height: 80px;
 
}

.imgs img {
  width: 100%;
  height: 100%;
  position: relative;
  top: -50px;
  left: 100px;
}
</style>