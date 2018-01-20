<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="0">
      <a href="/">小阿福后台管理系统</a>
    </el-menu-item>
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-menu-item index="3">
      <a href="https://www.ele.me" target="_blank">订单管理</a>
    </el-menu-item>
    <el-submenu index="2" style="float: right;">
      <template slot="title">欢迎你，ahui</template>
      <el-menu-item index="2-1">帮助中心</el-menu-item>
      <el-menu-item index="2-2">修改密码</el-menu-item>
      <el-menu-item index="2-3">退出</el-menu-item>
    </el-submenu>

  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-submenu .el-menu-item{
    min-width: auto;
  }
</style>
