<template>
  <div class="new-sale">
    <div class="pre"><</div>
    <div v-for="(item,index) in newSales" class="conter-new">
      <a href>
        <img :src="item.img" alt />
        <div class="conter-news"></div>
        <span>{{item.title}}</span>
        <p>{{item.author}}</p>
      </a>
    </div>
    <div class="next">></div>
  </div>
</template>
<script>
export default {
  name: "NewSale",
  props: {
    newSales: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}

.new-sale {
  position: relative;
  width: 700px;
  height: 200px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  overflow: hidden;
  background: rgb(247, 247, 247);
  border: 1px solid #e2e2e2;
}

.conter-new img {
  position: relative;
  z-index: 9;
  width: 100px;
  height: 100px;
  box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.2);
}

.conter-new {
  position: relative;
  left: 20px;
  top: 22px;
  width: 100px;
  height: 180px;
  padding: 0 15px;
}

.conter-new:nth-last-child(6) {
  margin-left: 80px;
}

.conter-news {
  position: absolute;
  top: 8%;
  left: 38%;
  width: 79px;
  height: 79px;
  background: black;
  border-radius: 50%;
}

.conter-new span {
  font-size: 12px;
  display: inline-block;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

p:hover ,span:hover {
  text-decoration: underline;
}

.conter-new p {
  margin-top: 0;
  font-size: 11px;
  color: #a3a3a3;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pre , .next{
  position: absolute;
  top: 35%;
  margin-left: 5px;
  z-index: 9999;
  color: #6d6868;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
}

.next {
  position: absolute;
  right: 0;
  margin-right: 5px;
}
</style>