<template>
  <div id="hd">
    <div class="header-top-box">
      <div class="w1200">
        <div class="tele">咨询热线：123456789</div>
      </div>
    </div>
    <div class="header-banner-box">
      <div class="tc">
        <p class="title">大钻网络科技</p>
        <p class="desc">www.dazuan.com</p>
      </div>
      <div class="header-navbar-box">
        <div class="w1200">
          <ul>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/product">产品</router-link>
            </li>
            <li>
              <router-link to="/introduce">企业</router-link>
            </li>
            <li>
              <router-link to="/news">新闻</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in realList" :to="item.path" :key="item">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  created() {
    this.getRoutePath();
  },
  data() {
    return {
      realList: []
    }
  },
  methods:{
    getRoutePath(){
      this.realList=this.$route.meta.routeList;
    },
    beforeRouteEnter(to,from,next){
      next((vm)=>{
        vm.realList=to.meta.routeList;
      })
    }
  }
};
</script>
<style scoped>
#hd .header-top-box {
  width: 100%;
  height: 55px;
  color: #fff;
  font-size: 18px;
  line-height: 55px;
  background: linear-gradient(to right, #666666, #000000);
}
.w1200 {
  width: 1200px;
  height: 55px;
  line-height: 55px;
  margin: 0 auto;
  position: relative;
}
#hd .header-top-box .w1200 .tele {
  position: absolute;
  top: 0;
  right: 0;
}
.header-banner-box {
  width: 100%;
  height: 321px;
  overflow: hidden;
  position: relative;
  background: url(../assets/images/asset1.jpg) center center no-repeat;
}
.header-banner-box .tc {
  width: 100%;
  text-align: center;
  margin-top: 100px;
}
.header-banner-box .title {
  font-size: 30px;
  color: #000000;
}
.header-banner-box .desc {
  font-size: 28px;
  color: #4d4d4d;
}
.header-navbar-box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55px;
  background: url(../assets/images/navbar-bg-ico.png);
}
.header-navbar-box .w1200 ul {
  overflow: hidden;
}
.header-navbar-box .w1200 ul li {
  float: left;
  width: 160px;
  height: 55px;
  font-size: 18px;
  line-height: 55px;
}
.header-navbar-box .w1200 ul li a {
  color: #fff;
}
.header-navbar-box .w1200 ul li .router-link-exact-active {
  color: orangered;
}
</style>

