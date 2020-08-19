<template>
  <div class="recomm-nav">
    <div class="icon"></div>
    <nav-item>
      <div slot="left" class="recomm-left">新碟上架
         <div class="bottom-nav"></div>
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
  name: 'NewNav',
  components: {
    NavItem
  }
}
</script>
<style scoped>
.recomm-nav {
  width: 730px;
  height: 70px;
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