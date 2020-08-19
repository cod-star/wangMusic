<template>
<div class="recomm-nav">
    <div class="icon"></div>
    <nav-item>
      <div slot="left" class="recomm-left">热门推荐
        <div class="bottom-nav"></div>
      </div>
      <div slot="content" class="recomm-content"
      v-for="(item,index) in navTitle">
      <a href="">
      <span>{{item}}</span>
      </a>
      <span class="fengexian"></span>
       </div>
       <div slot="right" class="recomm-right">
         <span>更多</span>
       </div>
    </nav-item>
    </div>
</template>
<script>
import NavItem from 'components/common/nav/NavItem'

export default {
  name: 'RecommNav',
  components: {
    NavItem
  },
  props: {
    navTitle: {
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style  scoped>
.recomm-nav {
  width: 730px;
  height: 80px;
 
}

.bottom-nav {
   width: 700px;
   margin-left: 15px;
   margin-top: -13px;
   border-bottom: 2px solid rgb(206, 7, 7);
}

.icon {
  position: relative;
  top: 43px;
  left: 30px;
  width: 6px;
  height: 6px;
  border: 4px solid rgb(206, 7, 7);
  border-radius: 50%;
}

.recomm-left {
  font-size: 22px;
  cursor: pointer;
}

.recomm-content {
  float: left;
  margin-left: 20px;
  font-size: 12px;
}

.recomm-content:hover {
  text-decoration: underline;
}

.recomm-content a {
  text-decoration: none;
  color: #888585;

}

.recomm-content:first-child {
  padding-left: 0;
}

.fengexian {
  display: inline-block;
  width: 1px;
  height: 14px;
  background: #cccccc;
  margin-left: 16px;
  margin-bottom: -2px;
}

.recomm-content:last-child .fengexian {
  display: none;
}

.recomm-right {
  float: right;
  margin-right: 20px;
  font-size: 12px;
  color: #888585;
  cursor: pointer;
}

.recomm-right:hover {
  text-decoration: underline;
}

</style>