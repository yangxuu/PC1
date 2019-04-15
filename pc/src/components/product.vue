<template>
  <div id="bd">
    <div class="layout">
      <div class="main-wrap">
        <div class="product-title-box box">
          <p class="title">产品中心</p>
          <p class="desc">用心，做好料.</p>
        </div>
        <div class="crumbs-box box">
          <div class="w1200 m-t-40 m-b-30">
            <router-link to="/">首页&nbsp;&gt;</router-link>
            <router-link to="/product">产品中心</router-link>
          </div>
        </div>
        <div class="filter-box box">
          <div class="w1200 m-b-40">
            <div class="select-box">
              <span class="down-box">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    全部产品
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
              <span class="down-box">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    机械设备
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
              <span class="down-box">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    机械设备
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
              <span class="down-box">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    其他产品
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
            </div>
          </div>
        </div>
        <div class="box no-mb">
          <div class="sort-box w1200 clearfix">
            <span class="title">排序：</span>
            <a href class="item ac">价格</a>
            <a href class="item">时间</a>
            <!-- <span class="page">
              <a href>&lt;</a>&nbsp;&nbsp;&nbsp;
              <span>1/18</span>&nbsp;&nbsp;&nbsp;
              <a href>></a>
            </span>-->
          </div>
        </div>

        <div class="item-list-box box">
          <div class="w1200">
            <ul class="clearfix">
              <li>
                <router-link to="/detail">
                  <div class="img">
                    <span>
                      <img src="../assets/images/asset2.jpg" alt>
                    </span>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <span>高灵敏度传感器源</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/detail">
                  <div class="img">
                    <span>
                      <img src="../assets/images/asset3.jpg" alt>
                    </span>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <span>高灵敏度传感器源</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/detail">
                  <div class="img">
                    <span>
                      <img src="../assets/images/asset2.jpg" alt>
                    </span>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <span>高灵敏度传感器源</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/detail">
                  <div class="img">
                    <span>
                      <img src="../assets/images/asset3.jpg" alt>
                    </span>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <span>高灵敏度传感器源</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/detail">
                  <div class="img">
                    <span>
                      <img src="../assets/images/asset2.jpg" alt>
                    </span>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <span>高灵敏度传感器源</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/detail">
                  <div class="img">
                    <span>
                      <img src="../assets/images/asset3.jpg" alt>
                    </span>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <span>高灵敏度传感器源</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/detail">
                  <div class="img">
                    <span>
                      <img src="../assets/images/asset2.jpg" alt>
                    </span>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <span>高灵敏度传感器源</span>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/detail">
                  <div class="img">
                    <span>
                      <img src="../assets/images/asset3.jpg" alt>
                    </span>
                  </div>
                  <div class="price">￥888</div>
                  <div class="title">
                    <span>高灵敏度传感器源</span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- 分页 -->
        <div class="block w1200">
          <div class="margin">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              small
              background
              layout="prev, pager, next, jumper"
              :total="60"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      // currentPage: "6"
    };
  }
};
</script>
<style scoped>
.w1200 {
  width: 1200px;
  margin: 0 auto;
}
.margin {
  width: 400px;
  margin: 50px auto;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.down-box {
  display: inline-block;
  width: 160px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  margin: 10px 20px;
}
.el-dropdown-link {
  color: white;
  font-size: 15px;
  background: #0e0e0e;
  border-radius: 5px;
  display: inline-block;
  width: 100px;
  height: 30px;
  line-height: 30px;
}
</style>
