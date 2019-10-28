<template>
  <el-container class="my-container">
    <!-- 侧边栏区域 -->
    <el-aside :width="isOpen?'200px':'64px'">
      <!-- logo -->
      <div class="logo" :class="{smallLogo:!isOpen}"></div>
      <!-- 菜单栏 -->
      <el-menu
        default-active="1"
        background-color="#002033"
        text-color="#fff"
        :collapse="!isOpen"
        :collapse-transition="false"
        active-text-color="#ffd04b"
        style="border-right:none"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <!-- 字体图标 -->
        <i class="icon el-icon-s-fold" @click="toggleMenu"></i>
        <!-- 文字 -->
        <span class="text">江苏传智播客有限公司</span>
        <!-- 下拉菜单   -->
        <el-dropdown class="dropdown">
          <span class="el-dropdown-link">
            <img class="headIcon" src="../../assets/avatar.jpg" alt />
            <span class="userName">用户名称</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- 内容区域 -->
      <el-main>
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      isOpen: true
    }
  },
  methods: {
    toggleMenu () {
      // 点击切换菜单，展开与收起
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped lang='less'>
// 标签选择器  渲染后显示组件的html标签  不是当前的自定义标签
// 渲染后的标签上 有一个类 类的名称和自定义标签（组件）的名称一致
// FE  front end  前端简写
.my-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      background: #002244 url("../../assets/logo_admin.png") no-repeat center /
        140px auto;
    }
    .smallLogo {
      background-image: url(../../assets/logo_admin_01.png);
      background-size: 36px auto;
    }
  }
  .el-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 30px;
      vertical-align: middle;
      margin-right: 5px;
    }
    .text {
      vertical-align: middle;
    }
    .dropdown {
      float: right;
      .headIcon {
        height: 30px;
        width: 30px;
        vertical-align: middle;
        display: inline-block;
        margin: 0 auto;
      }
      .userName {
        font-weight: bold;
        margin-left: 5px;
        vertical-align: middle;
      }
    }
  }
}
</style>
