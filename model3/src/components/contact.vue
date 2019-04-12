<template>
  <div>
    <div class="banner-box">
      <div class="safe auto rela">
        <div class="banner-div">
          <p class="china">联系我们</p>
          <p class="eng">Contact us</p>
          <div class="right">立即咨询</div>
        </div>
      </div>
    </div>
    <div class="safe auto m-t-60">
      <div class="head auto">联系我们&#x3000;Contact us</div>
      <div class="m-t-60 flex">
        <ul>
          <li>
            <span class="icon-box">
              <img src="../assets/images/icon-11.png" alt>
            </span>
            <span class="des">公司名称:泊头市京茂环保设备有限公司</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/icon-12.png" alt>
            </span>
            <span class="des">联系人:张三</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/icon-13.png" alt>
            </span>
            <span class="des">电话：12345678</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/icon-14.png" alt>
            </span>
            <span class="des">地址：**浙江省杭州市</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/icon-15.png" alt>
            </span>
            <span class="des">邮箱：12345678@**.com</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/icon-16.png" alt>
            </span>
            <span class="des">QQ：12345678</span>
          </li>
        </ul>
        <div class="img-box">
          <img src="../assets/images/contact.png" alt>
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
  height: 460px;
  overflow: hidden;
  position: relative;
  background: url(../assets/images/banner3.png);
}

.banner-div {
  width: 200px;
  height: 150px;
  position: absolute;
  top: 50%;
  margin-top:-75px ;
}
.banner-div .china {
  font-size: 35px;
  color: #000000;
}
.banner-div .eng {
  font-size: 20px;
  color: #000000;
}
.banner-div .right {
  width: 165px;
  height: 30px;
  margin-top: 40px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  background: #1d4da2;
  border-radius: 5px;
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
.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flex ul li {
  width: 400px;
  height: 42px;
  line-height: 42px;
  margin: 10px 0;
  display: flex;
}
.flex ul .icon-box {
  display: block;
  width: 40px;
  height: 40px;
  overflow: hidden;
}
.flex ul .icon-box img {
  width: 100%;
  height: auto;
}
.flex ul .des {
  display: block;
  width: 300px;
  height: 42px;
  line-height: 28px;
  font-size: 16px;
  color: #000000;
  padding: 7px;
  border-bottom: 1px solid rgba(214, 214, 214, 1);
}
</style>
