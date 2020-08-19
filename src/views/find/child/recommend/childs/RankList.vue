<template>
  <div class="rank-list">
    <rank-list-nav></rank-list-nav>
    <div class="conter-list">
      <div v-for="(item,index) in rankLists" class="rankImg">
        <a href>
          <dl>
            <dt>
              <div class="rank-img">
                <img :src="item.img" alt />
                <span class="title">{{item.title}}</span>
              </div>
            </dt>
            <dd>
              <ol class="lists">
                <li>
                  <span>{{item.conter[0]}}</span>
                </li>
                <li>
                  <span>{{item.conter[1]}}</span>
                </li>
                <li>
                  <span>{{item.conter[2]}}</span>
                </li>
                <li>
                  <span>{{item.conter[3]}}</span>
                </li>
                <li>
                  <span>{{item.conter[4]}}</span>
                </li>
                <li>
                  <span>{{item.conter[5]}}</span>
                </li>
                <li>
                  <span>{{item.conter[6]}}</span>
                </li>
                <li>
                  <span>{{item.conter[7]}}</span>
                </li>
                <li>
                  <span>{{item.conter[8]}}</span>
                </li>
                <li>
                  <span>{{item.conter[9]}}</span>
                </li>
              </ol>
            </dd>
            <div class="all">查看全部></div>
          </dl>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import RankListNav from "components/content/recommNav/RankListNav";

export default {
  name: "RankList",
  components: {
    RankListNav,
  },
  props: {
    rankLists: {
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

.conter-list {
  display: flex;
  margin-left: 15px;
  margin-top: 20px;
}

.rankImg {
  width: 230px;
  border: 1px solid #cccccc;
  background: #f3f3f3;
}


.rankImg:first-child {
  border-right: none;
}

.rankImg:last-child {
  border-left: none;
}

.rankImg img {
  width: 80px;
  height: 80px;
  margin: 0 20px;
}

.title {
  font-size: 15px;
  position: relative;
  top: -58px;
  left: -8px;
  font-weight: 600;
}

.lists {
  position: relative;
  width: 190px;
  padding: 0;
}

.lists li {
  padding: 5px 0;
}

.lists li:nth-child(2n) {
  background: #e6e6e6;
}

.lists li span {
  display: inline-block;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  color: black;
}

.lists li span:hover {
  text-decoration: underline;
}

.all {
  font-size: 13px;
  position: relative;
  left: 130px;
}
</style>