<template>
  <div id="hd">
    <div class="layout">
      <div class="main-wrap">
        <div class="header-top-box box no-mb">
          <div class="w1200">
            <div class="website">杭州大钻网络科技</div>
            <div class="tele">企业热线：123456789</div>
          </div>
        </div>
        <div class="header-banner-box box no-mb">
          <div class="banner-bg" style="height:900px;padding-top:389px;">
            <div class="content-box">
              <p class="title">10年磨一剑</p>
              <p class="desc">做思想前卫的科技互联网公司</p>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-box",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-navbar-box .w1200 ul li .router-link-exact-active{
  color:orangered;
}
</style>
