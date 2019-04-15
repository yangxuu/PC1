<template>
  <div>
    <headBox></headBox>
    <div class="header-banner-box box no-mb">
      <div class="banner-bg asset4" style="height:700px;padding-top:310px;">
        <div class="content-box" style="width:380px;">
          <p class="desc" style="font-size:22px;margin-top:0px;">坚持质量第一的生产原则</p>
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
          <div class="filter-box box">
            <div class="w1200 m-t-60 m-b-60">
              <div class="select-box">
                <el-dropdown class="down-box">
                  <span class="el-dropdown-link item">全部产品</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item divided>黄金糕</el-dropdown-item>
                    <el-dropdown-item divided>狮子头</el-dropdown-item>
                    <el-dropdown-item divided>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item divided>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                  <span class="el-dropdown-link item">机械及行业设备</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                  <span class="el-dropdown-link item">环保</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                  <span class="el-dropdown-link item">仪器仪表</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                  <span class="el-dropdown-link item">未分类产品</span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </div>
          <div class="box no-mb">
            <div class="w1200 m-b-60">
              <a href>
                <img src="../assets/images/asset5.jpg" width="100%">
              </a>
            </div>
          </div>
          <!-- 分页内容v-for每一个li 后台请求数据放入li中 -->
          <div class="item-list-box box">
            <div class="w1200">
              <ul class="clearfix">
                <li>
                  <div class="img">
                    <a href>
                      <img src="../assets/images/asset2.jpg" alt>
                    </a>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <a href>高灵敏度传感器源</a>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <a href>
                      <img src="../assets/images/asset3.jpg" alt>
                    </a>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <a href>高灵敏度传感器源</a>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <a href>
                      <img src="../assets/images/asset8.jpg" alt>
                    </a>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <a href>高灵敏度传感器源</a>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <a href>
                      <img src="../assets/images/asset3.jpg" alt>
                    </a>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <a href>高灵敏度传感器源</a>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <a href>
                      <img src="../assets/images/asset2.jpg" alt>
                    </a>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <a href>高灵敏度传感器源</a>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <a href>
                      <img src="../assets/images/asset3.jpg" alt>
                    </a>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <a href>高灵敏度传感器源</a>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <a href>
                      <img src="../assets/images/asset2.jpg" alt>
                    </a>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <a href>高灵敏度传感器源</a>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <a href>
                      <img src="../assets/images/asset3.jpg" alt>
                    </a>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <a href>高灵敏度传感器源</a>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <a href>
                      <img src="../assets/images/asset3.jpg" alt>
                    </a>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <a href>高灵敏度传感器源</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="box no-mb">
            <div class="w1200 oh clearfix m-t-60">
              <div class="pc-50 fl">
                <a href>
                  <img src="../assets/images/asset6.jpg">
                </a>
              </div>
              <div class="pc-50 fl tr">
                <a href>
                  <img src="../assets/images/asset7.jpg">
                </a>
              </div>
            </div>
          </div>
          <!-- 分页 -->
          <div class="block w1200-margin">
            <div class="margin">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                small
                background
                layout="prev, pager, next, jumper"
                :total="60"
                :current-page.sync="currentPage"
              ></el-pagination>
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
    return {
      currentPage: 1, //初始页
      pagesize: 6, //每页的数据
      userList: [] //存放请求数据
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // 点击下一页更新内容
      // this.currentPage=currentPage;
      // console.log(this.currentPage)
      console.log(`当前页: ${val}`);
    },
    // 请求后台数据的方法
    // handleUserList(){
    //   this.$http.get("/api/http://192.168.18.37").then(res=>{
    //     this.userList=res.data
    //   })
    // }
  },
  // 实例被创建执行方法
  // created(){
  //   this.handleUserList()
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-navbar-box .w1200 ul li .router-link-exact-active {
  color: orangered;
}
.filter-box .item {
  margin: 0 !important;
}
.el-dropdown {
  margin: 0 40px;
}
.w1200-margin {
  width: 1200px;
  margin: 60px auto;
}
.margin {
  width: 400px;
  margin: 50px auto;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
