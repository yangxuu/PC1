<template>
  <div>
    <headBox></headBox>
    <div class="header-banner-box box no-mb">
      <div class="banner-bg asset9" style="height:1100px;">
        <div class="w1200 clearfix">
          <div class="introduce">
            <p class="name">我们的自我介绍。</p>
            <p
              class="text"
            >杭州大钻网络科技有限公司是一家专业从事互联网信息服务、电子商务、专业搜索引擎企业应用软件开发的科技企业，目前已发展成为国内B2B行业专业的垂直专业网站开发商。</p>
            <p
              class="text"
            >公司创建并运营中国材料网( www.cailiao.com )、中国树苗网( www.shumiao.com )等多个国内外知名的专业电子商务网站。公司旗下的中国材料网是国内专业电子商务门户网站。中国材料网建有国内强大大的产品数据库和专业目录引擎，内含55000多个材料站点，350000余条产品信息。拥有国内外注册会员200000多个，入网缴费客户1000多家，是国内专业材料电子商务和材料媒体服务的领头羊。</p>
          </div>
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
    <div id="bd">
      <div class="layout">
        <div class="main-wrap">
          <div class="about-content-box box p-t-60 no-mb">
            <p>
              <span class="title">舒适的办公环境。</span>
            </p>
            <div class="tc m-t-60 pic-office">
              <ul class="left">
               <li class="left-1"><img src="../assets/images/asset6.jpg" alt=""></li>
               <li class="left-2"><img src="../assets/images/asset7.jpg" alt=""></li>
              </ul>
              <ul class="right">
                <li class="right-1"><img src="../assets/images/asset7.jpg" alt=""></li>
                <li class="right-2"><img src="../assets/images/asset6.jpg" alt=""></li>
              </ul>
            </div>
            <div class="w1200 tr">
              <a href class="news-refresh-btn">换一换</a>
            </div>
          </div>
          <div class="about-background-box box">
            <div class="w1200">
              <div class="title">我们的背景。</div>
              <div class="content clearfix">
                <div class="item">
                  <p>企业名称： 杭州大钻网络科技有限公司</p>
                  <p>企业类型： 有限责任公司（自然人投资或控股）</p>
                  <p>所属行业： 科技推广和应用服务业</p>
                  <p>经营状态： 存续</p>
                  <p>注册资本： 1000万人民币</p>
                  <p>注册地址： 浙江省杭州市余杭区五常街道盛奥铭座</p>
                </div>
                <div class="item">
                  <p>企业名称： 杭州大钻网络科技有限公司</p>
                  <p>企业类型： 有限责任公司（自然人投资或控股）</p>
                  <p>所属行业： 科技推广和应用服务业</p>
                  <p>经营状态： 存续</p>
                  <p>注册资本： 1000万人民币</p>
                  <p>注册地址： 浙江省杭州市余杭区五常街道盛奥铭座</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headBox from "@/components/head-box";
export default {
  components: { headBox },
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
.pic-office{
  width: 1200px;
  height: 800px;
  margin: 10px auto;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.pic-office ul{
  position: absolute;
}
.pic-office .left{
  width: 49%;
  height: 100%;
  left: 0;
  top: 0;
}
.pic-office .right{
  width: 49%;
  height: 100%;
  right: 0;
  top: 0;
}
.pic-office ul li{
  width: 100%;
  height: 350px;
  position: absolute;
}
.pic-office ul li img{
  width: 100%;
}
.pic-office ul .left-1{
  left: 0;
  top: 40px;
  background: lightcoral;
}
.pic-office ul .left-2{
  left: 10px;
  top: 410px;
  background: lightcoral;
}
.pic-office ul .right-1{
  right: 10px;
  top:20px;
  background: lightcoral;
}
.pic-office ul .right-2{
  right: 0;
  top: 390px;
  background: lightcoral;
}
</style>
