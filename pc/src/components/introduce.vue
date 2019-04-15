<template>
  <div id="bd">
    <div class="layout">
      <div class="main-wrap">
        <div class="about-title-box box">
          <p class="title">企业介绍</p>
          <p class="desc">Enterprise introduction.</p>
        </div>
        <div class="box">
          <div class="w1200 m-t-50 m-b-50 fs-20 p-l-20 p-r-20 lh-20">
            <p
              class="m-b-10"
            >杭州大钻网络科技有限公司是一家专业从事互联网信息服务、电子商务、专业搜索引擎企业应用软件开发的科技企业，目前已发展成为国内B2B行业专业的垂直专业网站开发商。</p>
            <p>
              公司创建并运营中国材料网( www.cailiao.com )、中国树苗网( www.shumiao.com
              )等多个国内外知名的专业电子商务网站。公司旗下的中国材料网是国内专业电子商务门户网站。中国材料网建有国内强大大的产品数据库和专业目录引擎，内含55000多个材料站点，350000余条产品信息。拥有国内外注册会员200000多个，入网缴费客户1000多家，是国内专业材料电子商务和材料媒体服务的领头羊。
            </p>
          </div>
        </div>
        <div class="about-title-box box no-mb bg-f2" style>
          <p class="title">公司风采</p>
          <p class="desc">Company elegant demeanor</p>
        </div>
        <div class="bg-f2 oh box">
          <div id class="w1200 p-b-30 m-b-30" style="border-bottom:1px solid #999999;">
            <div class="about-swiper-container">
              <el-carousel :interval="2000" type="card" height="300px">
                <el-carousel-item class="pic-box" v-for="item in imagesbox" :key="item.id">
                 <img :src="item.idView">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <div class="about-title-box box no-mb bg-white" style>
          <p class="title">企业背景</p>
          <p class="desc">Enterprise background</p>
        </div>
        <div class="w1200">
          <div class="fl fs-16 lh-25 m-t-30 p-l-50" style="border-left:1px solid #4d4d4d;">
            <p>企业名称： 杭州大钻网络科技有限公司</p>
            <p>企业类型： 有限责任公司（自然人投资或控股）</p>
            <p>所属行业： 科技推广和应用服务业</p>
            <p>经营状态： 存续</p>
            <p>注册资本： 1000万人民币</p>
            <p>注册地址： 浙江省杭州市余杭区五常街道盛奥铭座</p>
          </div>
          <div class="fr">
            <img src="../assets/images/asset7.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imagesbox: [
        { id: 0, idView: require("../assets/images/asset7.jpg") },
        { id: 1, idView: require("../assets/images/asset6.jpg") },
        { id: 2, idView: require("../assets/images/asset4.jpg") }
      ]
    };
  }
};
</script>
<style scoped>
.pic-box img{
    width: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>
