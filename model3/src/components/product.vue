<template>
  <div>
    <div class="banner-box"></div>
    <div class="safe auto">
      <div class="pro-container">
        <div class="left">
          <div class="icon-head">
            <p>产品分类</p>
            <p>Product classification</p>
          </div>
          <ul class="list">
            <li>催化燃烧处理设备</li>
            <li>活性炭环保吸附箱</li>
            <li>催化燃烧处理设备</li>
            <li>活性炭环保吸附箱</li>
            <li>催化燃烧处理设备</li>
            <li>活性炭环保吸附箱</li>
            <li>催化燃烧处理设备</li>
            <li>活性炭环保吸附箱</li>
            <li>催化燃烧处理设备</li>
            <li>活性炭环保吸附箱</li>
            <li>催化燃烧处理设备</li>
            <li>活性炭环保吸附箱</li>
          </ul>
        </div>
        <div class="right">
          <div class="bread-nav">当前位置：</div>
          <div class="products">
            <div v-for="x in 12" :key="x">
              <span class="img-box">
                <img src="../assets/images/test.png" alt>
              </span>
              <p>光养催化设备</p>
            </div>
          </div>
          <div class="bottom">
            <div class="auto box">
              <span class="line"></span> 已经到底啦
              <span class="line"></span>
            </div>
          </div>
          <div>分页</div>
        </div>
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
  height: 461px;
  overflow: hidden;
  background: url(../assets/images/banner2.png)
}
.pro-container {
  width: 100%;
  margin-top: 21px;
  display: flex;
  justify-content: space-between;
}
.pro-container .left {
  width: 211px;
  height: 530px;
  background: #f2f2f2;
}
.icon-head {
  width: 100%;
  height: 69px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  color: white;
  background: url(../assets/images/icon-head.png) no-repeat;
}
.pro-container .right {
  width: 980px;
  height: 912px;
}
.right .bread-nav {
  width: 100%;
  height: 39px;
  line-height: 39px;
  background: #f8f8f8;
}
.list {
  padding: 0 10px;
}
.list li {
  text-align: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  height: 37px;
  line-height: 37px;
  border-bottom: 1px solid #d9d9d9;
}
.list li:hover{
  cursor: pointer;
  background: #3A63AC;
  color: #ffffff;
}
.products {
  overflow: hidden;
}
.products div {
  width: 230px;
  height: 272px;
  float: left;
  margin: 30px 0 30px 10px;
  border: 1px solid #c5c6c6;
}
.products div:hover{
  /* box-shadow: 0 0 10px #000000; */
  opacity: 0.8;
}
.products div .img-box {
  display: block;
  width: 100%;
  height: 242px;
  overflow: hidden;
}
.products div .img-box img {
  width: 100%;
  height: auto;
  display: block;
}
.products div p {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.bottom {
  width: 980px;
  font-size: 14px;
  color: rgba(161, 161, 161, 1);
}
.bottom .line {
  display: inline-block;
  vertical-align: middle;
  width: 200px;
  height: 1px;
  border: 0.5px solid #e0e0e0;
}
.bottom .box {
  width: 500px;
}
</style>
