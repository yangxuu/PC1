<template>
  <div>
    <div class="head-box">
      <div class="safe">
        <ul>
          <li class="left">
            <div class="logo-box">
              <img src="../assets/images/icon-3.png" alt>
            </div>
            <div class="des-box">
              <p class="b name">泊头市京茂环保设备有限公司</p>
              <p>
                <span class="small">
                  <img src="../assets/images/icon-1.png" alt>材料网超级会员
                </span>
                <span class="small">
                  <img src="../assets/images/icon-2.png" alt>企业认证
                </span>
              </p>
            </div>
          </li>
          <li class="right">
            <span class="icon-box">
              <img src="../assets/images/icon-3.png" alt>
            </span>
            <span class="icon-box">
              <img src="../assets/images/icon-4.png" alt>
            </span>
            <span class="icon-box">
              <img src="../assets/images/icon-5.png" alt>
            </span>
            <div class="tel-box">
              <span class="img-box">
                <img src="../assets/images/icon-tel.png" alt>
              </span>
              <span class="tel">电话热线：12345678</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-box">
      <div class="safe">
        <ul class="navbar">
          <li>
            <router-link to="/">网站首页</router-link>
          </li>
          <li>
            <router-link to="/product">产品中心</router-link>
          </li>
          <li>
            <router-link to="/news">新闻资讯</router-link>
          </li>
          <li>
            <router-link to="/example">合作案例</router-link>
          </li>
          <li>
            <router-link to="/contact">联系我们</router-link>
          </li>
          <li>
            <router-link to="/introduce">公司介绍</router-link>
          </li>
        </ul>
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
.head-box {
  width: 100%;
  height: 114px;
  line-height: 114px;
}
.safe {
  width: 1200px;
  margin: 0 auto;
}
.head-box .safe ul {
  display: flex;
  justify-content: space-between;
}
.head-box .safe ul li {
  width: 500px;
  height: 114px;
  line-height: 114px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-box .tel-box {
  width: 263px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  color: white;
  background-color: #4161c4;
  border-radius: 15px;
}
.right .icon-box {
  display: inline-block;
  width: 60px;
  height: 60px;
}
.right .icon-box img {
  width: 100%;
  display: block;
}
.tel-box .img-box {
  display: inline-block;
  width: 20px;
  height: 30px;
  margin-right: 20px;
}
.logo-box {
  width: 70px;
  height: 58px;
}
.logo-box img {
  width: 100%;
  display: block;
}
.des-box p {
  width: 400px;
  height: 50px;
  line-height: 50px;
}
.name {
  font-size: 26px;
}
.small {
  font-size: 12px;
}
.des-box {
  height: 114px;
}
.navbar-box {
  width: 100%;
  height: 49px;
  line-height: 49px;
  overflow: hidden;
  background: #295ead;
}
.navbar li {
  width: 100px;
  height: 49px;
  line-height: 49px;
  float: left;
}
.navbar li a {
  display: block;
  text-align: center;
  width: 100%;
  height: 100%;
  color: white;
}
.navbar li a:hover {
  color: orange !important;
  background: white !important;
  opacity: 1;
}
.navbar li .router-link-exact-active {
  color: orange;
  background: white;
}
</style>
