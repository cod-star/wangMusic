<template>
  <div id="app">
    <main-nav/>
    <keep-alive><router-view/></keep-alive>
    <Footer :footerList="footerList" class="footers"></Footer>
  </div>
</template>
<script>

import MainNav from 'components/content/mainnav/MainNav'

import Footer from 'components/content/footer/Footer'


export default {
  name:'App',
  components: {
      MainNav,
      Footer
  },
  data() {
    return {
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
    }
  },
}
</script>

<style scoped>
#id {
  margin: 0;
  padding: 0;
}


</style>
