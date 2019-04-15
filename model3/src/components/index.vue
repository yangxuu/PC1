<template>
  <div>
    <div class="banner-box">
      <el-carousel arrow="always" height="500px">
        <el-carousel-item v-for="item in 2" :key="item"></el-carousel-item>
      </el-carousel>
    </div>
    <div class="safe auto">
      <div class="head auto m-t-60">产品信息&#x3000;Product information</div>
      <div class="container">
        <div v-for="x in 10" :key="x">
          <span class="img-box">
            <img src="../assets/images/test.png" alt>
          </span>
          <p class="price">￥565</p>
          <p class="name">厂家供应UV光养催化净化器</p>
          <p class="link">商品详情</p>
        </div>
      </div>
      <div class="box">
        <div class="more">查看更多》</div>
      </div>
      <div class="head auto">公司介绍&#x3000;Company introduction</div>
    </div>
    <div class="banner-box1">
      <div class="safe company">
        <div class="imgs">
          <div class="box1"></div>
          <div class="box2"></div>
        </div>
        <div class="introduce">
          <p>公司介绍</p>
          <p>
            泊头市京茂环保设备有限公司坐落于有铸造之乡的河北泊头，是一家专
            一家专业从事环保设备的生产厂家，主要产品：移动式伸缩喷漆房、催化燃
            烧设备、滤筒除尘器、万向吸气臂、UV光氧净化器、低温等离子废气处理设
            备、等离子光氧一体废气处理设备、活性炭吸附箱、焊烟净化器、PP喷淋塔
            布袋除尘器、除尘布袋、除尘骨架、电磁脉冲阀、星型卸料器、脉冲控制仪
            及输送设备等。京茂产品质量优、价格合理、准确的专业知识，良好的售后
            服务来满足客户的要求，我们会不断的努力创新，根据客户的实际特点，竭
            诚为大家服务，争取成为环保设备的领跑者和践行者。
          </p>
          <div class="skan">
            <span class="bg">
              <router-link to="/introduce" style="color:white">查看更多》</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="safe auto m-t-60">
      <div class="head auto">工程实例&#x3000;Engineering example</div>
    </div>
    <div class="eng-ex m-t-30">
      <div class="safe auto">
        <ul class="auto">
          <li @click="one" ref="b1">1</li>
          <li @click="two" ref="b2">2</li>
          <li @click="three" ref="b3">3</li>
        </ul>
        <div class="m-t-30 eng-pro" v-show="flag1">
          <div class="pro-show" v-for="x in 4" :key="x">
            <span class="img-box auto">
              <img src alt>
            </span>
            <p class="des m-t-10">南京坪山交通轨道项目</p>
            <span class="line auto m-t-30"></span>
          </div>
        </div>

        <div class="m-t-30 eng-pro" v-show="flag2">
          <div class="pro-show" v-for="x in 4" :key="x">
            <span class="img-box auto" style="background:lightblue">
              <img src alt>
            </span>
            <p class="des m-t-10">南京坪山交通轨道项目</p>
            <span class="line auto m-t-30"></span>
          </div>
        </div>

        <div class="m-t-30 eng-pro" v-show="flag3">
          <div class="pro-show" v-for="x in 4" :key="x">
            <span class="img-box auto" style="background:lightgreen">
              <img src alt>
            </span>
            <p class="des m-t-10">南京坪山交通轨道项目</p>
            <span class="line auto m-t-30"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="safe auto m-t-60">
      <div class="head auto">产品优势&#x3000;Product superiority</div>
    </div>
    <div class="m-t-30 pro-super">
      <div class="safe super-box">
        <ul>
          <li>
            <span class="icon-box">
              <img src="../assets/images/icon-6.png" alt>
            </span>
            <span class="des">自主设计各种烟气治理的除尘系统</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/icon-7.png" alt>
            </span>
            <span class="des">自主设计各种烟气治理的除尘系统</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/icon-8.png" alt>
            </span>
            <span class="des">自主设计各种烟气治理的除尘系统</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/icon-9.png" alt>
            </span>
            <span class="des">自主设计各种烟气治理的除尘系统</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/icon-10.png" alt>
            </span>
            <span class="des">自主设计各种烟气治理的除尘系统</span>
          </li>
        </ul>
        <div class="img-box">
          <img src="../assets/images/test.png" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag1: true,
      flag2: false,
      flag3: false
    };
  },
  mounted(){
     this.$refs.b1.style.borderBottom = "3px solid #ec712e";
  },
  methods: {
    one() {
      this.flag1 = true;
      this.flag3 = false;
      this.flag2 = false;
      this.$refs.b1.style.borderBottom = "3px solid #ec712e";
      this.$refs.b2.style.borderBottom = "none";
      this.$refs.b3.style.borderBottom = "none";
    },
    two() {
      this.flag2 = true;
      this.flag1 = false;
      this.flag3 = false;
      this.$refs.b2.style.borderBottom = "3px solid #ec712e";
      this.$refs.b1.style.borderBottom = "none";
      this.$refs.b3.style.borderBottom = "none";
    },
    three() {
      this.flag3 = true;
      this.flag2 = false;
      this.flag1 = false;
      this.$refs.b3.style.borderBottom = "3px solid #ec712e";
      this.$refs.b1.style.borderBottom = "none";
      this.$refs.b2.style.borderBottom = "none";
    }
  }
};
</script>

<style scoped>
.banner-box {
  width: 100%;
  height: 500px;
}
.el-carousel__item:nth-child(2n) {
  background: url(../assets/images/ban1.png);
}

.el-carousel__item:nth-child(2n + 1) {
  background: url(../assets/images/ban2.png);
}
.safe .head {
  width: 270px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  color: white;
  text-align: center;
  background: url(../assets/images/icon-head1.png) no-repeat;
}
.container {
  overflow: hidden;
  width: 1200px;
}
.container div {
  width: 228px;
  height: 328px;
  float: left;
  margin: 30px 0 30px 10px;
  border: 1px solid #c5c6c6;
  cursor: pointer;
}
.container div:hover {
  opacity: 0.8;
}
.container div p {
  margin-top: 12px;
}
.container div .price {
  font-size: 18px;
  color: rgba(242, 12, 39, 1);
}
.container div .name {
  font-size: 14px;
  color: rgba(57, 57, 57, 1);
}
.container div .link {
  width: 100%;
  height: 23px;
  line-height: 23px;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  background: #e35a07;
}
.container div .img-box {
  display: block;
  width: 100%;
  height: 222px;
  overflow: hidden;
}
.products div .img-box img {
  width: 100%;
  height: auto;
  display: block;
}
.safe .box {
  width: 100%;
  height: 30px;
  position: relative;
}
.more {
  width: 108px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  background: url(../assets/images/icon-more.png) no-repeat;
}

.banner-box1 {
  width: 100%;
  height: 500px;
  overflow: hidden;
  margin-top: 20px;
  background: url(../assets/images/banner5.png);
}
.banner-box1 .safe {
  height: 330px;
  margin: 85px auto;
  background: #5386c0;
}
.banner-box1 .safe .introduce {
  width: 538px;
  height: 210px;
  color: #ffffff;
  font-size: 15px;
}
.company {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.imgs {
  width: 495px;
  height: 100%;
  position: relative;
}
.imgs .box1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 250px;
  background: lightcoral;
}
.imgs .box2 {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 307px;
  height: 225px;
  z-index: 300;
  background: lightseagreen;
}
.skan {
  width: 100%;
  height: 30px;
  margin-top: 10px;
  text-align: right;
}
.skan .bg {
  display: inline-block;
  width: 108px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: url(../assets/images/icon-more.png) no-repeat;
}
.eng-ex {
  width: 100%;
  height: 490px;
  background: #f4f4f4;
}
.eng-ex .safe ul {
  width: 180px;
  overflow: hidden;
}
.eng-ex .safe ul li {
  width: 40px;
  font-size: 16px;
  padding: 10px;
  text-align: center;
  margin: 0 8px;
  cursor: pointer;
  color: rgba(37, 83, 164, 1);
  float: left;
}
/* .bd-bo {
  border-bottom: 3px solid #ec712e;
} */
.eng-pro {
  width: 100%;
  overflow: hidden;
}
.eng-pro .pro-show {
  width: 265px;
  height: 363px;
  float: left;
  margin: 0 17px;
}
.pro-show .img-box {
  display: block;
  width: 260px;
  height: 260px;
  background: lightseagreen;
  overflow: hidden;
}
.pro-show .img-box img {
  width: 100%;
  height: auto;
}
.pro-show .des {
  width: 265px;
  height: 53px;
  color: #ffffff;
  font-size: 16px;
  line-height: 53px;
  text-align: center;
  background: #e21419;
}
.pro-show .line {
  display: block;
  width: 166px;
  height: 3px;
  background: #ec712e;
}
.pro-super {
  width: 100%;
  height: 320px;
  background: #385a96;
  position: relative;
}
.pro-super .super-box {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -170px;
  margin-left: -600px;
  height: 340px;
  background: #2d4a7d;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.super-box .img-box {
  width: 480px;
  height: 320px;
  overflow: hidden;
}
.super-box .img-box img {
  width: 100%;
  height: auto;
}
.super-box ul li {
  margin: 10px 0;
}
.super-box ul .icon-box {
  width: 40px;
  height: 40px;
  overflow: hidden;
}
.super-box ul .des {
  font-size: 16px;
  color: #ffffff;
  padding: 7px;
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
}
</style>
