<template>
  <div>
    <div class="banner-box"></div>
    <div class="box">
      <div class="safe auto com">新闻资讯</div>
      <div class="container safe auto clear">
        <div class="left clear">
          <div class="news" v-for="x in 8" :key="x">
            <div class="img-box"></div>
            <p class="title">新闻标题1》》》》》》》》》 》》</p>
            <p>
              <span class="date">2019.4.9</span>
              <span class="more">查看更多>></span>
            </p>
          </div>
          <div class="bottom">
            <div class="auto box">
              <span class="line"></span> 已经到底啦
              <span class="line"></span>
            </div>
            <div class="m-t-40">分页</div>
          </div>
        </div>
        <div class="right m-t-20">
          <div class="top">
            <div class="icon-head">
              <p>公司新闻</p>
              <p>Company news</p>
            </div>
            <ul class="list auto">
              <li>
                <span class="number">1</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">2</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">3</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">4</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">5</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">6</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">7</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">8</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
            </ul>
          </div>
          <div class="top m-t-30">
            <div class="icon-head">
              <p>行业动态</p>
              <p>Industry dynamics</p>
            </div>
            <ul class="list auto">
              <li>
                <span class="number">1</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">2</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">3</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">4</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">5</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">6</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">7</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
              <li>
                <span class="number">8</span>
                <span class="des">催化燃烧处理设备</span>
              </li>
            </ul>
          </div>
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
  height: 476px;
  overflow: hidden;
  background: url(../assets/images/banner4.png);
}
.box {
  width: 100%;
  overflow: hidden;
  background: #f4f4f4;
}
.com {
  width: 1200px;
  height: 40px;
  margin-top: 20px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  background: #3660ab;
}
.container .left {
  width: 920px;
  height: 900px;
  float: left;
}
.container .left .news {
  width: 210px;
  float: left;
  margin: 20px 10px;
  background: #ffffff;
}
.container .left .news:hover {
  opacity: 0.8;
}
.container .left .news .img-box {
  width: 210px;
  height: 210px;
  background: lightblue;
}
.container .left .news .title {
  color: #000000;
  font-size: 14px;
}
.container .left .news p {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.container .left .news p span {
  display: inline-block;
  width: 80px;
  height: 20px;
}
.container .left .news .date {
  color: #5a5a5a;
  font-size: 14px;
}
.container .left .news .more {
  color: #5a5a5a;
  font-size: 14px;
}
.container .right {
  width: 260px;
  height: 900px;
  float: right;
}
.icon-head {
  width: 100%;
  height: 69px;
  line-height: 25px;
  text-align: center;
  font-size: 14px;
  color: white;
  background: url(../assets/images/icon-head2.png) no-repeat;
}
.right .top .list {
  padding: 0 14px 14px;
  width: 100%;
  border: 1px solid #b9b9b9;
  border-top: none;
  margin-top: -20px;
}
.top .list li {
  width: 100%;
  height: 35px;
  line-height: 35px;
  margin-top: 10px;
}
.top .list li span {
  display: inline-block;
}
.top .list li .number {
  width: 33px;
  height: 33px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  border-radius: 50%;
  background: #597ab6;
}
.top .list li .des {
  width: 185px;
  height: 35px;
  margin-left: 5px;
  font-size: 14px;
  color: #000000;
  border-bottom: 1px solid #d9d9d9;
}
/* .bottom {
  width: 920px;
  height: 20px;
  font-size: 14px;
  color: rgba(161, 161, 161, 1);
}
 .line {
  display: inline-block;
  vertical-align: middle;
  width: 200px;
  height: 1px;
  border: 0.5px solid #e0e0e0;
}
 .box {
  width: 500px;
} */
.bottom {
  width: 500px;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  margin-top: 700px;
  color: rgba(161, 161, 161, 1);
}
.line {
  display: inline-block;
  vertical-align: middle;
  width: 200px;
  height: 1px;
  border: 0.5px solid #e0e0e0;
}
</style>
