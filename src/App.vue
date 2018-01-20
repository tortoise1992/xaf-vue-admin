<template>
  <div>
        <el-row>
          <el-col :span="24">
            <top-nav></top-nav>
          </el-col>
        </el-row>


      <el-row>
        <el-col :span="4">
          <side-nav></side-nav>
        </el-col>
        <el-col :span="20">
          <div class="a-bread">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="a-main">
            <router-view>

            </router-view>
          </div>

        </el-col>
      </el-row>




  </div>
</template>

<script>
  import TopNav from './components/common/topNav'
  import SideNav from './components/common/sideNav'
export default {
  components:{
    'top-nav':TopNav,
    'side-nav':SideNav
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}

  .a-bread{
    padding: 20px;
    background-color: #f4f4f4;
  }
  .a-main{
    padding: 10px 20px;
  }
</style>
