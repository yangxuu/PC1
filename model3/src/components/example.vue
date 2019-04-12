<template>
  <div>
    <div class="banner-box"></div>
    <div class="safe auto m-t-60">
      <div class="head auto">工程实例&#x3000;Engineering example</div>
    </div>
    <div class="eng-ex m-t-60">
      <div class="safe auto">
        <div class="eng-pro">
          <div class="pro-show" v-for="x in 8" :key="x">
            <span class="img-box">
              <img src alt>
            </span>
            <p class="des">南京坪山交通轨道项目</p>
          </div>
        </div>
         <div class="bottom auto">
            <div class="auto box">
              <span class="line"></span> 已经到底啦
              <span class="line"></span>
            </div>
          </div>
           <div style="height:200px">分页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.banner-box {
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: url(../assets/images/banner7.png)
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
.eng-ex {
  width: 100%;
  height: 730px;
}
.eng-pro {
  width: 100%;
  overflow: hidden;
}
.eng-pro div:hover{
  opacity: 0.8;
}
.eng-pro .pro-show {
  width: 265px;
  height: 310px;
  float: left;
  margin: 30px 17px;
}
.pro-show .img-box {
  display: block;
  width: 265px;
  height: 265px;
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
  background: #4CA57B;
}
.bottom {
  width: 980px;
  font-size: 14px;
  color: rgba(161, 161, 161, 1);
}
.bottom .box {
  width: 500px;
}
.bottom .line {
  display: inline-block;
  vertical-align: middle;
  width: 200px;
  height: 1px;
  border: 0.5px solid #e0e0e0;
}
</style>
